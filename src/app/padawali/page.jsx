"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Music,
    BookOpen,
    X,
    ArrowLeft,
    Copy,
    Share2,
    Check,
    ChevronRight,
    Sparkles,
    Heart
} from "lucide-react";

// Metadata for all Padavali files
const padavaliData = [
    { id: "ujiyari", title: "उजियारी के पद", filename: "उजियारी के पद.txt", category: "Utsav", theme: "Festival of Lights" },
    { id: "khichari", title: "खिचरी उत्सव", filename: "खिचरी उत्सव में मंगला आरती के बाद गाये जाने वाले पद.txt", category: "Utsav", theme: "Winter Festival" },
    { id: "gopashtami", title: "गोपाष्टमी गौचारन", filename: "गोपाष्टमी गौचारन के पद.txt", category: "Utsav", theme: "Cow Herding" },
    { id: "govardhan", title: "गोवर्द्धन पूजा", filename: "गोवर्द्धन पूजा के पद.txt", category: "Utsav", theme: "Mount Govardhan" },
    { id: "janm_utsav", title: "श्रीमोहनचंद्रजू जन्म बधाई", filename: "गो० श्रीमोहनचंद्रजू कौ जन्म-उत्सव-बधाई.txt", category: "Badhai", theme: "Birthday Celebration" },
    { id: "chandan", title: "चंदन उत्सव", filename: "चंदन उत्सव के पद.txt", category: "Utsav", theme: "Sandalwood Festival" },
    { id: "patostav", title: "पाटोत्सव", filename: "पाटोत्सव के पद.txt", category: "Utsav", theme: "Installation Anniversary" },
    { id: "mehndi", title: "मेंहदी सिंधारे", filename: "मेंहदी सिंधारे के पद.txt", category: "Vivah", theme: "Henna Ceremony" },
    { id: "rakhi", title: "राखी उत्सव", filename: "राखी उत्सव के पद.txt", category: "Utsav", theme: "Raksha Bandhan" },
    { id: "vrundavan_mandal", title: "वृन्दावन धाम मण्डल", filename: "वृन्दावन धाम कौ मण्डल.txt", category: "Dham", theme: "Vrindavan Glories" },
    { id: "vyahula", title: "व्याहुला", filename: "व्याहुला के पद.txt", category: "Vivah", theme: "Divine Marriage" },
    { id: "karuna_beli", title: "श्री करुणा बेली", filename: "श्री करुणा बेली.txt", category: "Sahitya", theme: "Compassion" },
    { id: "yamunashtak", title: "श्री यमुनाष्टक", filename: "श्री यमुनाष्टक.txt", category: "Stotra", theme: "Yamuna Glories" },
    { id: "ras_pancha", title: "श्री रासपञ्चाध्यायी", filename: "श्री रासपञ्चाध्यायी.txt", category: "Leela", theme: "Ras Leela" },
    { id: "vrundavan_sat", title: "श्री वृन्दावन सतलीला", filename: "श्री वृन्दावन सतलीला.txt", category: "Leela", theme: "Eternal Leela" },
    { id: "mangal_gaan", title: "श्रीहित मंगल गान", filename: "श्रीहित मंगल गान.txt", category: "Sahitya", theme: "Auspicious Songs" },
    { id: "sanjhi", title: "साँझी उत्सव", filename: "साँझी उत्सव के पद.txt", category: "Utsav", theme: "Floral Designs" },
    { id: "himritu", title: "हिमरितु फरगुल", filename: "हिमरितु में फरगुल के पद.txt", category: "Utsav", theme: "Winter Collection" },
];

const categories = ["All", "Utsav", "Leela", "Sahitya", "Vivah", "Stotra", "Badhai", "Dham"];

