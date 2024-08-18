import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const client = new GraphQLClient(GITHUB_GRAPHQL_API, {
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
});

const GET_CONTRIBUTIONS_QUERY = gql`
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                    totalContributions
                    weeks {
                        contributionDays {
                            date
                            contributionCount
                            color
                        }
                    }
                }
            }
        }
    }
`;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || GITHUB_USERNAME;
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (!from || !to) {
        return NextResponse.json(
            { error: "From and To dates are required" },
            { status: 400 }
        );
    }

    try {
        const data = await client.request<GitHubResponse>(
            GET_CONTRIBUTIONS_QUERY,
            {
                username,
                from,
                to,
            }
        );

        // Map the contributions data properly
        const contributions =
            data.user.contributionsCollection.contributionCalendar.weeks
                .flatMap((week: ContributionWeek) => week.contributionDays)
                .map((day: ContributionDay) => ({
                    date: day.date,
                    contributionCount: day.contributionCount,
                    color: day.color,
                }));

        const response = NextResponse.json(
            {
                totalContributions:
                    data.user.contributionsCollection.contributionCalendar
                        .totalContributions,
                contributions,
            },
            { status: 200 }
        );

        // Set Cache-Control header to cache the response for 15 minutes
        response.headers.set(
            "Cache-Control",
            "public, max-age=900, stale-while-revalidate=3600"
        );

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch contributions" },
            { status: 500 }
        );
    }
}
