import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.WEB_DOMAIN; // https://www.domainname.com/

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api"],
            },
        ],
        sitemap: `${baseUrl}sitemap.xml`,
        host: baseUrl,
    };
}
