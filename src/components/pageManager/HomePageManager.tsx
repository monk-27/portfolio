"use client";
import * as React from "react";
import DynamicNavbar from "../ui/DynamicNavbar";
import Hero from "../layout/Hero";
import { AnalyticsSection, ProjectsSection } from "../sections/Homepage";
import Testimonials from "../ui/Testimonials";
import Footer from "../ui/Footer";

export interface IHomePageManagerProps {}

export default function HomePageManager(props: IHomePageManagerProps) {
    return (
        <>
            <DynamicNavbar title="Armaan Jaj" className="bg-white" />
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
