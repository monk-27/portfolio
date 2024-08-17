"use client";
import Heading from "@/components/ui/designs/Heading";
import { CondensedSkills } from "@/utils/assets";
import Image from "next/image";
import * as React from "react";

export interface ISkillsSectionProps {}

export default function SkillsSection(props: ISkillsSectionProps) {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
            <div data-scroll data-scroll-speed={0.1}>
                <Heading
                    level={2}
                    className="text-2xl font-light text-center mb-14 text-gray-200"
                >
                    Areas I can help you in
                </Heading>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {CondensedSkills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-gray-800 border border-transparent hover:border-gray-600 hover:bg-gray-700 p-8 rounded-3xl flex flex-col items-start justify-between duration-300 shadow-lg hover:shadow-xl text-left">
            <Heading level={3} className="text-2xl font-extralight mb-5">
                {title}
            </Heading>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
