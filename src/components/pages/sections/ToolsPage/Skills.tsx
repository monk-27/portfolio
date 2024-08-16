import Heading from "@/components/ui/designs/Heading";
import { SkillsData } from "@/utils/assets";
import Image from "next/image";
import * as React from "react";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
    // Extract unique categories and subcategories
    const categories = Array.from(
        new Set(SkillsData.map((skill) => skill.category))
    );

    return (
        <section
            id="skills-section"
            className="px-4 py-12 sm:py-16 flex-col-center w-full gap-10 bg-gray-900"
        >
            {categories.map((category) => (
                <SkillsGrid
                    key={category}
                    category={category}
                    tools={SkillsData.filter(
                        (tool) => tool.category === category
                    )}
                />
            ))}
        </section>
    );
}

// Reusable SkillsGrid Component
interface SkillsGridProps {
    category: string;
    tools: Tool[];
}

function SkillsGrid({ category, tools }: SkillsGridProps): JSX.Element {
    // Extract unique subcategories
    const subCategories = Array.from(
        new Set(tools.map((tool) => tool.subCategory).filter(Boolean))
    );

    return (
        <div className="mb-16 w-full max-w-7xl mx-auto px-4">
            <Heading
                level={3}
                className="text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left text-gray-300"
            >
                {category}
            </Heading>

            {subCategories.length > 0 ? (
                subCategories.map((subCategory) => (
                    <div key={subCategory} className="mb-12">
                        <Heading
                            level={4}
                            className="text-xl sm:text-2xl font-semibold mb-6 text-left text-gray-400"
                        >
                            {subCategory}
                        </Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {tools
                                .filter(
                                    (tool) => tool.subCategory === subCategory
                                )
                                .map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {tools.map((tool) => (
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
        <div className="p-6 rounded-3xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
                <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="rounded-md"
                />
                <Heading
                    level={5}
                    className="text-lg sm:text-xl font-semibold ml-4 text-gray-200"
                >
                    {tool.name}
                </Heading>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
                {tool.description}
            </p>
        </div>
    );
}
