"use client";
import * as React from "react";
import CustomLineChart from "../charts/CustomLineChart";

export default function Contributions() {
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
                <p>{loading ? "Loading GitHub contributions..." : error}</p>
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
