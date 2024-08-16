"use client";
import * as React from "react";
import { ActivityHub, ProjectsSection } from "../sections/Homepage";
import Footer from "@/components/ui/common/Footer";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/pages/sections/Hero";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <>
            <article className="text-gray-200 bg-secondary homepage px-2">
                <header>
                    <Navbar
                        title="armaancodes"
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>
                <div className="rounded-3xl bg-primary overflow-hidden">
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
                </div>
                <footer className="mt-10">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
