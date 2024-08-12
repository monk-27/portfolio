import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/ui/common/Footer";
import { ResourcesSection, ToolsSection } from "@/components/pages/sections/ToolsPage";

export interface IToolsPageManagerProps {}

export default function ToolsPageManager(props: IToolsPageManagerProps) {
    return (
        <>
            <Navbar title="Tools I Use" />

            <Hero type="tools" />

            {/* section id="tools-section" */}
            <ToolsSection />

            {/* Divider */}
            <hr className="border-t-2 border-gray-300 w-full max-w-7xl mx-auto" />

            {/* section id="resources-section" */}
            <ResourcesSection />

            <Footer />
        </>
    );
}
