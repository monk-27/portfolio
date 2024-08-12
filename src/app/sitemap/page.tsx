import * as React from "react";
import { metadata as _MD } from "./page.metadata";
import { Metadata } from "next";
import SitemapPageManager from "@/components/pages/pageManager/SitemapPageManager";

export const metadata: Metadata = _MD;

export default function SitemapPage() {
    return (
        <main className="bg-gray-50">
            <SitemapPageManager />
        </main>
    );
}
