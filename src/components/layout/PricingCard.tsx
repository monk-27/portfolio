import * as React from "react";
import Heading from "@/components/ui/Heading";

export interface IPricingCardProps {
    title: string;
    price: string;
    features: string[];
    cta: string;
}

export default function PricingCard({
    title,
    price,
    features,
    cta,
}: IPricingCardProps) {
    return (
        <div className="bg-white p-6 rounded-br-xl rounded-bl-xl hover:shadow-lg transition-shadow duration-300 border-t-4 border-aqua-green set-flex-col justify-between items-center gap-2 h-full">
            <div className="set-flex-col justify-start items-center gap-5">
                <Heading className="text-2xl font-semibold text-center mb-4">
                    {title}
                </Heading>
                <div className="text-center text-4xl font-bold text-gray-800 mb-6">
                    {price}
                </div>
                <ul className="text-gray-700 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2 flex items-center">
                            <span className="mr-2 text-aqua-green">✔</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center">
                <button className="bg-aqua-green text-white py-2 px-4 rounded-lg hover:bg-aqua-green-dark transition-colors duration-300">
                    {cta}
                </button>
            </div>
        </div>
    );
}
