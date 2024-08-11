import * as React from "react";
import Heading from "../ui/Heading";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export interface IProjectCardProps {
    title: string;
    description: string;
    logo: string;
    url: string;
}

export default function ProjectCard({
    title,
    description,
    logo,
    url,
}: IProjectCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 h-fit project-card shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 h-full">
                <div className="flex flex-col justify-between items-start gap-2 flex-1">
                    <div className="flex flex-row justify-between items-center w-full">
                        <Heading className="text-lg my-1 md:text-xl font-semibold w-fit">
                            {title}
                        </Heading>
                        <Link
                            href={url}
                            title="Open link in new tab"
                            target="_blank"
                            className="scale-110 hover:bg-color-dark hover:text-white transition-colors duration-300 rounded-lg p-1"
                        >
                            <IoIosLink />
                        </Link>
                    </div>
                    <p className="text-sm md:text-base w-full">{description}</p>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
