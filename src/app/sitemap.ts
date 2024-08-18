// sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.WEB_DOMAIN; // https://www.domainname.com/

    const pages = [
        {
            url: `${baseUrl}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}about`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}resources`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}sitemap`,
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
    ];

    const sitemap: MetadataRoute.Sitemap = pages.map((page) => ({
        url: page.url,
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    return sitemap;
}
