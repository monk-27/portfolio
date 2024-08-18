"use client";
import Image from "next/image";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import gsap from "gsap";
import { TestimonialsData } from "@/utils/sitedata";
import { PersonSVG } from "@/utils/assets";
import Paragraph from "../designs/Paragraph";

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
        <div className="container mx-auto relative max-w-screen-lg px-6 mt-10 flex-col-center-center gap-10 bg-inherit">
            <Heading level={3} className="text-center mb-10">
                Hear About Me
            </Heading>
            <div
                className="flex-col-center-center text-center min-h-full"
                style={{ height: "400px" }}
            >
                <div className="testimonial-content flex-col-center-center gap-5 w-full h-full">
                    <div className="flex-col-center-center sm:flex-row sm:justify-start w-full gap-5">
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
                        <Paragraph className="text-xl font-semibold mt-2 sm:mt-0 text-white">
                            {TestimonialsData[currentTestimonial].name}
                        </Paragraph>
                    </div>
                    <Paragraph className="text-lg mt-4 sm:mt-2 italic max-w-[90vw] md:max-w-[60vw]">
                        &ldquo;{TestimonialsData[currentTestimonial].feedback}&rdquo;
                    </Paragraph>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-700 mt-5">
                    <div className="progress-bar-fill h-full bg-secondary"></div>
                </div>
            </div>
        </div>
    );
}
