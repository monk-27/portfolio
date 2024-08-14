import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CaptainAmerica } from "@/utils/icons";

gsap.registerPlugin(ScrollTrigger);

export interface IHorizontalScrollProps {}

export default function HorizontalScroll(props: IHorizontalScrollProps) {
    const racesRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const races = racesRef.current;

        if (!races) return;

        const getScrollAmount = () => {
            const racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        };

        const tween = gsap.to(races, {
            x: getScrollAmount(),
            duration: 3,
            ease: "none",
        });

        const scrollTriggerInstance = ScrollTrigger.create({
            trigger: races.parentNode as Element,
            start: "top 20%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        return () => {
            scrollTriggerInstance.kill();
            tween.kill();
        };
    }, []);

    return (
        <>
            <div className="h-[50vh] bg-transparent"></div>

            <div className="overflow-hidden">
                <div ref={racesRef} className="flex w-fit whitespace-nowrap">
                    <Heading
                        level={4}
                        className="text-[30vw] font-normal px-[0.3em] uppercase"
                    >
                        Oh, this is amazing.
                    </Heading>
                    <Heading
                        level={4}
                        className="text-[30vw] font-normal px-[0.3em] uppercase"
                    >
                        <div className="inline-block">
                            <span className="inline">I can do</span>
                            <span className="inline mx-10 p-5">
                                <Image
                                    src={CaptainAmerica}
                                    width={200}
                                    height={200}
                                    alt="Image"
                                    className="inline rounded-lg select-none"
                                />
                            </span>
                            <span className="inline">this alllllll day.</span>
                        </div>
                    </Heading>
                </div>
            </div>

            <div className="h-[100vh] bg-transparent"></div>
        </>
    );
}
