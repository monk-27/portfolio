import Form from "@/components/layout/Form";
import * as React from "react";
import * as yup from "yup";

export interface IContactProps {}

const servicesSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    inquiryType: yup.string().required("Please select an inquiry type"),
    message: yup.string().required("Message is required"),
    plan: yup.string(),
});

const servicesFields: FormField[] = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
        name: "inquiryType",
        label: "Inquiry Type",
        type: "select",
        options: [
            "Web Development",
            "Mobile App Development",
            "UI/UX Design",
            "SEO Optimization",
            "Custom Software Solutions",
        ],
        required: true,
    },
    {
        name: "plan",
        label: "Plan (Optional)",
        type: "select",
        options: ["Sustainable", "Easy"],
    },
    { name: "message", label: "Message", type: "text", required: true },
];

export default function Contact(props: IContactProps) {
    const handleSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section id="services-contact-form" className="mt-16 max-w-[90vw] md:max-w-[60vw] mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-center">
                Get in Touch
            </h3>
            <Form
                schema={servicesSchema}
                onSubmit={handleSubmit}
                fields={servicesFields}
            />
        </section>
    );
}
