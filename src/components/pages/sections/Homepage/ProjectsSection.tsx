"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DefaultProjectHeader, GitHubIcon, NewTabIcon, ProjSVG } from "@/utils/assets";
import Heading from "@/components/ui/designs/Heading";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/designs/Magnetic";
const projectsData = [
    {
        id: 1,
        title: "Bright DiGi Gold Website",
        sneakPeakDescription: "A Digital Gold and Silver website.",
        description:
            "Developed a comprehensive Gold and Silver digital platform enabling seamless transactions, user management, and enhanced functionalities to streamline operations and improve customer experience.",
        technologies: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
        features: [
            "User Authentication",
            "Responsive Design",
            "Financial Transactions",
            "KYC Feature",
            "Physical Coin Delivery",
        ],
        challenges: ["Optimizing database queries", "SEO Optimization"],
        banner: "/project/header/ProjectHeader1.png",
        links: {
            visit: "https://www.brightdigigold.com/",
            github: "",
        },
        completed: {
            date: "November 2022",
            duration: "Currently Working",
            futurePlans: ["Many Exciting Features"],
        },
        web:true,
    },
    {
        id: 2,
        title: "Bright DiGi Gold Application",
        sneakPeakDescription: "A Digital Gold and Silver Application.",
        description:"Developed a comprehensive Gold and Silver mobile application enabling seamless transactions, intuitive user management, and enhanced functionalities to provide a streamlined and engaging user experience.",

        technologies: ["Flutter", "Dart", "Node.js", "MongoDB"],
        features: [
            "User Authentication",
            "Responsive Design",
            "Financial Transactions",
            "KYC Feature",
            "Physical Coin Delivery",
        ],
        challenges: [""],
        banner: "/project/header/ProjectHeader2.jpeg",
        links: {
            visit: "https://play.google.com/store/apps/details?id=com.brightdigigold.customer&hl=en_IN",
            github: "",
        },
        completed: {
            date: "November 2023",
            duration: "Currently Working",
            futurePlans: ["Many Exciting Features"],
        },
        web:false,
    },
    {
        id: 3,
        title: "Bright DiGi Gold Super Admin Panel",
        sneakPeakDescription: "A powerful Super Admin Panel for comprehensive control.",
        description:
            "Developed a robust Super Admin Panel for the Bright DiGi Gold platform, empowering administrators to oversee all aspects of the system, manage users, transactions, and data with precision, and access advanced tools for enhanced control and security.",
        technologies: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
        features: [
            "Complete User Management",
            "Transaction Monitoring",
            "KYC Approval",
            "Dashboard with Analytics",
            "Multi-level Access Control",
            "Responsive Design",
            "Enhanced Security Features",
        ],
        challenges: [
            "Implementing role-based access controls",
            "Optimizing real-time analytics",
            "Ensuring data security and integrity",
        ],
        banner: "/project/header/ProjectHeader3.png",
        links: {
            visit: "",
            github: "",
        },
        completed: {
            date: "November 2023",
            duration: "Inprogress",
            futurePlans: ["AI-driven Insights", "Advanced Reporting Tools"],
        },
        web: true,
    },
    {
        id: 4,
        title: "Testofire Coaching Management System",
        sneakPeakDescription: "A comprehensive platform for managing coaching operations.",
        description:
            "Developed a feature-rich Coaching Management System for Testofire, enabling seamless student management, class scheduling, attendance tracking, and performance analysis to streamline coaching operations and enhance the learning experience.",
        technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
        features: [
            "Student Enrollment and Management",
            "Class Scheduling and Timetable",
            "Attendance Tracking",
            "Performance Analytics and Reporting",
            "Integrated Payment System",
            "Responsive Design for Multi-device Access",
        ],
        challenges: [
            "Real-time class scheduling",
            "Optimizing database queries for performance tracking",
            "Implementing dynamic dashboards for analytics",
        ],
        banner: "/project/header/ProjectHeader4.png",
        links: {
            visit: "https://coaching.testofire.in/",
            github: "",
        },
        completed: {
            date: "July 2024",
            duration: "6 Months",
            futurePlans: [
                "AI-driven Performance Insights",
                "Mobile App Integration",
                "Gamified Learning Features",
            ],
        },
        web: true,
    },
    {
        id: 5,
        title: "Testofire Student App",
        sneakPeakDescription: "A comprehensive mobile app for students to enhance their learning journey.",
        description:
            "Developed a user-friendly mobile application for Testofire, enabling students to access personalized learning resources, track their progress, attend live classes, and interact with educators for a seamless and engaging learning experience.",
        technologies: ["React-Native", "Typescript", "Node.js", "MongoDB"],
        features: [
            "User Authentication",
            "Responsive and Intuitive Design",
            "Access to Study Materials and Assignments",
            "Live Class Integration",
            "Performance Tracking and Analytics",
            "Test Management and Results",

            "In-app Notifications",
        ],
        challenges: [
            "Real-time class streaming integration",
            "Optimizing performance tracking for individual students",
        ],
        banner: "/project/header/ProjectHeader5.jpeg",
        links: {
            visit: "https://testofire.in/index.html",
            github: "",
        },
        completed: {
            date: "November 2023",
            duration: "6 Months",
            futurePlans: [
                "Gamified Learning Modules",
                "AI-powered Performance Suggestions",
                "Offline Access to Study Materials",
            ],
        },
        web: false,
    },

    {
        id: 6,
        title: "Zyrowave UI Template",
        sneakPeakDescription: "A modern UI template built with stunning animations and sleek design.",
        description:
            "Designed and developed Zyrowave, a cutting-edge UI template featuring modern animations using Framer Motion, sleek and responsive layouts, and reusable components. It empowers developers to build visually appealing and highly interactive user interfaces efficiently.",
        technologies: ["React.js", "TypeScript", "Framer Motion", "TailwindCSS"],
        features: [
            "Reusable and Modular UI Components",
            "Advanced Animations with Framer Motion",
            "Responsive and Modern Design",
            "Dark and Light Mode Support",
            "Customizable Themes",
            "Optimized Performance for Web Applications",
        ],
        challenges: [
            "Ensuring smooth and performant animations",
            "Creating highly customizable components",
            "Optimizing responsiveness across devices",
        ],
        banner: "/project/header/ProjectHeader6.png",
        links: {
            visit: "",
            github: "https://github.com/monk-27/Zyrowave",
        },
        completed: {
            date: "October 2023",
            duration: "3 Months",
            futurePlans: [
                "Integration with popular UI libraries",
                "Support for additional animation frameworks",
                "Expansion of component library",
            ],
        },
        web: true,
    }
    
    
    
    
    
];

