"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message);
        }
    };

    return (
        <div className="pt-28 pb-20 bg-[#fffcf5] min-h-screen relative overflow-hidden">
            {/* Modern Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF9933]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF9933]/5 rounded-full blur-[120px] -ml-48 -mb-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Modern Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6">
                            Connect with <span className="text-[#FF9933]">Divine</span> Grace
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Have questions about our sewa, accommodation, or spiritual programs? Our team is dedicated to supporting your journey.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                        {/* Info Section - Modern Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-4 space-y-4"
                        >
                            {[
                                { icon: MapPin, label: "Visit Us", val: "Shri Dham Vrindavan, Mathura,\nUP - 281121" },
                                { icon: Phone, label: "Call Us", val: "+91 81681 00515", link: "tel:+918168100515" },
                                { icon: Mail, label: "Email Us", val: "contact@brahithsharnam.org", link: "mailto:contact@brahithsharnam.org" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-[#FF9933]/10 shadow-sm hover:shadow-xl hover:shadow-[#FF9933]/5 transition-all duration-500 group"
                                >
                                    <div className="w-12 h-12 bg-[#FF9933]/10 text-[#FF9933] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        <item.icon size={22} />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
                                    {item.link ? (
                                        <a href={item.link} className="text-black font-bold text-sm md:text-base hover:text-[#FF9933] transition-colors block">
                                            {item.val}
                                        </a>
                                    ) : (
                                        <p className="text-black font-bold text-sm md:text-base whitespace-pre-line">
                                            {item.val}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        {/* Modern Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#FF9933]/10 shadow-2xl shadow-[#FF9933]/5 relative overflow-hidden h-full">
                                {/* Subtle Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/5 rounded-full blur-3xl -mr-16 -mt-16" />

                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12 flex flex-col items-center justify-center h-full"
                                        >
                                            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                                <CheckCircle size={40} />
                                            </div>
                                            <h3 className="text-3xl font-serif font-bold text-black mb-3">Message Received</h3>
                                            <p className="text-gray-500 max-w-sm mx-auto mb-8 font-medium">Radhe Radhe! Your message has been safely delivered. We will respond to you shortly.</p>
                                            <button
                                                onClick={() => setStatus("idle")}
                                                className="px-8 py-3 bg-[#FF9933] text-white rounded-full font-bold text-sm shadow-lg shadow-[#FF9933]/20 hover:bg-[#e68a2e] transition-all cursor-pointer"
                                            >
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6 relative z-10"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">First Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="w-full px-5 py-4 bg-[#fffcf5]/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#FF9933] focus:ring-4 focus:ring-[#FF9933]/5 outline-none transition-all text-sm font-medium text-black placeholder:text-gray-300 shadow-sm"
                                                        placeholder="Krishna"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">Last Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        className="w-full px-5 py-4 bg-[#fffcf5]/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#FF9933] focus:ring-4 focus:ring-[#FF9933]/5 outline-none transition-all text-sm font-medium text-black placeholder:text-gray-300 shadow-sm"
                                                        placeholder="Das"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-4 bg-[#fffcf5]/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#FF9933] focus:ring-4 focus:ring-[#FF9933]/5 outline-none transition-all text-sm font-medium text-black placeholder:text-gray-300 shadow-sm"
                                                    placeholder="devotee@example.com"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest pl-1">Your Message</label>
                                                <textarea
                                                    required
                                                    rows="4"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full px-5 py-4 bg-[#fffcf5]/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#FF9933] focus:ring-4 focus:ring-[#FF9933]/5 outline-none transition-all text-sm font-medium text-black placeholder:text-gray-300 shadow-sm resize-none"
                                                    placeholder="How can we assist you on your spiritual path?"
                                                />
                                            </div>

                                            {status === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-2xl text-xs font-semibold"
                                                >
                                                    <AlertCircle size={16} />
                                                    {errorMsg}
                                                </motion.div>
                                            )}

                                            <button
                                                disabled={status === "loading"}
                                                type="submit"
                                                className="w-full py-5 bg-[#FF9933] text-white rounded-2xl font-bold text-base shadow-xl shadow-[#FF9933]/20 hover:bg-[#e68a2e] hover:shadow-[#FF9933]/10 transition-all flex items-center justify-center gap-3 disabled:opacity-70 group cursor-pointer"
                                            >
                                                {status === "loading" ? (
                                                    <Loader2 className="animate-spin" size={20} />
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
