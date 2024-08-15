"use client";
import * as React from "react";
import { ActivityHub, ProjectsSection } from "../sections/Homepage";
import Footer from "@/components/ui/common/Footer";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/layout/Hero";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    return (
        <>
            <article className="text-gray-200 bg-primary homepage show-bar">
                <Navbar title="armaancodes" className="bg-inherit" />
                <section
                    id="homepage-hero"
                    className="pt-14 pb-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <Hero type="home" />
                </section>
                <section
                    id="homepage-analytics"
                    className="py-40 px-5 bg-inherit relative w-full mt-52"
                >
                    <ActivityHub />
                </section>
                <section
                    id="homepage-projects"
                    className="pt-20 pb-32 px-5 bg-inherit relative w-full"
                >
                    <ProjectsSection />
                </section>
                <footer className="pt-32">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
