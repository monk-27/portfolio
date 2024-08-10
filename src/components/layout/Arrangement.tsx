"use client";
import * as React from "react";
import SideBar from "../ui/Sidebar";
import ActionButton from "../layout/ActionButton";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Contributions from "../sections/Contributions";
import Languages from "../sections/Languages";
import StarredRepo from "../sections/StarredRepo";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import Projects from "../sections/Projects";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export interface IArrangementProps {}

export default function Arrangement(props: IArrangementProps) {
    return (
        <div className="grid grid-cols-10 h-full w-full">
            <div className="col-span-7 scroll-container">
                <div className="section bg-white">
                    <HeroSection />
                </div>
                <div className="section bg-gray-100">
                    <GitHubSection />
                </div>
                <div className="section bg-gray-200">
                    <ProjectsSection />
                </div>
                <div className="section bg-gray-300">
                    <ArticlesSection />
                </div>
            </div>
            <div className="col-span-3">
                <SideBar />
            </div>
        </div>
    );
}

function HeroSection() {
    return (
        <div className="relative min-h-[95vh] min-w-[95%] px-5 py-4 rounded-xl">
            <Heading className="text-6xl font-bold leading-tight">
                Crafting Digital Experiences with{" "}
                <span className="text-aqua-green special-text">
                    Artistry & Precision
                </span>
            </Heading>
            <Paragraph className="text-lg leading-relaxed mt-4">
                My journey began with a passion for art, evolving into a
                relentless pursuit of excellence in software development. As a{" "}
                <span className="font-semibold bold-text">
                    Full Stack Web Developer
                </span>
                , I bring creativity and technical prowess to the digital world,
                crafting seamless, visually stunning, and high-performance
                websites.
                <br />
                <br />
                Let's create something extraordinary together.
            </Paragraph>
            <ActionButton text="Read Case studies" />

            <IoArrowDownOutline className="absolute bottom-5 right-5 scale-[250%]" />
        </div>
    );
}

function GitHubSection() {
    const [reload, setReload] = React.useState(false);

    const handleReload = () => {
        setReload((prevReload) => !prevReload);
    };

    return (
        <div
            id="github"
            className="grid grid-cols-2 grid-rows-2 gap-4 md:max-h-screen xl:min-h-screen min-w-[95%] px-5 py-4 rounded-xl"
        >
            <div className="bg-white p-4 rounded-xl set-flex-col">
                <Contributions />
            </div>
            <div className="bg-white p-4 rounded-xl set-flex-col">
                <Languages />
            </div>
            <div className="bg-aqua-green bg-opacity-50 p-4 rounded-xl set-flex-col justify-between h-full">
                <div className="set-flex-row justify-between items-center w-full">
                    <div className="mb-3 md:text-lg xl:text-2xl font-bold">
                        <p>Active Project</p>
                    </div>
                    <div
                        className="scale-150 mb-2 cursor-pointer hover:rotate-[360deg] transition-transform duration-500"
                        onClick={handleReload}
                        title="Reload repo data"
                    >
                        <IoReload />
                    </div>
                </div>
                <StarredRepo className="flex-grow" reload={reload} />
            </div>
            <ScrollDown />
        </div>
    );
}

function ProjectsSection() {
    const [currentPage, setCurrentPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(1);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await fetch("/api/projects");
                if (response.ok) {
                    const data = await response.json();
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

    React.useEffect(() => {
        const updateItemsPerPage = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                const cardMinWidth = 180; // Minimum width of each card
                const cardMinHeight = 100; // Minimum height of each card

                const columns = Math.max(
                    Math.floor(containerWidth / cardMinWidth),
                    1
                );
                const rows = Math.max(
                    Math.floor(containerHeight / cardMinHeight),
                    1
                );

                setItemsPerPage(columns * rows);
            }
        };

        window.addEventListener("resize", updateItemsPerPage);
        updateItemsPerPage(); // Initial call

        return () => {
            window.removeEventListener("resize", updateItemsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const currentProjects = projects.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div
            id="projects"
            className="px-5 py-4 rounded-xl flex flex-col justify-end gap-0 min-w-[95%] h-full overflow-hidden"
            ref={containerRef}
        >
            <div>
                <Heading className="text-5xl mb-2">Projects</Heading>
            </div>

            {loading ? (
                <div className="flex flex-col justify-center items-center h-full">
                    <span className="animate-pulse">Loading Projects...</span>
                </div>
            ) : (
                <>
                    <div className="flex-row-end w-full p-4 h-fit gap-5">
                        <IoIosArrowRoundBack
                            className={`text-2xl cursor-pointer bg-color-dark text-white rounded-lg hover:bg-color-light transition-colors duration-300 ${
                                currentPage === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            onClick={
                                currentPage > 0 ? handlePreviousPage : undefined
                            }
                            title="Previous Page"
                        />
                        <IoIosArrowRoundForward
                            className={`text-2xl cursor-pointer bg-color-dark text-white rounded-lg hover:bg-color-light transition-colors duration-300 ${
                                currentPage === totalPages - 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            onClick={
                                currentPage < totalPages - 1
                                    ? handleNextPage
                                    : undefined
                            }
                            title="Next Page"
                        />
                    </div>
                    <div className="h-3/5 overflow-hidden">
                        <Projects
                            projects={currentProjects}
                            className="grid grid-cols-2 gap-4 items-center"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

function ArticlesSection() {
    return (
        <div id="articles">
            <div>Articles and Case Studies</div>
        </div>
    );
}

function ScrollDown() {
    const handleScrollDown = () => {
        const nextSection = document.getElementById("projects");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="bg-gray-200 p-4 rounded-xl group hover:cursor-none hover:bg-gray-300 transition ease-in-out duration-300 flex items-center justify-center"
            onClick={handleScrollDown}
        >
            <IoArrowDownOutline className="scale-[500%] text-gray-100 group-hover:text-color-light" />
        </div>
    );
}
