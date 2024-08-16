import { Metadata } from "next";
import ResourcesPageManager from "@/components/pages/pageManager/ResourcesPageManager";
import * as React from "react";
import { metadata as reourcespage_MD } from "./page.metadata";

export const metadata: Metadata = reourcespage_MD;

export interface IResoucesPageProps {}

export default function ResoucesPage(props: IResoucesPageProps) {
    return (
        <div>
            <ResourcesPageManager />
        </div>
    );
}
