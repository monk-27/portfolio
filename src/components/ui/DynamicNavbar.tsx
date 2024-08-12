"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinksData } from "@/utils/assets";
import gsap from "gsap";

export interface IDynamicNavbarProps {
    title?: string;
    className?: string;
    titlePosition?: "left" | "right" | "center"; // Control the position of the title
    linksPosition?: "left" | "right" | "center"; // Control the position of the links
}

export default function DynamicNavbar({
    title,
    className = "",
    titlePosition = "left",
    linksPosition = "right",
}: IDynamicNavbarProps) {
    const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
    const navbarRef = useRef<HTMLElement | null>(null);
    const secondaryNavbarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current && secondaryNavbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                const scrollPosition = window.scrollY;

                // Adjust the offset based on screen size
                const offsetLargeScreen = 300;
                const offsetSmallScreen = 150;

                const scrollDownThreshold =
                    window.innerWidth > 768
                        ? navbarHeight + offsetLargeScreen
                        : navbarHeight + offsetSmallScreen;

                const scrollUpThreshold =
                    window.innerWidth > 768
                        ? navbarHeight + 150
                        : navbarHeight + 75;

                if (
                    scrollPosition > scrollDownThreshold &&
                    !showSecondaryNavbar
                ) {
                    setShowSecondaryNavbar(true);
                    gsap.fromTo(
                        secondaryNavbarRef.current,
                        { y: -100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.25,
                            ease: "power3.out",
                        }
                    );
                } else if (
                    scrollPosition <= scrollUpThreshold &&
                    showSecondaryNavbar
                ) {
                    gsap.to(secondaryNavbarRef.current, {
                        y: -100,
                        opacity: 0,
                        duration: 0.25,
                        ease: "power3.in",
                        onComplete: () => setShowSecondaryNavbar(false),
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showSecondaryNavbar]);

    return (
        <>
            <header
                ref={navbarRef}
                className={`py-7 px-6 bg-gray-50 ${className}`}
            >
                <nav className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
                    {linksPosition === "left" && <NavLinks />}
                    {title && (
                        <NavHeader title={title} position={titlePosition} />
                    )}
                    {linksPosition === "center" && <NavLinks />}
                    {linksPosition === "right" && <NavLinks />}
                </nav>
            </header>

            {/* Secondary Navbar */}
            <div
                ref={secondaryNavbarRef}
                className={`fixed top-0 left-0 w-full bg-gray-50 bg-opacity-80 backdrop-blur-md shadow-lg shadow-gray-300 z-50 ${
                    showSecondaryNavbar ? "block" : "hidden"
                }`}
            >
                <div className="container mx-auto flex justify-between items-center py-3 px-6">
                    {title && (
                        <Heading className="text-2xl font-bold hidden md:block">
                            {title}
                        </Heading>
                    )}
                    <NavLinks />
                </div>
            </div>
        </>
    );
}

// Internal component: NavHeader
function NavHeader({
    title,
    position,
}: {
    title: string;
    position: "left" | "right" | "center";
}) {
    const alignment =
        position === "left"
            ? "order-first md:order-first"
            : position === "right"
            ? "order-last md:order-last"
            : "order-first md:order-none mx-auto";

    return (
        <Heading
            className={`text-4xl font-bold w-fit mt-4 md:mt-0 ${alignment}`}
        >
            {title}
        </Heading>
    );
}

// Internal component: NavLinks
function NavLinks() {
    return (
        <div className="flex justify-evenly items-center gap-2 w-full md:w-auto py-4 px-2 rounded-xl bg-aqua-green text-white text-base">
            {NavLinksData.map((item, _) =>
                item.icon ? (
                    <NavLinkItem
                        href={item.link}
                        label={item.name}
                        icon={<item.icon />}
                        key={item.id}
                    />
                ) : (
                    <NavLinkItem
                        href={item.link}
                        label={item.name}
                        key={item.id}
                    />
                )
            )}
        </div>
    );
}

// Internal component: NavLinkItem
function NavLinkItem({
    icon,
    href,
    label,
}: {
    icon?: React.ReactNode;
    href: string;
    label: string;
}) {
    const currentPath = usePathname();

    return (
        <Link
            href={href}
            className={`transition-colors duration-200 px-2 rounded-lg flex-row-center md:gap-1 ${
                currentPath === href
                    ? "bg-white text-black cursor-default"
                    : "hover:text-gray-100"
            }`}
        >
            {icon && <span className="hidden md:block">{icon}</span>}
            {label}
        </Link>
    );
}
