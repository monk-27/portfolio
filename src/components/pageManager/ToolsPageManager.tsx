import * as React from "react";
import DynamicNavbar from "../ui/DynamicNavbar";
import Hero from "../layout/Hero";
import Footer from "../ui/Footer";
import { ResourcesSection, ToolsSection } from "../sections/ToolsPage";

export interface IToolsPageManagerProps {}

export default function ToolsPageManager(props: IToolsPageManagerProps) {
    return (
        <>
            <DynamicNavbar title="Tools I Use" />

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
