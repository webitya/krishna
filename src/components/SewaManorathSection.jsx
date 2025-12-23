"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const sewaItems = [
    {
        title: "व्याहुला (विवाह) उत्सव सेवा मनोरथ",
        image: "/seva/व्याहुला उत्सव दर्शन.jpg",
    },
    {
        title: "इत्र सेवा मनोरथ",
        image: "/seva/itarseva.jpeg",
    },
    {
        title: "श्रीजी पोशाक सेवा मनोरथ",
        image: "/seva/श्रीजी पोशाक सेवा मनोरथ.jpg",
    },
    {
        title: "अष्टयाम भोग सेवा मनोरथ",
        image: "/seva/अष्ट्यम भोग सेवा मनोरथ.jpg",
    },
    {
        title: "साधु संत सेवा मनोरथ",
        image: "/seva/साधु संत सेवा मनोरथ.webp",
    },
    {
        title: "56 भोग सेवा मनोरथ",
        image: "/seva/अन्नकूट 56 भोग व राजभोग 56.jpg",
    },
      {
        title: "प्रसादी वितरण सेवा मनोरथ",
        image: "/seva/आज श्री राधावल्लभ जी मे भक्तो को श्री जी  प्रसादी वितरण .webp",
    },
    {
        title: "फूल बंगला मनोरथ सेवा",
        image: "/seva/संध्या व फूल बंगला दर्शन .jpg",
    },
];

// Reusable Card Component
const SewaCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group/card relative bg-white/95 backdrop-blur-sm rounded-xl md:rounded-[1.5rem] p-2 md:p-3 shadow-[0_10px_30px_rgba(180,83,9,0.1)] hover:shadow-[0_20px_40px_rgba(180,83,9,0.2)] transition-all duration-500 hover:-translate-y-1.5 border border-white/60 h-full flex flex-col"
    >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:rounded-[1.2rem] shadow-sm mb-2 md:mb-4 shrink-0">
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover/card:scale-110 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-transparent to-transparent opacity-50" />

            {/* Decorative Corner */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/60 rounded-tr-xl opacity-0 group-hover/card:opacity-100 transition-all duration-500 scale-90 group-hover/card:scale-100 hidden md:block" />
        </div>

        {/* Text Content */}
        <div className="px-1 pb-1 md:pb-2 text-center flex-grow flex flex-col justify-center">
            <h3 className="text-[11px] md:text-lg font-serif font-bold text-orange-900 leading-tight mb-1 md:mb-1.5 line-clamp-2">
                {item.title}
            </h3>
            <div className="w-8 h-1 bg-amber-400 mx-auto rounded-full scale-0 group-hover/card:scale-100 transition-transform duration-500" />
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 to-yellow-100 rounded-xl md:rounded-[1.6rem] blur-lg opacity-0 group-hover/card:opacity-20 transition-opacity -z-10" />
    </motion.div>
);

export default function SewaManorathSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-8 md:py-10 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200 rounded-full blur-[100px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-6 md:mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-950 mb-2 leading-tight drop-shadow-sm">
                            श्रीजी के चरणकमलों पर समर्पित सेवा मनोरथ
                        </h2>
                        <p className="text-orange-900/70 text-base md:text-lg font-medium tracking-wide max-w-xl">
                            Services devoted at Shri Radhavallabh lal ji's Lotus Feet
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="w-10 h-px bg-orange-900/30" />
                            <div className="w-2 h-2 rotate-45 border border-orange-900/40" />
                            <div className="w-10 h-px bg-orange-900/30" />
                        </div>
                    </motion.div>
                </div>

                {/* Grid for Mobile - Non-Carousel */}
                <div className="grid grid-cols-2 gap-3 md:hidden mb-4">
                    {sewaItems.map((item, index) => (
                        <SewaCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Carousel for Desktop */}
                <div className="relative group px-2 md:px-8 hidden md:block">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/40 hover:bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center text-orange-900 transition-all border border-white/40 shadow-xl opacity-0 group-hover:opacity-100 flex active:scale-95"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/40 hover:bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center text-orange-900 transition-all border border-white/40 shadow-xl opacity-0 group-hover:opacity-100 flex active:scale-95"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {sewaItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[220px] md:w-[280px] snap-center pt-2"
                            >
                                <SewaCard item={item} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop Indicators */}
                    <div className="flex justify-center gap-2 mt-2">
                        {sewaItems.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-900/20" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
