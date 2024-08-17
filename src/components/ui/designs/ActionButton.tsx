"use client";
import Link from "next/link";
import * as React from "react";
import Magnetic from "./Magnetic";

export interface IActionButtonProps {
    text: string;
    link?: {
        url: string;
        target: "_blank" | "_parent" | "_self" | "_top";
    };
    icon?: React.ReactNode;
    status?: "active" | "passive";
    size?: "sm" | "md" | "lg";
}

export default function ActionButton({
    text,
    link,
    icon,
    status = "passive",
    size = "sm",
}: IActionButtonProps) {
    // Button sizes based on size passed
    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-lg",
        lg: "py-4 px-8 text-xl",
    };

    // Common styling
    const defaultClasses: string | undefined =
        "px-6 py-3 border border-gray-700 rounded-2xl transition-all duration-300 ease-out cursor-pointer active:shadow-none active:scale-95 uppercase";

    // Styling if button is an active style
    const activeStyling: string | undefined =
        "bg-secondary text-gray-800 hover:bg-gray-300";

    // Styling if button is a passive style
    const passiveStyling: string | undefined =
        "hover:text-gray-800 hover:bg-gray-300 text-gray-200 bg-transparent";

    let stylingType;
    // Apply styling based on status type
    if (status === "active") {
        stylingType = activeStyling;
    } else {
        stylingType = passiveStyling;
    }

    return (
        <div className="relative inline-block">
            {link ? (
                <Link href={link.url} target={link.target}>
                    <Magnetic>
                        <button
                            className={`${sizeClasses[size]} ${defaultClasses} ${stylingType}`}
                        >
                            {icon ? (
                                <span className="flex-row-center-center gap-2 flex-nowrap">
                                    {icon}
                                    {text}
                                </span>
                            ) : (
                                <>{text}</>
                            )}
                        </button>
                    </Magnetic>
                </Link>
            ) : (
                <Magnetic>
                    <button
                        className={`${sizeClasses[size]} ${defaultClasses} ${stylingType}`}
                    >
                        {icon ? (
                            <span className="flex-row-center-center gap-2 flex-nowrap">
                                <span className="scale-125">{icon}</span>
                                {text}
                            </span>
                        ) : (
                            <>{text}</>
                        )}
                    </button>
                </Magnetic>
            )}
        </div>
    );
}
