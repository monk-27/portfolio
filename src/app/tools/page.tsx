"use client";
import * as React from "react";
import DynamicNavbar from "@/components/ui/DynamicNavbar";
import Footer from "@/components/ui/Footer";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

export interface IToolsPageProps {}

// Define the data structure for tools
interface Tool {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string;
    subCategory?: string;
}

// Define the data structure for categories
interface Category {
    title: string;
    subCategories: string[];
}

// Define the data for tools and categories
const toolsData = [
    // Languages
    {
        id: 1,
        name: "JavaScript",
        description:
            "Versatile language for front-end and back-end development.",
        icon: "/Icons/tI13.svg",
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 2,
        name: "Python",
        description: "A powerful language for scripting and data analysis.",
        icon: "/Icons/tI15.svg",
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 3,
        name: "Java",
        description:
            "A robust language for enterprise and Android development.",
        icon: "/Icons/tI16.svg",
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 4,
        name: "PHP",
        description: "A popular language for server-side web development.",
        icon: "/Icons/tI17.svg",
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 5,
        name: "Kotlin",
        description: "A modern language for Android development.",
        icon: "/Icons/tI18.svg",
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 6,
        name: "TypeScript",
        description: "JavaScript with static typing.",
        icon: "/Icons/tI14.svg",
        category: "Programming",
        subCategory: "Languages",
    },

    // Front end
    {
        id: 7,
        name: "Next.js",
        description: "The React Framework for Production.",
        icon: "/Icons/tI7.svg",
        category: "Programming",
        subCategory: "Front end",
    },
    {
        id: 8,
        name: "React.js",
        description: "A JavaScript library for building user interfaces.",
        icon: "/Icons/tI8.svg",
        category: "Programming",
        subCategory: "Front end",
    },
    {
        id: 9,
        name: "TailwindCSS",
        description: "A utility-first CSS framework for rapid UI development.",
        icon: "/Icons/tI20.svg",
        category: "Programming",
        subCategory: "Front end",
    },

    // Back end
    {
        id: 10,
        name: "Node.js",
        description:
            "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        icon: "/Icons/tI9.svg",
        category: "Programming",
        subCategory: "Back end",
    },
    {
        id: 11,
        name: "Express.js",
        description:
            "Fast, unopinionated, minimalist web framework for Node.js.",
        icon: "/Icons/tI10.svg",
        category: "Programming",
        subCategory: "Back end",
    },

    // Databases
    {
        id: 12,
        name: "MySQL",
        description: "Relational database management system.",
        icon: "/Icons/tI12.svg",
        category: "Programming",
        subCategory: "Databases",
    },
    {
        id: 13,
        name: "MongoDB",
        description: "NoSQL database for modern applications.",
        icon: "/Icons/tI11.svg",
        category: "Programming",
        subCategory: "Databases",
    },
    {
        id: 14,
        name: "Redis",
        description:
            "An in-memory data structure store, used as a database, cache, and message broker.",
        icon: "/Icons/tI19.svg",
        category: "Programming",
        subCategory: "Databases",
    },

    // Development Tools
    {
        id: 15,
        name: "Visual Studio Code",
        description:
            "My go-to code editor with tons of extensions and customization.",
        icon: "/Icons/tI4.svg",
        category: "Development",
    },
    {
        id: 16,
        name: "Figma",
        description: "Perfect for UI/UX design and collaboration.",
        icon: "/Icons/sI3.svg",
        category: "Development",
    },
    {
        id: 17,
        name: "GitHub",
        description: "Great version controlling software.",
        icon: "/Icons/tI6.svg",
        category: "Development",
    },

    // Productivity Tools
    {
        id: 18,
        name: "Notion",
        description:
            "All-in-one workspace for notes, tasks, and project management.",
        icon: "/Icons/tI5.svg",
        category: "Productivity",
    },
];

// Define the categories and subcategories dynamically
const categories: Category[] = [
    {
        title: "Development",
        subCategories: [],
    },
    {
        title: "Programming",
        subCategories: ["Languages", "Front end", "Back end", "Databases"],
    },
    {
        title: "Productivity",
        subCategories: [],
    },
];

export default function ToolsPage(props: IToolsPageProps): JSX.Element {
    return (
        <main className="set-wf-full">
            <DynamicNavbar title="Tools I Use" />

            <Hero />

            {/* Tools Grid Section */}
            <div
                id="tools-section"
                className="px-5 py-16 bg-gray-50 flex-col-center w-full gap-10"
            >
                {categories.map((category) => (
                    <ToolsGrid
                        key={category.title}
                        category={category.title}
                        subCategories={category.subCategories}
                        tools={toolsData}
                    />
                ))}
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-gray-300 w-full max-w-7xl mx-auto" />

            <div id="resources-section">
                <ResourcesSection />
            </div>

            <Footer />
        </main>
    );
}

