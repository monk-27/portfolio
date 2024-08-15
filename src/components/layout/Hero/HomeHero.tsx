"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardHandler from "../cards/IntroCards";
import { DownloadIcon } from "@/utils/icons";
import { SocialMediaLinks } from "@/utils/assets";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
    const [titles] = React.useState([
        "A Full Stack Developer",
        "A Web Designer",
        "A Gamer",
        "A Tech Enthusiast",
        "A Marvel Fanboy",
    ]);
    const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

    React.useEffect(() => {
        const timeline = gsap.timeline();

        // Initial intro text animation
        timeline.fromTo(
            ".hero-intro span, .hero-intro h1",
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.3,
            }
        );

        // Delayed animation for the first title
        timeline.fromTo(
            ".hero-intro h2",
            { opacity: 0, y: 30, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power4.out",
            },
            "+=0.10"
        );

        // Animate the metric circles without restarting
        gsap.utils
            .toArray<HTMLElement>(".metrics-circle")
            .forEach((circle, i) => {
                const border = circle.querySelector<SVGCircleElement>(
                    ".circle-border circle"
                );
                const number =
                    circle.querySelector<HTMLElement>(".circle-number");

                if (border && number) {
                    const radius = Number(border.getAttribute("r"));
                    const circumference = radius * 2 * Math.PI;

                    border.style.strokeDasharray = `${circumference}`;
                    border.style.strokeDashoffset = `${circumference}`;

                    gsap.to(border, {
                        strokeDashoffset: 0,
                        duration: 2,
                        ease: "power2.inOut",
                        delay: 0.3 * i,
                    });

                    gsap.fromTo(
                        number,
                        { innerHTML: 0 },
                        {
                            innerHTML: number.getAttribute("data-value"),
                            duration: 2,
                            ease: "power2.inOut",
                            snap: { innerHTML: 1 },
                            delay: 0.3 * i,
                        }
                    );
                }
            });

        // Sequential animation for changing titles without affecting other animations
        const cycleTitles = () => {
            gsap.to(".hero-intro h2", {
                opacity: 0,
                scale: 1.2,
                y: -10,
                duration: 1,
                ease: "power4.out",
                onComplete: () => {
                    setCurrentTitleIndex(
                        (prevIndex) => (prevIndex + 1) % titles.length
                    );
                    gsap.fromTo(
                        ".hero-intro h2",
                        { scale: 0.8, opacity: 0, y: 30 },
                        {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power4.out",
                        }
                    );
                },
            });
        };

        const intervalId = setInterval(cycleTitles, 5000);

        return () => clearInterval(intervalId);
    }, [titles]);

    return (
        <div className="container mx-auto flex-col-center-center gap-0 relative bg-inherit text-center">
            <div className="w-full">
                <span className="bg-secondary p-2 rounded-2xl text-primary uppercase hover:bg-green-300 transition-colors duration-300">
                    Beta 1.5.3
                </span>
            </div>
            <div className="w-full flex-row-evenly-center gap-10">
                <div className="metrics-circle w-1/4">
                    <MetricsCircle data={"500"} label="Commits pushed" />
                </div>
                <Heading level={2} className="hero-intro leading-tight w-2/4">
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
                            {titles[currentTitleIndex]}
                        </Heading>
                    </div>
                </Heading>
                <div className="metrics-circle w-1/4">
                    <MetricsCircle data={"6"} label="Projects completed" />
                </div>
            </div>

            <div className="flex-col-between-center gap-40 w-full mt-20">
                {/* Introduction sub-section */}
                <HeroTextSection />

                {/* Cards sub-section */}
                <div className="grid grid-cols-3 grid-rows-1 w-full justify-items-center card-section">
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
        <div className="w-full flex-col-center-center gap-24 hero-text-section">
            <div className="flex-col-center-center gap-10 w-full    ">
                <div className="mx-auto max-w-[70vw] text-center">
                    <Paragraph className="text-2xl leading-relaxed">
                        I'm Armaan, and I've got this knack for turning ideas
                        into applications.
                    </Paragraph>
                </div>
                <div className="flex-row-evenly-center mt-8 w-full">
                    <div className="w-1/3"></div>
                    <div className="flex-row-center-center gap-4 md:gap-6 w-1/3">
                        <ActionButton
                            icon={<DownloadIcon />}
                            text="Download Resume"
                            size="sm"
                        />
                        <ActionButton
                            text="Get in Touch"
                            size="sm"
                            status="active"
                        />
                    </div>
                    <div className="w-1/3 flex-row-center-center">
                        <div className="flex-row-start-start gap-4 md:gap-6 lg:gap-8">
                            {SocialMediaLinks.map((item, index) => (
                                <Link
                                    href={item.href}
                                    target={item.target}
                                    className={item.className}
                                    title={item.title}
                                    key={index}
                                >
                                    <item.icon className="scale-110 hover:text-secondary transition duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex-col-center-center gap-16 w-full px-4 md:px-12 lg:px-24 text-center">
                <Paragraph className="text-2xl leading-relaxed max-w-[80vw] md:max-w-[60vw]">
                    Whether it's using TailwindCSS, Next.js, or React, I blend
                    creativity with code to bring projects to life. I believe
                    great design isn’t just about looking good—it’s about making
                    things work seamlessly too.
                </Paragraph>
                <Paragraph className="text-2xl leading-relaxed max-w-[80vw] md:max-w-[60vw]">
                    My journey? It’s been filled with challenges that pushed me
                    to evolve, to do better, and to think bigger. From designing
                    responsive UIs to optimizing backend performance, I’m always
                    up for the next big thing.
                </Paragraph>
                <Paragraph className="text-2xl leading-relaxed max-w-[80vw] md:max-w-[60vw]">
                    So, if you're after someone who’s more than just a
                    developer—someone who cares about the craft and the
                    outcome—let's team up and build something that stands out.
                </Paragraph>
            </div> */}
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
        <div className="flex-col-center-center gap-0">
            <div className="relative flex-col-center-center -mb-10">
                <svg className="circle-border" width="200" height="200">
                    <circle
                        cx="100"
                        cy="100"
                        r="45"
                        stroke="#4ccd99"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <span
                        className="circle-number text-4xl font-bold"
                        data-value={data}
                    >
                        0
                    </span>
                </div>
            </div>
            <div className="text-2xl">plus</div>
            <div>
                <span className="text-gray-500">{label}</span>
            </div>
        </div>
    );
}
