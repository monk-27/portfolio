"use client";
import ActionButton from "@/components/ui/designs/ActionButton";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
    name: string;
    email: string;
    organization?: string;
    services?: string;
    message: string;
}

const FORMSPARK = process.env.NEXT_PUBLIC_FORMSPARK_KEY;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormInput>();

    // States to track if a field is being typed in
    const [activeFields, setActiveFields] = useState({
        name: false,
        email: false,
        organization: false,
        services: false,
        message: false,
    });

    const handleInputChange = (field: keyof IFormInput, value: string) => {
        setActiveFields((prev) => ({
            ...prev,
            [field]: value.length > 0,
        }));
    };

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await axios.post(
                `https://submit-form.com/${FORMSPARK}`,
                data
            );

            if (response.status === 200) {
                toast.success("Form submitted successfully!");
                reset();
                setActiveFields({
                    name: false,
                    email: false,
                    organization: false,
                    services: false,
                    message: false,
                });
            } else {
                toast.error("Failed to submit the form.");
            }
        } catch (error) {
            toast.error("An error occurred while submitting the form.");
        }
    };

    const getLabelClass = (field: keyof IFormInput) =>
        activeFields[field]
            ? "text-4xl font-light text-gray-100"
            : "text-4xl font-light text-gray-300";

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-inherit pt-8 pb-14 px-10 max-w-full mx-auto text-left"
                autoComplete="off"
            >
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className={getLabelClass("name")}>
                        What is your name?
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="mt-4 p-3 pl-1 text-2xl w-full bg-transparent text-gray-100 placeholder-gray-600 focus:ring-0 focus:outline-none"
                        placeholder="Enter your name"
                        onChange={(e) =>
                            handleInputChange("name", e.target.value)
                        }
                        autoComplete="off"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <hr className="my-8 border-gray-600" />

                <div className="flex flex-col w-full">
                    <label htmlFor="email" className={getLabelClass("email")}>
                        What is your email?
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                        className="mt-4 p-3 pl-1 text-2xl w-full bg-transparent text-gray-100 placeholder-gray-600 focus:ring-0 focus:outline-none"
                        placeholder="Enter your email"
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                        autoComplete="off"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <hr className="my-8 border-gray-600" />

                <div className="flex flex-col w-full">
                    <label
                        htmlFor="organization"
                        className={getLabelClass("organization")}
                    >
                        What's the name of your organization?{" "}
                        <span className="text-gray-400 text-lg">
                            (Optional)
                        </span>
                    </label>
                    <input
                        type="text"
                        id="organization"
                        {...register("organization")}
                        className="mt-4 p-3 pl-1 text-2xl w-full bg-transparent text-gray-100 placeholder-gray-600 focus:ring-0 focus:outline-none"
                        placeholder="Enter your organization's name"
                        onChange={(e) =>
                            handleInputChange("organization", e.target.value)
                        }
                        autoComplete="off"
                    />
                </div>
                <hr className="my-8 border-gray-600" />

                <div className="flex flex-col w-full">
                    <label
                        htmlFor="services"
                        className={getLabelClass("services")}
                    >
                        What services are you looking for?{" "}
                        <span className="text-gray-400 text-lg">
                            (Optional)
                        </span>
                    </label>
                    <input
                        type="text"
                        id="services"
                        {...register("services")}
                        className="mt-4 p-3 pl-1 text-2xl w-full bg-transparent text-gray-100 placeholder-gray-600 focus:ring-0 focus:outline-none"
                        placeholder="Enter the services you're looking for"
                        onChange={(e) =>
                            handleInputChange("services", e.target.value)
                        }
                        autoComplete="off"
                    />
                </div>
                <hr className="my-8 border-gray-600" />

                <div className="flex flex-col w-full">
                    <label
                        htmlFor="message"
                        className={getLabelClass("message")}
                    >
                        Your message
                    </label>
                    <input
                        type="text"
                        id="message"
                        {...register("message", {
                            required: "Message is required",
                        })}
                        className="mt-4 p-3 pl-1 text-2xl w-full bg-transparent text-gray-100 placeholder-gray-600 focus:ring-0 focus:outline-none"
                        placeholder="Enter your message"
                        onChange={(e) =>
                            handleInputChange("message", e.target.value)
                        }
                        autoComplete="off"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <div className="flex justify-start mt-8">
                    <ActionButton text={"Submit"} size="md" status="active" />
                </div>
            </form>
        </>
    );
}
