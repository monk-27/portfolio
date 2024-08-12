"use client";
import Heading from "@/components/ui/designs/Heading";
import { CondensedSkills } from "@/utils/assets";
import Image from "next/image";
import * as React from "react";

export interface ISkillsSectionProps {}

export default function SkillsSection(props: ISkillsSectionProps) {
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <Heading className="text-3xl font-bold text-center mb-12">
                My Skills
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {CondensedSkills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    return (
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
            <Image
                src={icon}
                alt={title}
                width={50}
                height={50}
                className="mb-4"
            />
            <Heading className="text-xl font-semibold mb-2">{title}</Heading>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}
