import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";

export interface StorySectionProps {}

export default function StorySection(props: StorySectionProps) {
    return (
        <div className="py-12 sm:py-20 px-6 sm:px-10 bg-inherit text-gray-200">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-16">
                {/* My Story */}
                <div className="text-center space-y-8">
                    <Heading
                        level={2}
                        className="text-4xl sm:text-5xl font-bold"
                    >
                        My Story
                    </Heading>
                    <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
                        <Paragraph>
                            Ever since I gripped my fingers around a pencil,
                            I've been on a never-ending quest to create. From
                            the early days of sketching and getting lost in the
                            world of art, I've evolved into a Web/Full Stack
                            Developer. While I no longer wield a pencil as my
                            weapon of choice, my love for design and creativity
                            is stronger than ever. These days, I channel that
                            passion into crafting stunning websites that not
                            only look good but work flawlessly too.
                        </Paragraph>
                        <Paragraph>
                            Armed with tools like TailwindCSS, Next.js, React.js, and
                            Node.js, I’ve become a digital creator blending
                            design and functionality. My focus has always been
                            on crafting clean and efficient code, making sure
                            that every project I work on runs as smoothly as it
                            looks.
                        </Paragraph>
                        <Paragraph>
                            From building my own portfolio to developing complex
                            applications, I’ve been able to leverage these
                            skills in some exciting projects. Whether it's
                            optimizing performance or enhancing the user
                            experience, I'm always ready to tackle new
                            challenges and push the boundaries of what’s
                            possible.
                        </Paragraph>
                    </div>
                </div>

                {/* Interests & Favorites */}
                <div className="w-full bg-gray-800 bg-opacity-80 rounded-3xl py-12 px-6 sm:px-10 space-y-10">
                    <Heading
                        level={2}
                        className="text-3xl sm:text-4xl font-bold text-secondary text-center"
                    >
                        Interests & Favorites
                    </Heading>
                    <div className="flex flex-col space-y-8">
                        <FavoriteItem
                            title="Favorite Movies"
                            items={[
                                {
                                    name: "Captain America: The Winter Soldier",
                                    description:
                                        "A perfect blend of action, storytelling, and character development. This movie takes superhero movies to a whole new level.",
                                },
                                {
                                    name: "The Social Network",
                                    description:
                                        "An intriguing look into the rise of Facebook. This film captures the complexity of ambition and innovation.",
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
                                        "Nothing beats the thrill of a cricket match!",
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Personal Mantra */}
                <div className="w-full bg-secondary py-12 sm:py-16 rounded-3xl text-center text-primary">
                    <Heading
                        level={3}
                        className="text-3xl sm:text-4xl font-semibold mb-4 text-primary mx-auto"
                    >
                        Personal Mantra
                    </Heading>
                    <Paragraph className="text-lg max-w-3xl mx-auto text-gray-700">
                        "Embrace the journey, cherish the moments, and always
                        strive to leave a positive impact."
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
            <Heading level={5} className="text-2xl font-semibold text-secondary">
                {title}
            </Heading>
            {items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <strong className="sm:w-1/3 text-lg text-gray-100">
                        {item.name}
                    </strong>
                    <p className="sm:w-2/3 text-gray-400">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
