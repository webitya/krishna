"use client";

import { motion } from "framer-motion";
import { HandHeart, Users, Flower, Calendar } from "lucide-react";

export default function SewaManorath() {
    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Service to Divinity</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Sewa Manorath</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        "Sewa is the highest form of devotion." Join us in physical service to the saints, the temple, and the community.
                    </p>
                </motion.div>

                {/* Featured Service Opportunity */}
                <div className="bg-[#FF9933]/10 text-black rounded-3xl overflow-hidden shadow-lg border border-[#FF9933]/20 mb-20">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-gray-200 relative min-h-[400px]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                {/* Placeholder Image */}
                                <span className="text-2xl font-serif italic text-center px-4">Volunteers preparing garlands</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-12 flex flex-col justify-center">
                            <div className="inline-block px-4 py-2 bg-white border border-[#FF9933] text-[#FF9933] rounded-full text-sm font-bold mb-6 self-start">
                                Volunteer Opportunity
                            </div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Phool Bangla Sewa</h2>
                            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                                Assist in the preparation of beautiful flower decorations for the deities. This delicate service requires patience and love. Join us every morning to string garlands and arrange flowers.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-[#FF9933] text-black font-bold rounded-lg hover:bg-black hover:text-[#FF9933] transition-colors text-lg">
                                    Register as Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: HandHeart, title: "Temple Cleaning", desc: "Cleanliness is next to Godliness. Assist in maintaining the sanctity of the premises." },
                        { icon: Users, title: "Crowd Management", desc: "Help guide devotees during peak darshan hours and festivals." },
                        { icon: Calendar, title: "Festival Planning", desc: "Contribute your skills in organizing and managing major temple events." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-200 hover:border-[#FF9933] transition-colors text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#FF9933]/10 rounded-full flex items-center justify-center text-[#FF9933] mb-6 group-hover:bg-[#FF9933] group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                            <p className="text-gray-500 mb-6">{item.desc}</p>
                            <button className="text-[#FF9933] font-bold uppercase text-sm tracking-wider hover:text-black transition-colors">
                                Join Team
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
