"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";
import ActionButton from "@/components/ui/designs/ActionButton";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import GameCard from "../cards/GameCard";
import FloatingParticles from "@/components/ui/common/FloatingParticles";

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
    const [xpCount, setXpCount] = useState(0);

    useEffect(() => {
        // Initialize floating particles
        FloatingParticles.init();

        // Game card animation
        gsap.fromTo(
            ".game-card",
            {
                scale: 0.75,
                boxShadow: "0px 41px 71px -14px rgba(0,0,0,0.1)",
                rotationY: 90,
                rotationX: 135,
                rotationZ: 45,
            },
            {
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                duration: 2,
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.1)",
                ease: "power4.inOut",
            }
        );

        // Text animation for individual lines
        gsap.fromTo(
            ".hero-heading span, .hero-paragraph, .hero-buttons",
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 1,
                ease: "power3.inOut",
                stagger: 0.1,
            }
        );
    }, []);

    useEffect(() => {
        // XP count increase animation
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

        // XP bar animation
        gsap.to(".game-card .xp-bar", {
            width: "85%",
            duration: 2,
            delay: 1,
            ease: "power2.out",
        });
    }, []);

    return (
        <section className="hero-section relative w-full py-10 md:py-20 px-5 bg-white text-left md:text-center overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center gap-8 relative">
                <HeroTextSection />
                <GameCard xpCount={xpCount} setXpCount={setXpCount} />
            </div>
        </section>
    );
}

function HeroTextSection() {
    return (
        <div className="flex-1 order-2 md:order-1 text-left text-container">
            <Heading className="hero-heading text-5xl md:text-3xl lg:text-6xl font-bold leading-tight md:leading-none text-color-dark">
                Hi, I'm Armaan <br />
                <span className="text-aqua-green block md:inline">
                    Full Stack Developer
                </span>
            </Heading>
            <Paragraph className="hero-paragraph text-base md:text-lg lg:text-xl leading-relaxed mt-6 max-w-3xl text-color-light">
                I craft beautiful and functional web applications using the
                latest technologies. Let's work together to bring your ideas to
                life.
            </Paragraph>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 md:gap-6 mt-12 justify-start">
                <ActionButton text="Explore My Portfolio" size="sm" />
                <ActionButton text="Get in Touch" size="sm" />
            </div>
        </div>
    );
}
