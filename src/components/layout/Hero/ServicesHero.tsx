"use client";
import * as React from "react";
import ActionButton from "../ActionButton";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import { HappyCarIllustration } from "@/utils/icons";

export interface IServicesHeroProps {}

export default function ServicesHero(props: IServicesHeroProps) {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="set-flex-row justify-between items-center set-wf-full bg-white p-6 sm:p-10 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-start max-w-xl">
                <Heading className="text-4xl sm:text-5xl font-bold leading-tight">
                    I Do the Work So You Can Focus on Yours
                </Heading>
                <p className="text-base sm:text-lg text-gray-700 mt-4">
                    Professional services tailored to meet your business needs,
                    from web and mobile app development to custom software
                    solutions. Let's create something extraordinary together.
                </p>
                <span onClick={scrollToServices} className="mt-8">
                    <ActionButton
                        text="Explore Services"
                        className=""
                        bgColor="bg-aqua-green"
                        textColor="text-white"
                        hoverBgColor="hover:bg-aqua-green-dark"
                        size="sm"
                    />
                </span>
            </div>
            <div className="hidden sm:block">
                <Image
                    src={HappyCarIllustration}
                    alt="Our Services"
                    width={350}
                    height={400}
                />
            </div>
        </div>
    );
}
