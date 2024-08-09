import * as React from "react";

export interface ISocialMediaProps {
    children: React.ReactNode;
}

export default function SocialMedia({ children }: ISocialMediaProps) {
    return <div className="">{children}</div>;
}
