"use client";
import * as React from "react";

import ActionButton from "@/components/ui/designs/ActionButton";
import Image from "next/image";
import Heading from "@/components/ui/designs/Heading";
import { HappyCarIllustration } from "@/utils/assets";

export interface IServicesHeroProps { }

export default function ContactHero(props: IServicesHeroProps) {
    
    const scrollToServices = () => {
        const servicesSection = document.getElementById("contact-form-section");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (

        <div className="flex flex-col items-center bg-[#2A133D]py-12 px-6 relative">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#F8B179] mb-6">
                Contact Us
            </h1>


            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 w-full max-w-5xl relative">
                {/* Left Card */}
                <div
                    data-scroll
                    data-scroll-speed={0.1}
                    className="bg-[#031703FF] text-gray-200  sm:m-5 p-6 rounded-lg shadow-md flex flex-col justify-between max-w-sm w-full z-20 relative sm:-mr-32 "
                >
                    <h2 className="text-xl font-semibold mb-4 text-[#F8B179]">
                        Get in Touch
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <p className="text-[#F8B179]">CONTACT ME</p>
                        </div>
                        <p className="ml-6">+91 9731737300</p>

                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <p className="text-[#F8B179]">MAIL ME</p>
                        </div>
                        <p className="ml-6">exquisiteshashi@gmail.com</p>

                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <p className="text-[#F8B179]">REACH ME</p>
                        </div>
                        <p className="ml-6">
                            New Delhi -110008

                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-[#1F0733] p-8 rounded-lg shadow-md flex flex-col items-center justify-center w-full relative sm:w-[65%] sm:-ml-16">
                    <Image
                        src='/contact.gif' 
                        alt="Illustration"
                        width={250}
                        height={250} 
                        className="rounded-md sm:ml-20"
                    />
                    
                </div>
            </div>
        </div>
    );
}
