import Image from "next/image";
import * as React from "react";

export interface IProfilePictureProps {}

export default function ProfilePicture(props: IProfilePictureProps) {
    return (
        <div className="max-h-40 max-w-36 rounded-full border-2">
            <Image
                src={"/Profile Pic.png"}
                width={8189}
                height={5241}
                alt="Armaan Jaj"
                className="object-cover rounded-full w-36 h-36"
            />
        </div>
    );
}
