import * as React from "react";
import { gsap } from "gsap";
import ProjectCard from "../layout/ProjectCard";

export interface IProjectsProps {
    className?: string;
    projects: Array<{
        id: number;
        title: string;
        description: string;
        logo: string;
        url: string;
    }>;
}

export default function Projects({ className, projects }: IProjectsProps) {
    const projectsRef = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
        if (projectsRef.current) {
            const cards = projectsRef.current.querySelectorAll(".project-card");

            if (cards.length > 0) {
                cards.forEach((card) => {
                    const tiltX = Math.random() * 10 - 5; // Random tilt between -5 and 5 degrees
                    const tiltY = Math.random() * 10 - 5;

                    // Apply initial tilt
                    gsap.set(card, { rotateX: tiltX, rotateY: tiltY });

                    // Hover animation to reset tilt
                    card.addEventListener("mouseenter", () => {
                        gsap.to(card, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    });

                    // Return to tilt when hover ends
                    card.addEventListener("mouseleave", () => {
                        gsap.to(card, {
                            rotateX: tiltX,
                            rotateY: tiltY,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    });
                });

                // Fade in the project cards when the page changes
                gsap.fromTo(
                    cards,
                    { opacity: 0, x: -100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: "power2.inOut",
                    }
                );
            }
        }
    }, [projects]);

    return (
        <div ref={projectsRef} className={`${className} grid grid-cols-2 gap-4`}>
            {projects.map((item) => (
                <div key={item.id} className="project-card">
                    <ProjectCard
                        title={item.title}
                        description={item.description}
                        logo={item.logo}
                        url={item.url}
                    />
                </div>
            ))}
        </div>
    );
}
