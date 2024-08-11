"use client";
import Link from "next/link";
import * as React from "react";

export interface IActionButtonProps {
    text: string;
    link?: string;
    className?: string;
    bgColor?: string; // Custom background color
    textColor?: string; // Custom text color
    hoverBgColor?: string; // Custom background color on hover
    size?: "sm" | "md" | "lg"; // Size variants
}

export default function ActionButton({
    text,
    link,
    className = "",
    bgColor = "bg-aqua-green",
    textColor = "text-white",
    hoverBgColor = "hover:bg-aqua-green-dark",
    size = "md",
}: IActionButtonProps) {
    // Define size classes based on the size prop
    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-lg",
        lg: "py-4 px-8 text-xl",
    };

    return (
        <div className={`relative inline-block ${className}`}>
            {link ? (
                <Link href={link} className="no-underline">
                    <button
                        className={`px-6 py-3 border rounded-lg transition-all duration-300 ease-out cursor-pointer ${bgColor} ${textColor} ${hoverBgColor} ${sizeClasses[size]} active:shadow-none active:scale-95`}
                    >
                        {text}
                    </button>
                </Link>
            ) : (
                <button
                    className={`px-6 py-3 border rounded-lg transition-all duration-300 ease-out cursor-pointer ${bgColor} ${textColor} ${hoverBgColor} ${sizeClasses[size]} active:shadow-none active:scale-95`}
                >
                    {text}
                </button>
            )}
        </div>
    );
}
