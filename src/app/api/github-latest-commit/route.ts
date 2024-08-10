import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const client = new GraphQLClient(GITHUB_GRAPHQL_API, {
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
});

const GET_LATEST_COMMIT = gql`
    query ($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            ref(qualifiedName: "main") {
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
`;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const owner = searchParams.get("owner");
    const repo = searchParams.get("repo");

    if (!owner || !repo) {
        return NextResponse.json(
            { error: "Owner and repository name are required." },
            { status: 400 }
        );
    }

    try {
        const data = await client.request<GetLatestCommitResponse>(
            GET_LATEST_COMMIT,
            {
                owner,
                name: repo,
            }
        );

        const latestCommit = data.repository.ref.target.history.edges[0].node;

        return NextResponse.json(latestCommit, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch latest commit details." },
            { status: 500 }
        );
    }
}
