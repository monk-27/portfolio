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
    className?: string; // Optional className prop
}

export default function ActionButton({
    text,
    link,
    icon,
    status = "passive",
    size = "sm",
    className = "", // Default value as an empty string
}: IActionButtonProps) {
    // Button sizes based on size passed
    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-lg",
        lg: "py-4 px-8 text-xl",
    };

    // Common styling
    const defaultClasses: string =
        "px-6 py-3 border border-gray-700 rounded-2xl transition-all duration-300 ease-out cursor-pointer active:shadow-none active:scale-95 uppercase";

    // Styling if button is an active style
    const activeStyling: string =
        "bg-[#F9AB81] text-[#161E31] hover:bg-[#161E31] hover:text-[#F9AB81]";

    // Styling if button is a passive style
    const passiveStyling: string =
        "bg-[#161E31] text-white hover:bg-[#F9AB81]";

    const stylingType = status === "active" ? activeStyling : passiveStyling;

    return (
        <div className="relative inline-block">
            {link ? (
                <Link href={link.url} target={link.target}>
                    <Magnetic>
                        <button
                            className={`${sizeClasses[size]} ${defaultClasses} ${stylingType} ${className}`}
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
                        className={`${sizeClasses[size]} ${defaultClasses} ${stylingType} ${className}`}
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
