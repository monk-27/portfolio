"use client";
import Heading from "@/components/ui/designs/Heading";
import React, { useEffect, useState } from "react";

export default function LocalCityTime() {
    const timeZone = "America/Edmonton"; // Calgary's timezone
    const [localTime, setLocalTime] = useState<string | null>(null);
    const [utcOffset, setUtcOffset] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                timeZone,
            };
            const now = new Date();

            // Get the local time in Calgary
            const formattedTime = new Intl.DateTimeFormat([], options).format(
                now
            );
            setLocalTime(formattedTime);

            // Calculate the UTC offset in hours
            const timeInCalgary = new Date(
                now.toLocaleString("en-US", { timeZone })
            );
            const utcOffsetHours = -timeInCalgary.getTimezoneOffset() / 60;
            const offsetString = `UTC${
                utcOffsetHours >= 0 ? "+" : ""
            }${utcOffsetHours}`;
            setUtcOffset(offsetString);
        };

        updateTime(); // Update the time immediately

        // Calculate the time until the next full minute
        const now = new Date();
        const timeUntilNextMinute = (60 - now.getSeconds()) * 1000;

        // Set a timeout to sync with the next full minute
        const timeout = setTimeout(() => {
            updateTime();
            const interval = setInterval(updateTime, 60000);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }, timeUntilNextMinute);

        // Clear the timeout if the component unmounts before the next full minute
        return () => clearTimeout(timeout);
    }, [timeZone]);

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
