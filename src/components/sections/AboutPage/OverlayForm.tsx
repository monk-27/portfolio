import Form from "@/components/layout/Form";
import Overlay from "@/components/layout/Overlay";
import * as React from "react";
import * as yup from "yup";

export interface IOverlayFormProps {
    overlayHandler: () => void;
}

export default function OverlayForm({ overlayHandler }: IOverlayFormProps) {
    return (
        <Overlay onClose={overlayHandler}>
            <div className="p-0 max-w-full sm:max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-5 text-center">
                    Contact Me
                </h2>
                <Form
                    schema={yup.object().shape({
                        name: yup.string().required("Name is required"),
                        email: yup
                            .string()
                            .email("Invalid email")
                            .required("Email is required"),
                        message: yup.string().required("Message is required"),
                    })}
                    onSubmit={(data) => console.log(data)}
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                            required: true,
                        },
                        {
                            name: "message",
                            label: "Message",
                            type: "textarea",
                            required: true,
                        },
                    ]}
                />
            </div>
        </Overlay>
    );
}
