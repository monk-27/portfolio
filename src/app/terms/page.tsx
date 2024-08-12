import TermsPageManager from "@/components/pageManager/TermsPageManager";
import * as React from "react";
import { metadata as _MD } from "./page.metadata";
import { Metadata } from "next";

export const metadata: Metadata = _MD;

export default function TermsPage() {
    return (
        <main className="bg-gray-50">
            <TermsPageManager />
        </main>
    );
}
