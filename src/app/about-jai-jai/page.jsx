"use client";

import { motion } from "framer-motion";
import { Star, Users, BookOpen } from "lucide-react";

export default function AboutJaiJai() {
    return (
        <div className="pt-24 pb-20 bg-white text-black font-sans">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Our Legacy</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">श्री राधा वल्लभ लाल</h1>
                    <div className="w-24 h-1 bg-[#FF9933] mx-auto"></div>
                </motion.div>

                {/* Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative border-4 border-[#FF9933]/20 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="text-[#FF9933] font-bold text-lg block mb-2">Divine Inspiration</span>
                                <p className="text-white text-xl font-serif italic">"Walking in the footsteps of the saints."</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-serif font-bold mb-6 text-black">A Journey of Devotion</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Shri Radha Vallabh Lal is not just a name; it is a movement dedicated to preserving the spiritual heritage of Vrindavan. Founded on the principles of selfless service and unconditional love, we strive to bring the divine teachings to every heart.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Our mission is to create a sanctuary where seekers can find solace, wisdom, and a connection to the supreme. Through literature, charitable acts, and community gatherings, we aim to illuminate the path of bhakti.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border border-gray-200 p-6 text-center hover:border-[#FF9933] transition-colors">
                                <h4 className="text-4xl font-bold text-[#FF9933] mb-2">50+</h4>
                                <span className="text-gray-500 font-medium uppercase text-sm tracking-wider">Years of Seva</span>
                            </div>
                            <div className="border border-gray-200 p-6 text-center hover:border-[#FF9933] transition-colors">
                                <h4 className="text-4xl font-bold text-[#FF9933] mb-2">10k+</h4>
                                <span className="text-gray-500 font-medium uppercase text-sm tracking-wider">Followers</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission/Vision */}
                <div className="bg-[#FF9933] text-black p-12 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 mx-auto bg-black/10 rounded-full flex items-center justify-center text-black mb-4">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-black/80">To spread the message of divine love and compassion to every corner of the world.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto bg-black/10 rounded-full flex items-center justify-center text-black mb-4">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Our Teachings</h3>
                            <p className="text-black/80">Preserving ancient scriptures and making spiritual wisdom accessible to all.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto bg-black/10 rounded-full flex items-center justify-center text-black mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p className="text-black/80">Building a global family of devotees united by faith and service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
