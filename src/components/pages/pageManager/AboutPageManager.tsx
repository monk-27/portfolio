"use client";
import * as React from "react";
import Hero from "@/components/pages/sections/Hero";
import {
    SkillsSection,
    StorySection,
} from "@/components/pages/sections/AboutPage";
import Testimonials from "@/components/ui/common/Testimonials";
import PageCreator from "@/components/layout/PageCreator";

export interface IAboutPageManagerProps {}

export default function AboutPageManager(props: IAboutPageManagerProps) {
    return (
        <PageCreator title="Learn about me">
            <section
                id="about-hero"
                className="py-10 bg-inherit relative w-full"
            >
                <Hero type="about" />
            </section>
            <section
                id="about-story-section"
                className="py-10 bg-inherit relative w-full"
            >
                <StorySection />
            </section>
            <section
                id="about-skills-section"
                className="py-10 bg-inherit relative w-full"
            >
                <SkillsSection />
            </section>

            <section
                data-scroll
                data-scroll-speed={0.1}
                id="about-testimonials"
                className="py-10 bg-inherit relative w-full"
            >
                <Testimonials />
            </section>
        </PageCreator>
    );
}
