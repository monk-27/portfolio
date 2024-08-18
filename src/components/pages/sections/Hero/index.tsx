import HomeHero from "./HomeHero";
import AboutHero from "./AboutHero";
import ContactHero from "./ContactHero";

type HeroTypes = "home" | "about" | "contact";

const heroComponents: Record<HeroTypes, React.ComponentType<any>> = {
    home: HomeHero,
    about: AboutHero,
    contact: ContactHero,
};

interface HeroProps {
    type: HeroTypes;
    [key: string]: any;
}

export default function Hero({ type, ...props }: HeroProps) {
    const HeroComponent = heroComponents[type];

    if (!HeroComponent) {
        throw new Error(`Unknown hero type: ${type}`);
    }

    return <HeroComponent {...props} />;
}
