"use client";

import { motion } from "framer-motion";
import { Clock, Sun, Moon, Sunrise, Sunset, Sparkles, Instagram, ExternalLink } from "lucide-react";

const sewaSchedule = [
    { sewa: "मंगला आरती", time: "प्रात: 5:30 बजे से 6:15 बजे तक", icon: Sunrise },
    { sewa: "धूप आरती", time: "सुबह 9:15 बजे से 9:30 बजे तक", icon: Sun },
    { sewa: "श्रृंगार आरती", time: "सुबह 9:45 बजे से 10:30 बजे तक", icon: Sun },
    { sewa: "राजभोग आरती", time: "दोपहर 12:30 बजे से 1:15 बजे तक", icon: Sun },
    { sewa: "उत्थापन आरती", time: "शाम 5:30 बजे से 5:45 बजे तक", icon: Sunset },
    { sewa: "संध्या आरती", time: "शाम 6:00 बजे से 6:45 बजे तक", icon: Sunset },
    { sewa: "शयन आरती", time: "रात्रि 8:30 बजे से 9:00 बजे तक", icon: Moon },
];

export default function AshtyamSewaSection() {
    return (
        <section className="relative py-8 bg-[#fff5f7] overflow-hidden">
            {/* Soft Pink Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/60 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2 mix-blend-multiply" />

            <div className="w-full px-2 md:px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center w-full mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-bold tracking-wider mb-3 border border-pink-100 shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            Eight-Times Service Ritual
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-pink-950 font-serif mb-2">
                            अष्टयाम सेवा पद्धति
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-3" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-pink-900/70 leading-relaxed font-serif max-w-2xl mx-auto"
                    >
                        श्री हित राधावल्लभ लाल जू मंदिर विश्व का एकमात्र मंदिर है जहाँ नित्य अष्ट पहर अष्टयाम होती है।
                        <br className="hidden md:block" />
                        श्री राधावल्लभ लाल जू के 7 आरती एवं 5 भोग नित्य होती है।
                    </motion.p>
                </div>

                {/* Structured Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(255,182,193,0.3)] border border-pink-200 overflow-hidden ring-1 ring-pink-50 rounded-xl"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-12 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-sm md:text-base font-bold font-serif border-b border-pink-200">
                        <div className="col-span-5 md:col-span-4 p-3 md:p-4 text-center border-r border-pink-400/30 flex items-center justify-center gap-2">
                            <span>सेवा/आरती का नाम</span>
                        </div>
                        <div className="col-span-7 md:col-span-5 p-3 md:p-4 text-center border-r border-pink-400/30 flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4 opacity-90" />
                            <span>समय (Time)</span>
                        </div>
                        <div className="hidden md:flex col-span-3 p-3 md:p-4 text-center items-center justify-center gap-2">
                            <span>दर्शन (Darshan)</span>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-pink-100">
                        {sewaSchedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * index }}
                                className="grid grid-cols-12 hover:bg-pink-50/60 transition-colors duration-300 group items-stretch text-sm md:text-base"
                            >
                                {/* Service Name Column */}
                                <div className="col-span-5 md:col-span-4 p-3 md:p-4 flex items-center justify-center md:justify-start gap-2 border-r border-pink-100">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300 shadow-sm hidden sm:flex">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-pink-900 font-serif group-hover:text-pink-700 transition-colors text-center md:text-left">
                                        {item.sewa}
                                    </span>
                                </div>

                                {/* Time Column */}
                                <div className="col-span-7 md:col-span-5 p-3 md:p-4 flex items-center justify-center border-r border-pink-100">
                                    <span className="text-pink-800/80 font-medium font-serif text-center">
                                        {item.time}
                                    </span>
                                </div>

                                {/* Action Column (Desktop & Mobile Mixed) */}
                                <div className="col-span-12 md:col-span-3 p-2 md:p-4 flex items-center justify-center bg-pink-50/30 md:bg-transparent border-t md:border-t-0 border-pink-100 md:border-l-0">
                                    <a
                                        href="https://www.instagram.com/shrihitradhavallabhlal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg text-xs md:text-sm font-medium hover:shadow-md hover:shadow-pink-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        <Instagram className="w-3.5 h-3.5" />
                                        दर्शन करें
                                        <ExternalLink className="w-3 h-3 opacity-70" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
