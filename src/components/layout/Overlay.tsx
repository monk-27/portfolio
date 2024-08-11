import * as React from "react";
import { IoClose } from "react-icons/io5";

export interface IOverlayProps {
    children: React.ReactNode;
    onClose: () => void;
    className?: string;
}

export default function Overlay({
    children,
    onClose,
    className = "",
}: IOverlayProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60">
            <div
                className={`relative bg-white rounded-lg shadow-lg p-6 max-w-[80vw] max-h-[90vh] overflow-auto ${className}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <IoClose size={24} />
                </button>
                {children}
            </div>
        </div>
    );
}
