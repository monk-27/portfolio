import ToolsHero from "./ToolsHero";
import HomeHero from "./HomeHero";
import AboutHero from "./AboutHero";
import ServicesHero from "./ServicesHero";

type HeroTypes = "tools" | "home" | "about" | "services";

const heroComponents: Record<HeroTypes, React.ComponentType<any>> = {
    tools: ToolsHero,
    home: HomeHero,
    about: AboutHero,
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
