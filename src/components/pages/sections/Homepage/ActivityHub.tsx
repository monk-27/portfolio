import {
    ActiveRepo,
    Contributions,
    Languages,
} from "@/components/ui/charts/GitHub";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";
import { GitHubAnalyticsdata } from "@/utils/sitedata";
import Paragraph from "@/components/ui/designs/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActionButton from "@/components/ui/designs/ActionButton";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export interface IAnalyticsProps {}

export default function ActivityHub(props: IAnalyticsProps) {
    return (
        <div className="container mx-auto w-full flex flex-col items-center justify-center gap-5 bg-inherit">
            {/* GitHub Activity Header */}
            <div className="w-full px-5 md:px-1 lg:px-1">
                <ActivityHubHeader />
            </div>

            <div className="px-5">
                {/* GitHub Activity Summary */}
                {/* <ActivityHubSummary /> */}

                {/* Footer */}
                {/* <ActivityHubFooter /> */}
            </div>
        </div>
    );
}

function ActivityHubHeader() {
    return (
        <div className="relative w-full max-w-8xl mx-auto p-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img
                src="/github-bg.jpg" // Replace with your GitHub background image path
                alt="GitHub Background"
                className="w-full h-full object-cover opacity-10"
            />
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-white flex flex-col items-center gap-6 text-center">
            <Heading
                level={1}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            >
                GitHub Activity Hub
            </Heading>
            <Paragraph className="text-base md:text-lg lg:text-xl max-w-2xl">
                Monitor your GitHub contributions, explore repositories, and showcase
                your activity with ease.
            </Paragraph>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                <ActionButton
                    text="View Profile"
                    size="lg"
                    status="active"
                    className="transition-transform transform hover:scale-110 shadow-lg"
                    link={{
                        url: `https://github.com/monk-27`,
                        target: "_blank",
                    }}
                />
                <ActionButton
                    text="Explore Repositories"
                    size="lg"
                    status="passive"
                    className="transition-transform transform hover:scale-110 shadow-lg"
                    link={{
                        url: `https://github.com/monk-27?tab=repositories`,
                        target: "_blank",
                    }}
                />
            </div>
        </div>
    </div>
    );
}


function ActivityHubSummary() {
    return (
        <div className="grid grid-cols-12 gap-4 w-full">
            {GitHubAnalyticsdata.map(
                ({ id, title, icon: Icon, text }, index) => (
                    <div
                        key={id}
                        className={`${
                            index === 0
                                ? "col-span-12 md:col-span-6 lg:col-span-4 row-span-2"
                                : "col-span-12 md:col-span-6 lg:col-span-4 row-span-1"
                        } bg-gray-800 rounded-3xl p-6 h-fit flex flex-col justify-between items-center`}
                    >
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-2">
                                <Icon className="text-secondary" />
                                <Heading
                                    level={3}
                                    className="text-lg md:text-xl font-bold text-secondary"
                                >
                                    {title}
                                </Heading>
                            </div>
                            <Paragraph className="text-sm md:text-base text-gray-300">
                                {text}
                            </Paragraph>
                        </div>
                        {/* <div className="mt-4 w-full">
                            {id === 1 ? (
                                <ActiveRepo />
                            ) : id === 2 ? (
                                <Contributions />
                            ) : (
                                <Languages />
                            )}
                        </div> */}
                    </div>
                )
            )}
        </div>
    );
}

function ActivityHubFooter() {
    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="text-center text-sm text-gray-600 mt-8"
        >
            <p>
                Powered by{" "}
                <a
                    href="https://docs.github.com/en/graphql"
                    target="_blank"
                    className="hover:underline font-semibold text-secondary"
                >
                    GitHub GraphQL API
                </a>
            </p>
            <p>Displaying cached data.</p>
        </div>
    );
}
