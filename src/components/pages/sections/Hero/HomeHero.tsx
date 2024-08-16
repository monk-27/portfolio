"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "@/utils/icons";
import CardHandler from "@/components/layout/cards/IntroCards";
import { SocialMediaLinks } from "@/utils/assets";

gsap.registerPlugin(ScrollTrigger);

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
    const [titles] = React.useState([
        "A Full Stack Developer",
        "A Web Designer",
        "A Gamer",
        "A Tech Enthusiast",
    ]);
    const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

    // Data for progress bars
    const progressData = [
        {
            id: 1,
            type: "Currently Learning",
            title: "DevOps",
            chaptersCompleted: 3,
            totalChapters: 29,
            link: "/trend",
        },
        {
            id: 2,
            type: "Current Project",
            title: "Data structure visualizer",
            progress: 5,
            link: "/trend",
        },
    ];

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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative bg-inherit">
            {/* Left Column - Progress Bars */}
            <div className="hidden md:flex col-span-1 flex-col justify-between items-center pl-2 h-full">
                <ProgressSection progressData={progressData} />
                <div className="flex flex-row justify-center gap-8">
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

            {/* Center Column - Main Text, Buttons */}
            <div className="col-span-1 flex flex-col items-center">
                <Placement2
                    titles={titles}
                    currentTitleIndex={currentTitleIndex}
                />
                <Placement3 />
            </div>

            {/* Right Column - Metrics */}
            <div className="col-span-1">
                <Placement4 />
            </div>

            {/* Card area - Full width */}
            {/* <div className="col-span-3 mt-12">
                <Placement5 />
            </div> */}
        </div>
    );
}

function Placement2({
    titles,
    currentTitleIndex,
}: {
    titles: string[];
    currentTitleIndex: number;
}) {
    return (
        <Heading
            level={2}
            className="hero-intro leading-tight text-center mx-auto"
        >
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-2">
                    <span className="text-sm sm:text-base md:text-lg text-gray-400 font-thin tracking-wide">
                        Hi,
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-gray-400 font-thin tracking-wide">
                        I'm
                    </span>
                </div>
                <Heading
                    level={1}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary leading-none"
                >
                    Armaan
                </Heading>
                <Heading
                    level={2}
                    className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-medium"
                >
                    {titles[currentTitleIndex]}
                </Heading>
            </div>
        </Heading>
    );
}
function ProgressSection({ progressData }: { progressData: any[] }) {
    return (
        <div className="flex flex-col items-start gap-6 w-full">
            {progressData.map((progress) => (
                <Link
                    href={progress.link}
                    key={progress.id}
                    className="w-full text-gray-300 group hover:bg-gray-600 p-4 rounded-lg duration-300 max-w-xs"
                >
                    <div className="flex flex-row justify-between items-start">
                        <Heading
                            level={5}
                            className="text-sm font-light text-gray-200"
                        >
                            {progress.type}
                        </Heading>
                        <span>
                            <ArrowRightIcon className="scale-150 group-hover:-rotate-45 duration-200" />
                        </span>
                    </div>
                    <p className="text-xs font-extralight">{progress.title}</p>
                    <ProgressBar
                        progress={progress.progress}
                        chaptersCompleted={progress.chaptersCompleted}
                        totalChapters={progress.totalChapters}
                    />
                </Link>
            ))}
        </div>
    );
}
function ProgressBar({
    progress,
    chaptersCompleted,
    totalChapters,
}: {
    progress?: number;
    chaptersCompleted?: number;
    totalChapters?: number;
}) {
    const percentage = progress || (chaptersCompleted! / totalChapters!) * 100;

    return (
        <div className="w-full bg-gray-700 rounded-full h-[0.10rem] mt-1 relative">
            <div
                className="bg-secondary h-[0.10rem] rounded-full animate-pulse"
                style={{
                    width: `${percentage}%`,
                    transition: "width 0.5s ease-in-out",
                }}
            />
            <div className="flex justify-center items-center text-xs text-gray-400 font-semibold">
                {chaptersCompleted && totalChapters
                    ? `${chaptersCompleted}/${totalChapters}`
                    : `${Math.round(percentage)}%`}
            </div>
        </div>
    );
}

function Placement3() {
    return (
        <div className="flex flex-col justify-center items-center gap-10 my-14">
            <Paragraph className="text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
                I give vision, JavaScript.
            </Paragraph>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
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

function Placement4() {
    return (
        <div className="flex flex-col justify-center items-center gap-14 w-full">
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-5xl">500+</span>
                <span className="text-sm">Commits pushed</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-5xl">6+</span>
                <span className="text-sm">Projects completed</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-5xl">15+</span>
                <span className="text-sm">Technologies mastered</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-5xl">300+</span>
                <span className="text-sm">Medium double doubles</span>
            </div>
        </div>
    );
}

function Placement5() {
    return (
        <div className="relative">
            <CardHandler />
        </div>
    );
}
