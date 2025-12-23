"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";

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
        title: "काम्यवन मंदिर",
        subtitle: "Kamyavan Temple",
        image: "/Temple Names/काम्यवन.jpeg",
    },
    {
        title: "रास मंडल",
        subtitle: "Raas Mandal, Vrindavan",
        image: "/Temple Names/रासमंडल.jpeg",
    },
    {
        title: "श्री नवरंगी लाल जी",
        subtitle: "Shri Navrangi Lal ji",
        image: "/Temple Names/Shri Navrangi Lal ji.webp",
    },
];

export default function OtherTemplesSection() {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

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
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-2">
                            राधावल्लभी संप्रदाय के अन्य मुख्य मंदिर
                        </h2>
                        <p className="text-amber-600 text-sm md:text-base font-medium tracking-wide">
                            Other Major Temples of the Radhavallabha Sampradaya
                        </p>

                        {/* Decorative Divider */}
                        <div className="flex justify-center items-center gap-3 mt-4">
                            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                            <div className="w-2 h-2 rotate-45 border border-amber-500 bg-amber-100" />
                            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Mobile View: 2-Column Grid */}
                <div className="md:hidden grid grid-cols-2 gap-4 pb-4">
                    {templeItems.map((temple, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="cursor-pointer"
                            onClick={() => setSelectedImage(temple)}
                        >
                            <div className="group relative bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 via-transparent to-yellow-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={temple.image}
                                        alt={temple.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 50vw, 260px"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                                        <MapPin size={12} className="text-amber-600" />
                                    </div>
                                </div>

                                <div className="p-3 flex flex-col items-center text-center relative z-10">
                                    <h3 className="text-sm font-serif font-bold text-gray-800 mb-0.5 group-hover:text-amber-700 transition-colors line-clamp-2">
                                        {temple.title}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] line-clamp-1">
                                        {temple.subtitle}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop View: Enhanced Carousel */}
                <div className="hidden md:block relative group px-12">
                    {/* Premium Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-amber-50 text-gray-400 hover:text-amber-600 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-amber-100 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-amber-50 text-gray-400 hover:text-amber-600 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-amber-100 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {templeItems.map((temple, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="flex-shrink-0 w-[280px] snap-center cursor-pointer"
                                onClick={() => setSelectedImage(temple)}
                            >
                                <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(251,191,36,0.15)] h-full flex flex-col hover:-translate-y-2">
                                    {/* Premium Gradient Border Glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-300 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />

                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={temple.image}
                                            alt={temple.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="280px"
                                        />
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <MapPin size={16} className="text-amber-600" />
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col items-center text-center relative z-10 flex-grow">
                                        <h3 className="text-lg font-serif font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors">
                                            {temple.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs">
                                            {temple.subtitle}
                                        </p>

                                        {/* Decorative Dots */}
                                        <div className="flex gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="w-1 h-1 rounded-full bg-amber-400" />
                                            <div className="w-1 h-1 rounded-full bg-amber-400" />
                                            <div className="w-1 h-1 rounded-full bg-amber-400" />
                                        </div>
                                    </div>

                                    {/* Bottom Accent Bar */}
                                    <div className="h-1.5 w-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-[110] backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Modal Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 md:p-12">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                                        {selectedImage.title}
                                    </h2>
                                    <p className="text-white/80 text-base md:text-lg flex items-center gap-2">
                                        <MapPin size={18} className="text-amber-400" />
                                        {selectedImage.subtitle}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
