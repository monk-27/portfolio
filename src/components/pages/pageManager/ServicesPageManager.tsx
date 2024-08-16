"use client";
import * as React from "react";
import Hero from "@/components/pages/sections/Hero";
import { ServicesSection } from "@/components/pages/sections/ServicesPage";
import PageCreator from "@/components/layout/PageCreator";

export interface IServicesPageManagerProps {}

export default function ServicesPageManager(props: IServicesPageManagerProps) {
    return (
        <PageCreator title="Services I offer">
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
        </PageCreator>
    );
}
