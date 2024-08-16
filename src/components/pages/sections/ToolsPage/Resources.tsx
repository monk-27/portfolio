import Heading from "@/components/ui/designs/Heading";
import { ResourcesData } from "@/utils/assets";
import Link from "next/link";
import * as React from "react";

export interface IResourcesSectionProps {}

const resourcesData: IResource[] = ResourcesData;

export default function Resources(props: IResourcesSectionProps) {
    return (
        <section
            id="resources-section"
            className="px-4 sm:py-16 flex-col-center w-full gap-10 text-left"
        >
            <Heading
                level={2}
                className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-200"
            >
                Resources
            </Heading>
            <p className="text-base sm:text-lg text-gray-400 mb-12">
                Browse through a curated collection of resources to help you get
                started with your projects. From templates to guides, find
                everything you need to kickstart your development journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {resourcesData.map((resource, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 flex flex-col justify-between items-start"
                    >
                        <Heading
                            level={3}
                            className="text-lg sm:text-xl font-semibold mb-4 text-gray-100"
                        >
                            {resource.title}
                        </Heading>
                        <p className="text-gray-400 mb-6 text-sm sm:text-base">
                            {resource.description}
                        </p>
                        <Link
                            href={resource.link}
                            className="text-secondary font-medium text-sm sm:text-base transition hover:underline"
                        >
                            View Resource
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
