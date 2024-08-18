"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { _404Illustration } from "@/utils/assets";
import ActionButton from "@/components/ui/designs/ActionButton";
import Heading from "@/components/ui/designs/Heading";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full bg-gray-900 text-center px-6 py-10">
            <div className="md:w-1/2 flex flex-col items-center gap-8 md:items-start md:text-left">
                <Heading level={1} className="text-5xl md:text-7xl font-bold text-gray-100">
                    404
                </Heading>
                <p className="text-base md:text-lg text-gray-400">
                    Oops! The page you're looking for doesn&apos;t exist or has been
                    moved.
                </p>
                <div className="flex gap-4">
                    <Link href="/">
                        <ActionButton
                            text="Go Back Home"
                            size="sm"
                            status="active"
                        />
                    </Link>
                    <Link href="/sitemap">
                        <ActionButton
                            text="Explore Sitemap"
                            size="sm"
                        />
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <div className="relative">
                    <Image
                        src={_404Illustration}
                        alt="Page Not Found"
                        width={500}
                        height={500}
                        className="mx-auto"
                    />
                    <p className="mt-4 text-xs text-gray-500 text-center">
                        Illustration from{" "}
                        <a
                            href="https://storyset.com/"
                            target="_blank"
                            className="hover:underline font-semibold text-gray-400"
                        >
                            StorySet
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
