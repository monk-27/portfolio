import {
    ActiveRepo,
    Contributions,
    Languages,
} from "@/components/ui/charts/GitHub";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";
import { GitHubAnalyticsdata } from "@/utils/assets";
import Paragraph from "@/components/ui/designs/Paragraph";

export interface IAnalyticsProps {}

export default function ActivityHub(props: IAnalyticsProps) {
    return (
        <div className="container mx-auto relative mt-10 flex-col-center-center gap-20 bg-inherit">
            <div className="flex w-full bg-secondary py-10 rounded-md items-stretch pl-5 gap-2">
                <div className="w-1/2 bg-gray-700 flex-col-start-center gap-5 rounded-lg p-10">
                    <div className="h-1/2">
                        <Heading level={2} className="text-center text-7xl text-white">
                            GitHub
                        </Heading>
                        <Heading level={3} className="text-center text-6xl text-white">
                            Activity Center
                        </Heading>
                    </div>
                    <div>
                        <Paragraph className="text-5xl text-left">
                            Learn about my activity over GitHub.
                        </Paragraph>
                    </div>
                </div>
                <div className="flex-col-start-end gap-5 w-1/2">
                    <span className="uppercase text-7xl bg-gray-700 py-10 pl-10 rounded-l-full shadow-md">
                        active project
                    </span>
                    <span className="uppercase text-7xl bg-gray-700 py-10 pl-10 rounded-l-full shadow-md">
                        contributions
                    </span>
                    <span className="uppercase text-7xl bg-gray-700 py-10 pl-10 rounded-l-full shadow-md">
                        top languages
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                {GitHubAnalyticsdata.map(
                    ({ id, title, icon: Icon, text }, index) => (
                        <div
                            key={id}
                            className={`${
                                index === 0
                                    ? "col-span-4 row-span-2"
                                    : "col-span-4 md:col-span-4 row-span-1"
                            } bg-gray-800 rounded-lg p-6 h-fit flex-col-between-center`}
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
                            <div className="mt-4 set-wf-full">
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
        </div>
    );
}
