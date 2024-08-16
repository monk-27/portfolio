"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/pages/sections/Hero";
import {
    SkillsSection,
    StorySection,
} from "@/components/pages/sections/AboutPage";
import Testimonials from "@/components/ui/common/Testimonials";
import Footer from "@/components/ui/common/Footer";

export interface IAboutPageManagerProps {}

export default function AboutPageManager(props: IAboutPageManagerProps) {
    return (
        <>
            <article className="text-gray-200 bg-secondary px-2">
                <header>
                    <Navbar
                        title="Learn about me"
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>

                <div className="rounded-3xl bg-primary overflow-hidden">
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
                        id="about-testimonials"
                        className="py-10 bg-inherit relative w-full"
                    >
                        <Testimonials />
                    </section>
                </div>

                <footer className="mt-10">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
