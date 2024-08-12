"use client";
import Image from "next/image";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import gsap from "gsap";
import { TestimonialsData } from "@/utils/assets";
import { PersonSVG } from "@/utils/icons";

export interface ITestimonialsProps {}

export default function Testimonials(props: ITestimonialsProps) {
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const nextTestimonial =
                (currentTestimonial + 1) % TestimonialsData.length;

            gsap.to(".testimonial-content", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setCurrentTestimonial(nextTestimonial);
                    gsap.fromTo(
                        ".testimonial-content",
                        { opacity: 0 },
                        { opacity: 1, duration: 0.5 }
                    );
                    gsap.fromTo(
                        ".progress-bar-fill",
                        { width: "0%" },
                        { width: "100%", duration: 6, ease: "linear" }
                    );
                },
            });
        }, 6000);

        // Initial progress bar animation
        gsap.fromTo(
            ".progress-bar-fill",
            { width: "0%" },
            { width: "100%", duration: 6, ease: "linear" }
        );

        return () => clearInterval(interval);
    }, [currentTestimonial]);

    return (
        <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto mt-16">
            <Heading className="text-3xl font-bold text-center mb-10">
                Hear About Me
            </Heading>
            <div className="flex flex-col items-center text-center">
                <div className="testimonial-content set-flex-col items-center w-full">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-start w-full gap-3">
                        <Image
                            src={
                                TestimonialsData[currentTestimonial].photo
                                    ? TestimonialsData[currentTestimonial].photo
                                    : PersonSVG
                            }
                            width={200}
                            height={200}
                            alt={TestimonialsData[currentTestimonial].name}
                            className="rounded-full w-24 h-24 object-cover"
                        />
                        <p className="text-xl font-semibold mt-2 sm:mt-0">
                            {TestimonialsData[currentTestimonial].name}
                        </p>
                    </div>
                    <p className="text-lg text-gray-700 mt-4 sm:mt-2 italic max-w-[90vw] md:max-w-[60vw]">
                        "{TestimonialsData[currentTestimonial].feedback}"
                    </p>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-300 mt-5">
                <div className="progress-bar-fill h-full bg-aqua-green"></div>
            </div>
        </div>
    );
}
