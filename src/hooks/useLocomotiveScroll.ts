"use client";
import { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = (options: any) => {
    const scrollRef = useRef<LocomotiveScroll | null>(null);

    useLayoutEffect(() => {
        const initScroll = async () => {
            // Importing LocomotiveScroll dynamically
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            if (options.el) {
                scrollRef.current = new LocomotiveScroll(options);
            }
        };

        initScroll();

        return () => {
            scrollRef.current?.destroy();
            scrollRef.current = null;
        };
    }, [options.el, options.smooth]);
     // Only re-run the effect if the el or smooth options change

    return scrollRef;
};
