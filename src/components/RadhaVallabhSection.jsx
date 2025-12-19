"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function RadhaVallabhSection() {
    return (
        <section className="relative py-6 md:py-10 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-48 h-48 bg-pink-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-full px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-pink-600"></div>
                        <Sparkles className="w-5 h-5 text-pink-600 animate-pulse" />
                        <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-pink-600"></div>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-purple-900" style={{ fontFamily: 'serif' }}>
                        ठा० श्री हित राधावल्लभ लाल जू
                    </h2>
                </motion.div>

                {/* Main Content Grid - Reversed Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-full mx-auto">
                    {/* Image - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1"
                    >
                        <div className="relative group">
                            {/* Glowing Background Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative bg-white p-3 md:p-4 rounded-xl shadow-2xl border-2 border-pink-500/30 group-hover:border-pink-500/50 transition-colors duration-500">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                    <Image
                                        src="/pic2.jpg"
                                        alt="ठा० श्री हित राधावल्लभ लाल जू"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        quality={100}
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                </div>

                                {/* Decorative Corners */}
                                <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-pink-600 rounded-tl-lg"></div>
                                <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-pink-600 rounded-tr-lg"></div>
                                <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-pink-600 rounded-bl-lg"></div>
                                <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-pink-600 rounded-br-lg"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="order-2"
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-pink-500/20">
                            <p
                                className="text-sm md:text-base leading-relaxed text-gray-800"
                                style={{
                                    fontFamily: 'serif',
                                    lineHeight: '1.8',
                                    textAlign: 'justify'
                                }}
                            >
                                निमग्न निकुंज विहारी अनन्या कोटि ब्रह्माडि के नायक ठा० श्री हित राधावल्लभ लाल जू को शंकर जी ने अपने दुःख श्रीहित राधावल्लभ सम्प्रदाय लाल जी को करें कर्म कीर्तन तक अपने केलाश पर्वत में सेवा किए , अनेक धक्त तक अपने सबसे प्रिय को मामने पर श्री राधावल्लभ लाल की कृपा आचें धेत्र पर प्रदान का जिनकी ज़ात प्रेम स्वरूप श्रीहित हरिवंश महोत्प्रभ जी वृंतावन में शंकर जी की विशिष्ट भंटि में ही श्री राधावल्लभ लाल जी की सेवा एवं लाल जू को लेकर । मंदिर में आज भी राधावल्लबय लाल जी ने तुझे में श्रीधाम वृंतावन में श्री हित हरिवंश महाप्रभू जी के वैराग द्वारा निधि सुन्दर नाटक से सुनार लउस्तेमय का लता है । मंदिर के गर्भ गृह में केवल श्रीहित हरिवंश महाप्रभू जी के वंशाज द्वारा निधि ध्रीराधात्मदर्शन लाल जू की नित सेवा की अनुमति है । किंतु भगवो " '' वो ज्वे " गह कर संसोधित करता है ।
                            </p>

                            {/* Decorative Bottom Element */}
                            <div className="flex items-center gap-2 mt-4">
                                <div className="h-1 flex-1 bg-gradient-to-r from-pink-600 to-transparent rounded-full"></div>
                                <Sparkles className="w-5 h-5 text-pink-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
