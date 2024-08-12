"use client";
import FolderCard from "@/components/layout/cards/FolderCard";
import * as React from "react";
import CustomLineChart from "./CustomLineChart";
import CustomPieChart from "./CustomPieChart";

export function ActiveRepo({ className }: { className?: string }) {
    const [repoData, setRepoData] = React.useState({
        title: "",
        description: "",
        starCount: 0,
        forkCount: 0,
        isPrivate: false,
        language: "", // Updated to store a single language
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
                    language: data.language || "N/A", // Updated to handle a single language
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
    }, []);

    if (isLoading) {
        return (
            <p className="set-wf-full flex-col-center">
                Loading repo details...
            </p>
        );
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
                language={repoData.language} // Pass the single language
                latestCommitMessage={repoData.latestCommitMessage}
                latestCommitUrl={repoData.latestCommitUrl}
                latestCommitDate={repoData.latestCommitDate}
            />
        </div>
    );
}

export function Contributions() {
    const [year, setYear] = React.useState("2024");
    const [contributions, setContributions] = React.useState([]);
    const [totalContributions, setTotalContributions] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const years = ["2022", "2023", "2024"];

    const fetchContributionsForYear = async (selectedYear: string) => {
        setLoading(true);
        setError(null);

        const from = `${selectedYear}-01-01T00:00:00Z`;
        const to = `${selectedYear}-12-31T23:59:59Z`;

        try {
            const response = await fetch(
                `/api/github-contributions?username=armaanjaj&from=${from}&to=${to}`
            );
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            setContributions(result.contributions);
            setTotalContributions(result.totalContributions);
            setYear(selectedYear);
        } catch (err: any) {
            setError(err.message || "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchContributionsForYear(year);
    }, [year]);

    return (
        <section className="flex-col-start min-h-full">
            {loading ? (
                <p className="set-wf-full flex-col-center">
                    {loading ? "Loading GitHub contributions..." : error}
                </p>
            ) : (
                <CustomLineChart
                    contributions={contributions}
                    totalContributions={totalContributions}
                    year={year}
                    years={years}
                    onYearChange={fetchContributionsForYear}
                />
            )}
        </section>
    );
}

export function Languages() {
    const [languageData, setLanguageData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const fetchLanguagesData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `/api/github-languages?username=armaanjaj`
            );
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();

            const languages = result.map((item: any) => ({
                name: item.language || item.name || "Unknown",
                size: item.size || 0,
            }));

            setLanguageData(languages);
        } catch (err: any) {
            setError(err.message || "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchLanguagesData();
    }, []);

    if (loading) {
        return (
            <p className="set-wf-full flex-col-center">
                Loading language data...
            </p>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    return <CustomPieChart data={languageData} />;
}
