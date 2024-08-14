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
            <article className="text-gray-200 bg-primary homepage">
                <Navbar title="Learn about me" />
                <section
                    id="about-hero"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <Hero type="about" onContactClick={handleOverlayOpen} />
                </section>
                <section
                    id="about-story-section"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <StorySection />
                </section>
                <section
                    id="about-skills-section"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <SkillsSection />
                </section>

                <section
                    id="about-experience-section"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <ExperienceSection />
                </section>

                <section
                    id="about-testimonials"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <Testimonials />
                </section>

                <section
                    id="about-call-to-action-banner"
                    className="py-40 px-5 bg-inherit relative w-full hero-section"
                >
                    <CallToActionSection
                        onGetInTouchClick={handleOverlayOpen}
                    />
                </section>

                <footer id="footer">
                    <Footer />
                </footer>

                {isOverlayOpen && (
                    <OverlayForm overlayHandler={handleOverlayClose} />
                )}
            </article>
        </>
    );
}
