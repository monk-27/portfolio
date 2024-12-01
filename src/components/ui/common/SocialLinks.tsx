import { SocialMediaLinksData } from "@/utils/sitedata";
import * as React from "react";
import Magnetic from "../designs/Magnetic";
import Link from "next/link";

export interface ISocialLinksProps {}

export default function SocialLinks(props: ISocialLinksProps) {
    return (
        <>
            {SocialMediaLinksData.map((item, index) => (
                <Magnetic key={index}>
                    <Link
                        href={item.href}
                        target={item.target}
                        className={item.className}
                        title={item.title}
                        key={index}
                    >
                        <item.icon
                            key={index}
                            className="scale-110  bg-white rounded-2xl  transition duration-300"
                        />
                    </Link>
                </Magnetic>
            ))}
        </>
    );
}
