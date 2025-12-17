"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen text-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Get in Touch</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to answer your questions and welcome you to our community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 p-8 lg:p-12 rounded-2xl border border-gray-100">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-black mb-6 border-b-2 border-[#FF9933] inline-block pb-2">Information</h3>
                            <p className="text-gray-600 mb-8">Feel free to reach out to us for any inquiries regarding sewa, accommodation, or spiritual guidance.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center rounded-lg shrink-0 border border-[#FF9933]/20">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-lg">Our Location</h4>
                                    <p className="text-gray-600">Shri Dham Vrindavan, Mathura,<br />Uttar Pradesh, 281121</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center rounded-lg shrink-0 border border-[#FF9933]/20">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-lg">Phone Number</h4>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center rounded-lg shrink-0 border border-[#FF9933]/20">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-lg">Email Address</h4>
                                    <p className="text-gray-600">contact@shriradhavallabhlal.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF9933]"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF9933] focus:outline-none transition-colors text-black" placeholder="Krishna" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF9933] focus:outline-none transition-colors text-black" placeholder="Das" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF9933] focus:outline-none transition-colors text-black" placeholder="devotee@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF9933] focus:outline-none transition-colors text-black" placeholder="Hare Krishna..."></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-[#FF9933] text-black font-bold uppercase tracking-widest hover:bg-black hover:text-[#FF9933] transition-colors flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