// Main Component: ExpandableCardDemo
export default function ExpandableCardDemo() {
    const [projects, setProjects] = useState(projectsData); 
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
        null
    );

   const toggleExpansion = (projectId: number) => {
        setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
    };

    return (
        <div className="">
            <div className="px-5 md:px-10 lg:px-14">
                <SectionHeader />
            </div>
            <div className="flex flex-col items-center w-full h-full gap-2 mx-auto px-5">
                <div className="py-2 px-2 md:px-5 w-full flex flex-row justify-between items-center bg-gray-300 text-gray-800 rounded-3xl text-center">
                    <span className="w-[70%] md:w-[80%]">Projects</span>
                    <span className="w-[10%] hidden md:block">Start Date</span>
                    <span className="w-[30%] md:w-[10%]">Status</span>
                </div>
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={`project-${project.id}`}
                            project={project}
                            isExpanded={expandedProjectId === project.id}
                            toggleExpansion={() => toggleExpansion(project.id)}
                        />
                    )
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
                className="text-3xl md:text-4xl font-bold text-[#F8B179] mb-4"
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
            className={`w-full overflow-hidden rounded-3xl cursor-pointer bg-[#1F0733]`}
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
                            className="text-base md:text-3xl font-semibold text-[#F8B179] w-fit md:text-left group-hover:translate-x-0 md:group-hover:translate-x-5 transition-transform duration-500"
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
                <div className="w-[10%] hidden md:block text-center text-white">
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
                                In Development
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
                <ExpandedProjectLinks links={project.links}
                web={project.web} />
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
                        priority
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
function ExpandedProjectLinks({ links,web }: { web?: any
    links?: Project["links"]
 }) {
    return (
        <div className="flex items-center gap-5">
            { links?.visit && (
                <Magnetic>
                    <a
                        href={links.visit}
                        target="_blank"
                        className="py-2 px-4 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 flex-row-center-center gap-2"
                    >
                        <NewTabIcon />
                        <span>{web ? "Visit Website" : "Download the App"}</span>
                    </a>
                </Magnetic>
            )}
            {links?.github && (
                <Magnetic>
                    <a
                        href={links.github}
                        target="_blank"
                        className="py-2 px-4 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 flex-row-center-center gap-2"
                    >
                        <GitHubIcon />
                        <span className="whitespace-nowrap">See code</span>
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
