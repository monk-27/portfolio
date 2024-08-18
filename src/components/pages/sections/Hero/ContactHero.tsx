"use client";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import { HappyCarIllustration } from "@/utils/icons";

export interface IServicesHeroProps {}

export default function ContactHero(props: IServicesHeroProps) {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("contact-form-section");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-gray-800 p-8 sm:p-12">
            <div
                data-scroll
                data-scroll-speed={0.1}
                className="flex flex-col justify-center items-start max-w-xl text-gray-200"
            >
                <Heading
                    level={1}
                    className="text-3xl sm:text-5xl font-bold leading-tight"
                >
                    Empowering Your Business with Tailored Solutions
                </Heading>
                <p className="text-base sm:text-lg mt-4 text-gray-400">
                    Professional services crafted to elevate your business, from
                    web and mobile app development to custom software solutions.
                    Let's build something exceptional together.
                </p>
                <div className="mt-8">
                    <span onClick={scrollToServices}>
                        <ActionButton
                            text="Contact me"
                            size="sm"
                            status="active"
                        />
                    </span>
                </div>
            </div>
            <div className="mt-8 sm:mt-0 sm:ml-10 flex justify-center">
                <Image
                    src={HappyCarIllustration}
                    alt="Our Services"
                    width={250}
                    height={300}
                    priority
                    className="w-full h-auto max-w-[250px] sm:max-w-none"
                />
            </div>
        </div>
    );
}
