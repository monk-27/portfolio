import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";

export interface StorySectionProps { }

export default function StorySection(props: StorySectionProps) {
    return (
        <div className="py-12 sm:py-20 px-6 sm:px-10 bg-inherit text-[#161E31] mt-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-16">
                {/* My Story */}
                <div className="text-center space-y-8">
                    <div data-scroll data-scroll-speed={0.1}>
                        <Heading
                            level={2}
                            className="text-4xl font-bold sm:text-5xl"
                        >
                            My Story
                        </Heading>
                    </div>
                    <div
                        data-scroll
                        data-scroll-speed={0.3}
                        className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-[#7a4b27]"
                    >
                        <Paragraph>
                            Since 2022, my journey as a Software Developer has been deeply rooted in a passion for coding and problem-solving. From the moment I wrote my first line of code, I was hooked on the limitless possibilities it offered. Transitioning from a curious learner to a professional developer, I&apos;ve focused on building impactful digital solutions that bring ideas to life.
                        </Paragraph>
                        <Paragraph>
                            Specializing in both web and app development, I&apos;ve honed my skills using tools like Next.js and Flutter. Whether it&apos;s designing intuitive user interfaces or building robust backend systems, I strive to deliver clean, efficient, and scalable code in every project.
                        </Paragraph>
                        <Paragraph>
                            Over the past two years, I&apos;ve worked on diverse projects, from creating dynamic web platforms to developing seamless mobile applications. My experience has equipped me to tackle challenges, optimize performance, and enhance user experiences. I&apos;m constantly learning, growing, and pushing boundaries to craft solutions that truly make an impact.
                        </Paragraph>
                    </div>
                </div>

                {/* Interests & Favorites */}
                <div
                    data-scroll
                    data-scroll-speed={0.2}
                    className="w-full bg-[#161E31]  rounded-3xl py-12 px-6 sm:px-10 space-y-10"
                >
                    <Heading
                        level={2}
                        className="text-3xl sm:text-4xl font-light text-[#F8B179] text-center"
                    >
                        Interests & Favorites
                    </Heading>
                    <div className="flex flex-col space-y-8">
                        <FavoriteItem
                            title="Favorite Movies"
                            items={[
                                {
                                    name: "Kagaz",
                                    description:
                                        "A heartfelt story about the struggles of a man fighting against bureaucracy to prove his existence. A truly inspiring tale.",
                                },
                            ]}
                        />
                        <FavoriteItem
                            title="Favorite App"
                            items={[
                                {
                                    name: "Spotify",
                                    description:
                                        "The ultimate music streaming platform, offering a vast library of songs and podcasts to suit every mood.",
                                },
                            ]}
                        />

                        <FavoriteItem
                            title="Favorite Actor"
                            items={[
                                {
                                    name: "Pankaj Tripathi",
                                    description:
                                        "A masterful actor known for his versatile performances and grounded characters.",
                                },
                            ]}
                        />
                        <FavoriteItem
                            title="Favorite Sport"
                            items={[
                                {
                                    name: "Cricket",
                                    description:
                                        "Nothing beats the thrill of a cricket match!",
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Personal Mantra */}
                <div className="w-full bg-[#161E31] py-12 sm:py-16 rounded-3xl text-center text-[#F8B179]">
                    <Heading
                        level={3}
                        className="text-3xl sm:text-4xl font-semibold mb-4 text-[#F8B179] mx-auto"
                    >
                        Personal Mantra
                    </Heading>
                    <Paragraph className="text-lg max-w-3xl mx-auto text-white">
    &ldquo;Hard work and smart work go hand in hand, but the process is more important than the results. Focus on the journey, and excellence will follow.&rdquo;
</Paragraph>
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
        <div className="w-full space-y-6">
            <Heading
                level={5}
                className="text-2xl font-extralight text-[#F8B179] text-center"
            >
                {title}
            </Heading>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                >
                    <strong className="sm:w-1/3 text-lg text-gray-100 font-light">
                        {item.name}
                    </strong>
                    <p className="sm:w-2/3 text-gray-400">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
