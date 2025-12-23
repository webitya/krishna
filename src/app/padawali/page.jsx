"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    X,
    ArrowLeft,
    Copy,
    Check,
    ChevronRight,
    Sparkles,
    Scroll,
    Feather,
    ChevronDown
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

const categories = ["All", ...new Set(padavaliData.map(item => item.category))];

const parchmentBg = "https://www.transparenttextures.com/patterns/aged-paper.png";

export default function Padawali() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPad, setSelectedPad] = useState(null);
    const [padContent, setPadContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <div className="min-h-screen bg-[#fffcf5] selection:bg-[#8b3d8b]/20 selection:text-[#8b3d8b] font-serif relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 pointer-events-none z-0" style={{ backgroundImage: `url(${parchmentBg})` }} />

            {/* Immersive Compact Hero Section */}
            <div className="relative pt-24 pb-12 px-6 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#8b3d8b]/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#8b3d8b]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-4xl md:text-6xl font-black text-[#2a1b1b] mb-4 tracking-tight drop-shadow-sm">
                            Pada<span className="text-[#8b3d8b]">wali</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-lg mx-auto relative group mt-6"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8b3d8b]/20 via-amber-500/20 to-[#8b3d8b]/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                        <div className="relative">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b3d8b]/40 group-focus-within:text-[#8b3d8b] transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search sacred verses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-5 py-3 rounded-xl bg-white/80 backdrop-blur-xl border border-[#8b3d8b]/10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8b3d8b]/20 shadow-lg shadow-[#8b3d8b]/5 text-[#2a1b1b] placeholder:text-[#5d4037]/40 text-base transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Compact Category Navigation - Responsive */}
            <div className="sticky top-4 z-40 mb-8 px-4">
                {/* Mobile Dropdown */}
                <div className="md:hidden relative max-w-[280px] mx-auto z-50">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between px-5 py-3 bg-white/90 backdrop-blur-xl border border-[#8b3d8b]/10 rounded-2xl shadow-lg shadow-[#8b3d8b]/5 text-[#2a1b1b] font-bold text-xs uppercase tracking-widest active:scale-95 transition-all duration-200"
                    >
                        <span className="truncate">{selectedCategory}</span>
                        <ChevronDown size={14} className={`text-[#8b3d8b] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95, transformOrigin: "top" }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#fffcf5]/95 backdrop-blur-xl border border-[#8b3d8b]/10 rounded-2xl shadow-xl overflow-hidden max-h-[60vh] overflow-y-auto custom-scrollbar"
                            >
                                <div className="p-1.5 space-y-1">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-between ${selectedCategory === cat
                                                    ? "bg-[#8b3d8b] text-white shadow-md"
                                                    : "text-[#5d4037]/70 hover:bg-[#8b3d8b]/5 hover:text-[#8b3d8b]"
                                                }`}
                                        >
                                            {cat}
                                            {selectedCategory === cat && <Check size={14} className="text-white" />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop/Tablet Horizontal List */}
                <div className="hidden md:block max-w-fit mx-auto px-2 py-1.5 bg-white/90 backdrop-blur-xl border border-[#8b3d8b]/10 rounded-full shadow-lg shadow-[#8b3d8b]/5">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all duration-300 relative overflow-hidden group ${selectedCategory === cat
                                    ? "text-white shadow-md"
                                    : "text-[#5d4037]/60 hover:text-[#8b3d8b] hover:bg-[#8b3d8b]/5"
                                    }`}
                            >
                                {selectedCategory === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#8b3d8b]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Card Grid - Refined & Compact */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                onClick={() => setSelectedPad(item)}
                                className="group relative aspect-[4/5] bg-white rounded-lg cursor-pointer perspective-1000"
                            >
                                {/* Card Styling - Parchment Look */}
                                <div className="absolute inset-0 bg-[#fffcf5] border border-[#d7ccc8] shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#8b3d8b]/10 group-hover:-translate-y-1 rounded-lg overflow-hidden">
                                    {/* Inner Border */}
                                    <div className="absolute inset-1.5 border border-[#8b3d8b]/5 rounded-[4px] pointer-events-none" />

                                    {/* Content Container */}
                                    <div className="h-full flex flex-col items-center justify-between p-6 relative z-10">
                                        {/* Top Decoration */}
                                        <div className="w-10 h-10 rounded-full bg-[#8b3d8b]/5 flex items-center justify-center text-[#8b3d8b]/60 group-hover:scale-110 group-hover:bg-[#8b3d8b] group-hover:text-white transition-all duration-500">
                                            <Scroll size={16} className="stroke-[1.5]" />
                                        </div>

                                        {/* Title Area */}
                                        <div className="text-center w-full flex-grow flex flex-col justify-center">
                                            <span className="text-[9px] font-bold text-[#8b3d8b]/40 uppercase tracking-[0.2em] block mb-3">
                                                {item.category}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-black text-[#2a1b1b] leading-tight py-4  group-hover:text-[#8b3d8b] transition-colors duration-300 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[9px] text-[#5d4037]/50 font-bold uppercase tracking-widest mt-2">
                                                {item.theme}
                                            </p>
                                        </div>

                                        {/* Action Button - Always Visible */}
                                        <div className="w-full text-center mt-2">
                                            <button className="px-5 py-2 rounded-full bg-[#8b3d8b]/5 border border-[#8b3d8b]/10 text-[#8b3d8b] text-[10px] font-bold uppercase tracking-widest group-hover:bg-[#8b3d8b] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2 mx-auto w-fit">
                                                Read Verse
                                                <ChevronRight size={12} />
                                            </button>
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
                        className="text-center py-32"
                    >
                        <div className="w-20 h-20 bg-[#fffcf5] border-2 border-dashed border-[#d7ccc8] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Feather size={28} className="text-[#d7ccc8]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#5d4037] mb-1">No verses found</h3>
                        <p className="text-[#5d4037]/50 font-medium text-sm">Try searching for a different keyword</p>
                    </motion.div>
                )}
            </div>

            {/* Fullscreen Reader Modal */}
            <AnimatePresence>
                {selectedPad && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-[#2a1b1b]/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#fffcf5] w-full max-w-4xl h-full md:h-[90vh] md:rounded-3xl overflow-hidden flex flex-col relative shadow-2xl"
                            style={{ backgroundImage: `url(${parchmentBg})` }}
                        >
                            {/* Decorative Border Frame */}
                            <div className="absolute inset-3 border border-[#8b3d8b]/10 md:rounded-[20px] pointer-events-none z-0" />

                            {/* Header */}
                            <div className="px-6 py-4 border-b border-[#8b3d8b]/10 flex items-center justify-between bg-[#fffcf5]/90 backdrop-blur-md sticky top-0 z-20">
                                <button
                                    onClick={() => setSelectedPad(null)}
                                    className="p-2 hover:bg-[#8b3d8b]/5 rounded-full text-[#5d4037] transition-colors"
                                >
                                    <ArrowLeft size={24} />
                                </button>

                                <div className="hidden md:flex flex-col text-center">
                                    <h2 className="text-lg font-bold text-[#2a1b1b]">{selectedPad.title}</h2>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 hover:bg-[#8b3d8b]/5 rounded-full text-[#5d4037] transition-colors"
                                        title="Copy text"
                                    >
                                        {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 px-6 md:px-20 py-10 md:py-16">
                                {isLoading ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Sparkles className="text-[#8b3d8b]/40" size={48} />
                                            </motion.div>
                                            <p className="text-[#8b3d8b]/60 font-medium text-sm tracking-widest uppercase">Loading Verse...</p>
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="max-w-2xl mx-auto"
                                    >
                                        <div className="text-center mb-8 md:hidden">
                                            <h2 className="text-2xl font-black text-[#2a1b1b] mb-2">{selectedPad.title}</h2>
                                            <div className="w-12 h-1 bg-[#8b3d8b] mx-auto rounded-full opacity-20" />
                                        </div>

                                        <div className="text-lg md:text-xl leading-[1.8] md:leading-[2] text-[#2a1b1b] text-center font-medium whitespace-pre-wrap selection:bg-[#8b3d8b]/20">
                                            {padContent}
                                        </div>

                                        <div className="mt-16 pt-8 border-t border-[#8b3d8b]/10 text-center">
                                            <p className="text-3xl font-serif text-[#8b3d8b]/20 mb-3">❋</p>
                                            <p className="text-[#8b3d8b] font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">Radhe Radhe</p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { 
                    background: rgba(139, 61, 139, 0.2); 
                    border-radius: 10px; 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
                    background: rgba(139, 61, 139, 0.4); 
                }
            `}</style>
        </div>
    );
}
