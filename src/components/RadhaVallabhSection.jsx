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


                {/* Main Content Grid - Responsive Layout with Image on Right (Desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-10 items-center max-w-[1600px] mx-auto pt-4">

                    {/* Text Content - Left Side (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8 order-2 lg:order-1"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-5 md:p-8 rounded-3xl shadow-xl border border-pink-100">
                            {/* Title Section Inside Content Box */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-5 h-5 text-pink-600 animate-pulse" />
                                    <span className="h-px w-10 bg-gradient-to-r from-pink-600 to-transparent rounded-full"></span>
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 font-serif leading-tight">
                                    ठा० श्री हित राधावल्लभ लाल जू
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <p
                                    className="text-base md:text-lg leading-relaxed text-gray-800 text-justify font-serif"
                                    style={{ lineHeight: '1.8' }}
                                >
                                    निभृत निकुंज विलासी अनन्य कोटि ब्रह्मांड के नायक ठा॰ श्री हित राधावल्लभ लाल जु को शंकर जी ने अपने इष्ट श्रीहित राधावल्लभ लाल जी की कई कोटि कल्पों तक अपने कैलाश पर्वत में सेवा की , अपने भक्त के अपने सबसे प्रिय को मांगने पर श्री राधावल्लभ लाल की कृपा अपने भक्त पर प्रदान की ।
                                    <br /><br />
                                    जिनकी युगल प्रेम स्वरूप श्री हित हरिवंश महाप्रभु जी वृंदावन में शंकर जी की विधिवत रीति से श्री राधावल्लभ लाल जी को सेवा एवं लाड़ लड़ाया ।
                                </p>
                                <p
                                    className="text-base md:text-lg leading-relaxed text-gray-800 text-justify font-serif"
                                    style={{ lineHeight: '1.8' }}
                                >
                                    ये परंपरा आज भी राधावल्लभ लाल जी मंदिर में श्री हित हरिवंश महाप्रभु जी के वंशजो द्वारा विधि पूर्वक ठाट बाट से लाड़ लड़ाया जाता है । मंदिर के गर्भ गृह में केवल श्री हित हरिवंश महाप्रभु जी के वंशज श्रीहित कुल के आचार्य स्वरूप ही प्रवेश एवं श्रीजी की निज सेवा की अनुमति है ।
                                </p>
                            </div>

                            {/* Decorative Bottom Element */}
                            <div className="flex items-center gap-3 mt-8">
                                <div className="h-1 w-24 bg-gradient-to-r from-pink-600 to-transparent rounded-full"></div>
                                <Sparkles className="w-5 h-5 text-pink-600" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Image - Right Side (Desktop) - More Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-[380px]">
                            {/* Glowing Background Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative bg-white p-2 md:p-3 rounded-2xl shadow-2xl border-2 border-pink-500/20 group-hover:border-pink-500/40 transition-all duration-500 overflow-hidden">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                                    <Image
                                        src="/pic2.jpg"
                                        alt="ठा० श्री हित राधावल्लभ लाल जू"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        quality={100}
                                        priority
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Decorative Accents */}
                                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/80 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/80 rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
