import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Globe, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const reelIds = [
    "DN0q8oeZOu0",
    "DMqGXL3N5Ol",
    "DJZeJRGTNtf",
    "DG4ifxZvDSf",
    "DE7qiX6TVVP"
];

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-all duration-200 ease-linear ${className}`}
        >
            {children}
        </motion.div>
    );
};

const ReelCard = ({ id, index }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: index * 0.1
            }}
            className="flex-shrink-0 w-[350px] h-[660px] snap-center py-4"
        >
            <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                {/* Loading State */}
                <AnimatePresence>
                    {!isIframeLoaded && (
                        <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center z-10">
                            <div className="w-8 h-8 rounded-full border-2 border-purple-100 border-t-purple-600 animate-spin mb-2" />
                        </div>
                    )}
                </AnimatePresence>

                <iframe
                    src={`https://www.instagram.com/reel/${id}/embed/`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    onLoad={() => setIsIframeLoaded(true)}
                />
            </div>
        </motion.div>
    );
};

export default function ReelsSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-12 md:py-16 bg-[#fffcf5] overflow-hidden">
            {/* Premium Use of Noise Texture for grainy feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

            {/* Fluid Background Elements - Toned down for compactness */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-l from-amber-200/20 to-orange-200/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Premium Header - Compact */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2a1b1a] mb-4 drop-shadow-sm">
                            उत्सव मालिका
                        </h2>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#8b3d8b]/40 to-transparent" />
                            <p className="text-[#8b3d8b] text-xs md:text-sm font-medium tracking-[0.15em] uppercase">
                                Experience Vrindavan on Instagram
                            </p>
                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#8b3d8b]/40 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Carousel */}
                <div className="relative group/carousel max-w-[1300px] mx-auto perspective-1000">
                    {/* Navigation Buttons - Smaller & Compact */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/40 backdrop-blur-xl border border-white/40 text-[#2a1b1a] rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/60 shadow-lg hidden md:flex group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/40 backdrop-blur-xl border border-white/40 text-[#2a1b1a] rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/60 shadow-lg hidden md:flex group"
                    >
                        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reelIds.map((id, index) => (
                            <ReelCard key={id} id={id} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom decorative SVG */}
                <div className="flex justify-center mt-6 opacity-30">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b3d8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
