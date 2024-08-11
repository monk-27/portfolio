import * as React from "react";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import DynamicNavbar from "@/components/layout/DynamicNavbar";

export interface IServicesPageProps {}

// Example services data
const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description:
            "I build responsive and high-performance websites using modern technologies like React, Next.js, and TailwindCSS.",
        icon: "/Icons/sI1.svg",
    },
    {
        id: 2,
        title: "Mobile App Development",
        description:
            "Creating sleek and user-friendly mobile applications for Android platform.",
        icon: "/Icons/sI2.svg",
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "Designing intuitive and aesthetic user interfaces with a focus on user experience.",
        icon: "/Icons/sI3.svg",
    },
    {
        id: 4,
        title: "SEO Optimization",
        description:
            "Improving your website’s visibility on search engines with best SEO practices.",
        icon: "/icons/sI4.svg",
    },
    {
        id: 5,
        title: "Custom Software Solutions",
        description:
            "Providing tailored software solutions to meet your business needs, from concept to deployment.",
        icon: "/Icons/sI5.svg",
    },
];

export default function ServicesPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full">
            <DynamicNavbar title={"Services I Offer"} />
            <div className="px-5 py-10 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90vw] mx-auto">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="transform hover:scale-105 transition-transform duration-300"
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
