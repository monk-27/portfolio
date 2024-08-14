import * as React from "react";

export interface IHeadingProps {
    level: number;
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ level, children, className }: IHeadingProps) {
    const defaultClass = "leading-none font-bold text-gray-200 w-fit";
    switch (level) {
        case 1: {
            return (
                <h1 className={`${defaultClass} text-6xl ${className}`}>
                    {children}
                </h1>
            );
        }
        case 2: {
            return (
                <h2 className={`${defaultClass} text-5xl ${className}`}>
                    {children}
                </h2>
            );
        }
        case 3: {
            return (
                <h3 className={`${defaultClass} text-4xl ${className}`}>
                    {children}
                </h3>
            );
        }
        case 4: {
            return (
                <h4 className={`${defaultClass} text-3xl ${className}`}>
                    {children}
                </h4>
            );
        }
        case 5: {
            return (
                <h5 className={`${defaultClass} text-2xl ${className}`}>
                    {children}
                </h5>
            );
        }
        case 6: {
            return (
                <h6 className={`${defaultClass} text-xl ${className}`}>
                    {children}
                </h6>
            );
        }
        default: {
            return (
                <span className={`${defaultClass} ${className}`}>
                    {children}
                </span>
            );
        }
    }
}
