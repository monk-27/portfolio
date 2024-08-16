"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CheckIcon } from "@/utils/icons";

export interface IContactProps {}

interface TextFieldProps {
    label: string;
    name: string;
    placeholder: string;
    register: ReturnType<typeof useForm>["register"];
    error?: string;
}

interface SelectFieldProps {
    label: string;
    name: string;
    options: string[];
    selectedValue: string | null;
    handleSelect: (value: string) => void;
    error?: string;
}

interface MessageFieldProps {
    register: ReturnType<typeof useForm>["register"];
    error?: string;
}

interface FormField {
    name: string;
    label: string;
    type: "text" | "email" | "textarea" | "select";
    options?: string[];
    placeholder?: string;
    required?: boolean;
}

interface IFormProps {
    schema: yup.AnyObjectSchema;
    onSubmit: SubmitHandler<any>;
    fields: FormField[];
}

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
        <section
            id="services-contact-form"
            className="mt-16 max-w-[90vw] md:max-w-[60vw] mx-auto"
        >
            <h3 className="text-3xl font-semibold mb-8 text-center text-gray-100">
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

function Form({ schema, onSubmit, fields }: IFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectedInquiryType, setSelectedInquiryType] = React.useState<
        string | null
    >(null);
    const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);

    const handleTypeSelect = (type: string) => {
        setSelectedInquiryType(type);
        setValue("inquiryType", type);
    };

    const handlePlanSelect = (plan: string) => {
        setSelectedPlan(plan);
        setValue("plan", plan);
    };

    const selectFields = fields.filter((field) => field.type === "select");

    return (
        <div className="mx-auto p-4 bg-gray-900 rounded-3xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-wrap -mx-3 mb-6"
            >
                <div
                    className={`w-full ${
                        selectFields.length ? "md:w-1/2" : "w-full"
                    } px-3`}
                >
                    <TextField
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        register={register}
                        error={errors.name?.message as string}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        placeholder="Your email"
                        register={register}
                        error={errors.email?.message as string}
                    />
                </div>

                {selectFields.length > 0 && (
                    <div className="w-full md:w-1/2 px-3">
                        {selectFields.map((field, index) => (
                            <SelectField
                                key={index}
                                label={field.label}
                                name={field.name}
                                options={field.options!}
                                selectedValue={
                                    field.name === "inquiryType"
                                        ? selectedInquiryType
                                        : selectedPlan
                                }
                                handleSelect={
                                    field.name === "inquiryType"
                                        ? handleTypeSelect
                                        : handlePlanSelect
                                }
                                error={errors[field.name]?.message as string}
                            />
                        ))}
                    </div>
                )}

                <MessageField
                    register={register}
                    error={errors.message?.message as string}
                />
            </form>
        </div>
    );
}

function TextField({
    label,
    name,
    placeholder,
    register,
    error,
}: TextFieldProps) {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-gray-400 font-medium">
                {label}
            </label>
            <input
                type="text"
                {...register(name)}
                placeholder={placeholder}
                className="mt-2 block w-full p-3 border rounded-3xl bg-gray-800 text-gray-200 focus:outline-none focus:border focus:border-secondary transition-colors duration-300"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

function SelectField({
    label,
    name,
    options,
    selectedValue,
    handleSelect,
    error,
}: SelectFieldProps) {
    return (
        <div className="mb-6">
            <label className="block text-gray-400 font-medium mb-2">
                {label}
            </label>
            <div className="grid grid-cols-2 gap-2 text-base">
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`border rounded-3xl p-3 min-w-fit flex items-center justify-between cursor-pointer hover:border-secondary transition duration-300 ${
                            selectedValue === option
                                ? "border-secondary bg-secondary text-white"
                                : "border-gray-700 text-gray-300"
                        }`}
                    >
                        <span>{option}</span>
                        {selectedValue === option && <CheckIcon size={24} />}
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
}

function MessageField({ register, error }: MessageFieldProps) {
    return (
        <div className="w-full px-3 mt-6">
            <label
                htmlFor="message"
                className="block text-gray-400 font-medium mb-2"
            >
                Message
            </label>
            <div className="flex">
                <input
                    id="message"
                    {...register("message")}
                    placeholder="Describe your inquiry..."
                    className="w-full p-3 h-10 border rounded-tl-3xl rounded-bl-3xl bg-gray-800 text-gray-200 focus:outline-none focus:border focus:border-secondary transition-colors duration-300"
                />
                <button
                    type="submit"
                    className="w-auto bg-secondary text-white px-5 h-10 rounded-tr-3xl rounded-br-3xl hover:bg-secondary transition duration-200"
                >
                    Submit
                </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
