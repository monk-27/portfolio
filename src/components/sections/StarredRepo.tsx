"use client";
import * as React from "react";
import FolderCard from "../layout/FolderCard";

export default function StarredRepo() {
    const [repoData, setRepoData] = React.useState({
        title: "Loading...",
        description: "",
        starCount: 0,
        latestCommitMessage: "Loading...",
        latestCommitUrl: "",
        latestCommitDate: "",
    });

    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchLatestCommitData = async () => {
            try {
                // Step 1: Fetch the user's repositories
                const repoResponse = await fetch(
                    `https://api.github.com/users/armaanjaj/repos`
                );
                if (!repoResponse.ok)
                    throw new Error("Failed to fetch repositories");

                const repos = await repoResponse.json();

                let latestRepo = null;
                let latestCommit = null;

                // Step 2: For each repository, fetch the latest commit
                for (const repo of repos) {
                    const commitResponse = await fetch(
                        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=1`
                    );
                    if (!commitResponse.ok)
                        throw new Error("Failed to fetch commits");

                    const commits = await commitResponse.json();
                    const commit = commits[0];

                    // Step 3: Compare commit dates to find the latest commit
                    if (
                        !latestCommit ||
                        new Date(commit.commit.author.date) >
                            new Date(latestCommit.commit.author.date)
                    ) {
                        latestRepo = repo;
                        latestCommit = commit;
                    }
                }

                if (latestRepo && latestCommit) {
                    // Step 4: Set the repo data including the latest commit
                    setRepoData({
                        title: latestRepo.name,
                        description: latestRepo.description || "No Description",
                        starCount: latestRepo.stargazers_count || 0,
                        latestCommitMessage: latestCommit.commit.message,
                        latestCommitUrl: latestCommit.html_url,
                        latestCommitDate: new Date(
                            latestCommit.commit.author.date
                        ).toLocaleString(),
                    });
                }
            } catch (err: any) {
                setError(err.message || "An unknown error occurred");
            }
        };

        fetchLatestCommitData();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="set-wf-full flex-col-center">
            <FolderCard
                title={repoData.title}
                description={repoData.description}
                starCount={repoData.starCount}
                latestCommitMessage={repoData.latestCommitMessage}
                latestCommitUrl={repoData.latestCommitUrl}
                latestCommitDate={repoData.latestCommitDate}
            />
        </div>
    );
}
