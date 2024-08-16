import Footer from "@/components/ui/common/Footer";
import Navbar from "@/components/ui/common/Navbar";
import * as React from "react";

export interface ITrendPageManagerProps {}

export default function TrendPageManager(props: ITrendPageManagerProps) {
    return (
        <>
            <article className="text-gray-200 bg-secondary homepage px-2">
                <header>
                    <Navbar
                        title="Trend"
                        className="bg-inherit text-primary"
                        titleColor="primary"
                    />
                </header>
                <div className="rounded-3xl bg-primary overflow-hidden">
                    Coming soon
                </div>

                <footer className="mt-10">
                    <Footer />
                </footer>
            </article>
        </>
    );
}
