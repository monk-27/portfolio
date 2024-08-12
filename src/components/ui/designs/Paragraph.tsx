import * as React from "react";

export interface IParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({ children, className }: IParagraphProps) {
    return <div className={`${className}`}>{children}</div>;
}
