"use client";

import { motion } from "framer-motion";
import { Clock, Sun, Moon, Sunrise, Sunset, Sparkles } from "lucide-react";

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

                {/* Schedule Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_20px_-4px_rgba(255,182,193,0.3)] border border-pink-100 overflow-hidden ring-1 ring-pink-50"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white p-3 md:p-4 shadow-md relative z-10">
                        <div className="font-bold text-lg font-serif mb-1 md:mb-0 flex items-center gap-2">
                            <span>सेवा/आरती का नाम</span>
                        </div>
                        <div className="font-bold text-lg font-serif text-right md:text-left flex items-center md:justify-end gap-2">
                            <Clock className="w-4 h-4 opacity-90" />
                            समय (Time)
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-pink-50">
                        {sewaSchedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * index }}
                                className="grid grid-cols-1 md:grid-cols-2 p-3 hover:bg-pink-50/60 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-1 md:mb-0">
                                    <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300 shadow-sm">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-base font-semibold text-pink-900 font-serif group-hover:text-pink-700 transition-colors">
                                        {item.sewa}
                                    </span>
                                </div>
                                <div className="flex items-center md:justify-end text-right pl-11 md:pl-0">
                                    <span className="text-sm md:text-base text-pink-800/80 font-medium bg-pink-50/50 px-3 py-1 rounded-md group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-pink-100 transition-all font-serif">
                                        {item.time}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
