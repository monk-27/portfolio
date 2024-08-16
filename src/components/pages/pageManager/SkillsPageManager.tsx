"use client";
import * as React from "react";
import Hero from "@/components/pages/sections/Hero";
import {
    SkillsSection,
    ResourcesSection,
} from "@/components/pages/sections/ToolsPage";
import PageCreator from "@/components/layout/PageCreator";

export interface ISkillsPageManagerProps {}

export default function SkillsPageManager(props: ISkillsPageManagerProps) {
    return (
        <PageCreator title="Skills">
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
        </PageCreator>
    );
}
