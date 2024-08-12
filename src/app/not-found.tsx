"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { _404Illustration, LinkIcon } from "@/utils/icons";
import ActionButton from "@/components/layout/ActionButton";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen w-full bg-gray-100 text-center px-6 py-10">
            <div className="flex-col-start gap-5 md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Error 404
                </h1>
                <p className="text-base md:text-lg text-gray-500 mb-4 text-left">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex-row-start gap-5">
                    <Link href={"/"} className="">
                        <ActionButton text="Go Back Home" size="sm" />
                    </Link>
                    <Link href={"/sitemap"} className="">
                        <ActionButton
                            text="Explore sitemap"
                            bgColor="bg-gray-200"
                            textColor="text-color-dark"
                            hoverBgColor="hover:bg-gray-300"
                            size="sm"
                        />
                    </Link>
                </div>
            </div>
            <div className="border border-transparent hover:border-gray-200 transition-colors duration-300 relative rounded-lg mb-10 md:mb-0 md:w-1/2">
                <Image
                    src={_404Illustration}
                    alt="Page Not Found"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
                <p className="absolute bottom-0 right-0 text-xs">
                    Illustration from{" "}
                    <a
                        href="https://storyset.com/"
                        target="_blank"
                        className="hover:underline font-semibold"
                    >
                        StorySet
                    </a>
                </p>
            </div>
        </div>
    );
}
