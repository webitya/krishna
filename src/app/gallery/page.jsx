"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Filter, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery Data - Categorized based on existing file structure
const galleryItems = [
    // Utsav Images
    { id: 1, src: "/utsav/खिचड़ी उत्सव.jpg", title: "खिचड़ी उत्सव", category: "Utsav" },
    { id: 2, src: "/utsav/जन्माष्टमी.jpg", title: "जन्माष्टमी", category: "Utsav" },
    { id: 3, src: "/utsav/झूलन उत्सव.jpg", title: "झूलन उत्सव", category: "Utsav" },
    { id: 4, src: "/utsav/दीपावली.jpg", title: "दीपावली", category: "Utsav" },
    { id: 5, src: "/utsav/निर्जला एकादशी  नौका विहार Nirjala Ekadashi Boat Festival.jpg", title: "निर्जला एकादशी (नौका विहार)", category: "Utsav" },
    { id: 6, src: "/utsav/पाटोत्सव (कार्तिक सुदी तेरस) Paathoutsav (on Kartik Shukla Trayodashi).jpg", title: "पाटोत्सव", category: "Utsav" },
    { id: 7, src: "/utsav/फूल बंगला.jpg", title: "फूल बंगला", category: "Utsav" },
    { id: 8, src: "/utsav/विवाह उत्सव.jpg", title: "विवाह उत्सव", category: "Utsav" },
    { id: 9, src: "/utsav/शरद पूर्णिमा.jpg", title: "शरद पूर्णिमा", category: "Utsav" },
    { id: 10, src: "/utsav/श्री राधाष्टमी महोत्सव.jpg", title: "श्री राधाष्टमी महोत्सव", category: "Utsav" },
    { id: 11, src: "/utsav/हितोत्सव.jpg", title: "हितोत्सव", category: "Utsav" },
    { id: 12, src: "/utsav/होली.webp", title: "होली", category: "Utsav" },

    // Sewa Images
    { id: 13, src: "/seva/अन्नकूट 56 भोग व राजभोग दर्शन.jpg", title: "अन्नकूट 56 भोग", category: "Sewa" },
    { id: 14, src: "/seva/व्याहुला उत्सव दर्शन.jpg", title: "व्याहुला उत्सव", category: "Sewa" },
    { id: 15, src: "/seva/श्रीजी पोशाक सेवा मनोरथ.jpg", title: "श्रीजी पोशाक सेवा", category: "Sewa" },
    { id: 16, src: "/seva/श्रृंगार दर्शन.jpg", title: "श्रृंगार दर्शन", category: "Sewa" },
    { id: 17, src: "/seva/साधु संत सेवा मनोरथ.webp", title: "साधु संत सेवा", category: "Sewa" },

    // Temples
    { id: 18, src: "/Temple Names/Baad Gram, Mathura - Birth place of Shri Hita Harivansh MahaprabhuBada village in Mathura is the.jpg", title: "Baad Gram (Birthplace)", category: "Temples" },
    { id: 19, src: "/Temple Names/Mansarovar Mant Gram.jpeg", title: "Mansarovar", category: "Temples" },
    { id: 20, src: "/Temple Names/Sewa Kunj Vrindavan.jpg", title: "Sewa Kunj", category: "Temples" },
    { id: 21, src: "/Temple Names/Shri Navrangi Lal ji.webp", title: "Shri Navrangi Lal ji", category: "Temples" }
];

const categories = ["All", "Utsav", "Sewa", "Temples"];

export default function Gallery() {
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = useMemo(() => {
        return activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    return (
        <div className="pt-28 pb-20 bg-[#fffcf5] min-h-screen relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6">Gallery</h1>
                    <div className="w-20 h-1 bg-[#FF9933] mx-auto mb-8 rounded-full"></div>
                </motion.div>

                {/* Categorization Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                ? "bg-[#FF9933] text-white border-[#FF9933] shadow-lg shadow-[#FF9933]/20"
                                : "bg-white text-gray-400 border-gray-100 hover:border-[#FF9933]/30 hover:text-[#FF9933]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Responsive Masonry-style Grid */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-white"
                                onClick={() => setSelectedIdx(index)}
                            >
                                <div className="relative overflow-hidden aspect-auto">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        width={500}
                                        height={600}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                        <ZoomIn className="text-white w-8 h-8 mb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 group-hover:scale-100 transition-transform duration-300" />
                                        <p className="text-[#FF9933] text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                        <h3 className="text-white text-lg font-serif font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Premium Full-Width Modal */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedIdx(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
                            onClick={() => setSelectedIdx(null)}
                        >
                            <X size={28} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 md:left-8 z-[110] p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-sm transition-all hidden md:block"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 z-[110] p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-sm transition-all hidden md:block"
                            onClick={handleNext}
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[70vh] md:h-[80vh] pointer-events-auto">
                                <Image
                                    src={filteredItems[selectedIdx].src}
                                    alt={filteredItems[selectedIdx].title}
                                    fill
                                    className="object-contain"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="mt-8 text-center pointer-events-auto"
                            >
                                <p className="text-[#FF9933] text-xs font-bold uppercase tracking-[0.3em] mb-2">
                                    {filteredItems[selectedIdx].category}
                                </p>
                                <h3 className="text-white text-3xl md:text-5xl font-serif font-bold">
                                    {filteredItems[selectedIdx].title}
                                </h3>
                                <div className="mt-4 flex items-center justify-center gap-4 text-white/40 text-sm">
                                    <span>{selectedIdx + 1} / {filteredItems.length}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
