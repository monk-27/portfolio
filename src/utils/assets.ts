import {
    BrowserSVG,
    ExpressjsSVG,
    FigmaSVG,
    FolderSVG,
    GeometrySVG,
    GitHubIcon,
    GithubSVG,
    GrowTrendSVG,
    InstagramIcon,
    JavaScriptSVG,
    JavaSVG,
    KotlinSVG,
    LinkedInIcon,
    MobileAppSVG,
    MongoDBSVG,
    MySQLSVG,
    NextjsSVG,
    NodejsSVG,
    NotionSVG,
    PhpSVG,
    PythonSVG,
    ReactjsSVG,
    RedisSVG,
    ServerSVG,
    ServiceIcon,
    TailwindCSSSVG,
    ToolIcon,
    TwitterIcon,
    TypeScriptSVG,
    VSCodeSVG,
    WebDevSVG,
} from "./icons";

// Social Media Links
export const SocialMediaLinks = [
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

export const ToolsData = [
    // Languages
    {
        id: 1,
        name: "JavaScript",
        description:
            "Versatile language for front-end and back-end development.",
        icon: JavaScriptSVG,
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 2,
        name: "TypeScript",
        description: "JavaScript with static typing.",
        icon: TypeScriptSVG,
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 3,
        name: "Java",
        description:
            "A robust language for enterprise and Android development.",
        icon: JavaSVG,
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 4,
        name: "PHP",
        description: "A popular language for server-side web development.",
        icon: PhpSVG,
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 5,
        name: "Kotlin",
        description: "A modern language for Android development.",
        icon: KotlinSVG,
        category: "Programming",
        subCategory: "Languages",
    },
    {
        id: 6,
        name: "Python",
        description: "A powerful language for scripting and data analysis.",
        icon: PythonSVG,
        category: "Programming",
        subCategory: "Languages",
    },

    // Front end
    {
        id: 7,
        name: "Next.js",
        description: "The React Framework for Production.",
        icon: NextjsSVG,
        category: "Programming",
        subCategory: "Front end",
    },
    {
        id: 8,
        name: "React.js",
        description: "A JavaScript library for building user interfaces.",
        icon: ReactjsSVG,
        category: "Programming",
        subCategory: "Front end",
    },
    {
        id: 9,
        name: "TailwindCSS",
        description: "A utility-first CSS framework for rapid UI development.",
        icon: TailwindCSSSVG,
        category: "Programming",
        subCategory: "Front end",
    },

    // Back end
    {
        id: 10,
        name: "Node.js",
        description:
            "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        icon: NodejsSVG,
        category: "Programming",
        subCategory: "Back end",
    },
    {
        id: 11,
        name: "Express.js",
        description:
            "Fast, unopinionated, minimalist web framework for Node.js.",
        icon: ExpressjsSVG,
        category: "Programming",
        subCategory: "Back end",
    },

    // Databases
    {
        id: 12,
        name: "MySQL",
        description: "Relational database management system.",
        icon: MySQLSVG,
        category: "Programming",
        subCategory: "Databases",
    },
    {
        id: 13,
        name: "MongoDB",
        description: "NoSQL database for modern applications.",
        icon: MongoDBSVG,
        category: "Programming",
        subCategory: "Databases",
    },
    {
        id: 14,
        name: "Redis",
        description:
            "An in-memory data structure store, used as a database, cache, and message broker.",
        icon: RedisSVG,
        category: "Programming",
        subCategory: "Databases",
    },

    // Development Tools
    {
        id: 15,
        name: "Visual Studio Code",
        description:
            "My go-to code editor with tons of extensions and customization.",
        icon: VSCodeSVG,
        category: "Development",
    },
    {
        id: 16,
        name: "Figma",
        description: "Perfect for UI/UX design and collaboration.",
        icon: FigmaSVG,
        category: "Development",
    },
    {
        id: 17,
        name: "GitHub",
        description: "Great version controlling software.",
        icon: GithubSVG,
        category: "Development",
    },

    // Productivity Tools
    {
        id: 18,
        name: "Notion",
        description:
            "All-in-one workspace for notes, tasks, and project management.",
        icon: NotionSVG,
        category: "Productivity",
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

export const PricingData = [
    {
        id: 1,
        title: "Sustainable",
        description:
            "Put yourself or your business in public. Showcase your offerings and convert your sales. Best for people starting their first internet venture.",
        price: "CA $199",
        features: [
            "Responsive Web Design",
            "Basic SEO",
            "5 Pages",
            "Email Support",
        ],
        cta: "Get Sustainable",
    },
    {
        id: 2,
        title: "Easy",
        description:
            "A great choice for those looking to expand their online presence with additional customization and advanced SEO features.",
        price: "CA $499",
        features: [
            "Everything in Basic",
            "10 Pages",
            "Advanced SEO",
            "Custom Design",
            "Priority Support",
        ],
        cta: "Choose Easy",
    },
];

export const CondensedSkills = [
    {
        title: "Front-End Development",
        description:
            "Building responsive and dynamic user interfaces using React.js, Next.js, and TailwindCSS.",
        icon: BrowserSVG,
    },
    {
        title: "Back-End Development",
        description:
            "Creating scalable and efficient back-end systems using Node.js, Express.js, and databases like MongoDB and MySQL.",
        icon: ServerSVG,
    },
    {
        title: "UI/UX Design",
        description:
            "Designing intuitive and aesthetic user interfaces with a strong focus on user experience.",
        icon: GeometrySVG,
    },
];

export const TestimonialsData = [
    {
        name: "Sumit Nanda",
        feedback:
            "Working with Armaan was a game-changer for my real estate business. He took my vision and turned it into a sleek, user-friendly website that perfectly represents my brand. The project was completed on time, and the end result exceeded all my expectations. I’ve already seen a boost in client engagement!",
        photo: "/Photos/Testimonials/Writer1.jpg",
    },
    {
        name: "Vikram Saraon",
        feedback:
            "Armaan was fantastic to work with. He understood the unique needs of my real estate business and crafted a website that not only looks amazing but also functions seamlessly. His attention to detail and dedication to the project really shined through. I couldn’t be happier with the outcome!",
        photo: "/Photos/Testimonials/Writer2.png",
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
    { id: 3, name: "Tools", link: "/tools", icon: ToolIcon },
    { id: 4, name: "Services", link: "/services", icon: ServiceIcon },
];

export const SitemapLinks = [
    {
        section: "Main Sections",
        links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About Me" },
            { href: "/tools", label: "Tools" },
            { href: "/services", label: "Services" },
        ],
    },
    {
        section: "Legal",
        links: [
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/sitemap", label: "Sitemap" },
        ],
    },
    // {
    //     section: "Resources",
    //     links: [
    //         { href: "/portfolio", label: "Portfolio Overview" },
    //         { href: "/portfolio/web-development", label: "Web Development" },
    //         { href: "/portfolio/design", label: "Design" },
    //         { href: "/blog", label: "Blog Home" },
    //         { href: "/blog/category-1", label: "Category 1" },
    //         { href: "/blog/category-2", label: "Category 2" },
    //     ],
    // },
    {
        section: "Contact & Connect",
        links: [
            // { href: "/contact", label: "Contact Form" },
            { href: "https://github.com/armaanjaj", label: "GitHub" },
            { href: "https://linkedin.com/in/armaanjaj", label: "LinkedIn" },
            { href: "https://x.com/armaanjaj", label: "Twitter" },
        ],
    },
];
