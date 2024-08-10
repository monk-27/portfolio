"use client";
import * as React from "react";
import SideBar from "../ui/Sidebar";
import ActionButton from "../layout/ActionButton";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Contributions from "../sections/Contributions";
import Languages from "../sections/Languages";
import StarredRepo from "../sections/StarredRepo";
import { IoArrowDownOutline } from "react-icons/io5";

export interface IArrangementProps {}

export default function Arrangement(props: IArrangementProps) {
    return (
        <div className="grid grid-cols-10 h-full w-full">
            <div className="col-span-7 scroll-container">
                <div className="section bg-white">
                    <Hero />
                </div>
                <div className="section bg-gray-100">
                    <GitHub />
                </div>
                <div className="section bg-gray-100">
                    <Projects />
                </div>
                <div className="section bg-gray-100">
                    <Articles />
                </div>
            </div>
            <div className="col-span-3">
                <SideBar />
            </div>
        </div>
    );
}

function Hero() {
    return (
        <div className="relative min-h-[95vh] min-w-[95%] px-5 py-4 rounded-xl">
            <Heading className="text-6xl font-bold leading-tight">
                Crafting Digital Experiences with{" "}
                <span className="text-aqua-green">Artistry & Precision</span>
            </Heading>
            <Paragraph className="text-lg leading-relaxed mt-4">
                My journey began with a passion for art, evolving into a
                relentless pursuit of excellence in software development. As a{" "}
                <span className="font-semibold">Full Stack Web Developer</span>,
                I bring creativity and technical prowess to the digital world,
                crafting seamless, visually stunning, and high-performance
                websites.
                <br />
                <br />
                Let's create something extraordinary together.
            </Paragraph>
            <ActionButton text="Read Case studies" />

            {/* Icon positioned at the bottom right */}
            <IoArrowDownOutline className="absolute bottom-5 right-5 scale-[250%]" />
        </div>
    );
}

function GitHub() {
    return (
        <div
            id="github"
            className="grid grid-cols-2 grid-rows-2 gap-4 md:max-h-screen xl:min-h-screen min-w-[95%] px-5 py-4 rounded-xl"
        >
            <div className="bg-white p-4 rounded-xl">
                <Contributions />
            </div>
            <div className="bg-white p-4 rounded-xl">
                <Languages />
            </div>
            <div className="bg-aqua-green bg-opacity-50 p-4 rounded-xl">
                <StarredRepo />
            </div>
            <div className="bg-gray-100 p-4 rounded-xl"></div>
        </div>
    );
}

function Projects() {
    return (
        <div id="projects">
            <div>Projects Here</div>
        </div>
    );
}

function Articles() {
    return (
        <div id="articles">
            <div>Articles and Case Studies</div>
        </div>
    );
}
