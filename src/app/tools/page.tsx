"use client";
import * as React from "react";
import DynamicNavbar from "@/components/ui/DynamicNavbar";
import Footer from "@/components/ui/Footer";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import ActionButton from "@/components/layout/ActionButton";
import { ToolsData } from "@/utils/assets";
import { ComputerSVG, ToolSVG } from "@/utils/icons";
import Hero from "@/components/layout/Hero";

export interface IToolsPageProps {}

// Define the data structure for tools
interface Tool {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string;
    subCategory?: string;
}

// Define the data structure for categories
interface Category {
    title: string;
    subCategories: string[];
}

// Define the categories and subcategories dynamically
const categories: Category[] = [
    {
        title: "Development",
        subCategories: [],
    },
    {
        title: "Programming",
        subCategories: ["Languages", "Front end", "Back end", "Databases"],
    },
    {
        title: "Productivity",
        subCategories: [],
    },
];

export default function ToolsPage(props: IToolsPageProps): JSX.Element {
    return (
        <main className="w-full bg-gray-50">
            <DynamicNavbar title="Tools I Use" />

            <Hero type="tools" />

            {/* Tools Grid Section */}
            <div
                id="tools-section"
                className="px-4 py-12 sm:py-16 bg-gray-50 flex-col-center w-full gap-10"
            >
                {categories.map((category) => (
                    <ToolsGrid
                        key={category.title}
                        category={category.title}
                        subCategories={category.subCategories}
                        tools={ToolsData}
                    />
                ))}
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-gray-300 w-full max-w-7xl mx-auto" />

            <div id="resources-section">
                <ResourcesSection />
            </div>

            <Footer />
        </main>
    );
}

export interface IResource {
    title: string;
    description: string;
    link: string;
}

const resourcesData: IResource[] = [
    {
        title: "Next.js Project Starter",
        description:
            "A fully configured Next.js project template with essential dependencies, including TypeScript, TailwindCSS, and ESLint.",
        link: "#",
    },
    {
        title: "React Component Library",
        description:
            "A collection of reusable React components with a focus on accessibility and performance.",
        link: "#",
    },
    {
        title: "Express.js API Template",
        description:
            "A boilerplate for building RESTful APIs with Express.js, including JWT authentication and MongoDB integration.",
        link: "#",
    },
    {
        title: "TypeScript Best Practices",
        description:
            "A comprehensive guide to writing clean and maintainable TypeScript code, including tips and examples.",
        link: "#",
    },
];

function ResourcesSection(): JSX.Element {
    return (
        <div className="px-4 py-12 sm:py-16 bg-gray-50 flex-col-center w-full gap-10">
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
                        <a
                            href={resource.link}
                            className="text-aqua-green-dark font-medium text-sm sm:text-base"
                        >
                            View Resource
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Reusable ToolsGrid Component
interface ToolsGridProps {
    category: string;
    subCategories: string[];
    tools: Tool[];
}

function ToolsGrid({
    category,
    subCategories,
    tools,
}: ToolsGridProps): JSX.Element {
    return (
        <div className="mb-16 w-full max-w-7xl mx-auto px-4">
            <Heading className="text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left text-aqua-green">
                {category}
            </Heading>

            {subCategories.length > 0 ? (
                subCategories.map((subCategory) => (
                    <div key={subCategory} className="mb-12">
                        <Heading className="text-xl sm:text-2xl font-semibold mb-6 text-left text-aqua-green">
                            {subCategory}
                        </Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {tools
                                .filter(
                                    (tool) =>
                                        tool.category === category &&
                                        tool.subCategory === subCategory
                                )
                                .map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {tools
                        .filter((tool) => tool.category === category)
                        .map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                </div>
            )}
        </div>
    );
}

// Reusable ToolCard Component
interface ToolCardProps {
    tool: Tool;
}

function ToolCard({ tool }: ToolCardProps): JSX.Element {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <Image src={tool.icon} alt={tool.name} width={40} height={40} />
                <Heading className="text-lg sm:text-xl font-semibold ml-4">
                    {tool.name}
                </Heading>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
                {tool.description}
            </p>
        </div>
    );
}
