import TrendPageManager from "@/components/pages/pageManager/TrendPageManager";
import * as React from "react";

export interface ITrendPageProps {}

export default function TrendPage(props: ITrendPageProps) {
    return (
        <div>
            <TrendPageManager />
        </div>
    );
}
