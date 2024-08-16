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
            <article className="text-gray-200 bg-secondary homepage px-2">
                <header>
                    <Navbar
                        title="Sitemap"
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>
                <div className="rounded-3xl bg-primary overflow-hidden">
                    <SitemapSection />
                </div>
                <footer className="mt-10">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
