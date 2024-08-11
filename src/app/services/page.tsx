"use client";
import * as React from "react";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import PricingCard from "@/components/layout/PricingCard";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import Footer from "@/components/ui/Footer";

export interface IServicesPageProps {}

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
        description:
            "Put yourself or your business in public. Showcase your offerings and convert your sales. Best for people starting their first internet venture.",
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
        description:
            "A great choice for those looking to expand their online presence with additional customization and advanced SEO features.",
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
    // {
    //     id: 3,
    //     title: "Advance",
    //     description:
    //         "Perfect for established businesses requiring full-scale online solutions, including e-commerce integration and unlimited pages.",
    //     price: "CA $999",
    //     features: [
    //         "Everything in Standard",
    //         "Unlimited Pages",
    //         "E-commerce Integration",
    //         "Custom Animations",
    //         "24/7 Support",
    //     ],
    //     cta: "Go Advance",
    // },
];

export default function ServicesPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full">
            <DynamicNavbar title={"Services I Offer"} />
            <div className="px-5 py-10 bg-gray-50 flex-col-center w-full gap-10">
                <Hero />

                <ServicesGrid />

                <PricingPlans />

                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}

function Hero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="set-flex-row justify-between items-center set-wf-full bg-white p-10 rounded-lg">
            <div className="flex flex-col justify-center items-start max-w-xl">
                <Heading className="text-5xl font-bold leading-tight">
                    I Do the Work So You Can Focus on Yours
                </Heading>
                <p className="text-lg text-gray-700 mt-4">
                    Professional services tailored to meet your business needs,
                    from web and mobile app development to custom software
                    solutions. Let's create something extraordinary together.
                </p>
                <button
                    onClick={scrollToServices}
                    className="mt-8 px-6 py-3 bg-aqua-green text-white rounded-lg hover:bg-aqua-green-dark transition duration-300"
                >
                    Explore Services
                </button>
            </div>
            <div>
                <Image
                    src={"/Illustrations/services/hero.svg"}
                    alt="Our Services"
                    width={400}
                    height={500}
                />
            </div>
        </div>
    );
}

function ServicesGrid() {
    return (
        <div
            id="services"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90vw] mx-auto mt-10 pt-10"
        >
            {servicesData.map((service) => (
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

function PricingPlans() {
    return (
        <div className="max-w-[75vw] mx-auto">
            <Heading className="text-3xl font-bold mt-16 mb-8 text-center">
                Pricing Plans
            </Heading>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-0 w-full justify-items-center">
                {pricingData.map((plan) => (
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

function ContactSection() {
    return (
        <div className="set-flex-col justify-between items-center set-wf-full mt-12">
            <div>
                <Image
                    src={"/Illustrations/services/contact-form.svg"}
                    alt="Contact Us"
                    width={400}
                    height={500}
                />
            </div>
            <div className="max-w-[70vw]">
                <ContactForm />
            </div>
        </div>
    );
}
