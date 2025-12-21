"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Star, BookOpen, ShieldCheck } from "lucide-react";

export default function AboutJaiJai() {
    return (
        <div className="pt-28 pb-20 bg-[#fffcf5] min-h-screen relative overflow-hidden">
            {/* Background Zen Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9933]/5 rounded-full blur-[150px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF9933]/5 rounded-full blur-[150px] -ml-64 -mb-64" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6">
                        Jai Jai <span className="text-[#FF9933]">Shri</span>
                    </h1>
                    <div className="w-20 h-1 bg-[#FF9933] mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left Side: Portrait & Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <div className="relative group">
                                {/* Decorative Frames */}
                                <div className="absolute -inset-4 bg-[#FF9933]/10 rounded-[3rem] blur-2xl group-hover:bg-[#FF9933]/20 transition-all duration-500"></div>

                                <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-[#FF9933]/10 overflow-hidden">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                                        <Image
                                            src="/pic4.jpg"
                                            alt="आचार्य श्री हित निमिष गोस्वामी जी महाराज"
                                            fill
                                            className="object-cover transform grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Name Badge */}
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl text-center">
                                            <h2 className="text-xl font-serif font-bold text-black leading-tight">
                                                आचार्य श्री हित निमिष गोस्वामी जी महाराज
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lineage Info Card */}
                            <div className="bg-white p-8 rounded-3xl border border-[#FF9933]/10 shadow-xl shadow-[#FF9933]/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9933]/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#FF9933]/10 rounded-xl flex items-center justify-center text-[#FF9933]">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-800 uppercase tracking-widest text-xs">Divine Lineage</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    श्री हित कुल वंश परंपरा के <span className="text-[#FF9933] font-bold">19वें आचार्य</span> के रूप में महाराज श्री, अपने पूर्वज आचार्यों द्वारा स्थापित मर्यादा और प्रेम-भक्ति के सिद्धांतों का संवर्धन कर रहे हैं।
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Side: Detailed Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#FF9933]/5 border border-[#FF9933]/5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9933]/30 to-transparent"></div>

                                <div className="space-y-6 text-gray-700 leading-loose text-lg font-serif italic">
                                    <p>
                                        श्री राधावल्लभ संप्रदाय के प्रतिष्ठित आचार्य श्री हित निमिष गोस्वामी जी महाराज, एक गौरवशाली और दिव्य आचार्य परंपरा के संवाहक हैं। महाराज जी सुप्रसिद्ध आचार्य श्री हित प्रमोद चंद्र गोस्वामी जी महाराज के पौत्र तथा श्री हित आचार्य श्री हित मनमोहन लाल गोस्वामी जी महाराज के सुपुत्र हैं।
                                    </p>

                                    <p>
                                        महाराज जी, भगवान श्रीकृष्ण के बंसी (वंशी) अवतार श्री हित हरिवंश महाप्रभु के वंशज हैं। श्री हित हरिवंश महाप्रभु ने ही वृन्दावन धाम में विश्वविख्यात श्री राधावल्लभ मंदिर की स्थापना की थी तथा स्वयं श्री राधावल्लभ लाल की अष्टयाम सेवा के द्वारा निरंतर आराधना की।
                                    </p>

                                    <p>
                                        महाराज जी के सान्निध्य में श्री राधावल्लभ लाल जी को श्रद्धा एवं विधिपूर्वक अष्टयाम सेवा अर्पित की जाती है। उनके उपदेश न केवल आध्यात्मिक ज्ञान प्रदान करते हैं, बल्कि साधकों को प्रिया–प्रियतम श्री राधावल्लभ लाल जी की निष्काम सेवा और भक्ति के पथ पर अग्रसर करते हैं।
                                    </p>

                                    <div className="pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
                                        <div className="flex gap-4">
                                            <div className="text-[#FF9933] shrink-0"><Star size={20} /></div>
                                            <div>
                                                <h5 className="font-bold text-black text-sm uppercase tracking-wider mb-1">वृन्दावन महिमामृत</h5>
                                                <p className="text-xs text-gray-400">Divine discourses on Braj Dham glory.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-[#FF9933] shrink-0"><Heart size={20} /></div>
                                            <div>
                                                <h5 className="font-bold text-black text-sm uppercase tracking-wider mb-1">प्रेम-भक्ति पथ</h5>
                                                <p className="text-xs text-gray-400">Guiding lost souls towards devotion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inspirational Quote */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-[#FF9933] p-10 rounded-[2.5rem] text-white text-center relative overflow-hidden shadow-xl shadow-[#FF9933]/20"
                            >
                                <Sparkles className="absolute top-4 left-4 opacity-20" size={40} />
                                <blockquote className="relative z-10">
                                    <p className="text-2xl md:text-3xl font-serif font-bold mb-4">"ब्रज की माधुर्य भक्ति और सरलता ही रसिक परंपरा की स्पष्ट झलक है।"</p>
                                    <footer className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">— श्री हित निमिष गोस्वामी</footer>
                                </blockquote>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
