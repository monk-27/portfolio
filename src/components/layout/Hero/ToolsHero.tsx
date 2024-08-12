"use client";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import Image from "next/image";
import { ComputerSVG, ToolSVG } from "@/utils/icons";
import Heading from "@/components/ui/designs/Heading";

export interface IToolsHeroProps {}

export default function ToolsHero(props: IToolsHeroProps) {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative bg-aqua-green py-16 sm:py-20 text-white text-center overflow-hidden">
            <div className="relative z-10">
                <Heading className="text-3xl sm:text-5xl font-bold mb-4 max-w-xl mx-auto">
                    Crafting Digital Experiences with These Tools
                </Heading>
                <p className="text-base sm:text-lg max-w-2xl mx-auto">
                    These are the tools I rely on daily to build, design, and
                    manage projects. From development to productivity, each tool
                    plays a crucial role in my workflow.
                </p>

                <div className="flex justify-center mt-8 gap-4">
                    <span onClick={() => scrollToSection("tools-section")}>
                        <ActionButton
                            text="Explore Tools"
                            bgColor="bg-white"
                            textColor="text-aqua-green-dark"
                            hoverBgColor="hover:bg-gray-200"
                            size="sm"
                        />
                    </span>
                    <span onClick={() => scrollToSection("resources-section")}>
                        <ActionButton
                            text="Explore Resources"
                            bgColor="bg-white"
                            textColor="text-aqua-green-dark"
                            hoverBgColor="hover:bg-gray-200"
                            size="sm"
                        />
                    </span>
                </div>
            </div>

            {/* Hide SVGs on small screens */}
            <Image
                src={ComputerSVG}
                alt="Tools Hero Image"
                width={250}
                height={250}
                className="hidden sm:block absolute bottom-0 left-[-150px] z-0 opacity-90"
            />
            <Image
                src={ToolSVG}
                alt="Tools Hero Image"
                width={250}
                height={250}
                className="hidden sm:block absolute bottom-0 right-[-150px] z-0 opacity-90"
            />
        </div>
    );
}
