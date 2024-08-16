"use client";
import * as React from "react";
import { SitemapSection } from "@/components/pages/sections/SitemapPage";
import PageCreator from "@/components/layout/PageCreator";

export interface ISitemapPageManagerProps {}

export default function SitemapPageManager(props: ISitemapPageManagerProps) {
    return (
        <PageCreator title="Sitemap">
            <SitemapSection />
        </PageCreator>
    );
}
