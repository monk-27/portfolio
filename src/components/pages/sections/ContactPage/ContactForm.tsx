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

const GOOGLE_SHEET_ID = "1YqOKbFqrH__YrPcnUjlReGtXWTiOZ3iBkfBFFFRPn7I"; // Replace with your Google Sheet ID
const GOOGLE_API_KEY = "AIzaSyCVEt8VvZZQlWbq1f1Ekv8fp3XLOt3Z5w0"; //

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
            const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED&key=${GOOGLE_API_KEY}`;

            const response = await fetch(sheetUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    values: [[data.name, data.email, data.organization || "", data.services || "", data.message]],
                }),
            });

            if (response.ok) {
                toast.success("Form submitted successfully!");
                reset();
            } else {
                toast.error("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        }
    };

    const getLabelClass = (field: keyof IFormInput) =>
        activeFields[field]
            ? "text-4xl font-light text-gray-100"
            : "text-4xl font-light text-gray-300";

    return (
        <>
            {/* <Toaster position="top-right" reverseOrder={false} />
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
                        What&apos;s the name of your organization?{" "}
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
            </form> */}
            <div className="bg-primary-black min-h-screen flex items-center justify-center">
            <div className="bg-[#253B47] text-white rounded-lg shadow-lg p-8 max-w-lg">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
                <div className="flex flex-col items-center space-y-4">
                    {/* Phone Section */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-[#2F4858] p-4 rounded-full">
                            <img src="/phone-icon.png" alt="Phone" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-sm">+123-456-7890</p>
                        </div>
                    </div>
                    {/* Email Section */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-[#2F4858] p-4 rounded-full">
                            <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-sm">hello@reallygreatsite.com</p>
                        </div>
                    </div>
                    {/* Address Section */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-[#2F4858] p-4 rounded-full">
                            <img src="/location-icon.png" alt="Location" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-sm">123 Anywhere St., Any City</p>
                        </div>
                    </div>
                    {/* Social Media Section */}
                    <div className="flex items-center space-x-4 mt-6">
                        <div className="bg-[#2F4858] p-4 rounded-full">
                            <img src="/social-icon.png" alt="Social Media" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">@reallygreatsite</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


// "use client";
// import React, { useState } from "react";

// import * as Yup from "yup";
// import axios from "axios";

// import { Card } from "./contactCard";

// const Contacts = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const initialValues: {
//     name: string;
//     email: string;
//     city: string;
//     mobile: string;
//     message: string;
//     document: File | null;
//   } = {
//     name: "",
//     email: "",
//     city: "",
//     mobile: "",
//     message: "",
//     document: null,
//   };

//   const validateFile = (file: { type: any }) => {
//     const allowedFileTypes = ["image/png", "image/jpeg", "application/pdf"];
//     if (!allowedFileTypes.includes(file.type)) {
//       return "Only PNG, JPEG, and PDF files are allowed.";
//     }
//     return null;
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .transform((value, originalValue) => {
//         if (originalValue) {
//           return originalValue.replace(/[^A-Za-z]/g, "");
//         }
//         return value;
//       })
//       .min(3, "Name should be min. 3 Character")
//       .max(50, "Name should be max. 50 Character")
//       .required("Name is required!"),
//     email: Yup.string()
//       .trim()
//       .email("Invalid email address")
//       .matches(/\./, "Invalid email address")
//       .required("Email is required!"),
//     city: Yup.string().trim().required("City is required!"),
//     mobile: Yup.string()
//       .required("Mobile Number required!")
//       .matches(/^[6789][0-9]{9}$/, "Mobile No. is not valid")
//       .min(10, "Please enter 10 digit mobile number")
//       .max(10, "too long"),
//     message: Yup.string()
//       .trim()
//       .required("Write Your Query!")
//       .max(500, "Message should be max. 500 Charcter"),
//   });
 
//   return (
//     <main className="bg-theme">

//       <p className="text-white py-6 text-center sm:text-lg sm:poppins-semibold">
//         Need any assistance? Our team of customer care at Bright DiGi Gold is ready
//         to hear from you.
//       </p>

//       <div className="w-full rounded relative md:flex justify-end">
//         <div className="md:w-2/5 bg-contact rounded-lg p-6 mb-4 md:mb-0 md:absolute z-30 top-12 left-0 transition-transform transform duration-500 hover:scale-110 ease-in-out">
//           <p className="text-3xl text-white text-center text-gold01 extrabold">
//             Get in Touch
//           </p>
//           <Card
//             imageUrl="https://www.brightdigigold.com/images/telephone-call.png"
//             title="CALL US"
//             description="+91 9289480035"
//             linkTo="tel:9289480035"
//           />
//           <Card
//             imageUrl="https://brightdigigold.s3.ap-south-1.amazonaws.com/Mail+icon.png"
//             title="MAIL US"
//             description="support@brightdigigold.com"
//             linkTo="mailto:support@brightdigigold.com"
//           />
//           <Card
//             imageUrl="https://www.brightdigigold.com/images/placeholder.png"
//             title="REACH US"
//             description="BRIGHT DIGI GOLD PRIVATE LIMITED 501, 5th Floor, World Trade Center, Babar Road, New Delhi - 110001"
//             linkTo="https://www.google.com/maps/dir//brightdigigold/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390cfd318e5aaaab:0xf356a848ef1c91ee?sa=X&ved=2ahUKEwi4vYjQuvL_AhWNDt4KHRZlDKcQ9Rd6BAhcEAA&ved=2ahUKEwi4vYjQuvL_AhWNDt4KHRZlDKcQ9Rd6BAhkEAU"
//           />
//         </div>
//         <section className="w-full md:w-3/4 bg-themeBlue px-4 py-4 sm:py-10 rounded-lg md:pl-40 lg:pl-40 xl:pl-56">
//           <p className="pb-3 text-lg sm:text-xl poppins-regular">
//             Please raise your query here
//           </p>
//           {/*  */}
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contacts;

