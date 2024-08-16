"use client";
import Footer from "@/components/ui/common/Footer";
import Navbar from "@/components/ui/common/Navbar";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import * as React from "react";

export interface IResourcesPageManagerProps {}

export default function ResourcesPageManager(
    props: IResourcesPageManagerProps
) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <>
            <article className="text-gray-200 bg-secondary homepage px-2">
                <header>
                    <Navbar
                        title="Resources"
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>
                <div className="rounded-3xl bg-primary overflow-hidden">
                    <div>Coming soon</div>
                </div>
                <footer className="mt-10">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
