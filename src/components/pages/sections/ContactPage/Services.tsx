import Heading from "@/components/ui/designs/Heading";
import { ServicesData } from "@/utils/assets";
import Image from "next/image";
import * as React from "react";

interface IServicesProps {}

interface IServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function Services(props: IServicesProps) {
    return (
        <div className="px-4">
            <div data-scroll data-scroll-speed={0.1}>
                <Heading level={2}>Services I provide</Heading>
            </div>
            <div
                data-scroll
                data-scroll-speed={0.2}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 pt-5"
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
        </div>
    );
}

function ServiceCard({ title, description, icon }: IServiceCardProps) {
    return (
        <div className="bg-gray-800 p-6 rounded-3xl hover:bg-gray-700 transition-colors duration-300 shadow-md flex flex-col items-center text-center">
            <div className="mb-4">
                <Image
                    src={icon}
                    alt={title}
                    width={50}
                    height={50}
                    className="rounded-md"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {title}
            </h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
