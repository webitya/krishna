"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reelIds = [
    "DN0q8oeZOu0",
    "DMqGXL3N5Ol",
    "DJZeJRGTNtf",
    "DG4ifxZvDSf",
    "DE7qiX6TVVP"
];

export default function ReelsSection() {
    const scrollRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => setIsLoaded(true);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
            const scrollTo = direction === 'left'
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-12 md:py-16 bg-white overflow-hidden">
            {/* Background Decorative Bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#8b3d8b] mb-4 leading-tight">
                            सोशल मीडिया दर्शन
                        </h2>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-0.5 bg-gray-200" />
                            <p className="text-gray-400 text-sm md:text-base font-medium tracking-widest uppercase">
                                Connect with us on Instagram
                            </p>
                            <div className="w-12 h-0.5 bg-gray-200" />
                        </div>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group px-1 md:px-12">
                    {/* Permanent Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/80 hover:bg-white text-gray-400 hover:text-[#8b3d8b] rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-lg hidden md:flex active:scale-95"
                    >
                        <ChevronLeft size={26} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/80 hover:bg-white text-gray-400 hover:text-[#8b3d8b] rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-lg hidden md:flex active:scale-95"
                    >
                        <ChevronRight size={26} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 min-h-[500px] items-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reelIds.map((id, index) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[240px] md:w-[320px] snap-center"
                            >
                                <div className="relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] group/card h-[450px] md:h-[550px] flex flex-col">
                                    {/* Instagram Reel Container */}
                                    <div className="flex-grow flex items-center justify-center bg-white overflow-hidden">
                                        <blockquote
                                            className="instagram-media w-full"
                                            data-instgrm-permalink={`https://www.instagram.com/reel/${id}/?utm_source=ig_embed&amp;utm_campaign=loading`}
                                            data-instgrm-version="14"
                                            style={{
                                                background: "#FFF",
                                                border: "0",
                                                borderRadius: "3px",
                                                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                                                margin: "0",
                                                minWidth: "326px",
                                                padding: "0",
                                                height: "100%",
                                                width: "100%",
                                                maxHeight: "100%"
                                            }}
                                        >
                                            <div style={{ padding: "16px" }}>
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="animate-pulse bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                                                        <Instagram className="text-gray-300" size={24} />
                                                    </div>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>

                                    {/* Card Footer Design */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 z-20">
                                        <Instagram size={18} className="text-white drop-shadow-md" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Progress Indicators */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {reelIds.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
