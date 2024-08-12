"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
    return (
        <section className="relative w-full py-20 px-5 bg-white text-center">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Heading className="text-3xl md:text-5xl font-bold leading-tight">
                    Crafting Digital Experiences with{" "}
                    <span className="text-aqua-green whitespace-nowrap">
                        Artistry & Precision
                    </span>
                </Heading>
                <Paragraph className="text-base md:text-lg leading-relaxed mt-4 max-w-3xl">
                    Empowering your business with top-notch web solutions. Let's
                    create something extraordinary together.
                </Paragraph>
                <div className="flex gap-3 md:gap-5 mt-8 justify-center">
                    <ActionButton text="View My Work" size="md" />
                    <ActionButton text="Hire Me" size="md" />
                </div>
            </div>
        </section>
    );
}
