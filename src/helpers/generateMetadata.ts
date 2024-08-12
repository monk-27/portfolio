import { Metadata } from "next";

type MetadataParams = {
    siteName?: string;
    title: string;
    description: string;
    keywords?: string;
    url: string;
    images: { url: string; width?: number; height?: number; alt: string }[];
    twitterCardType?: "summary" | "summary_large_image" | "player" | "app";
    twitterSite?: string;
    openGraphType?:
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other";
    googleVerification?: string;
    robots?: string;
    applicationName?: string;
    manifest?: string | URL;
};

export const generateMetadata = ({
    siteName,
    title,
    description,
    keywords = "Armaan Jaj, Full Stack Developer, Web Developer, JavaScript, React, Next.js, Node.js",
    url,
    images,
    twitterCardType = "summary_large_image",
    twitterSite = "@armaanjaj",
    openGraphType = "website",
    googleVerification = process.env.G_VERIFICATION,
    robots = "index, follow",
    manifest = "/manifest.json",
    applicationName = "Armaan Jaj | Developer Portfolio",
}: MetadataParams): Metadata => ({
    title,
    description,
    keywords: keywords.split(", "),
    openGraph: {
        title,
        description,
        url,
        type: openGraphType,
        images,
        siteName,
    },
    twitter: {
        card: twitterCardType,
        site: twitterSite,
        title,
        description,
        images: images.map((img) => ({ url: img.url, alt: img.alt })),
    },
    verification: {
        google: googleVerification,
    },
    robots,
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        ],
        apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
        other: [
            { url: "/android-chrome-192x192.png", sizes: "192x192" },
            { url: "/android-chrome-512x512.png", sizes: "512x512" },
        ],
    },
    manifest,
    applicationName,
    alternates: { canonical: url },
});
