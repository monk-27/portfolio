import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const client = new GraphQLClient(GITHUB_GRAPHQL_API, {
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
});

const GET_ALL_REPOS = gql`
    query ($owner: String!) {
        user(login: $owner) {
            repositories(
                first: 100
                orderBy: { field: UPDATED_AT, direction: DESC }
                affiliations: [OWNER]
                isFork: false
            ) {
                nodes {
                    name
                    description
                    forkCount
                    isPrivate
                    stargazers {
                        totalCount
                    }
                    languages(
                        first: 10
                        orderBy: { field: SIZE, direction: DESC }
                    ) {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                    refs(first: 1, refPrefix: "refs/heads/") {
                        edges {
                            node {
                                name
                                target {
                                    ... on Commit {
                                        history(first: 1) {
                                            edges {
                                                node {
                                                    message
                                                    committedDate
                                                    url
                                                    author {
                                                        name
                                                        email
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const owner = searchParams.get("owner");

    if (!owner) {
        return NextResponse.json(
            { error: "Owner name is required." },
            { status: 400 }
        );
    }

    try {
        const data = await client.request<GetAllReposResponse>(GET_ALL_REPOS, {
            owner,
        });

        const repositories = data.user.repositories.nodes;

        if (repositories.length === 0) {
            return NextResponse.json(
                { error: "No repositories found." },
                { status: 404 }
            );
        }

        let latestRepo = null;
        let latestCommitDate = null;

        for (const repo of repositories) {
            const commitNode =
                repo.refs?.edges[0]?.node?.target?.history?.edges[0]?.node;

            if (commitNode && commitNode.author) {
                const commitDate = new Date(commitNode.committedDate);
                if (!latestCommitDate || commitDate > latestCommitDate) {
                    latestCommitDate = commitDate;
                    latestRepo = {
                        title: repo.name,
                        description: repo.description,
                        forkCount: repo.forkCount,
                        isPrivate: repo.isPrivate,
                        starCount: repo.stargazers.totalCount,
                        language: repo.languages.edges[0]?.node?.name,
                        latestCommitMessage: commitNode.message,
                        latestCommitUrl: commitNode.url,
                        latestCommitDate: commitNode.committedDate,
                    };
                }
            }
        }

        if (!latestRepo) {
            return NextResponse.json(
                {
                    error: "No recent commits found in your repositories.",
                    repos: repositories,
                },
                { status: 404 }
            );
        }

        // Create response and set Cache-Control header
        const response = NextResponse.json(latestRepo, { status: 200 });
        response.headers.set(
            "Cache-Control",
            "public, max-age=300, stale-while-revalidate=3600"
        );

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch repository details." },
            { status: 500 }
        );
    }
}
