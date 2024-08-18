import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Armaan Jaj | Developer Portfolio",
        short_name: "Armaan Jaj",
        description:
            "Explore the developer portfolio of Armaan Jaj, a full-stack developer focused on crafting high-performance, aesthetically pleasing web applications. Dive into projects showcasing expertise in both front-end and back-end development with cutting-edge technologies.",
        start_url: "/?source=pwa",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#333333",
        lang: "en-US",
        orientation: "portrait",
        screenshots: [
            {
                src: "/website-gallery/home.png",
                sizes: "1200x630",
                type: "image/png",
            },
            {
                src: "/website-gallery/about.png",
                sizes: "1200x630",
                type: "image/png",
            },
            {
                src: "/website-gallery/contact.png",
                sizes: "1200x630",
                type: "image/png",
            },
        ],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    };
}
