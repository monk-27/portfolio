import {
    ActiveRepo,
    Contributions,
    Languages,
} from "@/components/ui/charts/GitHub";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";
import { GitHubAnalyticsdata } from "@/utils/assets";
import Paragraph from "@/components/ui/designs/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActionButton from "@/components/ui/designs/ActionButton";

gsap.registerPlugin(ScrollTrigger);

export interface IAnalyticsProps {}

export default function ActivityHub(props: IAnalyticsProps) {
    return (
        <div className="container mx-auto w-full flex flex-col items-center justify-center gap-20 bg-inherit">
            {/* GitHub Activity Header */}
            <div className="w-full px-5 md:px-10 lg:px-14">
                <ActivityHubHeader />
            </div>

            <div className="px-5">
                {/* GitHub Activity Summary */}
                <ActivityHubSummary />

                {/* Footer */}
                <ActivityHubFooter />
            </div>
        </div>
    );
}

function ActivityHubHeader() {
    return (
        <div className="relative w-full h-[70vh] bg-gray-800 rounded-3xl flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-4 text-center text-white w-full px-2">
                <Heading
                    level={1}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold"
                >
                    GitHub Activity Hub
                </Heading>
                <Paragraph className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
                    Explore my coding activity, contributions, and top projects
                    on GitHub, all in one place.
                </Paragraph>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <ActionButton
                        text="View Profile"
                        size="sm"
                        status="active"
                        link={{
                            url: "https://www.github.com/armaanjaj",
                            target: "_blank",
                        }}
                    />
                    <ActionButton
                        text="Explore Repositories"
                        size="sm"
                        status="passive"
                        link={{
                            url: "https://www.github.com/armaanjaj?tab=repositories",
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
                        <div className="mt-4 w-full">
                            {id === 1 ? (
                                <ActiveRepo />
                            ) : id === 2 ? (
                                <Contributions />
                            ) : (
                                <Languages />
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

function ActivityHubFooter() {
    return (
        <div className="text-center text-sm text-gray-600 mt-8">
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
