"use client";
import Link from "next/link";
import * as React from "react";

export interface IActionButtonProps {
    text: string;
    link?: string;
    icon?: React.ReactNode;
    className?: string;
    status?: "active" | "passive";
    size?: "sm" | "md" | "lg";
}

export default function ActionButton({
    text,
    link,
    icon,
    status = "passive",
    className,
    size = "sm",
}: IActionButtonProps) {
    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-lg",
        lg: "py-4 px-8 text-xl",
    };

    // Common styling
    const defaultClasses =
        "px-6 py-3 border border-gray-700 rounded-2xl transition-all duration-300 ease-out cursor-pointer active:shadow-none active:scale-95 uppercase";

    // Styling if button is an active style
    const activeStyling = "bg-secondary text-gray-800 hover:bg-gray-300";

    // Styling if button is a passive style
    const passiveStyling =
        "hover:text-gray-800 hover:bg-gray-300 text-gray-200 bg-transparent";

    let stylingType;
    if (status === "active") {
        stylingType = activeStyling;
    } else {
        stylingType = passiveStyling;
    }

    return (
        <div className={`relative inline-block ${className}`}>
            {link ? (
                <Link href={link}>
                    <button
                        className={`${sizeClasses[size]} ${defaultClasses} ${stylingType}`}
                    >
                        {icon ? (
                            <span className="flex-row-center-center gap-2">
                                {icon}
                                {text}
                            </span>
                        ) : (
                            <>{text}</>
                        )}
                    </button>
                </Link>
            ) : (
                <button
                    className={`${sizeClasses[size]} ${defaultClasses} ${stylingType}`}
                >
                    {icon ? (
                        <span className="flex-row-center-center gap-2">
                            <span className="scale-125">{icon}</span>
                            {text}
                        </span>
                    ) : (
                        <>{text}</>
                    )}
                </button>
            )}
        </div>
    );
}
