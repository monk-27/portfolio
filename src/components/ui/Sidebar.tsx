import * as React from "react";
import ProfilePicture from "./ProfilePicture";
import Heading from "./Heading";
import Link from "next/link";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
    return (
        <nav className="set-flex-col justify-start items-center set-wf-full py-4 px-2 bg-white">
            <ProfilePicture />
            <Heading className="text-5xl">Armaan Jaj</Heading>
            <div className="set-flex-row justify-evenly items-center gap-2">
                <span>
                    <HiLocationMarker className="scale-150" />
                </span>
                <span className="text-xl">Calgary</span>
            </div>
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
