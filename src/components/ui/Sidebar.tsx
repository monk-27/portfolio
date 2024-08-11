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

export interface ISideBarProps {}

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
                </div>
                <SocialMedia />
            </nav>
        </aside>
    );
}

function Quote() {
    return (
        <div className="flex-row-center gap-2 h-fit w-3/5">
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
                <div className="flex-row-center gap-10 w-full">
                    <Link
                        href={"https://github.com/armaanjaj"}
                        target="_blank"
                        className=""
                    >
                        <TbBrandGithubFilled className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/connectarmaan/"}
                        target="_blank"
                        className=""
                    >
                        <TfiLinkedin className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                    <Link
                        href={"https://x.com/armaanjaj"}
                        target="_blank"
                        className=""
                    >
                        <RiTwitterXLine className="scale-150 hover:text-aqua-green transition duration-300" />
                    </Link>
                </div>
            </div>
        </>
    );
}
