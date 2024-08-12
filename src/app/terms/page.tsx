import DynamicNavbar from "@/components/ui/DynamicNavbar";
import Footer from "@/components/ui/Footer";
import * as React from "react";

export interface ITermsPageProps {}

export default function TermsPage(props: ITermsPageProps) {
    return (
        <main className="bg-gray-50">
            <DynamicNavbar title="Terms of Service" />
            <div className="py-16 px-6 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Introduction
                        </h2>
                        <p className="text-lg">
                            These Terms of Service ("Terms") govern your access
                            to and use of the website operated by Armaan Jaj
                            ("we," "our," or "us"). By accessing or using our
                            website, you agree to comply with and be bound by
                            these Terms. If you do not agree with these Terms,
                            please do not use our website.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Use of Our Website
                        </h2>
                        <p className="text-lg">
                            You agree to use our website only for lawful
                            purposes and in a way that does not infringe the
                            rights of others or restrict or inhibit their use
                            and enjoyment of the website. You may not engage in
                            any conduct that is unlawful, harmful, or otherwise
                            objectionable.
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>No unauthorized access to our systems</li>
                            <li>No disruption of services</li>
                            <li>No illegal activities</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Intellectual Property
                        </h2>
                        <p className="text-lg">
                            All content, trademarks, logos, and intellectual
                            property on this website are owned by or licensed to
                            us. You may not reproduce, distribute, or use any of
                            the content without our prior written permission.
                        </p>
                        <p className="text-lg">
                            You are granted a limited, non-exclusive, and
                            non-transferable license to access and use the
                            website for personal, non-commercial purposes.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            User-Generated Content
                        </h2>
                        <p className="text-lg">
                            If you submit or post any content on our website,
                            you grant us a worldwide, non-exclusive,
                            royalty-free license to use, reproduce, modify, and
                            distribute that content in any media. You are solely
                            responsible for the content you submit and must
                            ensure that it does not violate any laws or infringe
                            on any third-party rights.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Third-Party Links
                        </h2>
                        <p className="text-lg">
                            Our website may contain links to third-party
                            websites or services that are not owned or
                            controlled by us. We have no control over, and
                            assume no responsibility for, the content, privacy
                            policies, or practices of any third-party websites
                            or services. You acknowledge and agree that we are
                            not responsible or liable for any damage or loss
                            caused by or in connection with the use of such
                            websites or services.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Disclaimer of Warranties
                        </h2>
                        <p className="text-lg">
                            Our website is provided on an "as-is" and "as
                            available" basis without any warranties of any kind,
                            either express or implied. We do not warrant that
                            the website will be uninterrupted, error-free, or
                            free of viruses or other harmful components.
                        </p>
                        <p className="text-lg">
                            We disclaim all warranties, including, but not
                            limited to, warranties of merchantability, fitness
                            for a particular purpose, and non-infringement.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-lg">
                            In no event shall we be liable for any direct,
                            indirect, incidental, special, consequential, or
                            punitive damages, including, without limitation,
                            loss of profits, data, use, goodwill, or other
                            intangible losses, resulting from your access to or
                            use of, or inability to access or use, the website.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Governing Law
                        </h2>
                        <p className="text-lg">
                            These Terms shall be governed by and construed in
                            accordance with the laws of the province of Alberta,
                            Canada, without regard to its conflict of law
                            principles. Any legal action or proceeding arising
                            under these Terms shall be brought exclusively in
                            the courts located in Calgary, Alberta.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Changes to These Terms
                        </h2>
                        <p className="text-lg">
                            We reserve the right to modify or replace these
                            Terms at any time. If a revision is material, we
                            will provide at least 30 days' notice prior to any
                            new terms taking effect. What constitutes a material
                            change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            Contact Us
                        </h2>
                        <p className="text-lg">
                            If you have any questions or concerns about this
                            Privacy Policy, please email your questions or
                            concerns at:
                        </p>
                        <p className="text-lg">
                            <strong>Email:</strong> armaansjaj@gmail.com
                        </p>
                        <p><strong>Last update:</strong> July 11, 2024</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
