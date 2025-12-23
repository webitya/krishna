"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen text-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-serif font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-orange max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
                            <p>Welcome to श्री राधा वल्लभ लाल. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
                            <p>We may collect personal information such as your name, email address, and phone number when you contact us or interact with our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
                            <p>Your information is used to provide and improve our services, communicate with you, and ensure a personalized spiritual experience.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
                            <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at shrihitradhavallabhlal@gmail.com.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
