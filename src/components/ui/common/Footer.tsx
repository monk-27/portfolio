"use client";
import Link from "next/link";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import { NavLinksData } from "@/utils/sitedata";
import SocialLinks from "./SocialLinks";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    const [isSubscriptionOn, setIsSubscriptionOn] = React.useState(false);

    return (
        <div className="bg-inherit w-full">
            <div className="bg-[#1F0733] p-10 lg:p-20 rounded-t-3xl text-white text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <PersonalInfo />
                    <QuickLinks />
                    {isSubscriptionOn && <SubscribeForm />}
                </div>
                {/* <LegalStuff /> */}
            </div>
        </div>
    );
}

function PersonalInfo() {
    return (
        <div className="flex flex-col items-start lg:items-start">
            <Heading level={2} className="text-4xl lg:text-5xl">
                Shashi Bhushan Jha
            </Heading>
            <p className="text-gray-300 max-w-lg mt-4 text-lg lg:text-xl">
                Software Developer
            </p>
            <SocialMedia />
        </div>
    );
}

function SocialMedia() {
    return (
        <div className="mt-8 lg:mt-10">
            <div className="flex flex-col items-start gap-4">
                <p className="text-sm lg:text-lg">Follow me</p>
                <div className="flex gap-6 lg:gap-8">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

function QuickLinks() {
    return (
        <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl lg:text-3xl font-semibold text-gray-300">
                Quick Links
            </h3>
            <div className="flex flex-col items-start gap-2 lg:gap-4">
                {NavLinksData.map((item, _) => (
                    <Link
                        href={item.link}
                        className="text-gray-400 hover:text-secondary transition duration-300 text-lg lg:text-xl"
                        key={item.id}
                        title={item.name}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function SubscribeForm() {
    return (
        <div className="flex flex-col items-start bg-gray-100 p-6 rounded-3xl w-full lg:w-auto">
            <Heading level={4} className="text-gray-800 text-xl lg:text-2xl">
                Subscribe
            </Heading>
            <p className="text-gray-500 text-base lg:text-lg mb-6 lg:mb-8">
                Get the latest updates and offers right to your inbox.
            </p>
            <form className="flex items-center w-full lg:w-auto" noValidate>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 p-3 h-12 border rounded-tl-xl rounded-bl-xl bg-gray-200 text-gray-800 focus:outline-none focus:border focus:border-secondary lg:h-14"
                />
                <button
                    type="submit"
                    className="bg-secondary text-white px-6 h-12 rounded-tr-xl rounded-br-xl hover:bg-aqua-green-dark transition duration-200 lg:h-14 lg:px-8"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

function LegalStuff() {
    return (
        <div className="mt-8 lg:mt-12 w-full">
            <div className="text-left text-base lg:text-xl text-gray-300 flex flex-col lg:flex-row lg:justify-between">
                <p>Edition &copy; {new Date().getFullYear()} Shashi Bhushan Jha.</p>
                <p className="mt-2 lg:mt-0">
                    <Link
                        href="/sitemap"
                        className="hover:text-[##F8B179] transition duration-300"
                    >
                        Sitemap
                    </Link>
                </p>
            </div>
        </div>
    );
}
