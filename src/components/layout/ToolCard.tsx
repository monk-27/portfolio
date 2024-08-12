"use client";
import * as React from "react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

interface ToolCardProps {
    tool: Tool;
}

interface Tool {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string;
    subCategory?: string;
}

export default function ToolCard({ tool }: ToolCardProps): JSX.Element {
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
