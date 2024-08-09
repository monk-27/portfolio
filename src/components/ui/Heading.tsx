import * as React from "react";

export interface IHeadingProps {
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ children, className }: IHeadingProps) {
    return (
        <h1 className={`leading-none my-6 ${className}`}>
            {children}
        </h1>
    );
}
