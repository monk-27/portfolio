import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import { PricingData } from "@/utils/assets";
import ActionButton from "@/components/ui/designs/ActionButton";

interface IPricingProps {}

interface IPricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
}

export default function Pricing(props: IPricingProps) {
    return (
        <>
            <Heading
                level={2}
                className="text-3xl font-bold mb-12 text-center text-gray-200"
            >
                Pricing Plans
            </Heading>
            <div className="w-full flex flex-col md:flex-row gap-5 justify-center items-start lg:max-w-[50vw] mx-auto h-full">
                {PricingData.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        title={plan.title}
                        description={plan.description}
                        price={plan.price}
                        features={plan.features}
                        cta={plan.cta}
                    />
                ))}
            </div>
        </>
    );
}

function PricingCard({
    title,
    description,
    price,
    features,
    cta,
}: IPricingCardProps) {
    const scrollToContactForm = () => {
        const contactFormSection = document.getElementById(
            "services-contact-form"
        );
        if (contactFormSection) {
            contactFormSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-gray-800 p-8 rounded-3xl transition-shadow duration-300 border-t-4 border-secondary flex flex-col justify-between items-center gap-6 h-full w-full">
            <div className="flex flex-col justify-start items-center gap-4">
                <Heading
                    level={3}
                    className="text-2xl font-semibold text-center text-gray-200"
                >
                    {title}
                </Heading>
                <div className="text-center text-4xl font-bold text-gray-100">
                    {price}
                </div>
                <p className="text-center text-gray-400 mb-4">{description}</p>
                <ul className="text-gray-300 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2 flex items-center">
                            <span className="mr-2 text-aqua-green">✔</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <span onClick={scrollToContactForm}>
                <ActionButton text={cta} size="sm" status="passive" />
            </span>
        </div>
    );
}
