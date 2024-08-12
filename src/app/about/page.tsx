import { Metadata } from "next";
import * as React from "react";
import AboutPageManager from "@/components/pages/pageManager/AboutPageManager";
import { metadata as ABOUT_MD } from "./page.metadata";

export const metadata: Metadata = ABOUT_MD;

export default function AboutMePage() {
    return (
        <main className="bg-gray-50">
            <AboutPageManager />
        </main>
    );
}
