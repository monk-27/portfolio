import * as React from "react";
import Image from "next/image";

export interface IServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function ServiceCard({
    title,
    description,
    icon,
}: IServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="flex items-center mb-4">
                <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="mr-4"
                />
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
