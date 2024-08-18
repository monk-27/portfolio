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
} from "./icons";

// Social Media Links
export const SocialMediaLinksData = [
    {
        href: "https://www.github.com/armaanjaj",
        title: "GitHub",
        target: "_blank",
        icon: GitHubIcon,
        className: "",
    },
    {
        href: "https://www.linkedin.com/in/connectarmaan",
        title: "LinkedIn",
        target: "_blank",
        icon: LinkedInIcon,
        className: "",
    },
    {
        href: "https://x.com/armaanjaj",
        title: "X/Twitter",
        target: "_blank",
        icon: TwitterIcon,
        className: "",
    },
    {
        href: "https://www.instagram.com/armaan_jaj",
        title: "Instagram",
        target: "_blank",
        icon: InstagramIcon,
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
        title: "Landing Page Development",
        description:
            "Expertise in crafting responsive, high-performance landing pages using modern web technologies, including React.js, Next.js, and TailwindCSS. Skilled in creating visually appealing interfaces that drive user engagement and conversions.",
    },
    {
        title: "Full-Stack Application Development",
        description:
            "Proven experience in building robust and scalable full-stack applications. Proficient in developing secure and efficient back-end systems using Node.js and Express.js, integrated with databases such as MongoDB and MySQL, to support complex business needs.",
    },
    {
        title: "User Interface Design",
        description:
            "Specialized in designing intuitive and visually compelling user interfaces. Committed to enhancing user experience by combining functionality with aesthetics, ensuring a seamless and engaging interaction for end-users.",
    },
];

export const TestimonialsData = [
    {
        name: "Sumit Nanda",
        feedback:
            "Working with Armaan was a game-changer for my real estate business. He took my vision and turned it into a sleek, user-friendly website that perfectly represents my brand. The project was completed on time, and the end result exceeded all my expectations. I’ve already seen a boost in client engagement!",
        photo: "/Photos/Testimonials/Writer2.png",
    },
    {
        name: "Vikram Saraon",
        feedback:
            "Armaan was fantastic to work with. He understood the unique needs of my real estate business and crafted a website that not only looks amazing but also functions seamlessly. His attention to detail and dedication to the project really shined through. I couldn’t be happier with the outcome!",
        photo: "/Photos/Testimonials/Writer1.jpg",
    },
    {
        name: "Mohamed EIMenshawy",
        feedback:
            "I am pleased to highly recommend Armaan Jaj, whom I had the privilege of teaching. He consistently demonstrated a deep understanding of the subject matter and displayed strong dedication and work ethic. His exceptional leadership skills, combined with effective communication abilities, make him an asset in any setting. Armaan has my utmost confidence in his future pursuits.",
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
            { href: "https://github.com/armaanjaj", label: "GitHub" },
            { href: "https://linkedin.com/in/armaanjaj", label: "LinkedIn" },
            { href: "https://x.com/armaanjaj", label: "Twitter" },
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
        number: 15,
        label: "Technologies mastered",
    },
    {
        id: 4,
        number: 300,
        label: "Medium double doubles",
    },
];
