// Define the FormField type
type FormField = {
    name: string;
    label: string;
    type: "text" | "email" | "textarea" | "select";
    options?: string[];
    placeholder?: string;
    required?: boolean;
};
