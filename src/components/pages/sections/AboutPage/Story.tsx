import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import * as React from "react";

export interface ItotrySectionProps {}

export default function StorySection(props: ItotrySectionProps) {
    return (
        <div className="py-8 sm:py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* My Story */}
                <div className="text-center mb-8 sm:mb-12">
                    <Heading
                        level={2}
                        className="text-center w-full font-bold mb-4"
                    >
                        My Story
                    </Heading>
                    <Paragraph className="text-xl max-w-3xl mx-auto">
                        Ever since I gripped my fingers around a pencil, I've
                        been on a never-ending quest to create. From the early
                        days of sketching and getting lost in the world of art,
                        I've evolved (some say like a Pokémon) into a Web/Full
                        Stack Developer. While I no longer wield a pencil as my
                        weapon of choice, my love for design and creativity is
                        stronger than ever. These days, I channel that passion
                        into crafting stunning websites that not only look good
                        but work flawlessly too.
                    </Paragraph>
                    <Paragraph className="text-xl max-w-3xl mx-auto mt-4 sm:mt-6">
                        I’ve got a magical toolkit that includes TailwindCSS,
                        Next.js, React.js, and Node.js—think of me as a digital
                        wizard (minus the robes, unfortunately). I’ve honed my
                        skills to bridge the gap between design and
                        functionality because, let’s face it, a website that’s
                        all looks and no brains isn’t going to impress anyone.
                    </Paragraph>
                    <Paragraph className="text-xl max-w-3xl mx-auto mt-4 sm:mt-6">
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
                    </Paragraph>
                </div>

                {/* Interests & Favorites */}
                <div className="w-full bg-gray-100 py-8 sm:py-12 rounded-lg flex flex-col items-center px-4 sm:px-5">
                    <Heading
                        level={2}
                        className="text-2xl sm:text-3xl font-bold mb-6"
                    >
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
                    <Heading
                        level={3}
                        className="text-2xl sm:text-3xl font-bold mb-4"
                    >
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
            <Heading
                level={5}
                className="text-xl sm:text-2xl font-semibold text-aqua-green"
            >
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
