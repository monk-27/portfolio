"use client";
import * as React from "react";
import { AnalyticsSection, ProjectsSection } from "../sections/Homepage";
import Testimonials from "@/components/ui/common/Testimonials";
import Footer from "@/components/ui/common/Footer";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/layout/Hero";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    return (
        <>
            <Navbar title="Armaan Jaj" className="bg-white" />
            <Hero type="home" />
            <AnalyticsSection />
            <ProjectsSection />
            <section className="bg-white py-10 max-w-[90vw] lg:max-w-[70vw] mx-auto">
                <Testimonials />
            </section>
            <Footer />
        </>
    );
}
