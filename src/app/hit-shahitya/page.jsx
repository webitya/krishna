"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Download } from "lucide-react";

const books = [
    { title: "Prem Ras Madira", desc: "The nectar of divine love.", author: "Shri Kripalu Ji Maharaj" },
    { title: "Radha Sudha Nidhi", desc: "Glorification of Shri Radha.", author: "Shri Hita Harivansh" },
    { title: "Yamunashtakam", desc: "Prayers to Yamuna Devi.", author: "Mahaprabhu Vallabhacharya" },
    { title: "Braj Ke Pad", desc: "Devotional songs of Braj.", author: "Various Saints" },
    { title: "Bhakti Ratnavali", desc: "Jewels of Devotion.", author: "Vishnu Puri" },
    { title: "Gita Govinda", desc: "Songs of Krishna and Radha.", author: "Jayadeva Goswami" },
];

export default function HitShahitya() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen font-sans text-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Divine Knowledge</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Hit Shahitya</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the sacred library of ancient wisdom. Immerse yourself in the writings of the great saints.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 group relative overflow-hidden hover:border-[#FF9933] transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9933]/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                            <div className="w-12 h-12 bg-white text-[#FF9933] rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                                <BookOpen className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-black mb-2 group-hover:text-[#FF9933] transition-colors">{book.title}</h3>
                            <p className="text-sm text-[#FF9933] font-medium mb-4 uppercase tracking-wide">{book.author}</p>
                            <p className="text-gray-500 mb-6 line-clamp-2">{book.desc}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <button className="text-black font-bold flex items-center gap-2 text-sm hover:gap-3 transition-all hover:text-[#FF9933]">
                                    Read More <ChevronRight className="w-4 h-4" />
                                </button>
                                <button className="text-gray-400 hover:text-[#FF9933] transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
