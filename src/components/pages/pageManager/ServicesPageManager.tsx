"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/pages/sections/Hero";
import { ServicesSection } from "@/components/pages/sections/ServicesPage";
import Footer from "@/components/ui/common/Footer";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

export interface IServicesPageManagerProps {}

export default function ServicesPageManager(props: IServicesPageManagerProps) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <article className="text-gray-200 bg-secondary px-2">
            <header>
                <Navbar
                    title="Services I offer"
                    className="bg-inherit text-primary"
                    titleColor="primary"
                />
            </header>

            <div className="rounded-3xl bg-primary overflow-hidden">
                <section
                    id="services-hero-section"
                    className="bg-inherit relative w-full"
                >
                    <Hero type="services" />
                </section>
                <section
                    id="services-offerings-section"
                    className="py-10 bg-inherit relative w-full"
                >
                    <ServicesSection />
                </section>
            </div>
            <footer className="mt-10">
                <Footer />
            </footer>
        </article>
    );
}
