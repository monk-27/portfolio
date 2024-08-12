"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/layout/Hero";
import {
    ContactSection,
    PricingSection,
    ProofOfWorkSection,
    ServicesSection,
} from "@/components/pages/sections/ServicesPage";
import Testimonials from "@/components/ui/common/Testimonials";
import Footer from "@/components/ui/common/Footer";

export interface IServicesPageManagerProps {}

export default function ServicesPageManager(props: IServicesPageManagerProps) {
    return (
        <>
            <Navbar title="Services I Offer" />
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
