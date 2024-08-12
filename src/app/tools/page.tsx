import * as React from "react";
import ToolsPageManager from "@/components/pages/pageManager/ToolsPageManager";
import { Metadata } from "next";
import { metadata as TOOLS_MD } from "./page.metadata";

export const metadata: Metadata = TOOLS_MD;

export default function ToolsPage(): JSX.Element {
    return (
        <main className="w-full bg-gray-50">
            <ToolsPageManager />
        </main>
    );
}
