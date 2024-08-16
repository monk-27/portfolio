"use client";

import * as React from "react";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import ActionButton from "@/components/ui/designs/ActionButton";
import { LocationIcon, CodeIcon, DownloadIcon } from "@/utils/icons";
import Paragraph from "@/components/ui/designs/Paragraph";

export interface HeroSectionProps {}

export default function HeroSection(props: HeroSectionProps) {
    return (
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
            {/* Left Section - Text and Info */}
            <div className="flex-1">
                <Heading
                    level={1}
                    className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
                >
                    Hi, I'm <span className="text-secondary">Armaan Jaj</span>
                </Heading>
                <Paragraph className="text-xl mb-6 text-gray-300 leading-relaxed">
                    A passionate{" "}
                    <span className="bg-secondary text-primary px-1 py-0.5 rounded-md">
                        Full Stack Developer
                    </span>{" "}
                    dedicated to crafting digital experiences that make an
                    impact. With expertise in a range of modern technologies, I
                    bring ideas to life through clean, efficient, and scalable
                    code.
                </Paragraph>
                {/* Info Items */}
                <div className="text-sm flex flex-row flex-wrap sm:gap-10 gap-4 mb-8">
                    <InfoItem
                        icon={<LocationIcon />}
                        text="Calgary, Canada"
                        title="I live in"
                    />
                    <InfoItem
                        icon={<CodeIcon />}
                        text="Coding since 2020"
                        title="Coding since"
                    />
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3">
                    <ActionButton
                        text="Contact Me"
                        status="passive"
                        size="sm"
                    />
                    <ActionButton
                        icon={<DownloadIcon />}
                        text="Download Resume"
                        link={{ url: "/Resume.pdf", target: "_blank" }}
                        status="active"
                        size="sm"
                    />
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex-shrink-0 w-full sm:w-[300px] md:w-[400px] mt-8 md:mt-0">
                <Image
                    src="/Armaan.jpeg"
                    alt="Armaan Jaj"
                    width={400}
                    height={400}
                    className="rounded-3xl shadow-lg object-cover"
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
        <div className="flex items-center gap-2 text-gray-400" title={title}>
            <div className="text-secondary">{icon}</div>
            <span>{text}</span>
        </div>
    );
}
