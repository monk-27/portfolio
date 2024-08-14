"use client";
import * as React from "react";
import Image from "next/image";
import { ArrowInsideCircleIcon, ElectricitySVG } from "@/utils/icons";
import gsap from "gsap";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";

interface CardHandlerProps {}

export default function CardHandler(props: CardHandlerProps) {
    const [currentCard, setCurrentCard] = React.useState(0);
    const cardsRef = React.useRef<HTMLDivElement>(null);

    const handleSwitchCard = (direction: "forward" | "backward") => {
        if (cardsRef.current) {
            const current = cardsRef.current;
            const newCard =
                direction === "forward"
                    ? (currentCard + 1) % 2
                    : (currentCard - 1 + 2) % 2;

            // Animation to fade out the current card
            gsap.to(current, {
                opacity: 0,
                duration: 0.75,
                scale: 0.8,
                ease:"power4.inOut",
                onComplete: () => {
                    setCurrentCard(newCard);
                    // Animation to fade in the new card
                    gsap.fromTo(
                        current,
                        {
                            opacity: 0,
                            scale: 0.8,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.25,
                            ease: "power4.inOut",
                        }
                    );
                },
            });
        }
    };

    return (
        <div className="flex-col-between-center gap-5 h-full">
            <div
                className="flex-row-center-center overflow-hidden h-96"
                ref={cardsRef}
            >
                {currentCard === 0 ? <BusinessCard /> : <GameCard />}
            </div>
            <span className="mb-20">
                {currentCard === 0 ? "Business card" : "Power card"}
            </span>
            <CardSwitcher
                currentCard={currentCard}
                onSwitchCard={handleSwitchCard}
            />
        </div>
    );
}

interface CardSwitcherProps {
    currentCard: number;
    onSwitchCard: (direction: "forward" | "backward") => void;
}

function CardSwitcher({ currentCard, onSwitchCard }: CardSwitcherProps) {
    const onBackwardClick = () => {
        if (currentCard > 0) {
            onSwitchCard("backward");
        }
    };

    const onForwardClick = () => {
        if (currentCard < 1) {
            onSwitchCard("forward");
        }
    };

    return (
        <div className="flex-col-start-center w-full">
            <div className="flex-row-center-center gap-20">
                <span
                    onClick={onBackwardClick}
                    className={`transition-all duration-300 ${
                        currentCard === 0
                            ? "opacity-50"
                            : "hover:cursor-pointer hover:opacity-80 cursor-pointer"
                    }`}
                >
                    <ArrowInsideCircleIcon className="rotate-180 scale-[200%]" />
                </span>
                <div className="w-full h-full flex items-center justify-center gap-2">
                    <span
                        className={`w-2 h-2 rounded-full ${
                            currentCard === 0 ? "bg-secondary" : "bg-gray-200"
                        }`}
                    ></span>
                    <span
                        className={`w-2 h-2 rounded-full ${
                            currentCard === 1 ? "bg-secondary" : "bg-gray-200"
                        }`}
                    ></span>
                </div>

                <span
                    onClick={onForwardClick}
                    className={`transition-all duration-300 ${
                        currentCard === 1
                            ? "opacity-50"
                            : "hover:cursor-pointer hover:opacity-80 cursor-pointer"
                    }`}
                >
                    <ArrowInsideCircleIcon className="scale-[200%]" />
                </span>
            </div>
        </div>
    );
}

interface GameCardProps {}

