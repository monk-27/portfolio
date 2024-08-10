import * as React from "react";
import FolderCard from "../layout/FolderCard";

export default function StarredRepo({
    className,
    reload,
}: {
    className?: string;
    reload: boolean;
}) {
    const [repoData, setRepoData] = React.useState({
        title: "",
        description: "",
        starCount: 0,
        forkCount: 0,
        isPrivate: false,
        languages: [],
        latestCommitMessage: "",
        latestCommitUrl: "",
        latestCommitDate: "",
    });

    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchLatestCommitData = async () => {
            setIsLoading(true);
            try {
                const owner = "armaanjaj";

                const response = await fetch(
                    `/api/github-latest-commit?owner=${owner}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch repository details");
                }

                const data = await response.json();

                setRepoData({
                    title: data.title,
                    description: data.description || "No Description",
                    starCount: data.starCount || 0,
                    forkCount: data.forkCount || 0,
                    isPrivate: data.isPrivate,
                    languages: data.languages || "N/A",
                    latestCommitMessage: data.latestCommitMessage,
                    latestCommitUrl: data.latestCommitUrl,
                    latestCommitDate: new Date(
                        data.latestCommitDate
                    ).toLocaleString(),
                });
            } catch (err: any) {
                setError(err.message || "An unknown error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestCommitData();
    }, [reload]); // Depend on reload to refetch data when it changes

    if (isLoading) {
        return <p className="set-wf-full flex-col-center">Loading repo details...</p>;
    }

    if (error) {
        return <p className="set-wf-full flex-col-center">{error}</p>;
    }

    return (
        <div className={`set-wf-full flex-col-center ${className}`}>
            <FolderCard
                title={repoData.title}
                description={repoData.description}
                starCount={repoData.starCount}
                forkCount={repoData.forkCount}
                isPrivate={repoData.isPrivate}
                languages={repoData.languages}
                latestCommitMessage={repoData.latestCommitMessage}
                latestCommitUrl={repoData.latestCommitUrl}
                latestCommitDate={repoData.latestCommitDate}
            />
        </div>
    );
}
