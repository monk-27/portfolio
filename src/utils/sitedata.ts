import {
    CodeIcon,
    FigmaSVG,
    FolderSVG,
    GitBranchIcon,
    GitHubIcon,
    GrowTrendSVG,
    InstagramIcon,
    LinkedInIcon,
    LinkNodesIcon,
    MobileAppSVG,
    TwitterIcon,
    WebDevSVG,
} from "./assets";

// Social Media Links
export const SocialMediaLinksData = [
    {
        href: "https://github.com/monk-27",
        title: "GitHub",
        target: "_blank",
        icon: GitHubIcon,
        className: "",
    },
    {
        href: "https://www.linkedin.com/in/shashi-bhushan-jha-7797371a3/",
        title: "LinkedIn",
        target: "_blank",
        icon: LinkedInIcon,
        className: "",
    },
    {
        href: "https://x.com/0frustratedmonk",
        title: "X/Twitter",
        target: "_blank",
        icon: TwitterIcon,
        className: "",
    },
    
];

export const ServicesData = [
    {
        id: 1,
        title: "Web Development",
        description:
            "I build responsive and high-performance websites using modern technologies like React, Next.js, and TailwindCSS.",
        icon: WebDevSVG,
    },
    {
        id: 2,
        title: "Mobile App Development",
        description:
            "Creating sleek and user-friendly mobile applications for Android platform.",
        icon: MobileAppSVG,
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "Designing intuitive and aesthetic user interfaces with a focus on user experience.",
        icon: FigmaSVG,
    },
    {
        id: 4,
        title: "SEO Optimization",
        description:
            "Improving your website’s visibility on search engines with best SEO practices.",
        icon: GrowTrendSVG,
    },
    {
        id: 5,
        title: "Custom Software Solutions",
        description:
            "Providing tailored software solutions to meet your business needs, from concept to deployment.",
        icon: FolderSVG,
    },
];

export const CondensedSkills = [
    {
        title: "UI Design",
        description:
            "Proficient in crafting intuitive, visually appealing, and user-friendly interfaces. Skilled in using design tools and frameworks to create responsive layouts that enhance user experience and align with brand aesthetics.",
    },
    {
        title: "Web Development",
        description:
            "Experienced in building responsive and high-performance websites using modern technologies like React.js, Next.js, and TailwindCSS. Focused on delivering clean, efficient, and scalable code to meet diverse client needs.",
    },
    {
        title: "App Development",
        description:
            "Specialized in developing dynamic and user-focused mobile applications using frameworks like Flutter and React Native. Adept at creating apps with seamless functionality, optimized performance, and engaging user experiences.",
    },
];


export const TestimonialsData = [
    {
        name: "Ritesh Singh",
        feedback:
            "From the day I hired Shashi Bhushan Jha, his dedication and technical expertise have stood out. He turned our vision into a sleek, user-friendly website that has boosted client engagement and strengthened our brand. His ability to deliver exceptional results on time is truly commendable. Shashi, your hard work and commitment are invaluable to our team!",
        photo: "/Photos/Testimonials/Ritesh.png",
    },
    {
        name: "Raghav Singh",
        feedback:
            "Shashi Bhushan Jha was an incredible team member to work with. He quickly understood the unique requirements of the project and delivered a website that is both visually stunning and highly functional. His attention to detail, problem-solving skills, and dedication to the project were evident at every step. The final result exceeded expectations, and it was a pleasure having him lead the way!",
        photo: "/Photos/Testimonials/raghav.png",
    },
    {
        name: "Amit Singh",
        photo: "/Photos/Testimonials/amit.png",
        feedback:
            "Shashi Bhushan Jha is an exceptional software developer with expertise in React, JavaScript, and TypeScript. He consistently delivered high-quality code. His collaboration skills and ability to communicate technical concepts were a major asset to our team. I highly recommend Shashi Bhushan Jha for any front-end development role.",
    },
    {
        name: "Ayush Arya",
        photo: "/Photos/Testimonials/ayush.jpg",
        feedback:
            "Working with Shashi Bhushan Jha as a team member has been an absolute pleasure. He brings a sharp understanding of project requirements and delivers results that are both functional and visually impressive. His attention to detail, collaborative approach, and dedication to getting things done right are truly inspiring. Shashi’s contributions consistently elevate the team’s performance, and I’m grateful to have had the chance to work alongside him!",
    },
];

export const NavLinksData = [
    { id: 1, name: "Homepage", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
];

export const SitemapLinks = [
    {
        section: "Main Sections",
        links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About Me" },
            { href: "/contact", label: "Contact" },
            { href: "/resources", label: "Resources" },
        ],
    },
    {
        section: "Contact & Connect",
        links: [
            { href: "https://github.com/monk-27", label: "GitHub" },
            { href: "https://www.linkedin.com/in/shashi-bhushan-jha-7797371a3/", label: "LinkedIn" },
            { href: "https://x.com/0frustratedmonk", label: "Twitter" },
        ],
    },
    {
        section: "Others",
        links: [{ href: "/sitemap", label: "Sitemap" }],
    },
];

export const ResourcesData = [
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

export const GitHubAnalyticsdata = [
    {
        id: 1,
        title: "Active Project",
        icon: LinkNodesIcon,
        text: "This is where I’m channeling my development efforts, pushing forward with significant updates and improvements.",
        bgColor: "bg-transparent",
    },
    {
        id: 2,
        title: "GitHub Contributions",
        icon: GitBranchIcon,
        text: "Here’s a snapshot of my recent GitHub contributions. I take pride in consistently contributing to my repositories, tracking my progress and staying committed to my projects.",
        bgColor: "bg-transparent",
    },
    {
        id: 3,
        title: "Top Languages",
        icon: CodeIcon,
        text: "These are the top programming languages I work with, reflecting my versatility across different technologies. It’s a quick glance at the tools I’m most proficient in, showcasing the breadth of my coding skills.",
        bgColor: "bg-transparent",
    },
];

export const MetricsData = [
    {
        id: 1,
        number: 500,
        label: "Commits pushed",
    },
    {
        id: 2,
        number: 6,
        label: "Projects completed",
    },
    {
        id: 3,
        number: 7,
        label: "Technologies mastered",
    },
   
];
