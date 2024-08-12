import * as React from "react";

export interface IPolicyDataProps {}

export default function PolicyData(props: IPolicyDataProps) {
    return (
        <div className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Introduction
                    </h2>
                    <p className="text-lg">
                        Welcome to Armaan Jaj's website. This Privacy Policy
                        outlines how we collect, use, disclose, and safeguard
                        your information when you visit our website. We are
                        committed to protecting your privacy and ensuring that
                        your personal information is handled in a safe and
                        responsible manner.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Information We Collect
                    </h2>
                    <p className="text-lg">
                        <strong>1. Personal Information:</strong> We may collect
                        personal information such as your name, email address,
                        and other contact details when you voluntarily provide
                        them through contact forms, newsletter sign-ups, or when
                        you communicate with us.
                    </p>
                    <p className="text-lg">
                        <strong>2. Usage Data:</strong> We automatically collect
                        certain information when you visit our website. This may
                        include your IP address, browser type, device
                        information, operating system, the pages you visit, and
                        the time and date of your visit. This data helps us
                        understand how our visitors use the site and improve its
                        functionality.
                    </p>
                    <p className="text-lg">
                        <strong>3. Cookies and Tracking Technologies:</strong>{" "}
                        We use cookies and similar tracking technologies to
                        track the activity on our website and store certain
                        information. Cookies are small data files that may
                        include an anonymous unique identifier. You can instruct
                        your browser to refuse all cookies or to indicate when a
                        cookie is being sent. However, if you do not accept
                        cookies, you may not be able to use some portions of our
                        website.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        How We Use Your Information
                    </h2>
                    <p className="text-lg">
                        We may use the information we collect for various
                        purposes, including:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>To Provide and Maintain Our Website</li>
                        <li>To Improve Our Website</li>
                        <li>To Communicate with You</li>
                        <li>To Monitor Usage</li>
                        <li>To Protect Our Website</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Disclosure of Your Information
                    </h2>
                    <p className="text-lg">
                        We do not sell, trade, or otherwise transfer your
                        personal information to outside parties. However, we may
                        share your information in the following situations:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>With Service Providers</li>
                        <li>For Legal Reasons</li>
                        <li>Business Transfers</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Data Security
                    </h2>
                    <p className="text-lg">
                        We take the security of your personal information
                        seriously. We implement a variety of security measures
                        to maintain the safety of your personal information.
                        However, please be aware that no method of transmission
                        over the internet, or method of electronic storage, is
                        100% secure, and we cannot guarantee its absolute
                        security.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Your Privacy Rights
                    </h2>
                    <p className="text-lg">
                        You have certain rights regarding your personal
                        information, including:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Access</li>
                        <li>Correction</li>
                        <li>Deletion</li>
                        <li>Objection</li>
                        <li>Withdrawal of Consent</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Third-Party Links
                    </h2>
                    <p className="text-lg">
                        Our website may contain links to third-party websites.
                        We are not responsible for the privacy practices or
                        content of these third-party sites. We encourage you to
                        review the privacy policies of any sites you visit
                        through external links.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="text-lg">
                        We may update our Privacy Policy from time to time. Any
                        changes will be posted on this page with an updated
                        "Last Updated" date. We encourage you to review this
                        Privacy Policy periodically for any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-lg">
                        If you have any questions or concerns about this Privacy
                        Policy, please email your questions or concerns at:
                    </p>
                    <p className="text-lg">
                        <strong>Email:</strong> armaansjaj@gmail.com
                    </p>
                    <p>
                        <strong>Last update:</strong> July 11, 2024
                    </p>
                </section>
            </div>
        </div>
    );
}
