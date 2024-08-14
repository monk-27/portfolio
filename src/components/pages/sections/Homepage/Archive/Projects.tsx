import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "@/components/layout/cards/ProjectCard";
import Heading from "@/components/ui/designs/Heading";
import { gsap } from "gsap";
import Image from "next/image";
import Paragraph from "@/components/ui/designs/Paragraph";
import { LinkIcon, ProjSVG } from "@/utils/icons";

interface IProjectsProps {
    className?: string;
}

export default function Projects({ className }: IProjectsProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    const closeProject = () => {
        gsap.to(ref.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => setActiveProject(null),
        });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    };

    useEffect(() => {
        if (activeProject) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
            gsap.fromTo(
                ref.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [activeProject]);

    return (
        <div className="container mx-auto relative max-w-screen-lg px-6 mt-10 flex-col-center-center gap-10 bg-inherit">
            <Heading level={3} className="mb-20 text-center w-full">
                Recent Projects
            </Heading>
            <div
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
                                onClick={() => setActiveProject(item)}
                            />
                        </div>
                    ))
                )}
            </div>

            {activeProject && (
                <>
                    <div
                        ref={overlayRef}
                        style={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        onClick={closeProject}
                    />
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <div
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <div className="flex-col-between-start md:flex-row gap-4 h-full">
                                <div className="flex-col-between-start gap-2 flex-1 p-4">
                                    <div className="flex-row-between-center w-full">
                                        <Heading level={3} className="text-xl">
                                            {activeProject.title}
                                        </Heading>
                                        <a
                                            href={activeProject.url}
                                            title="Open link in new tab"
                                            target="_blank"
                                            className="scale-110 hover:bg-white hover:text-primary transition-colors duration-300 rounded-lg p-1"
                                        >
                                            <LinkIcon />
                                        </a>
                                    </div>
                                    <Paragraph className="text-sm md:text-base w-full">
                                        {activeProject.description}
                                    </Paragraph>
                                </div>
                                <div className="flex-shrink-0">
                                    <Image
                                        src={
                                            activeProject.logo
                                                ? activeProject.logo
                                                : ProjSVG
                                        }
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        className="object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
