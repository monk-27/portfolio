"use client";
import * as React from "react";
import DynamicNavbar from "../ui/DynamicNavbar";
import Footer from "../ui/Footer";
import { PrivacyPolicySection } from "../sections/PrivacyPolicyPage";

export interface IPrivacyPolicyPageManagerProps {}

export default function PrivacyPolicyPageManager(
    props: IPrivacyPolicyPageManagerProps
) {
    return (
        <>
            <DynamicNavbar title="Privacy Policy" />
            <PrivacyPolicySection />
            <Footer />
        </>
    );
}
