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
        title: "काभ्यवन मंदिर",
        subtitle: "Kamyavan Temple",
        image: "/pic2.jpg", // Using as placeholder
    },
    {
        title: "रास मंडल",
        subtitle: "Raas Mandal, Vrindavan",
        image: "/pic3.jpg", // Using as placeholder
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
            const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth / 2;
            const scrollTo = direction === 'left'
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-8 md:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Compact Header */}
                <div className="text-center mb-6 md:mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-1">
                            राधावल्लभी संप्रदाय के अन्य मुख्य मंदिर
                        </h2>
                        <p className="text-gray-400 text-xs md:text-sm font-medium">
                            Other Major Temples of the Radhavallabha Sampradaya
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group px-1 md:px-12">
                    {/* Sleek Navigation */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-gray-400 hover:text-yellow-600 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-sm hidden md:flex active:scale-90"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-gray-400 hover:text-yellow-600 rounded-full flex items-center justify-center transition-all border border-gray-100 shadow-sm hidden md:flex active:scale-90"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {templeItems.map((temple, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex-shrink-0 w-[200px] md:w-[260px] snap-center pt-2"
                            >
                                <div className="bg-[#fafafa] rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group/card h-full flex flex-col hover:-translate-y-1">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={temple.image}
                                            alt={temple.title}
                                            fill
                                            className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1 rounded-lg">
                                            <MapPin size={14} className="text-yellow-600" />
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col items-center text-center">
                                        <h3 className="text-base md:text-lg font-serif font-bold text-gray-800 mb-0.5 group-hover/card:text-yellow-700 transition-colors">
                                            {temple.title}
                                        </h3>
                                        <p className="text-gray-400 text-[10px] md:text-xs">
                                            {temple.subtitle}
                                        </p>
                                    </div>
                                    <div className="h-0.5 w-full bg-yellow-400/0 group-hover/card:bg-yellow-400 transition-colors duration-500 mt-auto" />
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
