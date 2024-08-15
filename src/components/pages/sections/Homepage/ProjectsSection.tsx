"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CloseIcon, GitHubIcon, LinkIcon, ProjSVG } from "@/utils/icons";
import Heading from "@/components/ui/designs/Heading";
import Link from "next/link";

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

    const closeProject = () => {
        setActiveProject(null);
    };

    return (
        <>
            {activeProject && (
                <ProjectOverlay
                    project={activeProject}
                    setActiveProject={setActiveProject}
                />
            )}
            <div className="flex-col-start-center w-full h-full gap-2 max-w-[60vw] mx-auto">
                {loading ? (
                    <div className="col-span-full flex justify-center items-center h-64">
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
        </>
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
            className="py-5 px-7 w-full flex-row-between-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-3xl cursor-pointer"
        >
            <div className="flex-row-start-center gap-5">
                <span>
                    <Image
                        width={50}
                        height={50}
                        src={project.logo ? project.logo : ProjSVG}
                        alt={project.title}
                        className="object-contain rounded-full object-top"
                    />
                </span>
                <Heading
                    level={5}
                    className="text-3xl font-semibold text-inherit text-center md:text-left"
                >
                    {project.title}
                </Heading>
            </div>
            <span>
                {project.completed ? (
                    <span className="text-xs font-extralight text-green-500 border border-green-500 rounded-full px-2 py-1">
                        Completed
                    </span>
                ) : (
                    <span className="text-xs font-extralight text-orange-500 border border-orange-500 rounded-full px-2 py-1">
                        In Development
                    </span>
                )}
            </span>
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
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
            <div className="fixed inset-0 grid place-items-center items-center z-[100]">
                <button
                    key={`button-${project.title}-${useId()}`}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center rounded-full h-6 w-6"
                    onClick={() => setActiveProject(null)}
                >
                    <CloseIcon />
                </button>
                <div
                    ref={ref}
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col sm:rounded-3xl overflow-hidden"
                >
                    <Image
                        priority
                        width={200}
                        height={200}
                        src={project.banner}
                        alt={project.title}
                        className="w-full rounded-t-lg object-contain object-top shadow"
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
        <div className="w-full -mt-5 max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-700 sm:rounded-3xl overflow-y-scroll">
            <div className="p-4">
                <div className="flex-col-start-start gap-5">
                    <div className="flex-row-between-center w-full">
                        <ProjectLinks links={project.links} />
                        {project.completed && (
                            <CompletionDetails completed={project.completed} />
                        )}
                    </div>
                    <div className="flex-col-start-start gap-5">
                        <DescriptionSection
                            project={project}
                            isTestimonial={project.testimonials ? true : false}
                        />
                    </div>
                </div>
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
            className={`bg-gray-800 rounded-t-lg ${
                isTestimonial ? "rounded-b-lg" : "rounded-b-3xl"
            } p-4 text-neutral-400 space-y-10`}
        >
            <p>{project.description}</p>
            <div className="flex-row-start-center flex-wrap h-full w-full gap-5">
                <IconSection
                    title="Technologies"
                    items={project.technologies}
                />
                <IconSection
                    title="Features"
                    items={project.features}
                />
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
    isTestimonial,
}: {
    title: string;
    items: string[];
    isTestimonial?: boolean | undefined;
}) {
    return (
        <div
            className={`flex-col-start-start bg-gray-600 p-3 rounded-lg ${
                isTestimonial === false ? "rounded-b-2xl" : "rounded-b-lg"
            } h-full w-full`}
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
        <div className="flex-row-center-center gap-5">
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
        <div className="mt-4 p-4 bg-gray-800 rounded-t-lg rounded-b-3xl text-neutral-400">
            <h4 className="text-neutral-700 dark:text-neutral-200 font-bold mb-2">
                Testimonials
            </h4>
            {testimonials!.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="mt-5">
                    <div className="flex-col-start-start gap-2">
                        <div className="flex-row-start-end gap-5">
                            {testimonial.image && (
                                <Image
                                    src={testimonial.image}
                                    width={40}
                                    height={40}
                                    alt={testimonial.name}
                                    className="rounded-full"
                                />
                            )}
                            <p className="font-bold text-neutral-700 dark:text-neutral-200">
                                {testimonial.name}
                            </p>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 italic">
                            {testimonial.testimonial}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
