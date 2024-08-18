import * as React from "react";
import ContactPageManager from "@/components/pages/pageManager/ContactPageManager";
import { metadata as CONTACT_MD } from "./page.metadata";
import { Metadata } from "next";

export const metadata: Metadata = CONTACT_MD;

export interface IServicesPageProps {}

export default function ContactPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full bg-gray-50">
            <ContactPageManager />
        </main>
    );
}
