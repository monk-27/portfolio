import Heading from "@/components/ui/designs/Heading";
import * as React from "react";

export interface IExperienceSectionProps {}

export interface IExperienceItem {
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
        <div className="max-w-7xl mx-auto mt-16 py-12 bg-white relative rounded-lg flex-col-center px-5">
            <Heading className="text-3xl font-bold text-center mb-8">
                Experience
            </Heading>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 flex flex-col gap-12">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExperienceItem({ experience }: { experience: IExperienceItem }) {
    return (
        <div
            className={`relative pl-4 ${
                experience.isCurrent ? "border-l-4 border-aqua-green" : ""
            }`}
        >
            {experience.isCurrent && (
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-aqua-green rounded-full"></div>
            )}
            <h3 className="text-2xl font-semibold text-aqua-green">
                {experience.company}
            </h3>
            <p className="text-lg font-medium text-gray-800">
                {experience.role} | {experience.duration}
            </p>
            <p className="text-gray-600 mt-2">{experience.description}</p>
        </div>
    );
}
