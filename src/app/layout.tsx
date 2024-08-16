import type { Metadata, Viewport } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { metadata as _MD } from "./page.metadata";

export const metadata: Metadata = _MD;

export const viewport: Viewport = {
    themeColor: "#030712",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#030712" showSpinner={false} height={5} />
                {children}
            </body>
        </html>
    );
}

