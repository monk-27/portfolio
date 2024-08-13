"use client";
import * as React from "react";
import Image from "next/image";
import { ElectricitySVG } from "@/utils/icons";

interface GameCardProps {
    xpCount: number;
    setXpCount: React.Dispatch<React.SetStateAction<number>>;
}

const GameCard: React.FC<GameCardProps> = ({ xpCount, setXpCount }) => {
    const [isPoweredUp, setIsPoweredUp] = React.useState(false);

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
        <div className="flex-1 order-1 md:order-2 flex items-center justify-center relative">
            {/* Game Card with Avatar, Username, and Role */}
            <div className="game-card bg-gray-50 text-color-dark rounded-lg p-6 w-fit h-96 relative flex flex-col justify-between">
                <div className="bg-gray-100 rounded-lg w-full px-3 py-2 mb-4">
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
                            <div className="text-sm text-gray-600">
                                Full Stack Developer
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
                            className="xp-bar bg-aqua-green-dark h-full rounded-full"
                            style={{ width: "0%" }}
                        ></div>
                    </div>
                </div>
                <button
                    className={`like-button mt-4 ${
                        isPoweredUp ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
                    } text-white rounded-lg px-4 py-2 flex-row-center gap-2 transition-all duration-300 active:scale-95`}
                    onClick={handleLikeClick}
                    disabled={isPoweredUp}
                >
                    <span>{isPoweredUp ? "Thank you! 💖 See you tomorrow." : "Power up"}</span>
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
};

export default GameCard;
