"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/layout/Hero";
import {
    CallToActionSection,
    ExperienceSection,
    OverlayForm,
    SkillsSection,
    StorySection,
} from "@/components/pages/sections/AboutPage";
import Testimonials from "@/components/ui/common/Testimonials";
import Footer from "@/components/ui/common/Footer";

export interface IAboutPageManagerProps {}

export default function AboutPageManager(props: IAboutPageManagerProps) {
    const [isOverlayOpen, setOverlayOpen] = React.useState(false);

    const handleOverlayOpen = () => setOverlayOpen(true);
    const handleOverlayClose = () => setOverlayOpen(false);
    return (
        <>
            <Navbar title="Learn about me" />
            <div className="bg-gray-50 text-color-dark py-8 sm:py-16 px-4 sm:px-8">
                <Hero type="about" onContactClick={handleOverlayOpen} />
                <StorySection />
                <SkillsSection />
                <ExperienceSection />
                <div className="max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] mx-auto">
                    <Testimonials />
                </div>
                <CallToActionSection onGetInTouchClick={handleOverlayOpen} />
            </div>
            <Footer />

            {isOverlayOpen && (
                <OverlayForm overlayHandler={handleOverlayClose} />
            )}
        </>
    );
}
