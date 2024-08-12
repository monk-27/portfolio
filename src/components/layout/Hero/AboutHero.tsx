"use client";

import * as React from "react";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import ActionButton from "@/components/ui/designs/ActionButton";
import { LocationIcon, CodeIcon } from "@/utils/icons";

export interface HeroSectionProps {
    onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
                <Heading className="text-4xl sm:text-5xl font-bold mb-4">
                    Hi, I'm Armaan Jaj
                </Heading>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    A passionate{" "}
                    <span className="bg-color-dark text-white px-1">
                        Full Stack Developer
                    </span>{" "}
                    dedicated to crafting digital experiences that make an
                    impact. With expertise in a range of modern technologies, I
                    bring ideas to life through clean, efficient, and scalable
                    code.
                </p>
                <div className="text-sm sm:text-base flex-row-start gap-5 w-full sm:w-3/5 mb-6">
                    <InfoItem
                        icon={<LocationIcon />}
                        text="Calgary"
                        title="I live in"
                    />
                    <InfoItem
                        icon={<CodeIcon />}
                        text="2020"
                        title="Coding since"
                    />
                </div>
                <div className="flex gap-4">
                    <span onClick={onContactClick}>
                        <ActionButton
                            text="Contact Me"
                            className=""
                            bgColor="bg-aqua-green"
                            textColor="text-white"
                            hoverBgColor="hover:bg-aqua-green-dark"
                            size="sm"
                        />
                    </span>
                    <ActionButton
                        text="Download Resume"
                        link="/Resume.pdf"
                        className=""
                        bgColor="bg-gray-200"
                        textColor="text-color-dark"
                        hoverBgColor="hover:bg-gray-300"
                        size="sm"
                    />
                </div>
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                className="mt-8 md:mt-0"
            >
                <Image
                    src="/Armaan.jpeg"
                    alt="Armaan Jaj"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

function InfoItem({
    icon,
    text,
    title,
}: {
    icon: React.ReactNode;
    text: string;
    title: string;
}) {
    return (
        <div className="flex items-center gap-2" title={title}>
            {icon}
            <span>{text}</span>
        </div>
    );
}
