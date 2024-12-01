"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRightIcon } from "@/utils/assets";
import { MetricsData } from "@/utils/sitedata";
import GlobeWithCityTime from "@/components/pages/sections/Homepage/LocalCityTime";
import SocialLinks from "@/components/ui/common/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export interface IHomeHeroProps { }

export default function HomeHero(props: IHomeHeroProps) {
    const [titles] = React.useState([
        "A Software Developer",
        "A Web Designer",
        "A Tech Enthusiast",
    ]);
    const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

    // Data for progress bars
    const progressData = [
        // {
        //     id: 1,
        //     type: "Currently Learning",
        //     title: "DevOps",
        //     chaptersCompleted: 3,
        //     totalChapters: 29,
        // },
        {
            id: 1,
            type: "Currently Learning",
            title: "Backend Development",
            progress: 25,
        },
        {
            id: 2,
            type: "Currently Learning",
            title: "DevOps",
            progress: 5,
        },
    ];

    React.useLayoutEffect(() => {
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
                <div
                    data-scroll
                    data-scroll-speed={-0.1}
                    className="flex flex-col justify-center items-center gap-10 my-14"
                >
                    <GlobeWithCityTime />
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
                <div
                    data-scroll
                    data-scroll-speed={0.075}
                    className="flex flex-row gap-2"
                >
                    <span className="text-sm sm:text-base md:text-lg text-darkbrown font-thin tracking-wide">
                        Hi,
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-white font-thin tracking-wide">
                        I&apos;m
                    </span>
                </div>
                <div data-scroll data-scroll-speed={0.05}>
                    <Heading
                        level={1}
                        className="text-[#A66E43] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none"
                    >
                        <span>Shashi Bhushan Jha</span>
                    </Heading>
                </div>
                <div data-scroll data-scroll-speed={0.025}>
                    <Heading
                        level={2}
                        className="text-xl sm:text-2xl md:text-3xl text-[#161E31] font-medium"
                    >
                        {titles[currentTitleIndex]}
                    </Heading>
                </div>
            </div>
        </Heading>
    );
}
function ProgressSection({ progressData }: { progressData: any[] }) {
    return (
        <div
            data-scroll
            data-scroll-speed={-0.3}
            className="flex flex-col items-start gap-6 w-full"
        >
            {progressData.map((progress) =>
                progress.link ? (
                    <Link
                        href={progress.link}
                        key={progress.id}
                        className="w-full text-[#895126] group hover:bg-gray-900 p-4 pb-5 rounded-lg duration-300 max-w-xs"
                    >
                        <div className="flex flex-row justify-between items-start">
                            <Heading
                                level={5}
                                className="text-sm font-light text-[#895126]"
                            >
                                {progress.type}
                            </Heading>
                            <span>
                                <ArrowRightIcon className="scale-150 group-hover:-rotate-45 duration-200" />
                            </span>
                        </div>
                        <p className="text-xs font-extralight">
                            {progress.title}
                        </p>
                        <ProgressBar
                            progress={progress.progress}
                            chaptersCompleted={progress.chaptersCompleted}
                            totalChapters={progress.totalChapters}
                        />
                    </Link>
                ) : (
                    <div
                        key={progress.id}
                        className="w-full text-[#895126] group hover:bg-gray-900 hover:text-white p-4 pb-5 rounded-lg duration-300 max-w-xs"
                    >
                        <div className="flex flex-row justify-between items-start">
                            <Heading
                                level={5}
                                className="text-sm font-light text-[#895126] hover:text-white"
                            >
                                {progress.type}
                            </Heading>
                        </div>
                        <p className="text-xs font-extralight">
                            {progress.title}
                        </p>
                        <ProgressBar
                            progress={progress.progress}
                            chaptersCompleted={progress.chaptersCompleted}
                            totalChapters={progress.totalChapters}
                        />
                    </div>
                )
            )}
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
                className="bg-secondary h-[0.20rem] rounded-full animate-pulse"
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
        <div
            data-scroll
            data-scroll-speed={-0.1}
            className="flex flex-col justify-center items-center gap-10 my-14"
        >
            <div>
                <Paragraph className=" text- [ #895126]text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
                    I give vision, JavaScript.
                </Paragraph>
            </div>
            <div
                data-scroll
                data-scroll-speed={-0.1}
                className="flex flex-row justify-center gap-8 text-xl"
            >
                <SocialLinks />
            </div>
        </div>
    );
}

function Placement4() {
    return (
        <div className="flex flex-col justify-center items-center gap-14 w-full">
            {MetricsData.map((item, _) => (
                <div
                    key={item.id}
                    className="flex flex-col justify-center items-center gap-2"
                >
                    <span className="text-5xl">{item.number}+</span>
                    <span className="text-sm">{item.label}</span>
                </div>
            ))}
        </div>
    );
}
