import * as React from "react";
import ProfilePicture from "./ProfilePicture";
import Heading from "./Heading";
import Link from "next/link";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { PiQuotesFill } from "react-icons/pi";

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
    return (
        <nav className="set-flex-col justify-start items-center set-wf-full py-4 px-2 bg-white">
            <ProfilePicture />
            <Heading className="text-5xl mb-4">Armaan Jaj</Heading>
            <div className="set-flex-row justify-evenly items-center gap-4 bg-color-dark text-[#e6e6e6] px-3 py-1 rounded-lg text-sm mb-3">
                <span>
                    <HiLocationMarker className="scale-150" />
                </span>
                <span className="text-lg">Calgary, Alberta</span>
            </div>
            <Quote />
            <div className="set-flex-row justify-evenly items-center set-wf-full">
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
        </nav>
    );
}

function Quote() {
    return (
        <div className="flex-row-center gap-2 h-full w-3/5">
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
