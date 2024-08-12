import * as React from "react";
import PrivacyPolicyPageManager from "@/components/pageManager/PrivacyPolicyPageManager";
import { metadata as _MD } from "./page.metadata";
import { Metadata } from "next";

export const metadata: Metadata = _MD;

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-gray-50">
            <PrivacyPolicyPageManager />
        </main>
    );
}
