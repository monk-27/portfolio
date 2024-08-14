"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardHandler from "../cards/IntroCards";
import Image from "next/image";
import { DownloadIcon } from "@/utils/icons";

gsap.registerPlugin(ScrollTrigger);

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
    React.useEffect(() => {
        const timeline = gsap.timeline();

        // Hero tagline animation
        timeline.fromTo(
            ".hero-intro span, .hero-intro h1, .hero-intro h2",
            { opacity: 0, scale: 0.99, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 2.25,
                ease: "power4.out",
                stagger: 1,
            }
        );
    }, []);

    return (
        <div className="container mx-auto flex-col-center-center gap-14 relative bg-inherit text-center">
            <div className="w-full flex-row-evenly-center gap-10">
                <MetricsCircle data={"500+"} label="Commits pushed" />
                <Heading level={2} className="hero-intro leading-tight">
                    <div className="flex-col-start-center">
                        <div className="flex-row-start-end gap-2">
                            <span className="text-lg text-gray-400 font-thin tracking-wide">
                                Hi,
                            </span>
                            <span className="text-lg text-gray-400 font-thin tracking-wide">
                                I'm
                            </span>
                        </div>
                        <Heading
                            level={1}
                            className="text-7xl text-secondary leading-none"
                        >
                            Armaan
                        </Heading>
                        <Heading
                            level={2}
                            className="text-2xl text-gray-100 font-medium"
                        >
                            A Full Stack Developer
                        </Heading>
                    </div>
                </Heading>
                <MetricsCircle data={"6+"} label="Projects completed" />
            </div>

            <div className="flex-col-between-center gap-40 w-full">
                {/* Introduction sub-section */}
                <HeroTextSection />

                {/* Cards sub-section */}
                <div className="grid grid-cols-3 grid-rows-1 w-full justify-items-center">
                    <div className="flex-col-center-center overflow-hidden gap-5 font-semibold">
                        <span className="text-7xl">DISGUISE</span>
                        <span className="text-7xl">IMAGINE</span>
                        <span className="text-7xl">CRAFT</span>
                        <span className="text-7xl">FUN</span>
                    </div>
                    <div className="">
                        <CardHandler />
                    </div>
                    <div className="flex-col-center-center overflow-hidden gap-5 font-semibold">
                        <span className="text-7xl">LOOK</span>
                        <span className="text-7xl">DESIGN</span>
                        <span className="text-7xl">COLORS</span>
                        <span className="text-7xl">TEXTURE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroTextSection() {
    return (
        <div className="w-full flex-col-center-center gap-10">
            <div className="grid grid-cols-2 grid-rows-2 text-left gap-10 w-full">
                <Paragraph className="text-2xl leading-relaxed">
                    I craft beautiful and functional web applications using the
                    latest technologies. Let's work together to bring your ideas
                    to life.
                </Paragraph>
                <Paragraph className="text-2xl leading-relaxed">
                    I craft beautiful and functional web applications using the
                    latest technologies. Let's work together to bring your ideas
                    to life.
                </Paragraph>
                <Paragraph className="text-2xl leading-relaxed">
                    I craft beautiful and functional web applications using the
                    latest technologies. Let's work together to bring your ideas
                    to life.
                </Paragraph>
                <Paragraph className="text-2xl leading-relaxed">
                    I craft beautiful and functional web applications using the
                    latest technologies. Let's work together to bring your ideas
                    to life.
                </Paragraph>
            </div>
            <div className="flex-row-start-center gap-4 md:gap-6 mt-8">
                <ActionButton
                    icon={<DownloadIcon />}
                    text="Download Resume"
                    size="sm"
                />
                <ActionButton text="Get in Touch" size="sm" status="active" />
            </div>
        </div>
    );
}

function MetricsCircle({
    data,
    label,
}: {
    data: number | string;
    label: string;
}) {
    return (
        <div className="flex-col-center-center gap-3">
            <div className="rounded-full border-4 border-secondary">
                <div className="flex-row-center-center h-20 min-w-fit w-full p-5">
                    <span className="text-4xl font-bold">{data}</span>
                </div>
            </div>
            <div>
                <span className="text-gray-500">{label}</span>
            </div>
        </div>
    );
}
