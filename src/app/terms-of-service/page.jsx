"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen text-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-serif font-bold mb-6">Terms of Service</h1>
                    <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-orange max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">2. Use of Content</h2>
                            <p>All spiritual content, literature, and images on this site are for personal, non-commercial use. Any reproduction or redistribution without permission is prohibited.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">3. User Conduct</h2>
                            <p>Users are expected to interact with our services in a respectful and decorous manner, keeping in mind the sacred nature of the site.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">4. Limitation of Liability</h2>
                            <p>श्री राधा वल्लभ लाल shall not be liable for any damages arising out of the use or inability to use the materials on this website.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">5. Governing Law</h2>
                            <p>These terms are governed by and construed in accordance with the laws of India.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
