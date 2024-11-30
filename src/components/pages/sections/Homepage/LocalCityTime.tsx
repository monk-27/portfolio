"use client";
import Heading from "@/components/ui/designs/Heading";
import React, { useEffect, useState } from "react";

export default function LocalCityTime() {
    const timeZone = "America/Edmonton"; // Calgary's timezone
    const [localTime, setLocalTime] = useState<string | null>(null);
    const [utcOffset, setUtcOffset] = useState<string | null>(null);

    useEffect(() => {
        const timeZone = "Asia/Kolkata"; // IST time zone
    
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone,
                hour12: true, 
            };
    
            const now = new Date();
    
            const formattedTime = new Intl.DateTimeFormat("en-IN", options).format(now);
            setLocalTime(formattedTime);
    
            const timeInIST = new Date(
                now.toLocaleString("en-US", { timeZone })
            );
            const utcOffsetHours = -timeInIST.getTimezoneOffset() / 60;
            const offsetString = `UTC${
                utcOffsetHours >= 0 ? "+" : ""
            }${utcOffsetHours}`;
            setUtcOffset(offsetString);
        };
    
        updateTime(); 
    
        const interval = setInterval(updateTime, 1000);
    
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="flex flex-col justify-center items-start bg-gray-300 opacity-90 backdrop-blur-sm px-8 py-4 rounded-3xl text-gray-800">
            <Heading level={6} className="font-extralight">
                <span className="text-gray-800 uppercase text-sm">Local time</span>
            </Heading>
            <div className="flex flex-row justify-start items-center gap-3">
                <p className="text-xl">{localTime || "Loading..."}</p>
                <p className="text-xs">{utcOffset || ""}</p>
            </div>
        </div>
    );
}
