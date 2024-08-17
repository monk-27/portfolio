"use client";
import * as React from "react";
import gsap from "gsap";

export interface IMagneticProps {
    children: React.ReactElement;
}

export default function Magnetic({ children }: IMagneticProps) {
    const ref = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
        if (!ref.current) return;

        // GSAP QuickTo functions with more elastic and slower animation
        const xTo = gsap.quickTo(ref.current, "x", {
            duration: 1.5,
            ease: "elastic.out(1, 0.75)", // More bounce and softer effect
        });
        const yTo = gsap.quickTo(ref.current, "y", {
            duration: 1.5,
            ease: "elastic.out(1, 0.75)", // Match the same bounce effect
        });

        const onMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();

            // Calculate new positions relative to the element center with a softer multiplier
            const x = (clientX - (left + width / 2)) / 3; // Reducing the multiplier for smoother movement
            const y = (clientY - (top + height / 2)) / 3;

            // Animate to the new positions
            xTo(x);
            yTo(y);
        };

        const onMouseLeave = () => {
            // Reset position with elastic ease on mouse leave
            xTo(0);
            yTo(0);
        };

        const element = ref.current;

        // Add event listeners
        element.addEventListener("mousemove", onMouseMove);
        element.addEventListener("mouseleave", onMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            element.removeEventListener("mousemove", onMouseMove);
            element.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref });
}
