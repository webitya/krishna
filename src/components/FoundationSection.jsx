"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Material UI Icons
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import WaterIcon from "@mui/icons-material/Water";
import ParkIcon from "@mui/icons-material/Park";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const foundationItems = [
    {
        title: "गौ माता भेंट व सेवा",
        subtitle: "Gau Seva & Donation",
        icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        title: "साधु सेवा",
        subtitle: "Sadhu Seva",
        icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        title: "यमुना सफाई सेवा",
        subtitle: "Yamuna Ji Cleaning Service",
        icon: <WaterIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "वृक्ष रोपण",
        subtitle: "Tree Plantation",
        icon: <ParkIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        title: "वस्त्र वितरण",
        subtitle: "Cloth Distribution",
        icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600",
    },
    {
        title: "ब्रज 84 कोस यात्रा",
        subtitle: "Braj 84 kos Yatra",
        icon: <TempleHinduIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
    },
    {
        title: "मेडिकल कैंप",
        subtitle: "Medical Camp",
        icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-600",
    },
];

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
        <section className="relative py-12 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#8b3d8b] mb-4">
                            हित वृंदावन सहयोग फाउंडेशन
                        </h2>
                        <div className="w-16 h-1 bg-purple-200 rounded-full" />
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group px-1 md:px-12">
                    {/* Permanent Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-md hidden md:flex active:scale-90"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-md hidden md:flex active:scale-90"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-10 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {foundationItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[240px] md:w-[280px] snap-center pt-2"
                            >
                                <div className="group/card bg-gray-50/50 hover:bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 border border-gray-100 hover:border-purple-100 hover:shadow-[0_10px_40px_rgba(139,61,139,0.08)] h-full">
                                    {/* Icon Container */}
                                    <div
                                        className={`${item.bgColor} ${item.iconColor} w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover/card:scale-110`}
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-serif leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base font-medium">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    {/* Decorative bar on hover */}
                                    <div className="w-8 h-1 bg-purple-200 rounded-full mt-6 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Indicators */}
                    <div className="flex justify-center gap-2 mt-2 md:hidden">
                        {foundationItems.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-200" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
