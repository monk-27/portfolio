"use client";

import * as React from "react";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import ActionButton from "@/components/ui/designs/ActionButton";
import { LocationIcon, CodeIcon } from "@/utils/icons";
import Paragraph from "@/components/ui/designs/Paragraph";

export interface HeroSectionProps {
    onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
                <Heading
                    level={1}
                    className="text-4xl sm:text-5xl font-bold mb-4"
                >
                    Hi, I'm{" "}
                    <span className="text-secondary">Armaan Jaj</span>
                </Heading>
                <Paragraph className="text-xl mb-6">
                    A passionate{" "}
                    <span className="bg-color-dark text-white px-1">
                        Full Stack Developer
                    </span>{" "}
                    dedicated to crafting digital experiences that make an
                    impact. With expertise in a range of modern technologies, I
                    bring ideas to life through clean, efficient, and scalable
                    code.
                </Paragraph>
                <div className="text-sm flex-row-start-start gap-5 w-full mb-6">
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
                <div className="flex-row-start-center gap-4">
                    <span onClick={onContactClick}>
                        <ActionButton
                            text="Contact Me"
                            className=""
                            status="passive"
                            size="sm"
                        />
                    </span>
                    <ActionButton
                        text="Download Resume"
                        link="/Resume.pdf"
                        className=""
                        status="active"
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
                    className="rounded-lg shadow-lg shadow-gray-700"
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
