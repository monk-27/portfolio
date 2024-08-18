"use client";
import * as React from "react";
import Hero from "@/components/pages/sections/Hero";
import { ServicesSection } from "@/components/pages/sections/ContactPage";
import PageCreator from "@/components/layout/PageCreator";
import ContactForm from "../sections/ContactPage/ContactForm";

export interface IContactPageManagerProps {}

export default function ContactPageManager(props: IContactPageManagerProps) {
    return (
        <PageCreator title="Contact">
            <section
                id="contact-hero-section"
                className="bg-inherit relative w-full"
            >
                <Hero type="contact" />
            </section>
            <section
                id="contact-offerings-section"
                className="py-10 bg-inherit relative w-full"
            >
                <ServicesSection />
            </section>
            <section
                id="contact-form-section"
                className="relative w-full  bg-gray-800"
            >
                <ContactForm />
            </section>
        </PageCreator>
    );
}
