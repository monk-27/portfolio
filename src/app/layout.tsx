import type { Metadata, Viewport } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { metadata as _MD } from "./page.metadata";

export const metadata: Metadata = _MD;

export const viewport: Viewport = {
    themeColor: "#F9FAFB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#22B394" showSpinner={false} height={5} />
                {children}
            </body>
        </html>
    );
}

