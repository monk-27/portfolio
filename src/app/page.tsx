import * as React from "react";
import HomePageManager from "@/components/pageManager/HomePageManager";
import { metadata as HOMEPAGE_MD } from "./page.metadata";
import { Metadata } from "next";

export const metadata: Metadata = HOMEPAGE_MD;

export default function Home() {
    return (
        <main className="h-full w-full bg-white">
            <HomePageManager />
        </main>
    );
}
