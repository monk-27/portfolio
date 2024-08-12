interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

interface ContributionsCollection {
    contributionCalendar: ContributionCalendar;
}

interface GitHubUser {
    contributionsCollection: ContributionsCollection;
}

interface GitHubResponse {
    user: GitHubUser;
}
