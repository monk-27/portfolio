"use client";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import Heading from "@/components/ui/designs/Heading";

export interface ISkillsHeroProps {}

export default function SkillsHero(props: ISkillsHeroProps) {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative bg-inherit py-12 sm:py-16 lg:py-20 text-center flex flex-col items-center">
            <div className="relative max-w-4xl mx-auto">
                <Heading
                    level={1}
                    className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4"
                >
                    Crafting Digital Experiences with These Tools
                </Heading>
                <p className="text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400">
                    These are the tools I rely on daily to build, design, and
                    manage projects. From development to productivity, each tool
                    plays a crucial role in my workflow.
                </p>

                <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
                    <span
                        onClick={() => scrollToSection("skills-tech-section")}
                    >
                        <ActionButton
                            text="Explore Tools"
                            size="sm"
                            status="active"
                        />
                    </span>
                    <span
                        onClick={() =>
                            scrollToSection("skills-resources-section")
                        }
                    >
                        <ActionButton
                            text="Explore Resources"
                            size="sm"
                            status="active"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
