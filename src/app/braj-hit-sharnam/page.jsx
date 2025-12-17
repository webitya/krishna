"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, Star, Moon, Sun } from "lucide-react";

export default function BrajHitSharnam() {
    return (
        <div className="pt-24 pb-20 bg-white text-black relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF9933]/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF9933]/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Sanctuary</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Braj Hit Sharnam</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A spiritual retreat for the soul. Experience the tranquility and grace of the divine abode.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/10 transition-colors"></div>
                            <Sun className="w-16 h-16 text-[#FF9933] opacity-50 mb-4" />
                            <span className="text-gray-500 font-bold text-2xl absolute bottom-6">Ashram / Temple Image</span>
                        </div>
                        {/* Float Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                            <div className="flex gap-2 text-[#FF9933] mb-2">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <p className="text-black font-medium font-serif italic">"A place where time stands still and the heart finds peace."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-bold text-black mb-8 border-l-4 border-[#FF9933] pl-6">Facilities for Devotees</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-[#FF9933]/10 flex items-center justify-center text-[#FF9933] shrink-0 border border-[#FF9933]/20 group-hover:border-[#FF9933] transition-colors">
                                    <Heart className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FF9933] transition-colors">Meditation Halls</h3>
                                    <p className="text-gray-600 leading-relaxed">Quiet spaces designed for deep contemplation and prayer, away from the chaos of the world.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-[#FF9933]/10 flex items-center justify-center text-[#FF9933] shrink-0 border border-[#FF9933]/20 group-hover:border-[#FF9933] transition-colors">
                                    <MessageCircle className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FF9933] transition-colors">Satsang Bhawan</h3>
                                    <p className="text-gray-600 leading-relaxed">Large gathering areas for daily spiritual discourses and community chanting.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button className="px-8 py-3 bg-[#FF9933] text-black font-bold rounded-sm hover:bg-black hover:text-white transition-colors uppercase tracking-widest text-sm">
                                Book Your Stay
                            </button>
                            <p className="mt-4 text-gray-500 text-sm italic">*Prior reservation required for accommodation.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
