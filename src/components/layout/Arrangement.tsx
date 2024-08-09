"use client";
import * as React from "react";
import SideBar from "../ui/Sidebar";
import ActionButton from "../layout/ActionButton";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

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
                <div className="section bg-gray-200">
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
        <div className="min-h-[95vh] min-w-[95%] px-5 py-4 rounded-xl">
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
        </div>
    );
}

function GitHub() {
    return (
        <div id="#github">
            <div>GitHub Contribution here</div>
        </div>
    );
}

function Projects() {
    return (
        <div id="#projects">
            <div>Projects Here</div>
        </div>
    );
}

function Articles() {
    return (
        <div id="#articles">
            <div>Articles and Case Studies</div>
        </div>
    );
}
