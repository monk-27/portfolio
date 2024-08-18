"use client";
import * as React from "react";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import Navbar from "../ui/common/Navbar";
import Footer from "../ui/common/Footer";

export interface IPageCreatorProps {
    title: string;
    children: React.ReactNode;
}

export default function PageCreator({ title, children }: IPageCreatorProps) {
    useLocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
    });
    return (
        <>
            <article className="text-gray-200 bg-secondary homepage px-0">
                <header data-scroll data-scroll-speed={0.1}>
                    <Navbar
                        title={title}
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>
                <div className="rounded-3xl bg-primary overflow-hidden">
                    {children}
                </div>
                <footer className="mt-10 px-0">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
