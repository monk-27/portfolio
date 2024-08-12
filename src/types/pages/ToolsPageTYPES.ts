// Define the data structure for tools
interface Tool {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string;
    subCategory?: string;
}

// Define the data structure for categories
interface Category {
    title: string;
    subCategories: string[];
}

// Define the data structure for resources
interface IResource {
    title: string;
    description: string;
    link: string;
}