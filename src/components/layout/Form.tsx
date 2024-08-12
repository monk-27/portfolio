"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

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

export interface IFormProps {
    schema: yup.AnyObjectSchema;
    onSubmit: SubmitHandler<any>;
    fields: FormField[];
}

export default function Form({ schema, onSubmit, fields }: IFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectedInquiryType, setSelectedInquiryType] = React.useState<string | null>(null);
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
        <div className="mx-auto p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -mx-3 mb-6">
                {/* Constant Fields: Name, Email */}
                <div className={`w-full ${selectFields.length ? "md:w-1/2" : "w-full"} px-3`}>
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

                {/* Conditional Right Column: Selection Buttons */}
                {selectFields.length > 0 && (
                    <div className="w-full md:w-1/2 px-3">
                        {selectFields.map((field, index) => (
                            <SelectField
                                key={index}
                                label={field.label}
                                name={field.name}
                                options={field.options!}
                                selectedValue={field.name === "inquiryType" ? selectedInquiryType : selectedPlan}
                                handleSelect={field.name === "inquiryType" ? handleTypeSelect : handlePlanSelect}
                                error={errors[field.name]?.message as string}
                            />
                        ))}
                    </div>
                )}

                {/* Bottom: Message Textarea */}
                <MessageField
                    register={register}
                    error={errors.message?.message as string}
                />
            </form>
        </div>
    );
}

function TextField({ label, name, placeholder, register, error }: TextFieldProps) {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-gray-700 font-medium">
                {label}
            </label>
            <input
                type="text"
                {...register(name)}
                placeholder={placeholder}
                className="mt-2 block w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:border focus:border-aqua-green"
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
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
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <div className="grid grid-cols-2 gap-2 text-base">
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`border rounded-md p-3 min-w-fit flex items-center justify-between cursor-pointer hover:border-aqua-green transition duration-300 ${
                            selectedValue === option
                                ? "border-aqua-green bg-aqua-green text-white"
                                : "border-gray-300"
                        }`}
                    >
                        <span>{option}</span>
                        {selectedValue === option && (
                            <IoCheckmarkCircleOutline size={24} />
                        )}
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
                className="block text-gray-700 font-medium mb-2"
            >
                Message
            </label>
            <div className="flex">
                <input
                    id="message"
                    {...register("message")}
                    placeholder="Describe your inquiry..."
                    className="w-full p-3 h-10 border rounded-tl-md rounded-bl-md bg-gray-50 focus:outline-none focus:border focus:border-aqua-green"
                />
                <button
                    type="submit"
                    className="w-auto bg-aqua-green text-white px-5 h-10 rounded-tr-md rounded-br-md hover:bg-aqua-green-dark transition duration-200"
                >
                    Submit
                </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
