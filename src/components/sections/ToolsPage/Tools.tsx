import Heading from "@/components/ui/Heading";
import { ToolsData } from "@/utils/assets";
import Image from "next/image";
import * as React from "react";

export interface IToolsProps {}

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

export default function Tools(props: IToolsProps) {
    return (
        <section
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
        </section>
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
