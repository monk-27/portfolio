"use client";
import * as React from "react";
import Navbar from "@/components/ui/common/Navbar";
import Footer from "@/components/ui/common/Footer";
import { PrivacyPolicySection } from "@/components/pages/sections/PrivacyPolicyPage";

export interface IPrivacyPolicyPageManagerProps {}

export default function PrivacyPolicyPageManager(
    props: IPrivacyPolicyPageManagerProps
) {
    return (
        <>
            <Navbar title="Privacy Policy" />
            <PrivacyPolicySection />
            <Footer />
        </>
    );
}
