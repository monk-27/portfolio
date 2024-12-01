"use client";

import * as React from "react";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import ActionButton from "@/components/ui/designs/ActionButton";
import { LocationIcon, CodeIcon, DownloadIcon } from "@/utils/assets";
import Paragraph from "@/components/ui/designs/Paragraph";

export interface HeroSectionProps {}

export default function HeroSection(props: HeroSectionProps) {
    return (
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8 max-w-7xl mt-10">
            {/* Left Section - Text and Info */}
            <div className="md:w-2/3">
                <Heading
                    level={1}
                    className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight"
                >
                    Hi, I&apos;m <span className="text-[#161E31]">Shashi Bhushan Jha</span>
                </Heading>
                <Paragraph className="text-xl mb-6 text-[#676F9D] leading-relaxed">
                A dedicated{" "}
                    <span className="text-[#161E31] underline">
                        <span className="text-[#7a4b27]">Software Developer</span>
                    </span>{" "}
                    with 2 years of experience in building impactful digital solutions for web and Android platforms. Skilled in modern technologies, I specialize in creating clean, efficient, and scalable code to bring innovative ideas to life.
                </Paragraph>
                {/* Info Items */}
                <div className="text-sm flex flex-row flex-wrap sm:gap-10 gap-4 mb-8">
                    <InfoItem
                        icon={<LocationIcon />}
                        text="New Delhi, India"
                        title="I live in"
                    />
                    <InfoItem
                        icon={<CodeIcon />}
                        text="Coding since 2022"
                        title="Coding since"
                    />
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3">
                    <ActionButton
                        text="Contact Me"
                        status="passive"
                        link={{ url: "/contact#contact-form-section", target: "_self" }}
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
            <div data-scroll data-scroll-speed={-0.2} className="mt-8 md:w-1/3">
                <Image
                    src="/Armaan.jpeg"
                    alt="Shashi Bhushan Jha"
                    width={4032}
                    height={3024}
                    className="shadow-lg object-cover h-80 rounded-3xl"
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
        <div className="flex items-center gap-2 text-[#7a4b27]" title={title}>
            <div className="text-[#161E31]">{icon}</div>
            <span>{text}</span>
        </div>
    );
}
