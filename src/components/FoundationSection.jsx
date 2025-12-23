"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

// Images are referenced directly from public folder

const foundationItems = [
    {
        title: "गौ माता सेवा",
        subtitle: "Gau Seva & Donation",
        image: "/foundation/गौ सेवा.jpg",
        bgColor: "bg-orange-50",
        gradient: "from-orange-50 to-orange-100/40",
        borderColor: "hover:border-orange-200",
        shadowColor: "hover:shadow-orange-100"
    },
    {
        title: "साधु सेवा",
        subtitle: "Sadhu Seva",
        image: "/seva/साधु संत सेवा मनोरथ.webp",
        bgColor: "bg-amber-50",
        gradient: "from-amber-50 to-amber-100/40",
        borderColor: "hover:border-amber-200",
        shadowColor: "hover:shadow-amber-100"
    },
    {
        title: "यमुना मार्जन सेवा",
        subtitle: "Yamuna Ji Cleaning Seva",
        image: "/foundation/यमुना मार्जन सेवा.jpg",
        bgColor: "bg-blue-50",
        gradient: "from-blue-50 to-blue-100/40",
        borderColor: "hover:border-blue-200",
        shadowColor: "hover:shadow-blue-100"
    },
    {
        title: "वृक्षा रोपण",
        subtitle: "Tree Plantation",
        image: "/foundation/वृक्षा रोपण.png",
        bgColor: "bg-green-50",
        gradient: "from-green-50 to-green-100/40",
        borderColor: "hover:border-green-200",
        shadowColor: "hover:shadow-green-100"
    },
    {
        title: "वस्त्र वितरण",
        subtitle: "Cloth Distribution",
        image: "/foundation/वस्त्र वितरण सेवा.jpeg",
        bgColor: "bg-pink-50",
        gradient: "from-pink-50 to-pink-100/40",
        borderColor: "hover:border-pink-200",
        shadowColor: "hover:shadow-pink-100"
    },
    {
        title: "ब्रज 84 कोस यात्रा",
        subtitle: "Braj 84 kos Yatra",
        image: "/foundation/ब्रज चौरासी कोस यात्रा.jpg",
        bgColor: "bg-red-50",
        gradient: "from-red-50 to-red-100/40",
        borderColor: "hover:border-red-200",
        shadowColor: "hover:shadow-red-100"
    },
    {
        title: "चिकित्सा शिविर",
        subtitle: "Medical Camp",
        image: "/foundation/चिकित्सा शिविर.png",
        bgColor: "bg-cyan-50",
        gradient: "from-cyan-50 to-cyan-100/40",
        borderColor: "hover:border-cyan-200",
        shadowColor: "hover:shadow-cyan-100"
    },
];

// Reusable Card Component
const FoundationCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group/card h-full"
    >
        <div className={`relative h-full bg-gradient-to-br ${item.gradient} border border-white/60 ${item.borderColor} shadow-sm hover:shadow-lg ${item.shadowColor} rounded-3xl p-5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}>

            {/* Image Container */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full p-1 bg-white/40 shadow-inner group-hover/card:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 64px, 80px"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-1.5 w-full relative z-10">
                <h3 className="text-sm md:text-base font-bold text-gray-900 font-serif leading-tight group-hover/card:text-[#8b3d8b] transition-colors">
                    {item.title}
                </h3>

                <p className="text-gray-600/90 text-[10px] md:text-xs font-medium tracking-wide uppercase">
                    {item.subtitle}
                </p>
            </div>

            {/* Hover Indicator */}
            <div className="absolute bottom-3 opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/card:translate-y-0">
                <div className="w-1 h-1 rounded-full bg-gray-400/50" />
            </div>
        </div>
    </motion.div>
);

export default function FoundationSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth / 2;
            const scrollTo =
                direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8b3d8b] mb-2">
                            श्री ब्रज हित शरणम् फाउंडेशन
                        </h2>
                        <div className="w-12 h-0.5 bg-purple-200 rounded-full" />
                    </motion.div>
                </div>

                {/* Grid for Mobile - Non-Carousel */}
                <div className="grid grid-cols-2 gap-3 md:hidden mb-4">
                    {foundationItems.map((item, index) => (
                        <div key={index} className="pt-1">
                            <FoundationCard item={item} index={index} />
                        </div>
                    ))}
                </div>

                {/* Carousel for Desktop */}
                <div className="relative group px-1 md:px-8 hidden md:block">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md text-gray-700 hover:text-[#8b3d8b] rounded-full flex items-center justify-center transition-all border border-purple-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg active:scale-95 group/btn"
                    >
                        <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md text-gray-700 hover:text-[#8b3d8b] rounded-full flex items-center justify-center transition-all border border-purple-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg active:scale-95 group/btn"
                    >
                        <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {foundationItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[160px] md:w-[200px] snap-center pt-4 pb-8 px-2"
                            >
                                <FoundationCard item={item} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop Indicators */}
                    <div className="flex justify-center gap-1.5 mt-0">
                        {foundationItems.map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-purple-100" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
