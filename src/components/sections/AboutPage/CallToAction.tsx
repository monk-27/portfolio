import ActionButton from "@/components/layout/ActionButton";
import Heading from "@/components/ui/Heading";
import * as React from "react";

export interface ICallToActionProps {
    onGetInTouchClick: () => void;
}

export default function CallToAction({
    onGetInTouchClick,
}: ICallToActionProps) {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-12 text-center">
            <Heading className="text-3xl font-bold mb-6">
                Let's Work Together!
            </Heading>
            <p className="text-lg text-gray-700 mb-8">
                I'm always excited to collaborate on new projects. If you have
                an idea, let's bring it to life together.
            </p>
            <span onClick={onGetInTouchClick}>
                <ActionButton
                    text="Get in Touch"
                    className=""
                    bgColor="bg-aqua-green"
                    textColor="text-white"
                    hoverBgColor="hover:bg-aqua-green-dark"
                    size="sm"
                />
            </span>
        </div>
    );
}
