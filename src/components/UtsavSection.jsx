"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const utsavItems = [
    {
        title: "श्री राधाष्टमी महोत्सव",
        subtitle: "Shri Radhashtami Mahotsav",
        image: "/utsav/श्री राधाष्टमी महोत्सव.jpg",
    },
    {
        title: "हितोत्सव",
        subtitle: "Hitotsav",
        image: "/utsav/हितोत्सव.jpg",
    },
    {
        title: "होली",
        subtitle: "Holi",
        image: "/utsav/होली.webp",
    },
    {
        title: "जन्माष्टमी",
        subtitle: "Janmashtami",
        image: "/utsav/जन्माष्टमी.jpg",
    },
    {
        title: "शरद पूर्णिमा",
        subtitle: "Sharad Purnima",
        image: "/utsav/शरद पूर्णिमा.jpg",
    },
    {
        title: "विवाह उत्सव",
        subtitle: "Vivah Utsav",
        image: "/utsav/विवाह उत्सव.jpg",
    },
    {
        title: "झूलन उत्सव",
        subtitle: "Jhulan Utsav",
        image: "/utsav/झूलन उत्सव.jpg",
    },
    {
        title: "पाटोत्सव (कार्तिक सुदी तेरस)",
        subtitle: "Paathoutsav (Kartik Shukla Trayodashi)",
        image: "/utsav/पाटोत्सव (कार्तिक सुदी तेरस) Paathoutsav (on Kartik Shukla Trayodashi).jpg",
    },
    {
        title: "खिचड़ी उत्सव",
        subtitle: "Khichdi Utsav",
        image: "/utsav/खिचड़ी उत्सव.jpg",
    },
    {
        title: "दीपावली",
        subtitle: "Deepawali",
        image: "/utsav/दीपावली.jpg",
    },
    {
        title: "फूल बंगला",
        subtitle: "Phool Bangla",
        image: "/utsav/फूल बंगला.jpg",
    },
    {
        title: "निर्जला एकादशी नौका विहार",
        subtitle: "Nirjala Ekadashi Boat Festival",
        image: "/utsav/निर्जला एकादशी  नौका विहार Nirjala Ekadashi Boat Festival.jpg",
    },
];

// Helper to chunk array into pairs for two rows
const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

// Reusable Card Component
const UtsavCard = ({ utsav, index, subIndex = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index * 0.1) + (subIndex * 0.1) }}
        className="group/card w-full"
    >
        <div className="relative flex items-center gap-2 md:gap-3 bg-white/95 backdrop-blur-md p-2 md:p-3 rounded-xl md:rounded-2xl border border-white/60 hover:border-amber-400/50 transition-all duration-500 hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] h-20 md:h-28 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-lg md:rounded-xl shadow-sm border border-orange-100">
                <Image
                    src={utsav.image}
                    alt={utsav.title}
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-orange-950/10 group-hover/card:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center min-w-0 pr-1">
                <h3 className="text-[11px] md:text-base font-serif font-bold text-orange-900 mb-0.5 leading-tight line-clamp-2">
                    {utsav.title}
                </h3>
                <p className="text-orange-900/40 text-[8px] md:text-xs font-medium leading-tight line-clamp-1 italic">
                    {utsav.subtitle}
                </p>
            </div>

            {/* Decoration - Hidden on mobile for extra space */}
            <div className="absolute -bottom-1 left-4 w-6 h-0.5 bg-amber-400 rounded-full scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 hidden md:block" />
        </div>
    </motion.div>
);

export default function UtsavSection() {
    const scrollRef = useRef(null);
    const utsavPairs = chunkArray(utsavItems, 2);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth;
            const scrollTo = direction === 'left'
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[100px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-6 md:mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-950 mb-2 leading-tight drop-shadow-sm">
                            राधावल्लभ संप्रदाय के मुख्य उत्सव
                        </h2>
                        <p className="text-orange-900/60 text-sm md:text-base font-medium tracking-wide">
                            Major Festivals of the Radhavallabh Sampradaya
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-12 h-px bg-orange-900/20" />
                            <Sparkles className="w-4 h-4 text-orange-800" />
                            <div className="w-12 h-px bg-orange-900/20" />
                        </div>
                    </motion.div>
                </div>

                {/* Grid for Mobile - Non-Carousel */}
                <div className="grid grid-cols-2 gap-3 md:hidden mb-4">
                    {utsavItems.map((utsav, index) => (
                        <UtsavCard key={index} utsav={utsav} index={index} />
                    ))}
                </div>

                {/* Carousel Container for Desktop */}
                <div className="relative group px-0 md:px-12 hidden md:block">
                    {/* Permanent Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/40 hover:bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center text-orange-900 transition-all border border-white/40 shadow-xl active:scale-90"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/40 hover:bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center text-orange-900 transition-all border border-white/40 shadow-xl active:scale-90"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Area - Desktop */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {utsavPairs.map((pair, index) => (
                            <div key={index} className="flex flex-col gap-4 md:gap-6 flex-shrink-0 w-[240px] md:w-[320px] snap-center">
                                {pair.map((utsav, subIndex) => (
                                    <UtsavCard key={subIndex} utsav={utsav} index={index} subIndex={subIndex} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Indicators */}
                    <div className="flex justify-center gap-1.5 mt-2">
                        {utsavPairs.map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-orange-900/20" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
