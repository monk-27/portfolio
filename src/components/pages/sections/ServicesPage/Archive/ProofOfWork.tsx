import Heading from "@/components/ui/designs/Heading";
import { CalenderSVG, RibbonSVG } from "@/utils/icons";
import Image from "next/image";
import * as React from "react";

export interface IProofOfWorkProps {}

export default function ProofOfWork(props: IProofOfWorkProps) {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-12 px-6 sm:px-10 bg-gray-800 rounded-3xl shadow-md">
            <Heading
                level={2}
                className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-200"
            >
                Proof of Commitment
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
                {/* Stat 1 */}
                <StatCard
                    icon={CalenderSVG}
                    title="Project Delivery"
                    description="Timely project completion"
                />

                {/* Stat 2 */}
                <StatCard
                    icon={RibbonSVG}
                    title="Client Satisfaction"
                    description="Striving for excellence"
                />
            </div>
        </div>
    );
}

interface StatCardProps {
    icon: string;
    title: string;
    description: string;
}

function StatCard({ icon, title, description }: StatCardProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-aqua-green p-5 rounded-full">
                <Image src={icon} width={70} height={70} alt={title} />
            </div>
            <h4 className="text-xl font-semibold mt-4 text-gray-200">
                {title}
            </h4>
            <p className="text-lg text-gray-400 mt-2">{description}</p>
        </div>
    );
}
