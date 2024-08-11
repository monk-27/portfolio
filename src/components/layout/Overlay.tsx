import * as React from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

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
    const overlayRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    // Opening animation
    React.useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 }
        );
        gsap.fromTo(
            contentRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.2, ease: "power3.out" }
        );
        window.addEventListener("scroll", (e)=>{
        })
    }, []);

    // Closing animation
    const handleCloseClick = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power3.in",
            onComplete: onClose,
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
        });
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-80 backdrop-blur"
        >
            <div
                ref={contentRef}
                className={`relative bg-white rounded-lg p-6 max-w-[80vw] max-h-[90vh] overflow-auto ${className}`}
            >
                <button
                    onClick={handleCloseClick}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <IoClose size={24} />
                </button>
                {children}
            </div>
        </div>
    );
}