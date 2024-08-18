"use client";
import { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = (options: any) => {
    const scrollRef = useRef<LocomotiveScroll | null>(null);

    useLayoutEffect(() => {
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            scrollRef.current = new LocomotiveScroll(options);
        };

        initScroll();

        return () => {
            scrollRef.current?.destroy();
            scrollRef.current = null;
        };
    }, [options]);

    return scrollRef;
};
