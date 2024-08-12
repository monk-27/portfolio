import { ActiveRepo, Contributions, Languages } from "@/components/ui/charts/GitHub";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";

export interface IAnalyticsProps {}

export default function Analytics(props: IAnalyticsProps) {
    return (
        <section className="py-16 px-5 bg-gray-50">
            <div className="container mx-auto">
                <Heading className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Activity Hub
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-aqua-green bg-opacity-50 p-6 rounded-lg flex flex-col justify-between items-center">
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-xl md:text-2xl font-bold">
                                Active Project
                            </h3>
                        </div>
                        <div className="mt-5 w-full flex-grow">
                            <ActiveRepo />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl md:text-2xl font-bold">
                            GitHub Contributions
                        </h3>
                        <div className="mt-4 flex-grow">
                            <Contributions />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl md:text-2xl font-bold">
                            Top Languages
                        </h3>
                        <div className="mt-4 flex-grow">
                            <Languages />
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-600 mt-8">
                    <p>
                        Powered by{" "}
                        <a
                            href="https://docs.github.com/en/graphql"
                            target="_blank"
                            className="hover:underline font-semibold"
                        >
                            GitHub GraphQL API
                        </a>
                    </p>
                    <p>Displaying cached data.</p>
                </div>
            </div>
        </section>
    );
}
