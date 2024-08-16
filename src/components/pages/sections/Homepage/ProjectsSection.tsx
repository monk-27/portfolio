"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import {
    CloseIcon,
    DefaultProjectHeader,
    GitHubIcon,
    LinkIcon,
    ProjSVG,
} from "@/utils/icons";
import Heading from "@/components/ui/designs/Heading";
import Link from "next/link";

// Main Component: ExpandableCardDemo
export default function ExpandableCardDemo() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const id = useId();

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        handleEscapeKey();
    }, [activeProject]);

    // Fetch Projects
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

    // Handle Escape Key to Close the Overlay
    const handleEscapeKey = () => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                closeProject();
            }
        }

        if (activeProject) {
            document.body.style.overflow = "hidden";
            gsap.to(document.body, { opacity: 1, duration: 0.3 });
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    };

    // Close the Active Project Overlay
    const closeProject = () => {
        setActiveProject(null);
    };

    return (
        <div className="">
            <div className="px-5 md:px-10 lg:px-14">
                <SectionIntroduction />
            </div>
            {activeProject && (
                <ProjectOverlay
                    project={activeProject}
                    setActiveProject={setActiveProject}
                />
            )}
            <div className="flex flex-col items-center w-full h-full gap-2 mx-auto px-5">
                <div className="py-2 px-2 md:px-5 w-full flex flex-row justify-between items-center bg-gray-700 rounded-3xl text-center">
                    <span className="w-[70%] md:w-[80%]">Project</span>
                    <span className="w-[10%] hidden md:block">Delivered</span>
                    <span className="w-[30%] md:w-[10%]">Status</span>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="text-base animate-pulse">
                            Loading...
                        </span>
                    </div>
                ) : (
                    projects.map((project) => (
                        <ProjectCard
                            key={`project-${project.id}-${id}`}
                            project={project}
                            setActiveProject={setActiveProject}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

// New Component: Section Introduction
function SectionIntroduction() {
    return (
        <div className="w-full text-center mb-10 px-4 py-8 bg-gray-800 rounded-3xl shadow-xl flex-col-start-center">
            <Heading
                level={2}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
                Discover My Latest Projects
            </Heading>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                Welcome to the projects section! Here, you'll find an array of
                exciting ventures that reflect my journey as a developer.
                Explore what I've been building and the technologies that power
                my work.
            </p>
        </div>
    );
}

// Component 1: Project Card
function ProjectCard({
    project,
    setActiveProject,
}: {
    project: Project;
    setActiveProject: (project: Project | null) => void;
}) {
    return (
        <div
            onClick={() => setActiveProject(project)}
            className="py-5 px-2 md:px-5 w-full flex flex-row justify-between items-center group bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-3xl cursor-pointer"
        >
            <div className="flex flex-row justify-start items-center gap-2 md:gap-5 w-[70%] md:w-[80%]">
                <Image
                    width={50}
                    height={50}
                    src={project.logo ? project.logo : ProjSVG}
                    alt={project.title}
                    className="object-contain rounded-full w-10 h-10"
                />
                <div className="flex-col-start-start pr-5">
                    <Heading
                        level={5}
                        className="text-base md:text-3xl font-semibold text-inherit w-fit md:text-left group-hover:translate-x-0 md:group-hover:translate-x-5 transition-transform duration-300"
                    >
                        {project.title}
                    </Heading>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">
                        <span className="hidden md:block">
                            {project.description}
                        </span>
                        <span className="block md:hidden">
                            {project.sneakPeakDescription}
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-[10%] hidden md:block text-center">
                {project.completed?.date}
            </div>
            <div className="w-[30%] md:w-[10%] flex-row-center-center">
                {project.completed ? (
                    <span className="text-xs font-extralight whitespace-nowrap text-green-500 border border-green-500 rounded-full px-1 md:px-2 py-1">
                        Completed
                    </span>
                ) : (
                    <span className="animate-pulse text-xs font-extralight whitespace-nowrap text-orange-500 border border-orange-500 rounded-full px-1 py-1">
                        <span className="whitespace-nowrap">● Developing</span>
                    </span>
                )}
            </div>
        </div>
    );
}

// Component 2: Project Overlay
function ProjectOverlay({
    project,
    setActiveProject,
}: {
    project: Project;
    setActiveProject: (project: Project | null) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => setActiveProject(null));

    useEffect(() => {
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
            ref.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "power4.inOut" }
        );
    }, []);

    return (
        <>
            <div
                ref={overlayRef}
                style={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-full w-full z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100]">
                <button
                    key={`button-${project.title}-${useId()}`}
                    className="flex absolute top-5 right-5 lg:hidden items-center justify-center rounded-full h-8 w-8 bg-gray-200"
                    onClick={() => setActiveProject(null)}
                >
                    <CloseIcon className="scale-150 text-primary" />
                </button>
                <div
                    ref={ref}
                    className="relative w-[90%] h-[80%] max-w-lg md:h-fit md:max-h-[90%] flex flex-col rounded-3xl overflow-hidden bg-gray-700"
                >
                    <Image
                        priority
                        width={600}
                        height={400}
                        src={
                            project.banner
                                ? project.banner
                                : DefaultProjectHeader
                        }
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-lg shadow"
                    />
                    <ProjectDetails project={project} />
                </div>
            </div>
        </>
    );
}

// Component 3: Project Details
function ProjectDetails({ project }: { project: Project }) {
    return (
        <div className="w-full max-w-lg h-full md:h-fit flex flex-col bg-gray-700 sm:rounded-3xl overflow-y-auto p-4">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-start gap-5 md:gap-0 w-full">
                    <ProjectLinks links={project.links} />
                    {project.completed && (
                        <CompletionDetails completed={project.completed} />
                    )}
                </div>
                <DescriptionSection
                    project={project}
                    isTestimonial={!!project.testimonials}
                />
                {project.testimonials && (
                    <TestimonialsSection testimonials={project.testimonials} />
                )}
            </div>
        </div>
    );
}

// Component 4: Description Section
function DescriptionSection({
    project,
    isTestimonial,
}: {
    project: Project;
    isTestimonial: boolean;
}) {
    return (
        <div
            className={`bg-gray-800 rounded-lg p-4 text-neutral-400 space-y-6 ${
                isTestimonial ? "rounded-b-lg" : "rounded-b-3xl"
            }`}
        >
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-5">
                <IconSection
                    title="Technologies"
                    items={project.technologies}
                />
                <IconSection title="Features" items={project.features} />
                <IconSection
                    title="Challenges"
                    items={project.challenges}
                    isTestimonial={isTestimonial}
                />
            </div>
        </div>
    );
}

// Component 5: Icon Section
function IconSection({
    title,
    items,
    isTestimonial = true,
}: {
    title: string;
    items: string[];
    isTestimonial?: boolean;
}) {
    return (
        <div
            className={`flex flex-col bg-gray-600 p-3 rounded-lg w-full ${
                isTestimonial ? "" : "rounded-b-2xl"
            }`}
        >
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <ul className="text-sm text-neutral-300 space-y-1">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// Component 6: Completion Details
function CompletionDetails({ completed }: { completed: Project["completed"] }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg text-neutral-400">
            <p>
                <strong className="text-gray-200">Completed:</strong>{" "}
                {completed!.date}
            </p>
            <p>
                <strong className="text-gray-200">Duration:</strong>{" "}
                {completed!.duration}
            </p>
            {completed!.futurePlans && (
                <p>
                    <strong className="text-gray-200">Future Plans:</strong>{" "}
                    {completed!.futurePlans.join(", ")}
                </p>
            )}
        </div>
    );
}

// Component 7: Project Links
function ProjectLinks({ links }: { links?: Project["links"] }) {
    return (
        <div className="flex items-center gap-5">
            {links?.visit && (
                <Link
                    href={links.visit}
                    target="_blank"
                    className="p-4 text-sm rounded-full font-bold bg-primary hover:bg-gray-800 transition-colors duration-300 text-white"
                >
                    <LinkIcon className="scale-150" />
                </Link>
            )}
            {links?.github && (
                <Link
                    href={links.github}
                    target="_blank"
                    className="p-4 text-sm rounded-full font-bold bg-primary hover:bg-gray-800 transition-colors duration-300 text-white"
                >
                    <GitHubIcon className="scale-150" />
                </Link>
            )}
        </div>
    );
}

// Component 8: Testimonials Section
function TestimonialsSection({
    testimonials,
}: {
    testimonials: Project["testimonials"];
}) {
    return (
        <div className="mt-4 p-4 bg-gray-800 rounded-t-lg rounded-b-2xl">
            <h4 className="font-bold mb-2">
                Testimonials
            </h4>
            {testimonials!.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="mt-5">
                    <div className="flex items-center gap-2">
                        {testimonial.image && (
                            <Image
                                src={testimonial.image}
                                width={40}
                                height={40}
                                alt={testimonial.name}
                                className="rounded-full"
                            />
                        )}
                        <p className="font-bold">
                            {testimonial.name}
                        </p>
                    </div>
                    <p className="italic text-gray-400">
                        {testimonial.testimonial}
                    </p>
                </div>
            ))}
        </div>
    );
}
