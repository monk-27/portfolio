import * as React from "react";
import ServicesPageManager from "@/components/pages/pageManager/ServicesPageManager";
import { metadata as SERVICES_MD } from "./page.metadata";
import { Metadata } from "next";

export const metadata: Metadata = SERVICES_MD;

export interface IServicesPageProps {}

export default function ServicesPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full bg-gray-50">
            <ServicesPageManager />
        </main>
    );
}
