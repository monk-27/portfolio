import { SitemapLinks } from "@/utils/sitedata";
import Link from "next/link";
import * as React from "react";

export interface ISitemapProps {}

export default function Sitemap(props: ISitemapProps) {
    return (
        <div className="py-16 px-6 bg-gray-900 text-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SitemapLinks.map((section, index) => (
                        <SitemapSection
                            key={index}
                            links={section.links}
                            section={section.section}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SitemapSection({
    links,
    section,
}: {
    links: Array<{ href: string; label: string }>;
    section: string;
}) {
    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">
                {section}
            </h3>
            <ul className="space-y-4">
                {links.map((link, index) => (
                    <li key={index} className="border-t border-gray-700 pt-2">
                        <Link
                            href={link.href}
                            className="hover:text-secondary transition duration-200"
                            target="_blank"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
