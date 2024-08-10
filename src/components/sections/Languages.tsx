"use client";
import * as React from "react";
import CustomPieChart from "../charts/CustomPieChart";

export default function Languages() {
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
        return <p>Loading language data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <CustomPieChart data={languageData} />
    );
}
