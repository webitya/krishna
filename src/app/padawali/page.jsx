"use client";

import { motion } from "framer-motion";
import { Music, Mic2, FileText } from "lucide-react";

export default function Padawali() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen text-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Devotional Lyrics</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Padawali</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Sing the glories of the divine. A collection of sacred padas and bhajans.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#FF9933]/50 transition-colors group cursor-pointer shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-white text-[#FF9933] flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
                                    <Music className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-black">Kirtan Title {item}</h3>
                            </div>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                                "Shri Radha Vallabh Lal ki Jai... (Lyrics preview goes here). Immerse in the melody of love..."
                            </p>
                            <div className="flex items-center justify-between text-sm font-bold">
                                <span className="text-black group-hover:text-[#FF9933] transition-colors flex items-center gap-2">
                                    View Lyrics <FileText className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
