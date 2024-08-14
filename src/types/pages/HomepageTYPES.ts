// Define the data structure for the project object
interface Project {
    // Required props
    id: number;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    challenges: string[];
    banner: string;

    // Optional props
    logo?: string;
    links?: {
        visit?: string;
        github?: string;
    };
    completed?: {
        date: string;
        duration: string;
        futurePlans?: string[];
    };
    testimonials?: [
        {
            name: string;
            testimonial: string;
            image?: string;
        }
    ];
}
