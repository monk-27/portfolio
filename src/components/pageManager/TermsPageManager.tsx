"use client";
import * as React from "react";
import { TermsSection } from "../sections/TermsPage";
import DynamicNavbar from "../ui/DynamicNavbar";
import Footer from "../ui/Footer";

export interface TermsPageManagerProps {}

export default function TermsPageManager(props: TermsPageManagerProps) {
    return (
        <>
            <DynamicNavbar title="Terms of Service" />
            <TermsSection />
            <Footer />
        </>
    );
}
