"use client";
import Image from 'next/image';
import * as React from 'react';
import Heading from './Heading';
import gsap from 'gsap';

export interface ITestimonialsProps {
}

const testimonials = [
    {
        name: "Sumit Nanda",
        feedback:
            "Working with Armaan was a game-changer for my real estate business. He took my vision and turned it into a sleek, user-friendly website that perfectly represents my brand. The project was completed on time, and the end result exceeded all my expectations. I’ve already seen a boost in client engagement!",
        photo: "/Photos/Services/Testimonials/tSI1.png",
    },
    {
        name: "Vikram Saraon",
        feedback:
            "Armaan was fantastic to work with. He understood the unique needs of my real estate business and crafted a website that not only looks amazing but also functions seamlessly. His attention to detail and dedication to the project really shined through. I couldn’t be happier with the outcome!",
        photo: "/Photos/Services/Testimonials/tSI1.jpg",
    },
    {
        name: "Mohamed EIMenshawy",
        feedback:
            "I am pleased to highly recommend Armaan Jaj, whom I had the privilege of teaching. He consistently demonstrated a deep understanding of the subject matter and displayed strong dedication and work ethic. His exceptional leadership skills, combined with effective communication abilities, make him an asset in any setting. Armaan has my utmost confidence in his future pursuits.",
        photo: "/Photos/Services/Testimonials/DEFAULT.svg",
    },
];

export default function Testimonials (props: ITestimonialsProps) {
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const nextTestimonial =
                (currentTestimonial + 1) % testimonials.length;

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
    }, [currentTestimonial, testimonials.length]);

    return (
        <div className="max-w-[90vw] mx-auto mt-16">
            <Heading className="text-3xl font-bold text-center mb-10">
                What Clients Say
            </Heading>
            <div className="flex justify-center items-center text-center">
                <div className="testimonial-content set-flex-col items-center w-full">
                    <div className="flex-row-start w-full gap-3">
                        <Image
                            src={testimonials[currentTestimonial].photo}
                            width={200}
                            height={200}
                            alt={testimonials[currentTestimonial].name}
                            className="rounded-full w-24 h-24"
                        />
                        <p className="text-xl font-semibold">
                            {testimonials[currentTestimonial].name}
                        </p>
                    </div>
                    <p className="text-lg text-gray-700 mt-2 italic max-w-[50vw]">
                        "{testimonials[currentTestimonial].feedback}"
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
