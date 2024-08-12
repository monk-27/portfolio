"use client";
import ActionButton from "@/components/layout/ActionButton";
import ProjectCard from "@/components/layout/ProjectCard";
import DynamicNavbar from "@/components/ui/DynamicNavbar";
import Footer from "@/components/ui/Footer";
import { ActiveRepo, Contributions, Languages } from "@/components/ui/GitHub";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Testimonials from "@/components/ui/Testimonials";
import { ReloadIcon } from "@/utils/icons";
import gsap from "gsap";
import React from "react";

export default function Home() {
    return (
        <main className="h-full w-full bg-white">
            <DynamicNavbar title="Armaan Jaj" className="bg-white" />
            <HeroSection />
            <AnalyticsSection />
            <ProjectsSection />
            <section className="bg-white py-10 max-w-[90vw] lg:max-w-[70vw] mx-auto">
                <Testimonials />
            </section>
            <Footer />
        </main>
    );
}

function HeroSection() {
    return (
        <section className="relative w-full py-20 px-5 bg-white text-center">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Heading className="text-3xl md:text-5xl font-bold leading-tight">
                    Crafting Digital Experiences with{" "}
                    <span className="text-aqua-green whitespace-nowrap">
                        Artistry & Precision
                    </span>
                </Heading>
                <Paragraph className="text-base md:text-lg leading-relaxed mt-4 max-w-3xl">
                    Empowering your business with top-notch web solutions. Let's
                    create something extraordinary together.
                </Paragraph>
                <div className="flex gap-3 md:gap-5 mt-8 justify-center">
                    <ActionButton text="View My Work" size="md" />
                    <ActionButton text="Hire Me" size="md" />
                </div>
            </div>
        </section>
    );
}

function AnalyticsSection() {
    const [reload, setReload] = React.useState(false);

    const handleReload = () => {
        setReload((prevReload) => !prevReload);
    };

    return (
        <section className="py-16 px-5 bg-gray-50">
            <div className="container mx-auto">
                <Heading className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Activity Hub
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-aqua-green bg-opacity-50 p-6 rounded-lg flex flex-col justify-between items-center">
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-xl md:text-2xl font-bold">
                                Active Project
                            </h3>
                            <div
                                className="text-gray-500 cursor-pointer hover:text-aqua-green transition duration-300"
                                onClick={handleReload}
                                title="Reload repo data"
                            >
                                <ReloadIcon size={24} />
                            </div>
                        </div>
                        <div className="mt-5 w-full flex-grow">
                            <ActiveRepo reload={reload} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl md:text-2xl font-bold">
                            GitHub Contributions
                        </h3>
                        <div className="mt-4 flex-grow">
                            <Contributions />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col justify-between">
                        <h3 className="text-xl md:text-2xl font-bold">
                            Top Languages
                        </h3>
                        <div className="mt-4 flex-grow">
                            <Languages />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface Project {
    id: number;
    title: string;
    description: string;
    logo: string;
    url: string;
}

interface IProjectsProps {
    className?: string;
}

function ProjectsSection({ className }: IProjectsProps) {
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
