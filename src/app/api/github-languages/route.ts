import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const client = new GraphQLClient(GITHUB_GRAPHQL_API, {
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
});

interface LanguageData {
    name: string;
    size: number;
}

const GET_REPOS_LANGUAGES_QUERY = gql`
    query ($username: String!) {
        user(login: $username) {
            repositories(first: 100, isFork: false) {
                nodes {
                    name
                    isFork
                    languages(first: 5) {
                        edges {
                            size
                            node {
                                name
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
    const username = searchParams.get("username") || "armaanjaj";

    try {
        const data = await client.request<{
            user: {
                repositories: {
                    nodes: Array<{
                        isFork: boolean;
                        languages: {
                            edges: Array<{
                                size: number;
                                node: { name: string };
                            }>;
                        };
                    }>;
                };
            };
        }>(GET_REPOS_LANGUAGES_QUERY, {
            username,
        });

        const languageMap: Record<string, number> = {};

        data.user.repositories.nodes.forEach((repo) => {
            if (!repo.isFork) {
                repo.languages.edges.forEach((language) => {
                    const { name } = language.node;
                    const { size } = language;

                    if (languageMap[name]) {
                        languageMap[name] += size;
                    } else {
                        languageMap[name] = size;
                    }
                });
            }
        });

        const topLanguages: LanguageData[] = Object.entries(languageMap)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([name, size]) => ({
                name,
                size,
            }));

        // Setting cache control headers for 1 hour (3600 seconds)
        const response = NextResponse.json(topLanguages, { status: 200 });
        response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch languages" },
            { status: 500 }
        );
    }
}
