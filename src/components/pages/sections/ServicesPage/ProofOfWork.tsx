import Heading from "@/components/ui/designs/Heading";
import { CalenderSVG, RibbonSVG } from "@/utils/icons";
import Image from "next/image";
import * as React from "react";

export interface IProofOfWorkProps {}

export default function ProofOfWork(props: IProofOfWorkProps) {
    return (
        <div className="max-w-[90vw] mx-auto mt-16 py-12 px-6 sm:px-10 bg-white rounded-lg">
            <Heading className="text-3xl font-bold text-center mb-10">
                Proof of Commitment
            </Heading>
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-aqua-green p-5 rounded-full">
                        <Image
                            src={CalenderSVG}
                            width={70}
                            height={70}
                            alt="Calendar"
                        />
                    </div>
                    <h4 className="text-xl font-semibold mt-4">
                        Project Delivery
                    </h4>
                    <p className="text-lg text-gray-700 mt-2">
                        Timely project completion
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-aqua-green p-5 rounded-full">
                        <Image
                            src={RibbonSVG}
                            width={70}
                            height={70}
                            alt="Ribbon"
                        />
                    </div>
                    <h4 className="text-xl font-semibold mt-4">
                        Client Satisfaction
                    </h4>
                    <p className="text-lg text-gray-700 mt-2">
                        Striving for excellence
                    </p>
                </div>
            </div>
        </div>
    );
}
