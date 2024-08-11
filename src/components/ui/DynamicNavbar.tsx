"use client";
import * as React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiServiceFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { IoIosHome, IoIosPerson } from "react-icons/io";

// Main DynamicNavbar component
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
    return (
        <header className={`py-7 px-6 bg-gray-50 ${className}`}>
            <nav className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
                {linksPosition === "left" && <NavLinks />}
                {title && <NavHeader title={title} position={titlePosition} />}
                {linksPosition === "center" && <NavLinks />}
                {linksPosition === "right" && <NavLinks />}
            </nav>
        </header>
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
            <NavLinkItem href="/" label="Homepage" />
            <NavLinkItem href="/about" label="About" />
            <NavLinkItem icon={<FaTools />} href="/tools" label="Tools" />
            <NavLinkItem
                icon={<RiServiceFill />}
                href="/services"
                label="Services"
            />
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
            className={`transition-colors duration-200 px-2 rounded-lg flex-row-center gap-1 ${
                currentPath === href
                    ? "bg-white text-black cursor-default"
                    : "hover:text-gray-100"
            }`}
        >
            <span className="hidden md:block">{icon}</span>
            {label}
        </Link>
    );
}
