import SkillsHero from "./SkillsHero";
import HomeHero from "./HomeHero";
import AboutHero from "./AboutHero";
import ServicesHero from "./ServicesHero";

type HeroTypes = "home" | "about" | "skills" | "services";

const heroComponents: Record<HeroTypes, React.ComponentType<any>> = {
    home: HomeHero,
    about: AboutHero,
    skills: SkillsHero,
    services: ServicesHero,
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
