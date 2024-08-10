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
import { IoReload } from "react-icons/io5";

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
                <div className="section bg-gray-300">
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
                <span className="text-aqua-green special-text">
                    Artistry & Precision
                </span>
            </Heading>
            <Paragraph className="text-lg leading-relaxed mt-4">
                My journey began with a passion for art, evolving into a
                relentless pursuit of excellence in software development. As a{" "}
                <span className="font-semibold bold-text">
                    Full Stack Web Developer
                </span>
                , I bring creativity and technical prowess to the digital world,
                crafting seamless, visually stunning, and high-performance
                websites.
                <br />
                <br />
                Let's create something extraordinary together.
            </Paragraph>
            <ActionButton text="Read Case studies" />

            <IoArrowDownOutline className="absolute bottom-5 right-5 scale-[250%]" />
        </div>
    );
}

function GitHub() {
    const [reload, setReload] = React.useState(false);

    const handleReload = () => {
        setReload((prevReload) => !prevReload);
    };

    return (
        <div
            id="github"
            className="grid grid-cols-2 grid-rows-2 gap-4 md:max-h-screen xl:min-h-screen min-w-[95%] px-5 py-4 rounded-xl"
        >
            <div className="bg-white p-4 rounded-xl set-flex-col">
                <Contributions />
            </div>
            <div className="bg-white p-4 rounded-xl set-flex-col">
                <Languages />
            </div>
            <div className="bg-aqua-green bg-opacity-50 p-4 rounded-xl set-flex-col justify-between h-full">
                <div className="set-flex-row justify-between items-center w-full">
                    <div className="mb-3 md:text-lg xl:text-2xl font-bold">
                        <p>Active Project</p>
                    </div>
                    <div
                        className="scale-150 mb-2 cursor-pointer hover:rotate-[360deg] transition-transform duration-500"
                        onClick={handleReload}
                        title="Reload repo data"
                    >
                        <IoReload />
                    </div>
                </div>
                <StarredRepo className="flex-grow" reload={reload} />
            </div>
            <ScrollDown />
        </div>
    );
}

function ScrollDown() {
    const handleScrollDown = () => {
        const nextSection = document.getElementById("projects");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="bg-gray-200 p-4 rounded-xl group hover:cursor-none hover:bg-gray-300 transition ease-in-out duration-300 flex items-center justify-center"
            onClick={handleScrollDown}
        >
            <IoArrowDownOutline className="scale-[500%] text-gray-100 group-hover:text-color-light" />
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
