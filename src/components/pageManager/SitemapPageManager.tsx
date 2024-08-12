"use client";
import * as React from "react";
import { SitemapSection } from "../sections/SitemapPage";
import DynamicNavbar from "../ui/DynamicNavbar";
import Footer from "../ui/Footer";

export interface ISitemapPageManagerProps {}

export default function SitemapPageManager(props: ISitemapPageManagerProps) {
    return (
        <>
            <DynamicNavbar title="Sitemap" />
            <SitemapSection />
            <Footer />
        </>
    );
}
