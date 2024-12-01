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
    const scrollRef = useLocomotiveScroll({
        el:
            typeof document !== "undefined"
                ? document.querySelector("body")
                : null,
        smooth: true,
    });

    return (
        <>
            <article className="text-[#424769] scroll-smooth scroll-500 bg-white homepage px-0">
                <header data-scroll data-scroll-speed={0.1}>
                    <Navbar
                        title={title}
                        className="   bg-[#1F0733] text-white"
                        titleColor="#424769"
                    />
                </header>
                <div className="rounded-3xl bg-[#2A133D] overflow-hidden">
                    {children}
                </div>
                <footer className="mt-10 px-0">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
