"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/pages/sections/Hero";
import Footer from "@/components/ui/common/Footer";
import {
    SkillsSection,
    ResourcesSection,
} from "@/components/pages/sections/ToolsPage";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

export interface ISkillsPageManagerProps {}

export default function SkillsPageManager(props: ISkillsPageManagerProps) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <article className="text-gray-200 bg-secondary homepage px-2">
            <header>
                <Navbar
                    title="My skills"
                    className="bg-inherit text-primary"
                    titleColor="primary"
                />
            </header>

            <div className="rounded-3xl bg-primary overflow-hidden">
                <section
                    id="skills-hero-section"
                    className="py-10 bg-inherit relative w-full px-5"
                >
                    <Hero type="skills" />
                </section>

                <section
                    id="skills-tech-section"
                    className="py-10 bg-inherit relative w-full"
                >
                    <SkillsSection />
                </section>

                <section
                    id="skills-resources-section"
                    className="py-10 bg-inherit relative w-full px-5"
                >
                    <ResourcesSection />
                </section>
            </div>

            <footer className="mt-10">
                <Footer />
            </footer>
        </article>
    );
}
