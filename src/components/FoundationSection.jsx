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
    },
    {
        title: "साधु सेवा",
        subtitle: "Sadhu Seva",
        image: "/seva/साधु संत सेवा मनोरथ.webp",
        bgColor: "bg-amber-50",
    },
    {
        title: "यमुना मार्जन सेवा",
        subtitle: "Yamuna Ji Cleaning Service",
        image: "/foundation/यमुना मार्जन सेवा.jpg",
        bgColor: "bg-blue-50",
    },
    {
        title: "वृक्षा रोपण",
        subtitle: "Tree Plantation",
        image: "/foundation/वृक्षा रोपण.png",
        bgColor: "bg-green-50",
    },
    {
        title: "वस्त्र वितरण",
        subtitle: "Cloth Distribution",
        image: "/foundation/वस्त्र वितरण सेवा.jpeg",
        bgColor: "bg-pink-50",
    },
    {
        title: "ब्रज 84 कोस यात्रा",
        subtitle: "Braj 84 kos Yatra",
        image: "/foundation/ब्रज चौरासी कोस यात्रा.jpg",
        bgColor: "bg-red-50",
    },
    {
        title: "चिकित्सा शिविर",
        subtitle: "Medical Camp",
        image: "/foundation/चिकित्सा शिविर.png",
        bgColor: "bg-cyan-50",
    },
];

// Reusable Card Component
const FoundationCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group/card bg-gray-50/50 hover:bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-gray-50 hover:border-purple-50 hover:shadow-sm h-full"
    >
        {/* Icon Container */}
        {/* Image Container */}
        <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3 md:mb-4 rounded-full overflow-hidden shadow-md border-2 border-white group-hover/card:scale-110 transition-transform duration-500">
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
            />
        </div>

        {/* Text Content */}
        <div className="space-y-1">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 font-serif leading-tight">
                {item.title}
            </h3>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium">
                {item.subtitle}
            </p>
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
        <section className="relative py-8 md:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-sm flex active:scale-95"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-sm flex active:scale-95"
                    >
                        <ChevronRight size={18} />
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
                                className="flex-shrink-0 w-[200px] md:w-[220px] snap-center pt-1"
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
