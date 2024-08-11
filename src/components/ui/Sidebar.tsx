import * as React from "react";
import ProfilePicture from "./ProfilePicture";
import Heading from "./Heading";
import Link from "next/link";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { PiQuotesFill } from "react-icons/pi";
import { IoCodeSlash } from "react-icons/io5";
import { IoIosBriefcase, IoIosPie } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export interface ISideBarProps {}

interface ISidebarButtonsProps {
    icon: React.ReactNode;
    text: string;
    url?: string;
    title: string;
    scrollTarget?: string;
}

export default function SideBar(props: ISideBarProps) {
    return (
        <aside className="set-wf-full py-4 px-2 bg-white">
            <nav className="set-flex-col justify-between items-center h-full">
                <div className="set-flex-col justify-start items-center gap-2">
                    <ProfilePicture />
                    <Heading className="text-4xl mb-1 mt-3">Armaan Jaj</Heading>
                    <div className="text-base mb-3 flex-row-center gap-5 w-3/5">
                        <div className="set-flex-row justify-evenly items-center gap-1">
                            <span>
                                <HiLocationMarker className="scale-110" />
                            </span>
                            <span className="text-md">Calgary</span>
                        </div>
                        <div
                            className="set-flex-row justify-evenly items-center gap-1"
                            title="First line of code"
                        >
                            <span>
                                <IoCodeSlash className="scale-110" />
                            </span>
                            <span className="text-md">2020</span>
                        </div>
                    </div>
                    <Quote />
                    <div className="flex-row-center flex-wrap gap-2 w-4/5">
                        <SidebarButtons
                            icon={<IoIosBriefcase />}
                            text={"Resume"}
                            url={"/Resume.pdf"}
                            title={"View my Resume"}
                        />
                        <SidebarButtons
                            icon={<IoIosPie />}
                            text={"Analytics"}
                            scrollTarget={"github"}
                            title={"Check Analytics"}
                        />
                        <SidebarButtons
                            icon={<FaTools />}
                            text={"Projects"}
                            scrollTarget={"projects"}
                            title={"View projects"}
                        />
                    </div>
                </div>
                <SocialMedia />
            </nav>
        </aside>
    );
}

function Quote() {
    return (
        <div className="flex-row-center gap-2 h-fit w-3/5 mb-5">
            <div className="h-full set-flex-col items-center justify-start">
                <PiQuotesFill className="rotate-[190deg]" />
            </div>
            <p className="italic w-fit">
                I love rounded borders, and coffee, and sleep, and NextJs, and
                my car.
            </p>
            <div className="h-full set-flex-col items-center justify-end">
                <PiQuotesFill className="rotate-[10deg]" />
            </div>
        </div>
    );
}

function SocialMedia() {
    return (
        <>
            <div className="flex-col-center w-full gap-3">
                <p className="text-xs">Follow me</p>
                <div className="flex-row-center gap-8 w-full">
                    <Link
                        href={"https://github.com/armaanjaj"}
                        target="_blank"
                        className=""
                        title="GitHub"
                    >
                        <TbBrandGithubFilled className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/connectarmaan/"}
                        target="_blank"
                        className=""
                        title="LinkedIn"
                    >
                        <TfiLinkedin className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                    <Link
                        href={"https://x.com/armaanjaj"}
                        target="_blank"
                        className=""
                        title="X/Twitter"
                    >
                        <RiTwitterXLine className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                    <Link
                        href={"https://instagram.com/armaan_jaj"}
                        target="_blank"
                        className=""
                        title="Instagram"
                    >
                        <IoLogoInstagram className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                </div>
            </div>
        </>
    );
}

function SidebarButtons({
    icon,
    text,
    url,
    title,
    scrollTarget,
}: ISidebarButtonsProps) {
    const handleScroll = () => {
        if (scrollTarget) {
            const section = document.getElementById(scrollTarget);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <button
            onClick={scrollTarget ? handleScroll : undefined}
            className="bg-color-dark text-[#e6e6e6] rounded-lg px-3 py-2 flex-row-center gap-2 text-sm hover:bg-color-light transition-colors duration-300"
            title={title}
        >
            {icon}
            {text}
        </button>
    );
}
