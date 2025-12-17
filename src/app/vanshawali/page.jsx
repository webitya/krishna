"use client";

import { motion } from "framer-motion";
import { GitCommit, Circle } from "lucide-react";

const lineage = [
    { year: "1500", title: "Appearance of Shri Harivansh", desc: "The divine manifestation of the founder." },
    { year: "1530", title: "Establishment of Sewa Kunj", desc: "The sacred grove of Nitya Vihar." },
    { year: "1550", title: "Writing of Radha Sudha Nidhi", desc: "The supreme glorification of Shri Radha." },
    { year: "1600", title: "Expansion of Methodology", desc: "Disciples spread the message of love." },
    { year: "Present", title: "Global Awareness", desc: "Continuing the legacy in the modern era." },
];

export default function Vanshawali() {
    return (
        <div className="pt-24 pb-20 bg-white text-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Sacred Lineage</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Vanshawali</h1>
                    <div className="w-24 h-1 bg-[#FF9933] mx-auto"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

                    <div className="space-y-12">
                        {lineage.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className="w-5/12 text-right">
                                    {index % 2 === 0 && (
                                        <>
                                            <span className="text-4xl font-bold text-gray-300 block mb-2">{item.year}</span>
                                            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </>
                                    )}
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block"></div>
                                    )}
                                </div>

                                <div className="relative z-10 w-10 h-10 bg-white rounded-full border-4 border-[#FF9933] shadow-lg flex items-center justify-center">
                                    <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                                </div>

                                <div className="w-5/12 text-left">
                                    {index % 2 !== 0 && (
                                        <>
                                            <span className="text-4xl font-bold text-gray-300 block mb-2">{item.year}</span>
                                            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
