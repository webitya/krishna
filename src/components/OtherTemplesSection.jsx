"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useRef } from "react";

const templeItems = [
    {
        title: "बाद ग्राम",
        subtitle: "Baad Gram, Mathura",
        image: "/Temple Names/Baad Gram, Mathura - Birth place of Shri Hita Harivansh MahaprabhuBada village in Mathura is the.jpg",
    },
    {
        title: "सेवा कुंज",
        subtitle: "Sewa Kunj, Vrindavan",
        image: "/Temple Names/Sewa Kunj Vrindavan.jpg",
    },
    {
        title: "मानसरोवर",
        subtitle: "Mansarovar, Mant Gram",
        image: "/Temple Names/Mansarovar Mant Gram.jpeg",
    },
    {
        title: "श्री नवरंगी लाल जी",
        subtitle: "Shri Navrangi Lal ji",
        image: "/Temple Names/Shri Navrangi Lal ji.webp",
    },
];

export default function OtherTemplesSection() {
    const scrollRef = useRef(null);

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
        <section className="relative py-10 md:py-14 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-2 leading-tight">
                            राधावल्लभी संप्रदाय के अन्य मुख्य मंदिर
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base font-medium tracking-wide">
                            Other Major Temples of the Radhavallabha Sampradaya
                        </p>
                        <div className="w-16 h-1 bg-yellow-400 mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group px-1 md:px-12">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-gray-400 hover:text-yellow-600 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-md hidden md:flex active:scale-95"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-gray-400 hover:text-yellow-600 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-md hidden md:flex active:scale-95"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {templeItems.map((temple, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[240px] md:w-[300px] snap-center group/card"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={temple.image}
                                            alt={temple.title}
                                            fill
                                            className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-500" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                                            <MapPin size={16} className="text-yellow-600" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-4 md:p-5 flex flex-col items-center text-center">
                                        <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-1 leading-tight group-hover/card:text-yellow-700 transition-colors">
                                            {temple.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm font-medium">
                                            {temple.subtitle}
                                        </p>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 w-full bg-yellow-400/0 group-hover/card:bg-yellow-400 transition-colors duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Indicators */}
                    <div className="flex justify-center gap-1.5 mt-2 md:hidden">
                        {templeItems.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-yellow-300 transition-colors" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
