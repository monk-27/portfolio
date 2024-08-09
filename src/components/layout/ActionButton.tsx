"use client";
import gsap from "gsap";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
    text-transform: uppercase;
    position: relative;
    z-index: 10;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease-out;
    border-radius: 0.5rem;
`;

export interface IActionButtonProps {
    text: string;
    link?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
}

export default function ActionButton({
    text,
    link,
    backgroundColor = "#ffffff",
    textColor = "#2AE2BD",
    borderColor = "#A8F7E4",
    hoverBackgroundColor = "#22B394",
    hoverTextColor = "#FFFFFF",
}: IActionButtonProps) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const beforeElementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const button = buttonRef.current;
        const beforeElement = beforeElementRef.current;

        const handleMouseEnter = () => {
            gsap.to(button, {
                y: 0,
                x: 0,
                scale: 1.1,
                duration: 0.3,
                ease: "power4.inOut",
                backgroundColor: hoverBackgroundColor,
                borderColor: "transparent",
                color: hoverTextColor,
            });

            gsap.to(beforeElement, {
                y: 0,
                x: 0,
                scale: 1.3,
                duration: 0.3,
                ease: "power4.inOut",
                borderColor: borderColor
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                y: 0,
                x: 0,
                scale: 1,
                duration: 0.3,
                ease: "power4.inOut",
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                color: textColor,
            });

            gsap.to(beforeElement, {
                y: 0,
                x: 0,
                scale: 1,
                duration: 0.3,
                ease: "power4.inOut",
            });
        };

        button?.addEventListener("mouseenter", handleMouseEnter);
        button?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button?.removeEventListener("mouseenter", handleMouseEnter);
            button?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [
        backgroundColor,
        hoverBackgroundColor,
        hoverTextColor,
        textColor,
        borderColor,
    ]);

    return (
        <div className="relative inline-block">
            {link ? (
                <Link href={link} className="no-underline">
                    <Button
                        ref={buttonRef}
                        style={{
                            backgroundColor: backgroundColor,
                            color: textColor,
                            border: `2px solid ${borderColor}`,
                        }}
                    >
                        {text}
                    </Button>
                </Link>
            ) : (
                <Button
                    ref={buttonRef}
                    style={{
                        backgroundColor: backgroundColor,
                        color: textColor,
                        border: `2px solid ${borderColor}`,
                    }}
                >
                    {text}
                </Button>
            )}
            <div
                ref={beforeElementRef}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{
                    border: `2px solid ${borderColor}`,
                }}
            ></div>
        </div>
    );
}