export default function Padawali() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPad, setSelectedPad] = useState(null);
    const [padContent, setPadContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    // Filtered data
    const filteredData = useMemo(() => {
        return padavaliData.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.theme.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Fetch content when a pad is selected
    useEffect(() => {
        if (selectedPad) {
            setIsLoading(true);
            fetch(`/padavali/${selectedPad.filename}`)
                .then(res => res.text())
                .then(text => {
                    setPadContent(text);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Error loading Padavali:", err);
                    setPadContent("Error loading content. Please try again later.");
                    setIsLoading(false);
                });
        }
    }, [selectedPad]);

    const handleCopy = () => {
        if (padContent) {
            navigator.clipboard.writeText(padContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#fffcf5] selection:bg-orange-200 selection:text-orange-900 font-sans">
            {/* Compact Header Section */}
            <div className="relative pt-20 pb-12 px-6 overflow-hidden bg-gradient-to-b from-orange-400 via-orange-300 to-orange-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-orange-950 mb-3 tracking-tighter drop-shadow-xl"
                    >
                        Padavali Library
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg font-black text-orange-900/60 uppercase tracking-[0.4em] mb-8 px-4"
                    >
                        ॥ श्री राधावल्लभ विजयतेतराम ॥
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-900/40 group-focus-within:text-orange-950 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search sacred verses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-xl bg-white/40 backdrop-blur-xl border border-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200/50 shadow-lg text-orange-950 placeholder:text-orange-900/30 text-base md:text-lg transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Compact Sticky Category Navigation */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-orange-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar py-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 border ${selectedCategory === cat
                                        ? "bg-orange-950 text-white border-orange-950 shadow-md scale-105"
                                        : "bg-white text-orange-900/60 border-orange-100 hover:border-orange-200 hover:bg-orange-50/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4, delay: index * 0.02 }}
                                onClick={() => setSelectedPad(item)}
                                className="group relative aspect-square bg-white border border-orange-100/40 rounded-[2rem] p-6 shadow-sm cursor-pointer flex flex-col items-center justify-center text-center"
                            >
                                <div className="relative z-10 w-full px-4 flex flex-col items-center">
                                    <span className="text-[9px] font-black text-orange-900/20 uppercase tracking-[0.3em] block mb-3">
                                        {item.category}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-serif font-black text-orange-950 truncate whitespace-nowrap w-full mb-1">
                                        {item.title}
                                        <Music className="inline-block ml-2 text-orange-300" size={18} />
                                    </h3>

                                    <p className="text-[10px] text-orange-900/30 font-bold uppercase tracking-widest mb-8 truncate w-full">
                                        {item.theme}
                                    </p>

                                    <div className="w-full pt-4 border-t border-orange-50 flex justify-center">
                                        <div className="px-6 py-2 rounded-full border border-orange-200 text-orange-900/60 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-orange-950 group-hover:text-white group-hover:border-orange-950 transition-all duration-300">
                                            Read Verse
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-60"
                    >
                        <div className="w-32 h-32 bg-orange-50 text-orange-100 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                            <Search size={60} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-serif font-black text-orange-950 mb-4 tracking-tight">Divine silence found</h3>
                        <p className="text-orange-900/40 text-sm md:text-lg font-bold uppercase tracking-[0.3em]">Try another sacred keyword</p>
                    </motion.div>
                )}
            </div>

            {/* Edge-to-Edge Fullscreen Reader Modal */}
            <AnimatePresence>
                {selectedPad && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-orange-950 flex items-center justify-center p-0"
                    >
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            transition={{ type: "spring", damping: 35, stiffness: 200 }}
                            className="bg-white w-full h-full overflow-hidden flex flex-col relative"
                        >
                            {/* Very Compact Fullscreen Pro Header */}
                            <div className="px-6 md:px-12 py-5 border-b border-orange-50 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-3xl z-10 shadow-sm">
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={() => setSelectedPad(null)}
                                        className="p-3 bg-orange-50 hover:bg-orange-950 hover:text-white rounded-full transition-all duration-500 text-orange-950 shadow-sm"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div>
                                        <h2 className="text-xl md:text-3xl font-serif font-black text-orange-950 tracking-tight leading-none mb-1.5">
                                            {selectedPad.title}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] md:text-xs font-black text-orange-950 bg-orange-100 px-3 py-0.5 rounded-full uppercase tracking-[0.2em]">{selectedPad.category}</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                                            <span className="text-xs md:text-sm font-black text-orange-900/40 font-serif italic">{selectedPad.theme}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:flex items-center gap-6">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleCopy}
                                        className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all shadow-xl ${copied ? "bg-green-600 text-white" : "bg-orange-950 text-white hover:shadow-orange-950/40"
                                            }`}
                                    >
                                        {copied ? <Check size={18} /> : <Copy size={18} />}
                                        {copied ? "Copied" : "Copy Verse"}
                                    </motion.button>
                                </div>
                            </div>

                            {/* Fullscreen Pro Content View with Smooth Scroll */}
                            <div className="flex-1 overflow-y-auto px-8 md:px-32 lg:px-64 py-16 md:py-24 custom-scrollbar scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] relative">
                                {/* Elegant Background Aura */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-50/10 blur-[120px] rounded-full pointer-events-none" />

                                {isLoading ? (
                                    <div className="h-full flex flex-col items-center justify-center space-y-12 relative z-10">
                                        <motion.div
                                            animate={{ scale: [1, 1.3, 1], rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center text-orange-400"
                                        >
                                            <Sparkles size={64} />
                                        </motion.div>
                                        <p className="text-orange-950/40 font-serif italic text-4xl tracking-widest animate-pulse">Invoking sacred nectar...</p>
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="max-w-5xl mx-auto relative z-10"
                                    >
                                        <div className="text-center font-serif leading-[1.8] md:leading-[2.2] text-orange-950 text-2xl md:text-3xl lg:text-4xl whitespace-pre-wrap select-all selection:bg-orange-100 selection:text-orange-950 transition-all font-medium drop-shadow-sm tracking-wide">
                                            {padContent}
                                        </div>

                                        <div className="mt-40 mb-24 flex flex-col items-center">
                                            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-12" />
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 8, -8, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{ duration: 6, repeat: Infinity }}
                                            >
                                                <Heart className="text-orange-950 opacity-[0.05]" size={140} />
                                            </motion.div>
                                            <p className="text-orange-950/30 font-serif italic text-4xl md:text-6xl tracking-[0.6em] mt-12 drop-shadow-sm">राधे राधे</p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Fullscreen Mobile Utility Bar */}
                            <div className="lg:hidden fixed bottom-12 right-12 flex flex-col gap-6">
                                <button
                                    onClick={handleCopy}
                                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-90 transition-all ${copied ? "bg-green-600 text-white" : "bg-orange-950 text-white"
                                        }`}
                                >
                                    {copied ? <Check size={32} /> : <Copy size={32} />}
                                </button>
                                <button
                                    onClick={() => setSelectedPad(null)}
                                    className="w-20 h-20 bg-white text-orange-950 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-orange-50"
                                >
                                    <X size={32} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { 
                    background: rgba(124, 45, 18, 0.1); 
                    border-radius: 10px; 
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
            `}</style>
        </div>
    );
}
