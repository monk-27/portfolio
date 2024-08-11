"use client";
import * as React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Main DynamicNavbar component
export interface IDynamicNavbarProps {
    title: string;
}

export default function DynamicNavbar({ title }: IDynamicNavbarProps) {
    return (
        <header className="py-7 px-6 bg-gray-50">
            <nav className="flex flex-col md:flex-row justify-between items-center set-wf-full gap-10">
                <NavLinks />
                <NavHeader title={title} />
            </nav>
        </header>
    );
}

// Internal component: NavHeader
function NavHeader({ title }: { title: string }) {
    return (
        <Heading className="text-4xl font-bold w-fit mt-4 md:mt-0 md:order-first">
            {title}
        </Heading>
    );
}

// Internal component: NavLinks
function NavLinks() {
    return (
        <div className="flex justify-evenly items-center w-full md:w-1/3 py-4 px-3 rounded-3xl bg-aqua-green text-white text-base md:order-last">
            <NavLinkItem href="/" label="Homepage" />
            <NavLinkItem href="/about" label="About me" />
            <NavLinkItem href="/tools" label="Tools" />
            <NavLinkItem href="/services" label="Services" />
        </div>
    );
}

// Internal component: NavLinkItem
function NavLinkItem({ href, label }: { href: string; label: string }) {
    const currentPath = usePathname();

    return (
        <Link
            href={href}
            className={`transition-colors duration-200 px-2 rounded-xl ${
                currentPath === href
                    ? "bg-white text-black cursor-default"
                    : "hover:text-gray-100"
            }`}
        >
            {label}
        </Link>
    );
}
