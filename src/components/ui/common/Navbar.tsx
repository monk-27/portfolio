"use client";
import * as React from "react";
import Heading from "../designs/Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinksData } from "@/utils/assets";
import Magnetic from "../designs/Magnetic";

interface INavbarProps {
    title?: string;
    className?: string;
    titlePosition?: "left" | "right" | "center";
    linksPosition?: "left" | "right" | "center";
    titleColor?: "white" | "primary" | "secondary";
}

export default function Navbar({
    title,
    className = "",
    titlePosition = "left",
    linksPosition = "right",
    titleColor = "white",
}: INavbarProps) {
    return (
        <>
            <div className={`py-7 px-6 bg-inherit ${className}`}>
                <nav className="flex-col-between-center md:flex-row w-full gap-10">
                    {linksPosition === "left" && <NavLinks />}
                    {title && (
                        <NavHeader
                            title={title}
                            position={titlePosition}
                            hideOnMobile={true}
                            titleColor={titleColor}
                        />
                    )}
                    {linksPosition === "center" && <NavLinks />}
                    {linksPosition === "right" && <NavLinks />}
                </nav>
            </div>
        </>
    );
}

// Internal component: NavHeader
function NavHeader({
    title,
    position,
    hideOnMobile,
    titleColor = "white",
}: {
    title: string;
    position: "left" | "right" | "center";
    hideOnMobile?: boolean;
    titleColor?: "white" | "primary" | "secondary";
}) {
    const alignment =
        position === "left"
            ? "order-first md:order-first"
            : position === "right"
            ? "order-last md:order-last"
            : "order-first md:order-none mx-auto";

    return (
        <div
            className={`w-fit mt-4 md:mt-0 ${alignment} ${
                hideOnMobile ? "hidden md:block" : ""
            }`}
        >
            <Heading
                level={0}
                className={`text-4xl font-bold text-${titleColor}`}
            >
                <Magnetic>
                    <span>{title}</span>
                </Magnetic>
            </Heading>
        </div>
    );
}

// Internal component: NavLinks
function NavLinks() {
    return (
        <div className="flex-row-evenly-center gap-2 md:gap-8 w-full md:w-auto py-4 px-2 rounded-xl text-base">
            {NavLinksData.map((item, _) => (
                <NavLinkItem href={item.link} label={item.name} key={item.id} />
            ))}
        </div>
    );
}

// Internal component: NavLinkItem
function NavLinkItem({ href, label }: { href: string; label: string }) {
    const currentPath = usePathname();

    return (
        <Link
            href={href}
            className={`relative duration-300 px-2 w-full h-full rounded-lg flex-row-center-center md:gap-1 text-inherit text-lg ${
                currentPath === href ? "underline" : ""
            }`}
        >
            <Magnetic>
                <span>{label}</span>
            </Magnetic>
        </Link>
    );
}
