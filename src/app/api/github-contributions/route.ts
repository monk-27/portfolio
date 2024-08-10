import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

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
    const username = searchParams.get("username") || "armaanjaj";
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

        return NextResponse.json(
            {
                totalContributions:
                    data.user.contributionsCollection.contributionCalendar
                        .totalContributions,
                contributions,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch contributions" },
            { status: 500 }
        );
    }
}
