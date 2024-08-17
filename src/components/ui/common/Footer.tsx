import Link from "next/link";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import { NavLinksData, SocialMediaLinks } from "@/utils/assets";
import Magnetic from "../designs/Magnetic";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <div className="bg-inherit pb-5 w-full">
            <div className="bg-primary p-5 rounded-3xl text-white">
                <div className="flex-col-between-start lg:flex-row gap-8 lg:gap-4">
                    <PersonalInfo />
                    <QuickLinks />
                    <SubscribeForm />
                </div>
                <LegalStuff />
            </div>
        </div>
    );
}

function PersonalInfo() {
    return (
        <div className="flex-col-between-start h-full">
            <div>
                <Heading level={4}>Armaan Jaj</Heading>
                <p className="text-gray-300 max-w-sm mt-2">
                    Full Stack Developer
                </p>
            </div>
            <SocialMedia />
        </div>
    );
}

function SocialMedia() {
    return (
        <div className="mt-6">
            <div className="flex-col-start-start w-full gap-3">
                <p className="text-xs">Follow me</p>
                <div className="flex-row-center-start gap-4 md:gap-6 lg:gap-8 w-full">
                    {SocialMediaLinks.map((item, index) => (
                        <Magnetic>
                            <Link
                                href={item.href}
                                target={item.target}
                                className={item.className}
                                title={item.title}
                                key={index}
                            >
                                <item.icon className="scale-110 hover:text-secondary duration-300" />
                            </Link>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </div>
    );
}

function QuickLinks() {
    return (
        <div className="flex-col-start-start lg:flex-row gap-4 lg:gap-8">
            <div className="flex-col-start-start">
                <h3 className="text-lg font-semibold text-gray-300">
                    Quick Links
                </h3>
                {NavLinksData.map((item, _) => (
                    <Link
                        href={item.link}
                        className="text-gray-400 hover:text-secondary transition duration-300 w-fit"
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
        <div className="flex-col-start-start w-full gap-2 md:w-auto bg-gray-100 p-4 rounded-3xl">
            <Heading level={5} className="text-gray-800">
                Subscribe
            </Heading>
            <p className="text-gray-500 text-sm mb-4">
                Get the latest updates and offers right to your inbox.
            </p>
            <form className="flex items-center" noValidate>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 h-10 border rounded-tl-xl rounded-bl-xl bg-gray-200 text-gray-800 focus:outline-none focus:border focus:border-secondary"
                />
                <button
                    type="submit"
                    className="w-auto bg-secondary text-white px-5 h-10 rounded-tr-xl rounded-br-xl hover:bg-aqua-green-dark transition duration-200"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

function LegalStuff() {
    return (
        <div className="mt-4 lg:mt-6 w-full">
            <div className="text-center lg:text-left text-sm text-gray-300 flex-col-center-center lg:flex-row lg:justify-between">
                <p>
                    &copy; {new Date().getFullYear()} Armaan Jaj. All rights
                    reserved.
                </p>
                <p className="mt-1 lg:mt-0">
                    <Link
                        href="/sitemap"
                        className="hover:text-secondary transition duration-300"
                    >
                        Sitemap
                    </Link>
                </p>
            </div>
        </div>
    );
}
