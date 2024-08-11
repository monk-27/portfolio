"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

// Validation schema
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
    inquiryType: yup.string().required("Please select an inquiry type"),
    plan: yup.string(), // Optional field for the plan selection
});

interface IFormInput {
    name: string;
    email: string;
    message: string;
    inquiryType: string;
    plan?: string;
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    const [selectedType, setSelectedType] = React.useState<string | null>(null);
    const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);

    const handleTypeSelect = (type: string) => {
        setSelectedType(type);
        setValue("inquiryType", type);
    };

    const handlePlanSelect = (plan: string) => {
        setSelectedPlan(plan);
        setValue("plan", plan);
    };

    return (
        <div className="mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Get in Touch
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-wrap -mx-3 mb-6"
            >
                {/* Left side: Name and Email */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            className="mt-2 block w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:border focus:border-aqua-green"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.name?.message}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="mt-2 block w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:border focus:border-aqua-green"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email?.message}
                        </p>
                    </div>
                </div>

                {/* Right side: Inquiry Type */}
                <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 font-medium mb-2">
                        What is your inquiry about?
                    </label>
                    <div className="grid grid-cols-2 gap-4 text-base">
                        {[
                            "Web Development",
                            "Mobile App Development",
                            "UI/UX Design",
                            "SEO Optimization",
                            "Custom Software Solutions",
                        ].map((type) => (
                            <div
                                key={type}
                                onClick={() => handleTypeSelect(type)}
                                className={`border rounded-md p-3 flex items-center justify-between cursor-pointer hover:border-aqua-green transition duration-300 ${
                                    selectedType === type
                                        ? "border-aqua-green bg-aqua-green text-white"
                                        : "border-gray-300"
                                }`}
                            >
                                <span>{type}</span>
                                {selectedType === type && (
                                    <IoCheckmarkCircleOutline size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-red-500 text-sm mt-2">
                        {errors.inquiryType?.message}
                    </p>
                </div>

                {/* Bottom: Plan Selection */}
                <div className="w-full px-3 mt-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Select a Plan <span className="font-light italic">(Optional)</span>
                    </label>
                    <div className="grid grid-cols-3 gap-4 text-base">
                        {["Sustainable", "Easy", "Advance"].map((plan) => (
                            <div
                                key={plan}
                                onClick={() => handlePlanSelect(plan)}
                                className={`border rounded-md p-3 flex items-center justify-between cursor-pointer hover:border-aqua-green transition duration-300 ${
                                    selectedPlan === plan
                                        ? "border-aqua-green bg-aqua-green text-white"
                                        : "border-gray-300"
                                }`}
                            >
                                <span>{plan}</span>
                                {selectedPlan === plan && (
                                    <IoCheckmarkCircleOutline size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom: Message */}
                <div className="w-full px-3 flex items-center mt-6">
                    <div className="flex-1">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Message
                        </label>
                        <div className="flex">
                            <input
                                id="message"
                                {...register("message")}
                                className="w-full p-3 h-10 border rounded-tl-md rounded-bl-md bg-gray-50 focus:outline-none focus:border focus:border-aqua-green"
                            />
                            <button
                                type="submit"
                                className="w-auto bg-aqua-green text-white px-5 h-10 rounded-tr-md rounded-br-md hover:bg-aqua-green-dark transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                        <p className="text-red-500 text-sm mt-1">
                            {errors.message?.message}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
