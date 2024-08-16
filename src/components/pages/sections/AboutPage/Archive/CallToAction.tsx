import ActionButton from "@/components/ui/designs/ActionButton";
import Heading from "@/components/ui/designs/Heading";
import * as React from "react";
import { gsap } from "gsap";

export interface ICallToActionProps {}

export default function CallToAction(props: ICallToActionProps) {
    return (
        <div className="relative max-w-7xl mx-auto mt-16 py-16 px-6 sm:px-12 text-center">
            <Heading
                level={2}
                className="text-4xl sm:text-5xl font-bold text-white mb-6 relative mx-auto"
            >
                Let's Work Together!
            </Heading>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 relative z-10">
                I'm always excited to collaborate on new projects. If you have
                an idea, let's bring it to life together.
            </p>
            <div className="relative z-10">
                <ActionButton text="Get in Touch" size="sm" status="active" />
            </div>
        </div>
    );
}
