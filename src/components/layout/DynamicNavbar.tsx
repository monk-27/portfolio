"use client";
import * as React from "react";
import Heading from "../ui/Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IDynamicNavbarProps {
    title: string;
}

export default function DynamicNavbar({ title }: IDynamicNavbarProps) {
    const currentPath = usePathname();

    return (
        <header className="py-7 px-6 bg-gray-50">
            <nav className="set-flex-row justify-between items-center set-wf-full">
                <Heading className="text-4xl font-bold w-fit">{title}</Heading>
                <div className="set-flex-row justify-evenly items-center w-1/3 py-4 px-3 rounded-3xl bg-aqua-green text-white text-base">
                    <Link
                        href={"/"}
                        className={`transition-colors duration-200 px-2 rounded-xl ${
                            currentPath === "/"
                                ? "bg-white text-black"
                                : "hover:text-gray-100"
                        }`}
                    >
                        Homepage
                    </Link>
                    <Link
                        href={"/about"}
                        className={`transition-colors duration-200 px-2 rounded-xl ${
                            currentPath === "/about"
                                ? "bg-white text-black"
                                : "hover:text-gray-100"
                        }`}
                    >
                        About me
                    </Link>
                    <Link
                        href={"/tools"}
                        className={`transition-colors duration-200 px-2 rounded-xl ${
                            currentPath === "/tools"
                                ? "bg-white text-black"
                                : "hover:text-gray-100"
                        }`}
                    >
                        Tools
                    </Link>
                    <Link
                        href={"/services"}
                        className={`transition-colors duration-200 px-2 rounded-xl ${
                            currentPath === "/services"
                                ? "bg-white text-black cursor-default"
                                : "hover:text-gray-100"
                        }`}
                    >
                        Services
                    </Link>
                </div>
            </nav>
        </header>
    );
}
