import * as React from "react";
import SkillsPageManager from "@/components/pages/pageManager/SkillsPageManager";
import { Metadata } from "next";
import { metadata as TOOLS_MD } from "./page.metadata";

export const metadata: Metadata = TOOLS_MD;

export default function ToolsPage(): JSX.Element {
    return (
        <main className="w-full">
            <SkillsPageManager />
        </main>
    );
}
