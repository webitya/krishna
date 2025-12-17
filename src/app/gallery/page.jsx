"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
    { id: 1, title: "Grand Temple", category: "Temple" },
    { id: 2, title: "Festival Celebration", category: "Events" },
    { id: 3, title: "Morning Aarti", category: "Rituals" },
    { id: 4, title: "Satsang", category: "Events" },
    { id: 5, title: "Devotees", category: "Community" },
    { id: 6, title: "Evening Lights", category: "Temple" },
    { id: 7, title: "Garden", category: "Nature" },
    { id: 8, title: "Architecture Detail", category: "Temple" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen text-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FF9933] font-bold tracking-wider uppercase mb-2 block">Visual Journey</span>
                    <h1 className="text-5xl font-serif font-bold text-black mb-6">Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Glimpses of divinity. Witness the moments of joy, devotion, and celebration.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="break-inside-avoid relative group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className={`w-full bg-gray-100 ${index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-video'} relative`}>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold">
                                    Image {img.id}
                                </div>
                                {/* Overlay - LIGHT THEME */}
                                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-black p-4 text-center">
                                    <ZoomIn className="w-8 h-8 mb-4 text-[#FF9933]" />
                                    <span className="font-bold font-serif text-xl mb-1">{img.title}</span>
                                    <span className="text-xs font-bold text-[#FF9933] uppercase tracking-widest">{img.category}</span>
                                </div>
                                {/* Border Animation */}
                                <div className="absolute inset-0 border-2 border-[#FF9933] opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal - LIGHT THEME */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 text-black hover:text-[#FF9933] transition-colors" onClick={() => setSelectedImage(null)}>
                        <X className="w-10 h-10" />
                    </button>
                    <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <div className="aspect-video w-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl border border-gray-200 relative shadow-2xl">
                            {/* Image Placeholder */}
                            <span className="text-4xl text-gray-600">Full Size: {selectedImage.title}</span>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-3xl font-serif text-black mb-2">{selectedImage.title}</h3>
                            <span className="text-[#FF9933] uppercase tracking-widest text-sm font-bold">{selectedImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