function GameCard(props: GameCardProps) {
    const [isPoweredUp, setIsPoweredUp] = React.useState(false);
    const [xpCount, setXpCount] = React.useState(0);

    // XP count and bar increase animation
    React.useEffect(() => {
        gsap.to(
            {},
            {
                duration: 2,
                delay: 0.5,
                onUpdate: () => {
                    setXpCount((prev) => Math.min(prev + 20, 2910));
                },
            }
        );

        gsap.to(".game-card .xp-bar", {
            width: "85%",
            duration: 2,
            delay: 1,
            ease: "power2.out",
        });
    }, []);

    const handleLikeClick = () => {
        if (!isPoweredUp) {
            const increase = Math.floor(Math.random() * 10) + 1; // Random increase between 1 and 10
            const newXpCount = xpCount + increase;
            setXpCount(newXpCount);
            console.log(`XP increased by ${increase}. Total XP: ${newXpCount}`);
            setIsPoweredUp(true); // Disable the button and show "Thank you"
        }
    };

    return (
        <div className="flex items-center justify-center relative">
            <div className="game-card bg-gray-700 text-gray-200 rounded-lg p-6 w-fit h-96 relative flex flex-col justify-between">
                <div className="bg-secondary text-primary rounded-lg w-full px-3 py-2 mb-4">
                    <div className="flex flex-row items-center gap-5">
                        <div className="w-24 h-24 mb-2">
                            <Image
                                src="/avatar.png"
                                alt="Armaan's Avatar"
                                width={300}
                                height={200}
                                loading="eager"
                                className="rounded-full object-cover w-24 h-24"
                            />
                        </div>
                        <div className="flex-col-start">
                            <div className="text-xl font-semibold">
                                @armaancodes
                            </div>
                            <div className="text-sm text-left text-gray-600">
                                Full Stack Gamer
                            </div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold">
                        XP: {xpCount} <span className="text-sm">🚀</span>
                    </div>
                </div>
                <div className="text-sm mb-2 flex items-center">
                    Lines of Code: 50K+ <span className="ml-2">💻</span>
                </div>
                <div className="text-sm mb-2 flex items-center">
                    Bugs Squashed: 10K+ <span className="ml-2">🐛</span>
                </div>
                <div className="text-sm mb-4 flex items-center">
                    Coffees: 999+ <span className="ml-2">☕</span>
                </div>
                <div className="flex-col-center relative">
                    <div className="text-xs text-gray-500">Level 42</div>
                    <div className="bg-gray-300 rounded-full overflow-hidden mt-1 h-3 w-full">
                        <div
                            className="xp-bar bg-blue-500 h-full rounded-full"
                            style={{ width: "0%" }}
                        ></div>
                    </div>
                </div>
                <button
                    className={`like-button mt-4 ${
                        isPoweredUp ? "bg-gray-500" : "bg-red-500"
                    } text-white rounded-lg px-4 py-2 flex-row-center-center gap-2 transition-all duration-300 active:scale-95`}
                    onClick={handleLikeClick}
                    disabled={isPoweredUp}
                >
                    <span>
                        {isPoweredUp
                            ? "Thank you! 💖 See you tomorrow."
                            : "Power up"}
                    </span>
                    {!isPoweredUp && (
                        <span>
                            <Image
                                src={ElectricitySVG}
                                width={20}
                                height={20}
                                alt="Power up"
                            />
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}

interface BusinessCard {}

function BusinessCard(props: BusinessCard) {
    return (
        <div className="select-none flex flex-row relative business-card bg-gray-700 text-gray-200 rounded-lg h-48 w-96 overflow-hidden">
            {/* Left Side - Green Background */}
            <div className="bg-secondary shadow-md rounded-br-lg rounded-l-lg h-full w-2/5 flex items-center justify-center p-4">
                <div className="text-center">
                    <span className="text-white text-sm">Pixel Perfect</span>
                </div>
            </div>

            {/* Right Side - Name and Designation */}
            <div className="flex flex-col items-end justify-center w-3/5 h-full p-4">
                <Heading level={0} className="text-xl text-white mb-2">
                    Armaan Jaj
                </Heading>
                <Paragraph className="text-sm text-gray-300 mb-1">
                    Full Stack Developer
                </Paragraph>
                <Paragraph className="text-sm text-gray-300 mb-1">
                    armaancodes
                </Paragraph>
                <Paragraph className="text-sm text-gray-300 mb-1">
                    armaansjaj@gmail.com
                </Paragraph>
                <Paragraph className="text-sm text-gray-300">
                    Calgary, AB
                </Paragraph>
            </div>
        </div>
    );
}
