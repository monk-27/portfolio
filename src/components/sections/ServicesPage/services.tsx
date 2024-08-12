import ServiceCard from "@/components/ui/ServiceCard";
import { ServicesData } from "@/utils/assets";
import * as React from "react";

export interface IServicesProps {}

export default function Services(props: IServicesProps) {
    return (
        <div
            id="services"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[90vw] mx-auto mt-12 pt-10"
        >
            {ServicesData.map((service) => (
                <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />
            ))}
        </div>
    );
}
