import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "Armaan Jaj | Developer Portfolio",
    description:
        "Visit the developer portfolio for Armaan Jaj who is a web developer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#000000" showSpinner={false} height={5} />
                {children}
            </body>
        </html>
    );
}

