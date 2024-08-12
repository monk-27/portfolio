"use client";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import ActionButton from "@/components/ui/designs/ActionButton";

export interface IPricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
}

export default function PricingCard({
    title,
    description,
    price,
    features,
    cta,
}: IPricingCardProps) {
    const scrollToContactForm = () => {
        const contactFormSection = document.getElementById("services-contact-form");
        if (contactFormSection) {
            contactFormSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="bg-white p-6 rounded-br-xl rounded-bl-xl hover:shadow-lg transition-shadow duration-300 border-t-4 border-aqua-green set-flex-col justify-between items-center gap-2 h-full">
            <div className="set-flex-col justify-start items-center gap-5">
                <Heading className="text-2xl font-semibold text-center mb-4">
                    {title}
                </Heading>
                <div className="text-center text-4xl font-bold text-gray-800 mb-4">
                    {price}
                </div>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    {description}
                </p>
                <ul className="text-gray-700 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2 flex items-center">
                            <span className="mr-2 text-aqua-green">✔</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <span onClick={scrollToContactForm}>
                <ActionButton
                    text={cta}
                    className=""
                    bgColor="bg-aqua-green"
                    textColor="text-white"
                    hoverBgColor="hover:bg-aqua-green-dark"
                    size="sm"
                />
            </span>
        </div>
    );
}
