"use client";
import * as React from "react";
import { TermsSection } from "@/components/pages/sections/TermsPage";
import Navbar from "@/components/ui/common/Navbar";
import Footer from "@/components/ui/common/Footer";

export interface TermsPageManagerProps {}

export default function TermsPageManager(props: TermsPageManagerProps) {
    return (
        <>
            <Navbar title="Terms of Service" />
            <TermsSection />
            <Footer />
        </>
    );
}
