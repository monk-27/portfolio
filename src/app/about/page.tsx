"use client";
import * as React from "react";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import DynamicNavbar from "@/components/ui/DynamicNavbar";
import Footer from "@/components/ui/Footer";
import { HiLocationMarker } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import Testimonials from "@/components/ui/Testimonials";
import Overlay from "@/components/layout/Overlay";
import Form from "@/components/layout/Form";
import * as yup from "yup";
import ActionButton from "@/components/layout/ActionButton";

export interface IAboutMePageProps {}

export interface IExperienceItem {
    company: string;
    role: string;
    description: string;
    duration: string;
    isCurrent?: boolean;
}

const experiences: IExperienceItem[] = [
    {
        company: "Morning Star Contractors",
        role: "Software Developer",
        description:
            "Led the development of the company's website and internal tool, enhancing the user experience and streamlining operations.",
        duration: "Jan 2024 - Present",
        isCurrent: true,
    },
    {
        company: "Petro Canada",
        role: "Store Supervisor",
        description:
            "Managed daily operations, improved customer service strategies, and optimized inventory processes to ensure a smooth-running store.",
        duration: "Jan 2022 - Dec 2023",
    },
];

export default function AboutMePage(props: IAboutMePageProps) {
    const [isOverlayOpen, setOverlayOpen] = React.useState(false);

    const handleOverlayOpen = () => setOverlayOpen(true);
    const handleOverlayClose = () => setOverlayOpen(false);

    return (
        <main className="bg-gray-50">
            <DynamicNavbar title="Learn about me" />
            <div className="bg-gray-50 text-color-dark py-8 sm:py-16 px-4 sm:px-8">
                <HeroSection onContactClick={handleOverlayOpen} />
                <MyStorySection />
                <SkillsSection />
                <ExperienceSection experiences={experiences} />
                <div className="max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] mx-auto">
                    <Testimonials />
                </div>
                <CallToActionSection onGetInTouchClick={handleOverlayOpen} />
            </div>
            <Footer />

            {/* Conditionally render the Overlay */}
            {isOverlayOpen && (
                <OverlayForm overlayHandler={handleOverlayClose} />
            )}
        </main>
    );
}