// Hero Section
function Hero(): JSX.Element {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative bg-aqua-green py-20 text-white text-center overflow-hidden">
            <Heading className="text-5xl font-bold mb-4 max-w-xl mx-auto">
                Crafting Digital Experiences with These Tools
            </Heading>
            <p className="text-lg max-w-2xl mx-auto">
                These are the tools I rely on daily to build, design, and manage
                projects. From development to productivity, each tool plays a
                crucial role in my workflow.
            </p>

            {/* SVGs Positioned Half In and Half Out of Screen */}
            <Image
                src="/Icons/tI1.svg"
                alt="Tools Hero Image"
                width={300}
                height={300}
                className="absolute bottom-0 left-[-150px]"
            />
            <Image
                src="/Icons/tI3.svg"
                alt="Tools Hero Image"
                width={300}
                height={300}
                className="absolute bottom-0 right-[-150px]"
            />

            <div className="flex justify-center mt-8 gap-4 relative z-10">
                <button
                    onClick={() => scrollToSection("tools-section")}
                    className="px-6 py-3 bg-white text-aqua-green-dark rounded-lg hover:bg-gray-200 transition duration-300"
                >
                    Explore Tools
                </button>
                <button
                    onClick={() => scrollToSection("resources-section")}
                    className="px-6 py-3 bg-white text-aqua-green-dark rounded-lg hover:bg-gray-200 transition duration-300"
                >
                    Explore Resources
                </button>
            </div>
        </div>
    );
}

export interface IResource {
    title: string;
    description: string;
    link: string;
}

const resourcesData: IResource[] = [
    {
        title: "Next.js Project Starter",
        description:
            "A fully configured Next.js project template with essential dependencies, including TypeScript, TailwindCSS, and ESLint.",
        link: "#",
    },
    {
        title: "React Component Library",
        description:
            "A collection of reusable React components with a focus on accessibility and performance.",
        link: "#",
    },
    {
        title: "Express.js API Template",
        description:
            "A boilerplate for building RESTful APIs with Express.js, including JWT authentication and MongoDB integration.",
        link: "#",
    },
    {
        title: "TypeScript Best Practices",
        description:
            "A comprehensive guide to writing clean and maintainable TypeScript code, including tips and examples.",
        link: "#",
    },
];

function ResourcesSection(): JSX.Element {
    return (
        <div className="px-5 py-16 bg-gray-50 flex-col-center w-full gap-10">
            <Heading className="text-3xl font-semibold mb-8 text-center text-aqua-green">
                Resources
            </Heading>
            <p className="text-lg max-w-2xl mx-auto text-center mb-12">
                Browse through a curated collection of resources to help you get
                started with your projects. From templates to guides, find
                everything you need to kickstart your development journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {resourcesData.map((resource, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg border border-gray-200 set-flex-col justify-between items-start"
                    >
                        <Heading className="text-xl font-semibold mb-4 text-aqua-green-dark">
                            {resource.title}
                        </Heading>
                        <p className="text-gray-700 mb-6">
                            {resource.description}
                        </p>
                        <a
                            href={resource.link}
                            className="text-aqua-green-dark font-medium"
                        >
                            View Resource
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Reusable ToolsGrid Component
interface ToolsGridProps {
    category: string;
    subCategories: string[];
    tools: Tool[];
}

function ToolsGrid({
    category,
    subCategories,
    tools,
}: ToolsGridProps): JSX.Element {
    return (
        <div className="mb-16 w-full max-w-7xl">
            <Heading className="text-3xl font-semibold mb-8 text-center text-aqua-green">
                {category}
            </Heading>

            {subCategories.length > 0 ? (
                subCategories.map((subCategory) => (
                    <div key={subCategory} className="mb-12">
                        <Heading className="text-2xl font-semibold mb-6 text-left text-aqua-green">
                            {subCategory}
                        </Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                            {tools
                                .filter(
                                    (tool) =>
                                        tool.category === category &&
                                        tool.subCategory === subCategory
                                )
                                .map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {tools
                        .filter((tool) => tool.category === category)
                        .map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                </div>
            )}
        </div>
    );
}

// Reusable ToolCard Component
interface ToolCardProps {
    tool: Tool;
}

function ToolCard({ tool }: ToolCardProps): JSX.Element {
    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <Image src={tool.icon} alt={tool.name} width={50} height={50} />
                <Heading className="text-xl font-semibold ml-4">
                    {tool.name}
                </Heading>
            </div>
            <p className="text-gray-700">{tool.description}</p>
        </div>
    );
}
