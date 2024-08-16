"use client";
import * as React from "react";
import { ActivityHub, ProjectsSection } from "../sections/Homepage";
import Hero from "@/components/pages/sections/Hero";
import PageCreator from "@/components/layout/PageCreator";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    return (
        <PageCreator title="armaancodes">
            <section
                id="homepage-hero"
                className="py-10 bg-inherit relative w-full"
            >
                <Hero type="home" />
            </section>
            <section
                id="homepage-analytics"
                className="py-14 bg-inherit relative w-full"
            >
                <ProjectsSection />
            </section>
            <section
                id="homepage-projects"
                className="py-14 bg-inherit relative w-full"
            >
                <ActivityHub />
            </section>
        </PageCreator>
    );
}
