"use client";
import * as React from "react";
import { SitemapSection } from "@/components/pages/sections/SitemapPage";
import Navbar from "@/components/ui/common/Navbar";
import Footer from "@/components/ui/common/Footer";

export interface ISitemapPageManagerProps {}

export default function SitemapPageManager(props: ISitemapPageManagerProps) {
    return (
        <>
            <Navbar title="Sitemap" />
            <SitemapSection />
            <Footer />
        </>
    );
}
