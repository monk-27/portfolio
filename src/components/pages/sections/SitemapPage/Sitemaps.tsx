import { SitemapLinks } from "@/utils/assets";
import Link from "next/link";
import * as React from "react";

export interface ISitemapProps {}

export default function Sitemap(props: ISitemapProps) {
    return (
        <div className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-5xl">
                {SitemapLinks.map((section, index) => (
                    <section key={index} className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SitemapTable
                                links={section.links}
                                section={section.section}
                            />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

function SitemapTable({
    links,
    section,
}: {
    links: Array<{ href: string; label: string }>;
    section: string;
}) {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{section}</h3>
            <table className="w-full text-left">
                <tbody>
                    {links.map((link, index) => (
                        <tr key={index} className="border-t border-gray-200">
                            <td className="py-2">
                                <Link
                                    href={link.href}
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    {link.label}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
