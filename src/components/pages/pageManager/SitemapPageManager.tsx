"use client";
import * as React from "react";
import { SitemapSection } from "@/components/pages/sections/SitemapPage";
import Navbar from "@/components/ui/common/Navbar";
import Footer from "@/components/ui/common/Footer";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

export interface ISitemapPageManagerProps {}

export default function SitemapPageManager(props: ISitemapPageManagerProps) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <>
            <Navbar title="Sitemap" />
            <SitemapSection />
            <Footer />
        </>
    );
}
