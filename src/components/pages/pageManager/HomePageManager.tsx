"use client";
import * as React from "react";
import { ActivityHub, ProjectsSection } from "../sections/Homepage";
import Hero from "@/components/pages/sections/Hero";
import PageCreator from "@/components/layout/PageCreator";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    return (
        <PageCreator title="shashibhushanjha">
            <section
                id="homepage-hero"
                className="py-10 mt-20  relative w-full"
            >
                <Hero type="home" />
            </section>
            <section
                data-scroll
                data-scroll-speed={0.3}
                id="homepage-work"
                className="py-14 relative w-full"
            >
                <ProjectsSection />
            </section>
            <section
                data-scroll
                data-scroll-speed={0.3}
                id="homepage-analytics"
                className="py-14 mb-10  relative w-full"
            >
                <ActivityHub />
            </section>
        </PageCreator>
    );
}
