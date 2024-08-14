import * as React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { groupBy } from "lodash";

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface CustomLineChartProps {
    contributions: ContributionDay[];
    totalContributions: number;
    year: string;
    years: string[];
    onYearChange: (year: string) => void;
}

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const CustomLineChart: React.FC<CustomLineChartProps> = ({
    contributions,
    totalContributions,
    year,
    years,
    onYearChange,
}) => {
    if (!contributions || contributions.length === 0) {
        return <p>No contributions found for the specified period.</p>;
    }

    const groupedByMonth = groupBy(contributions, (day) =>
        day.date.slice(0, 7)
    );
    const monthlyData = Object.keys(groupedByMonth).map((month) => {
        const monthContributions = groupedByMonth[month];
        const total = monthContributions.reduce(
            (sum, day) => sum + day.contributionCount,
            0
        );
        const monthIndex = parseInt(month.split("-")[1], 10) - 1;
        return {
            month: monthNames[monthIndex],
            contributions: total,
        };
    });

    const filteredMonthlyData = monthlyData.filter(
        (_, index) => index % 2 === 0
    );

    return (
        <div className="w-full">
            <ResponsiveContainer width="100%" height={150}>
                <LineChart
                    data={filteredMonthlyData}
                    className="text-xs"
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fill: "#FFF" }} />
                    <YAxis
                        label={{
                            value: "Commits",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#2AE2BD"
                        }}
                        tick={{ fill: "#FFF" }}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="contributions"
                        stroke="#2AE2BD"
                        dot={false}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
            <div className="flex-col-start-start gap-3">
                <div className="flex-row-start-center gap-3">
                    <label htmlFor="year-select" className="block text-sm">
                        Select Year:
                    </label>
                    <select
                        id="year-select"
                        className="p-1 border-gray-300 border rounded text-sm text-black"
                        value={year}
                        onChange={(e) => onYearChange(e.target.value)}
                    >
                        {years.map((yearOption) => (
                            <option key={yearOption} value={yearOption}>
                                {yearOption}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="text-sm">
                    Total Contributions for {year}:&nbsp;
                    <span className="font-bold">{totalContributions}</span>
                </p>
            </div>
        </div>
    );
};

export default CustomLineChart;
