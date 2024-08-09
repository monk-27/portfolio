import * as React from "react";

export interface IParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({ children, className }: IParagraphProps) {
    return <div className="text-3xl my-8">{children}</div>;
}
