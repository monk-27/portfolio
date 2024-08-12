import ProjectCard from "@/components/layout/ProjectCard";
import gsap from "gsap";
import * as React from "react";

interface IProjectsProps {
    className?: string;
}

export default function Projects({ className }: IProjectsProps) {
    const projectsRef = React.useRef<HTMLDivElement | null>(null);
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await fetch("/api/projects");
                if (response.ok) {
                    const data: Project[] = await response.json();
                    setProjects(data);
                } else {
                    console.error("Failed to fetch projects");
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    React.useLayoutEffect(() => {
        if (projectsRef.current) {
            const cards = projectsRef.current.querySelectorAll(".project-card");

            if (cards.length > 0) {
                cards.forEach((card) => {
                    const tiltX = Math.random() * 30 - 10;
                    const tiltY = Math.random() * 30 - 10;

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
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.2,
                        stagger: 0.1,
                        ease: "power2.inOut",
                    }
                );
            }
        }
    }, [projects]);

    return (
        <section className="py-20 px-5 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Recent Projects
                </h2>
                <div
                    ref={projectsRef}
                    className={`${className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-3`}
                >
                    {loading ? (
                        <div className="col-span-full flex justify-center items-center h-64">
                            <span className="text-base animate-pulse">
                                Loading...
                            </span>
                        </div>
                    ) : (
                        projects.map((item) => (
                            <div key={item.id} className="project-card">
                                <ProjectCard
                                    title={item.title}
                                    description={item.description}
                                    logo={item.logo}
                                    url={item.url}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
