import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import Link from "next/link";
import Image from "next/image";
import { LinkIcon, ProjSVG } from "@/utils/icons";
import Paragraph from "@/components/ui/designs/Paragraph";

export interface IProjectCardProps {
    title: string;
    description: string;
    logo: string;
    url: string;
    onClick: () => void;
}

export default function ProjectCard({
    title,
    description,
    logo,
    url,
    onClick,
}: IProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-gray-700 p-4 rounded-lg h-full project-card shadow cursor-pointer hover:bg-gray-600 transition-all"
        >
            <div className="flex-col-between-start md:flex-row gap-4 h-full">
                <div className="flex-col-between-start gap-2 flex-1">
                    <div className="flex-row-between-center w-full">
                        <Heading level={3} className="text-xl">
                            {title}
                        </Heading>
                        <Link
                            href={url}
                            title="Open link in new tab"
                            target="_blank"
                            className="scale-110 hover:bg-white hover:text-primary transition-colors duration-300 rounded-lg p-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LinkIcon />
                        </Link>
                    </div>
                    <Paragraph className="text-sm md:text-base w-full">
                        {description}
                    </Paragraph>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={logo ? logo : ProjSVG}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="object-contain rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
