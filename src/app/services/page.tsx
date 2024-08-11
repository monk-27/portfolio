"use client";
import * as React from "react";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import DynamicNavbar from "@/components/ui/DynamicNavbar";
import PricingCard from "@/components/layout/PricingCard";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/ui/Testimonials";
import * as yup from "yup";
import Form from "@/components/layout/Form";
import ActionButton from "@/components/layout/ActionButton";

export interface IServicesPageProps {}

// Define the FormField type
type FormField = {
    name: string;
    label: string;
    type: "text" | "email" | "textarea" | "select";
    options?: string[];
    placeholder?: string;
    required?: boolean;
};

// Services Data
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

// Pricing Data
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
];

export default function ServicesPage(props: IServicesPageProps) {
    return (
        <main className="set-wf-full">
            <DynamicNavbar title="Services I Offer" />
            <div className="px-5 py-10 bg-gray-50 flex-col-center w-full gap-10">
                <Hero />
                <ServicesGrid />
                <ProofOfWorkStats />
                <PricingPlans />
                <Testimonials />
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}

// Hero Section
function Hero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="set-flex-row justify-between items-center set-wf-full bg-white p-6 sm:p-10 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-start max-w-xl">
                <Heading className="text-4xl sm:text-5xl font-bold leading-tight">
                    I Do the Work So You Can Focus on Yours
                </Heading>
                <p className="text-base sm:text-lg text-gray-700 mt-4">
                    Professional services tailored to meet your business needs,
                    from web and mobile app development to custom software
                    solutions. Let's create something extraordinary together.
                </p>
                <span onClick={scrollToServices} className="mt-8">
                    <ActionButton
                        text="Explore Services"
                        className=""
                        bgColor="bg-aqua-green"
                        textColor="text-white"
                        hoverBgColor="hover:bg-aqua-green-dark"
                        size="sm"
                    />
                </span>
            </div>
            <div className="hidden sm:block">
                <Image
                    src="/Illustrations/services/hero.svg"
                    alt="Our Services"
                    width={350}
                    height={400}
                />
            </div>
        </div>
    );
}

// Services Section
function ServicesGrid() {
    return (
        <div
            id="services"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[90vw] mx-auto mt-12 pt-10"
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

// Work Proof Section
function ProofOfWorkStats() {
    return (
        <div className="max-w-[90vw] mx-auto mt-16 py-12 px-6 sm:px-10 bg-white rounded-lg">
            <Heading className="text-3xl font-bold text-center mb-10">
                Proof of Commitment
            </Heading>
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-aqua-green p-5 rounded-full">
                        <Image
                            src="/illustrations/services/stats/calender.svg"
                            width={70}
                            height={70}
                            alt="Calendar"
                        />
                    </div>
                    <h4 className="text-xl font-semibold mt-4">
                        Project Delivery
                    </h4>
                    <p className="text-lg text-gray-700 mt-2">
                        Timely project completion
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-aqua-green p-5 rounded-full">
                        <Image
                            src="/illustrations/services/stats/ribbon.svg"
                            width={70}
                            height={70}
                            alt="Ribbon"
                        />
                    </div>
                    <h4 className="text-xl font-semibold mt-4">
                        Client Satisfaction
                    </h4>
                    <p className="text-lg text-gray-700 mt-2">
                        Striving for excellence
                    </p>
                </div>
            </div>
        </div>
    );
}

// Pricing Section
function PricingPlans() {
    return (
        <div className="max-w-[90vw] md:max-w-[75vw] mx-auto mt-16">
            <Heading className="text-3xl font-bold mb-12 text-center">
                Pricing Plans
            </Heading>
            <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 md:gap-8 w-full justify-items-center">
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

// Services Inquiry Form
const servicesSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    inquiryType: yup.string().required("Please select an inquiry type"),
    message: yup.string().required("Message is required"),
    plan: yup.string(),
});

const servicesFields: FormField[] = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
        name: "inquiryType",
        label: "Inquiry Type",
        type: "select",
        options: [
            "Web Development",
            "Mobile App Development",
            "UI/UX Design",
            "SEO Optimization",
            "Custom Software Solutions",
        ],
        required: true,
    },
    {
        name: "plan",
        label: "Plan (Optional)",
        type: "select",
        options: ["Sustainable", "Easy"],
    },
    { name: "message", label: "Message", type: "text", required: true },
];

function ContactSection() {
    const handleSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="mt-16 max-w-[90vw] md:max-w-[60vw] mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-center">
                Get in Touch
            </h3>
            <Form
                schema={servicesSchema}
                onSubmit={handleSubmit}
                fields={servicesFields}
            />
        </div>
    );
}
