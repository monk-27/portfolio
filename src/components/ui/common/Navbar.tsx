"use client";
import * as React from "react";
import Heading from "../designs/Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinksData } from "@/utils/sitedata";
import Magnetic from "../designs/Magnetic";

interface INavbarProps {
    title?: string;
    className?: string;
    titlePosition?: "left" | "right" | "center";
    linksPosition?: "left" | "right" | "center";
    titleColor?:  "#424769"|"white" | "primary" | "secondary" ;
}

export default function Navbar({
    title,
    className = "",
    titlePosition = "left",
    linksPosition = "right",
    titleColor = "#424769",
}: INavbarProps) {
    return (
        <>
            <div className={`md:py-7 px-6  ${className}`}>
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
    titleColor = "#424769",
}: {
    title: string;
    position: "left" | "right" | "center";
    hideOnMobile?: boolean;
    titleColor?:  "#424769"|"white" | "primary" | "secondary" ;
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
        <div className="flex-row-evenly-center gap-2 md:gap-8 h-full w-full md:w-auto py-4 px-2 rounded-xl text-base">
            {NavLinksData.map((item, _) => (
                <NavLinkItem
                    href={item.link}
                    label={item.name}
                    id={item.id}
                    key={item.id}
                />
            ))}
        </div>
    );
}

// Internal component: NavLinkItem
function NavLinkItem({
    href,
    label,
    id,
}: {
    href: string;
    label: string;
    id: number;
}) {
    const currentPath = usePathname();

    return (
        <Link
            href={href}
            className={`relative duration-300 px-3 py-1 uppercase w-full h-full rounded-3xl flex-row-center-center md:gap-1 text-inherit text-sm md:text-lg ${
                currentPath === href ? "bg-[#F8B179] text-[#424769]" : ""
            }`}
        >
            <Magnetic key={id}>
                <span>{label}</span>
            </Magnetic>
        </Link>
    );
}
