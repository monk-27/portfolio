"use client";
import * as React from "react";
import DynamicNavbar from "../ui/DynamicNavbar";
import Hero from "../layout/Hero";
import {
    ContactSection,
    PricingSection,
    ProofOfWorkSection,
    ServicesSection,
} from "../sections/ServicesPage";
import Testimonials from "../ui/Testimonials";
import Footer from "../ui/Footer";

export interface IServicesPageManagerProps {}

export default function ServicesPageManager(props: IServicesPageManagerProps) {
    return (
        <>
            <DynamicNavbar title="Services I Offer" />
            <div className="px-5 py-10 bg-gray-50 flex-col-center w-full gap-10">
                <Hero type="services" />
                <ServicesSection />
                <ProofOfWorkSection />
                <PricingSection />
                <Testimonials />
                <ContactSection />
            </div>
            <Footer />
        </>
    );
}
