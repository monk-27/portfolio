import * as React from "react";
import PricingCard from "@/components/layout/PricingCard";
import Heading from "@/components/ui/Heading";
import { PricingData } from "@/utils/assets";

export interface IPricingProps {}

export default function Pricing(props: IPricingProps) {
    return (
        <div className="max-w-[90vw] md:max-w-[75vw] mx-auto mt-16">
            <Heading className="text-3xl font-bold mb-12 text-center">
                Pricing Plans
            </Heading>
            <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 md:gap-8 w-full justify-items-center">
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
        </div>
    );
}
