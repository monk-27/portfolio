"use client";
import * as React from "react";
import Heading from "../designs/Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinksData } from "@/utils/assets";

interface INavbarProps {
    title?: string | React.ReactNode;
    className?: string;
    titlePosition?: "left" | "right" | "center";
    linksPosition?: "left" | "right" | "center";
}

export default function Navbar({
    title,
    className = "",
    titlePosition = "left",
    linksPosition = "right",
}: INavbarProps) {
    return (
        <>
            <header className={`py-7 px-6 bg-inherit ${className}`}>
                <nav className="flex-col-between-center md:flex-row w-full gap-10">
                    {linksPosition === "left" && <NavLinks />}
                    {title && (
                        <NavHeader
                            title={title}
                            position={titlePosition}
                            hideOnMobile={true}
                        />
                    )}
                    {linksPosition === "center" && <NavLinks />}
                    {linksPosition === "right" && <NavLinks />}
                </nav>
            </header>
        </>
    );
}

// Internal component: NavHeader
function NavHeader({
    title,
    position,
    hideOnMobile,
}: {
    title: string | React.ReactNode;
    position: "left" | "right" | "center";
    hideOnMobile?: boolean;
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
            {typeof title === "string" ? (
                <Heading level={0} className="text-4xl font-bold text-white">
                    {title}
                </Heading>
            ) : (
                title
            )}
        </div>
    );
}

// Internal component: NavLinks
function NavLinks() {
    return (
        <div className="flex-row-evenly-center gap-2 w-full md:w-auto py-4 px-2 rounded-xl bg-aqua-green text-white text-base">
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
            className={`transition duration-300 px-2 rounded-lg flex-row-center-center md:gap-1 text-secondary ${
                currentPath === href
                    ? "opacity-60 cursor-default"
                    : "hover:opacity-70"
            }`}
        >
            {icon && <span className="hidden md:block">{icon}</span>}
            {label}
        </Link>
    );
}