// Hero Section
function HeroSection({ onContactClick }: { onContactClick: () => void }) {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
                <Heading className="text-4xl sm:text-5xl font-bold mb-4">
                    Hi, I'm Armaan Jaj
                </Heading>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    A passionate{" "}
                    <span className="bg-color-dark text-white px-1">
                        Full Stack Developer
                    </span>{" "}
                    dedicated to crafting digital experiences that make an
                    impact. With expertise in a range of modern technologies, I
                    bring ideas to life through clean, efficient, and scalable
                    code.
                </p>
                <div className="text-sm sm:text-base flex-row-start gap-5 w-full sm:w-3/5 mb-6">
                    <InfoItem
                        icon={<HiLocationMarker />}
                        text="Calgary"
                        title="I live in"
                    />
                    <InfoItem
                        icon={<IoCodeSlash />}
                        text="2020"
                        title="Coding since"
                    />
                </div>
                <div className="flex gap-4">
                    <span onClick={onContactClick}>
                        <ActionButton
                            text="Contact Me"
                            className=""
                            bgColor="bg-aqua-green"
                            textColor="text-white"
                            hoverBgColor="hover:bg-aqua-green-dark"
                            size="sm"
                        />
                    </span>
                    <ActionButton
                        text="Download Resume"
                        link="/Resume.pdf"
                        className=""
                        bgColor="bg-gray-200"
                        textColor="text-color-dark"
                        hoverBgColor="hover:bg-gray-300"
                        size="sm"
                    />
                </div>
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                className="mt-8 md:mt-0"
            >
                <Image
                    src="/Armaan.jpeg"
                    alt="Armaan Jaj"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

function InfoItem({
    icon,
    text,
    title,
}: {
    icon: React.ReactNode;
    text: string;
    title: string;
}) {
    return (
        <div className="flex items-center gap-2" title={title}>
            {icon}
            <span>{text}</span>
        </div>
    );
}

// Story Section
function MyStorySection() {
    return (
        <div className="py-8 sm:py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* My Story */}
                <div className="text-center mb-8 sm:mb-12">
                    <Heading className="text-3xl sm:text-4xl font-bold mb-4">
                        My Story
                    </Heading>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                        Ever since I gripped my fingers around a pencil, I've
                        been on a never-ending quest to create. From the early
                        days of sketching and getting lost in the world of art,
                        I've evolved (some say like a Pokémon) into a Web/Full
                        Stack Developer. While I no longer wield a pencil as my
                        weapon of choice, my love for design and creativity is
                        stronger than ever. These days, I channel that passion
                        into crafting stunning websites that not only look good
                        but work flawlessly too.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mt-4 sm:mt-6">
                        I’ve got a magical toolkit that includes TailwindCSS,
                        Next.js, React.js, and Node.js—think of me as a digital
                        wizard (minus the robes, unfortunately). I’ve honed my
                        skills to bridge the gap between design and
                        functionality because, let’s face it, a website that’s
                        all looks and no brains isn’t going to impress anyone.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mt-4 sm:mt-6">
                        My journey has taken me through some pretty cool
                        projects like my Portfolio, where I designed and
                        debugged a Next.js app, utilizing the power of
                        TailwindCSS to create a responsive UI. Another highlight
                        was MyInventory, an inventory manager where I waved my
                        wand and reduced response time by 80% by migrating from
                        Java to Node.js. I’m always up for a challenge, driven
                        by curiosity, and ready to collaborate. If you're
                        looking for someone to bring a touch of artistry and
                        technical excellence to your project, look no
                        further—let's create something amazing together!
                    </p>
                </div>

                {/* Interests & Favorites */}
                <div className="w-full bg-gray-100 py-8 sm:py-12 rounded-lg flex flex-col items-center px-4 sm:px-5">
                    <Heading className="text-2xl sm:text-3xl font-bold mb-6">
                        Interests & Favorites
                    </Heading>
                    <div className="flex flex-col gap-6 w-full max-w-3xl">
                        <FavoriteItem
                            title="Favorite Movies"
                            items={[
                                {
                                    name: "Captain America: The Winter Soldier",
                                    description:
                                        "A perfect blend of action, storytelling, and character development. This movie takes superhero movies to a whole new level with its thrilling plot and intense action sequences.",
                                },
                                {
                                    name: "The Social Network",
                                    description:
                                        "An intriguing look into the rise of social media giant Facebook. This film captures the complexity of ambition, innovation, and the personal costs that come with it.",
                                },
                            ]}
                        />
                        <FavoriteItem
                            title="Favorite Actor"
                            items={[
                                {
                                    name: "Shah Rukh Khan",
                                    description:
                                        "The King of Bollywood, bringing charm and charisma to every role.",
                                },
                            ]}
                        />
                        <FavoriteItem
                            title="Favorite Sport"
                            items={[
                                {
                                    name: "Cricket",
                                    description:
                                        "There's nothing like the thrill of a good cricket match.",
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Personal Mantra */}
                <div className="w-full bg-aqua-green py-8 sm:py-12 mt-8 sm:mt-12 rounded-lg flex flex-col items-center text-white text-center px-4 sm:px-5">
                    <Heading className="text-2xl sm:text-3xl font-bold mb-4">
                        Personal Mantra
                    </Heading>
                    <p className="text-base sm:text-lg max-w-3xl mx-auto">
                        "Embrace the journey, cherish the moments, and always
                        strive to leave a positive impact."
                    </p>
                </div>
            </div>
        </div>
    );
}

function FavoriteItem({
    title,
    items,
}: {
    title: string;
    items: { name: string; description: string }[];
}) {
    return (
        <div className="w-full flex flex-col gap-3">
            <Heading className="text-xl sm:text-2xl font-semibold text-aqua-green">
                {title}
            </Heading>
            {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                    <strong className="w-1/3 text-left text-lg text-gray-800">
                        {item.name}
                    </strong>
                    <p className="w-2/3 text-left text-gray-700">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

// Skills Section
function SkillsSection() {
    const skills = [
        {
            title: "Front-End Development",
            description:
                "Building responsive and dynamic user interfaces using React.js, Next.js, and TailwindCSS.",
            icon: "/Icons/aI1.svg",
        },
        {
            title: "Back-End Development",
            description:
                "Creating scalable and efficient back-end systems using Node.js, Express.js, and databases like MongoDB and MySQL.",
            icon: "/Icons/aI2.svg",
        },
        {
            title: "UI/UX Design",
            description:
                "Designing intuitive and aesthetic user interfaces with a strong focus on user experience.",
            icon: "/Icons/aI3.svg",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-16">
            <Heading className="text-3xl font-bold text-center mb-12">
                My Skills
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    return (
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
            <Image
                src={icon}
                alt={title}
                width={50}
                height={50}
                className="mb-4"
            />
            <Heading className="text-xl font-semibold mb-2">{title}</Heading>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

// Experience Section
function ExperienceSection({
    experiences,
}: {
    experiences: IExperienceItem[];
}) {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-12 bg-white relative rounded-lg flex-col-center px-5">
            <Heading className="text-3xl font-bold text-center mb-8">
                Experience
            </Heading>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 flex flex-col gap-12">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExperienceItem({ experience }: { experience: IExperienceItem }) {
    return (
        <div
            className={`relative pl-4 ${
                experience.isCurrent ? "border-l-4 border-aqua-green" : ""
            }`}
        >
            {experience.isCurrent && (
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-aqua-green rounded-full"></div>
            )}
            <h3 className="text-2xl font-semibold text-aqua-green">
                {experience.company}
            </h3>
            <p className="text-lg font-medium text-gray-800">
                {experience.role} | {experience.duration}
            </p>
            <p className="text-gray-600 mt-2">{experience.description}</p>
        </div>
    );
}

// Call to Action Section
function CallToActionSection({
    onGetInTouchClick,
}: {
    onGetInTouchClick: () => void;
}) {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-12 text-center">
            <Heading className="text-3xl font-bold mb-6">
                Let's Work Together!
            </Heading>
            <p className="text-lg text-gray-700 mb-8">
                I'm always excited to collaborate on new projects. If you have
                an idea, let's bring it to life together.
            </p>
            <span onClick={onGetInTouchClick}>
                <ActionButton
                    text="Get in Touch"
                    className=""
                    bgColor="bg-aqua-green"
                    textColor="text-white"
                    hoverBgColor="hover:bg-aqua-green-dark"
                    size="sm"
                />
            </span>
        </div>
    );
}

function OverlayForm({ overlayHandler }: { overlayHandler: () => void }) {
    return (
        <Overlay onClose={overlayHandler}>
            <div className="p-0 max-w-full sm:max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-5 text-center">
                    Contact Me
                </h2>
                <Form
                    schema={yup.object().shape({
                        name: yup.string().required("Name is required"),
                        email: yup
                            .string()
                            .email("Invalid email")
                            .required("Email is required"),
                        message: yup.string().required("Message is required"),
                    })}
                    onSubmit={(data) => console.log(data)}
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: true,
                            },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                            required: true,
                            },
                        {
                            name: "message",
                            label: "Message",
                            type: "textarea",
                            required: true,
                            },
                    ]}
                />
            </div>
        </Overlay>
    );
}
