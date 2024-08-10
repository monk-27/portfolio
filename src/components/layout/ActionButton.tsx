"use client";
import Link from "next/link";
import * as React from "react";

export interface IActionButtonProps {
    text: string;
    link?: string;
}

export default function ActionButton({
    text,
    link,
}: IActionButtonProps) {
    return (
        <div className="relative inline-block">
            {link ? (
                <Link href={link} className="no-underline">
                    <button
                        className={`border rounded-lg py-3 px-6 text-lg font-bold uppercase transition-all duration-300 ease-out cursor-pointer bg-white text-aqua-green border-aqua-green hover:bg-aqua-green hover:text-white special-text`}
                    >
                        {text}
                    </button>
                </Link>
            ) : (
                <button
                    className={`border rounded-lg py-3 px-6 text-lg font-bold uppercase transition-all duration-300 ease-out cursor-pointer bg-white text-aqua-green border-aqua-green hover:bg-aqua-green hover:text-white special-text`}
                >
                    {text}
                </button>
            )}
        </div>
    );
}
