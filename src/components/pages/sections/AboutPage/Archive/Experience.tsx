"use client";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";

interface IExperienceSectionProps {}

interface IExperienceItem {
    company: string;
    role: string;
    description: string;
    duration: string;
    isCurrent?: boolean;
}

const experiences: IExperienceItem[] = [
    {
        company: "Morning Star Contractors",
        role: "Software Developer",
        description:
            "Led the development of the company's website and internal tool, enhancing the user experience and streamlining operations.",
        duration: "Jan 2024 - Present",
        isCurrent: true,
    },
    {
        company: "Petro Canada",
        role: "Store Supervisor",
        description:
            "Managed daily operations, improved customer service strategies, and optimized inventory processes to ensure a smooth-running store.",
        duration: "Jan 2022 - Dec 2023",
    },
];

export default function ExperienceSection(props: IExperienceSectionProps) {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-16 relative px-4 sm:px-8">
            <Heading
                level={2}
                className="text-4xl font-bold text-center mb-14 text-gray-100"
            >
                Experience
            </Heading>
            <div className="relative flex flex-col items-start">
                <div className="absolute left-1.5 top-0 bottom-0 w-1 bg-gray-600 rounded-full"></div>
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}

function ExperienceItem({ experience }: { experience: IExperienceItem }) {
    return (
        <div className="relative pl-10 py-6 flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-0 w-4 h-4 rounded-full border-2 border-gray-600 bg-gray-800 group-hover:border-aqua-green transition-all duration-300"></div>

            {/* Experience Content */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg w-full">
                <h3 className="text-2xl font-semibold text-aqua-green mb-1">
                    {experience.company}
                </h3>
                <p className="text-lg font-medium text-gray-300">
                    {experience.role} | {experience.duration}
                </p>
                <p className="text-gray-400 mt-2">{experience.description}</p>
            </div>
        </div>
    );
}
