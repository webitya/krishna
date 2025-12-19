"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0);

    const slides = [
        {
            id: 1,
            image: "/slider1.jpg",
            title: "श्रीराधावल्लभ सम्प्रदाय",
            subtitle: "आचार्य श्री हित सूरज गोस्वामी",
            description: "मुख्य सेवायत राधेश्याम अधिकारी निज महल चौबे",
        },
        {
            id: 2,
            image: "/slider2.jpg",
            title: "श्रीराधावल्लभ सम्प्रदाय",
            subtitle: "आचार्य श्री हित सूरज गोस्वामी",
            description: "मुख्य सेवायत राधेश्याम अधिकारी निज महल चौबे",
        },
        {
            id: 3,
            image: "/slider3.jpg",
            title: "श्रीराधावल्लभ सम्प्रदाय",
            subtitle: "आचार्य श्री हित सूरज गोस्वामी",
            description: "मुख्य सेवायत राधेश्याम अधिकारी निज महल चौबे",
        },
        {
            id: 4,
            image: "/slider4.jpg",
            title: "श्रीराधावल्लभ सम्प्रदाय",
            subtitle: "आचार्य श्री हित सूरज गोस्वामी",
            description: "मुख्य सेवायत राधेश्याम अधिकारी निज महल चौबे",
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 12000);
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 12000);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 12000);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <section className="relative w-full h-screen max-h-[190px] md:max-h-none md:h-[calc(100vh-3.5rem)] overflow-hidden bg-white">
            {/* Main Carousel */}
            <div className="relative w-full h-full">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 },
                        }}
                        className="absolute inset-0"
                    >
                        {/* Background Image - No overlays */}
                        <div className="absolute inset-0">
                            <Image
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                fill
                                className="object-cover"
                                priority
                                quality={100}
                            />
                        </div>

                        {/* Text Overlay - Compact for Mobile */}
                        <div className="absolute bottom-4 md:bottom-28 lg:bottom-40 left-3 md:left-16 lg:left-24 z-20 max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mb-1 md:mb-4 flex items-center gap-1 md:gap-2"
                            >
                                <Sparkles className="w-3 h-3 md:w-6 lg:w-8 md:h-6 lg:h-8 text-yellow-400 animate-pulse" />
                                <div className="h-px w-8 md:w-16 lg:w-24 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-sm md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white mb-1 md:mb-3 lg:mb-6 drop-shadow-2xl leading-tight"
                                style={{
                                    fontFamily: "serif",
                                    textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)",
                                }}
                            >
                                {slides[currentSlide].title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="text-xs md:text-lg lg:text-2xl xl:text-4xl text-white mb-1 md:mb-2 lg:mb-3 drop-shadow-xl font-semibold hidden md:block"
                                style={{
                                    fontFamily: "serif",
                                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                                }}
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                className="text-xs md:text-base lg:text-xl xl:text-2xl text-white/95 drop-shadow-lg hidden md:block"
                                style={{
                                    fontFamily: "serif",
                                    textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                                }}
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                                className="mt-1 md:mt-4 flex items-center gap-1 md:gap-2 hidden md:flex"
                            >
                                <div className="h-px w-8 md:w-16 lg:w-24 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                                <Sparkles className="w-3 h-3 md:w-6 lg:w-8 md:h-6 lg:h-8 text-yellow-400 animate-pulse" />
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Compact Square on Desktop, Round on Mobile */}
                <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevSlide}
                    className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-white backdrop-blur-md p-1.5 md:p-2.5 rounded-full md:rounded-md transition-all duration-300 border-2 border-yellow-400/30 hover:border-yellow-400/60 shadow-lg md:shadow-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800 md:text-yellow-500" strokeWidth={3} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSlide}
                    className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-white backdrop-blur-md p-1.5 md:p-2.5 rounded-full md:rounded-md transition-all duration-300 border-2 border-yellow-400/30 hover:border-yellow-400/60 shadow-lg md:shadow-md"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800 md:text-yellow-500" strokeWidth={3} />
                </motion.button>
            </div>

            {/* Thumbnail Navigation - Hidden on Mobile */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden md:flex absolute bottom-6 md:bottom-12 right-6 md:right-12 z-30 gap-2 md:gap-3 bg-white/90 backdrop-blur-xl p-3 md:p-4 rounded-2xl border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            >
                {slides.map((slide, index) => (
                    <motion.button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-14 h-14 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${currentSlide === index
                            ? "ring-4 ring-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                            : "ring-2 ring-gray-300 hover:ring-yellow-300"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        {currentSlide === index && (
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
                        )}
                        {currentSlide !== index && (
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                        )}
                    </motion.button>
                ))}
            </motion.div>

            {/* Slide Indicator Dots (Mobile Only) - Compact */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 flex gap-1.5 md:hidden bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        whileTap={{ scale: 0.9 }}
                        className={`rounded-full transition-all duration-300 ${currentSlide === index
                            ? "bg-yellow-400 w-6 h-2 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                            : "bg-gray-400 hover:bg-gray-500 w-2 h-2"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 z-20">
                <motion.div
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                />
            </div>
        </section>
    );
}
