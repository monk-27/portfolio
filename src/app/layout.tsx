import type { Metadata, Viewport } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { generateMetadata } from "@/helpers/generateMetadata";

const metadataParams = {
    title: "Armaan Jaj | Developer Portfolio",
    description:
        "Explore the portfolio of Armaan Jaj, a full-stack web developer with a passion for crafting high-performance, visually stunning, and user-centric web solutions. Discover innovative projects and case studies that blend creativity with technical excellence.",
    keywords:
        "Armaan Jaj, web developer, full stack developer, portfolio, web development, front-end, back-end, JavaScript, React, Next.js, Node.js, software engineering",
    url: "https://www.armaancodes.com",
    images: [
        {
            url: "https://www.armaancodes.com/website-gallery/homepage.png",
            width: 1200,
            height: 630,
            alt: "Armaan Jaj | Developer Portfolio - Home page",
        },
        {
            url: "https://www.armaancodes.com/website-gallery/about.png",
            width: 1200,
            height: 630,
            alt: "Armaan Jaj | Developer Portfolio - About page",
        },
        {
            url: "https://www.armaancodes.com/website-gallery/services.png",
            width: 1200,
            height: 630,
            alt: "Armaan Jaj | Developer Portfolio - Services page",
        },
        {
            url: "https://www.armaancodes.com/website-gallery/tools.png",
            width: 1200,
            height: 630,
            alt: "Armaan Jaj | Developer Portfolio - Tools page",
        },
    ],
};

// Generate the metadata using the reusable function
export const metadata: Metadata = generateMetadata(metadataParams);

export const viewport: Viewport = {
    themeColor: "#333333",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#2AE2BD" showSpinner={false} height={5} />
                {children}
            </body>
        </html>
    );
}

