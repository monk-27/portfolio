import * as React from "react";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import PricingCard from "@/components/layout/PricingCard";

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

const pricingData = [
    {
        id: 1,
        title: "Sustainable",
        price: "CA $199",
        features: [
            "Responsive Web Design",
            "Basic SEO",
            "5 Pages",
            "Email Support",
        ],
        cta: "Get Sustainable",
    },
    {
        id: 2,
        title: "Easy",
        price: "CA $499",
        features: [
            "Everything in Basic",
            "10 Pages",
            "Advanced SEO",
            "Custom Design",
            "Priority Support",
        ],
        cta: "Choose Easy",
    },
    {
        id: 3,
        title: "Advance",
        price: "CA $999",
        features: [
            "Everything in Standard",
            "Unlimited Pages",
            "E-commerce Integration",
            "Custom Animations",
            "24/7 Support",
        ],
        cta: "Go Advance",
    },
];

export default function ServicesPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full">
            <DynamicNavbar title={"Services I Offer"} />
            <div className="px-5 py-10 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90vw] mx-auto">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

                <div className="max-w-[75vw] mx-auto">
                    <Heading className="text-3xl font-bold mt-16 mb-8 text-center">
                        Pricing Plans
                    </Heading>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {pricingData.map((plan) => (
                            <PricingCard
                                key={plan.id}
                                title={plan.title}
                                price={plan.price}
                                features={plan.features}
                                cta={plan.cta}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
