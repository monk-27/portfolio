"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DefaultProjectHeader, ProjSVG } from "@/utils/icons";
import Heading from "@/components/ui/designs/Heading";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/designs/Magnetic";

// Main Component: ExpandableCardDemo
export default function ExpandableCardDemo() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
        null
    );

    React.useEffect(() => {
        fetchProjects();
    }, []);

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

    // Toggle Expansion
    const toggleExpansion = (projectId: number) => {
        setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
    };

    return (
        <div className="">
            <div className="px-5 md:px-10 lg:px-14">
                <SectionHeader />
            </div>
            <div className="flex flex-col items-center w-full h-full gap-2 mx-auto px-5">
                <div className="py-2 px-2 md:px-5 w-full flex flex-row justify-between items-center bg-gray-700 rounded-3xl text-center">
                    <span className="w-[70%] md:w-[80%]">Case</span>
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
                            key={`project-${project.id}`}
                            project={project}
                            isExpanded={expandedProjectId === project.id}
                            toggleExpansion={() => toggleExpansion(project.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

// New Component: Section Introduction
function SectionHeader() {
    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="w-full text-center mb-10 px-4 flex-col-start-start"
        >
            <Heading
                level={2}
                className="text-3xl md:text-4xl font-light text-white mb-4"
            >
                Recent work
            </Heading>
        </div>
    );
}

// Component 1: Project Card
function ProjectCard({
    project,
    isExpanded,
    toggleExpansion,
}: {
    project: Project;
    isExpanded: boolean;
    toggleExpansion: () => void;
}) {
    const cardRef = React.useRef<HTMLDivElement | null>(null);

    const handleExpansion = () => {
        toggleExpansion();
        if (!isExpanded && cardRef.current) {
            cardRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.div
            ref={cardRef}
            animate={{ height: isExpanded ? "auto" : "5rem" }}
            initial={{ height: "5rem" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-full overflow-hidden rounded-3xl cursor-pointer bg-gray-800`}
            style={{ overflow: "hidden" }}
        >
            <div
                onClick={handleExpansion}
                className="py-5 px-2 md:px-5 h-20 w-full flex flex-row justify-between items-center group transition-colors duration-200"
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
                            <span className="">
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
                            <span className="whitespace-nowrap">
                                ● Developing
                            </span>
                        </span>
                    )}
                </div>
            </div>
            <div className="p-5 h-full">
                <ExpandedDetails project={project} />
            </div>
        </motion.div>
    );
}

// Component 2: Project Details
function ExpandedDetails({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-5 hover:cursor-default">
            <p className="text-base md:text-2xl lg:text-4xl text-white">
                {project.description}
            </p>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-center gap-5 md:gap-0 w-full">
                <ExpandedProjectLinks links={project.links} />
                {project.completed && (
                    <ExpandedCompletionDetails completed={project.completed} />
                )}
            </div>
            <div
                className={
                    "bg-gray-800 rounded-lg p-4 text-neutral-400 flex flex-col-reverse gap-10 md:flex-row justify-between items-start"
                }
            >
                <div className="flex flex-row justify-start items-start flex-wrap gap-10">
                    <div>
                        <Heading
                            level={5}
                            className="font-light text-white mb-5"
                        >
                            Technologies
                        </Heading>
                        <div className="flex flex-col justify-start items-start gap-2">
                            {project.technologies.map((item, _) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Heading
                            level={5}
                            className="font-light text-white mb-5"
                        >
                            Features
                        </Heading>
                        <div className="flex flex-col justify-start items-start gap-2">
                            {project.features.map((item, _) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Heading
                            level={5}
                            className="font-light text-white mb-5"
                        >
                            Challenges
                        </Heading>
                        <div className="flex flex-col justify-start items-start gap-2">
                            {project.challenges.map((item, _) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed={0.1}>
                    <Image
                        src={
                            project.banner
                                ? project.banner
                                : DefaultProjectHeader
                        }
                        width={1200}
                        height={630}
                        alt="Project Banner"
                        className="rounded-3xl"
                    />
                </div>
            </div>
            {project.testimonials && (
                <ExpandedTestimonialsSection
                    testimonials={project.testimonials}
                />
            )}
        </div>
    );
}

// Component 5: Completion Details
function ExpandedCompletionDetails({
    completed,
}: {
    completed: Project["completed"];
}) {
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

// Component 6: Project Links
function ExpandedProjectLinks({ links }: { links?: Project["links"] }) {
    return (
        <div className="flex items-center gap-5">
            {links?.visit && (
                <Magnetic>
                    <a
                        href={links.visit}
                        target="_blank"
                        className="py-2 px-4 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                        See Website
                    </a>
                </Magnetic>
            )}
            {links?.github && (
                <Magnetic>
                    <a
                        href={links.github}
                        target="_blank"
                        className="py-2 px-4 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                        See code
                    </a>
                </Magnetic>
            )}
        </div>
    );
}

// Component 7: Testimonials Section
function ExpandedTestimonialsSection({
    testimonials,
}: {
    testimonials: Project["testimonials"];
}) {
    return (
        <div className="mt-4 p-4 bg-gray-800 rounded-t-lg rounded-b-2xl">
            <h4 className="font-bold mb-2">Testimonials</h4>
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
                        <p className="font-bold">{testimonial.name}</p>
                    </div>
                    <p className="italic text-gray-400 mt-5">
                        {testimonial.testimonial}
                    </p>
                </div>
            ))}
        </div>
    );
}
