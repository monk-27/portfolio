import Link from "next/link";
import * as React from "react";
import Heading from "@/components/ui/designs/Heading";
import { NavLinksData, SocialMediaLinks } from "@/utils/assets";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <div className="bg-inherit p-5 w-full">
            <div className="bg-color-dark p-5 rounded-lg text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
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
        <div className="flex flex-col justify-between items-start h-full">
            <div>
                <Heading className="text-2xl text-white">Armaan Jaj</Heading>
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
            <div className="flex-col-start w-full gap-3">
                <p className="text-xs">Follow me</p>
                <div className="flex-row-center gap-4 md:gap-6 lg:gap-8 w-full">
                    {SocialMediaLinks.map((item, index) => (
                        <Link
                            href={item.href}
                            target={item.target}
                            className={item.className}
                            title={item.title}
                            key={index}
                        >
                            <item.icon className="scale-110 hover:text-aqua-green transition duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function QuickLinks() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-col-start">
                <h3 className="text-lg font-semibold text-gray-300">
                    Quick Links
                </h3>
                {NavLinksData.map((item, _) => (
                    <Link
                        href={item.link}
                        className="text-gray-400 hover:text-aqua-green transition duration-300 w-fit"
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
        <div className="flex flex-col items-start w-full gap-2 md:w-auto bg-gray-100 p-4 rounded-lg">
            <Heading className="text-xl">Subscribe</Heading>
            <p className="text-gray-500 text-sm mb-4">
                Get the latest updates and offers right to your inbox.
            </p>
            <form className="flex items-center" noValidate>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 h-10 border rounded-tl-md rounded-bl-md bg-gray-200 text-color-light focus:outline-none focus:border focus:border-aqua-green"
                />
                <button
                    type="submit"
                    className="w-auto bg-aqua-green text-white px-5 h-10 rounded-tr-md rounded-br-md hover:bg-aqua-green-dark transition duration-200"
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
            <div className="text-center lg:text-left text-sm text-gray-300 flex flex-col lg:flex-row lg:justify-between items-center">
                <p>
                    &copy; {new Date().getFullYear()} Armaan Jaj. All rights
                    reserved.
                </p>
                <p className="mt-1 lg:mt-0">
                    <Link
                        href="/privacy-policy"
                        className="hover:text-aqua-green transition duration-300"
                    >
                        Privacy Policy
                    </Link>{" "}
                    |{" "}
                    <Link
                        href="/terms"
                        className="hover:text-aqua-green transition duration-300"
                    >
                        Terms of Service
                    </Link>{" "}
                    |{" "}
                    <Link
                        href="/sitemap"
                        className="hover:text-aqua-green transition duration-300"
                    >
                        Sitemap
                    </Link>
                </p>
            </div>
        </div>
    );
}
