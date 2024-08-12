import Heading from "@/components/ui/Heading";
import { ResourcesData } from "@/utils/assets";
import Link from "next/link";
import * as React from "react";

export interface IResourcesSectionProps {}

const resourcesData: IResource[] = ResourcesData;

export default function Resources(props: IResourcesSectionProps) {
    return (
        <section
            id="resources-section"
            className="px-4 py-12 sm:py-16 bg-gray-50 flex-col-center w-full gap-10"
        >
            <Heading className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-aqua-green">
                Resources
            </Heading>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-center mb-12">
                Browse through a curated collection of resources to help you get
                started with your projects. From templates to guides, find
                everything you need to kickstart your development journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {resourcesData.map((resource, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-between items-start"
                    >
                        <Heading className="text-lg sm:text-xl font-semibold mb-4 text-aqua-green-dark">
                            {resource.title}
                        </Heading>
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            {resource.description}
                        </p>
                        <Link
                            href={resource.link}
                            className="text-aqua-green-dark font-medium text-sm sm:text-base"
                        >
                            View Resource
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
