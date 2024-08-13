"use client";
import { gsap } from "gsap";

const FloatingParticles = {
    init() {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement("div");
            particle.className = "floating-particle";
            document.querySelector(".hero-section")?.appendChild(particle);

            gsap.set(particle, {
                x: "random(0, 100)vw",
                y: "random(0, 100)vh",
                height: "1rem",
                width: "1rem",
                position: "absolute",
                borderRadius: 100,
                scale: "random(1, 2)",
                opacity: "random(0.6, 1)",
                backgroundColor: "random(['#2AE2BD', '#350078', '#FFFFFF'])",
            });

            gsap.to(particle, {
                x: "random(0, 100)",
                y: "random(0, 100)",
                duration: "random(5, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }
    },
};

export default FloatingParticles;
