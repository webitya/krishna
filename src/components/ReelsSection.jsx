import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Play, ExternalLink } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reelIds = [
    "DN0q8oeZOu0",
    "DMqGXL3N5Ol",
    "DJZeJRGTNtf",
    "DG4ifxZvDSf",
    "DE7qiX6TVVP"
];

// Sub-component for a single Reel Card
const ReelCard = ({ id, index }) => {
    const cardRef = useRef(null);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);

    useEffect(() => {
        // Poll for iframe presence to hide skeleton
        const timer = setInterval(() => {
            if (cardRef.current && cardRef.current.querySelector('iframe')) {
                setIsIframeLoaded(true);
                clearInterval(timer);
            }
        }, 500);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
            }}
            className="flex-shrink-0 w-[240px] md:w-[280px] snap-center py-4"
        >
            <div
                ref={cardRef}
                className="relative group/card bg-white rounded-[2rem] overflow-hidden border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(139,61,139,0.12)] transition-all duration-700 h-[420px] md:h-[480px] flex flex-col group"
            >

                {/* Glassmorphism Border Overlay */}
                <div className="absolute inset-0 border-[4px] border-white/20 rounded-[2rem] pointer-events-none z-20" />

                {/* Loading Skeleton */}
                <AnimatePresence>
                    {!isIframeLoaded && (
                        <motion.div
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center z-10"
                        >
                            <div className="w-10 h-10 rounded-full border-2 border-purple-100 border-t-purple-500 animate-spin mb-3" />
                            <Instagram className="text-purple-200 animate-pulse" size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Instagram Reel Container */}
                <div className="relative flex-grow overflow-hidden bg-white">
                    <div className="absolute top-[-50px] md:top-[-54px] left-0 w-full h-[calc(100%+54px)]">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink={`https://www.instagram.com/reel/${id}/?utm_source=ig_embed&amp;utm_campaign=loading`}
                            data-instgrm-version="14"
                            style={{
                                background: "#FFF",
                                border: "0",
                                borderRadius: "0",
                                margin: "0",
                                minWidth: "100%",
                                padding: "0",
                                height: "100%",
                                width: "100%",
                                maxHeight: "100%"
                            }}
                        >
                            <div style={{ padding: "0" }}>
                                <div className="flex items-center justify-center h-full pt-10">
                                    <Instagram className="text-gray-100" size={30} />
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>

                {/* Premium Hover Overlays */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-all duration-500 flex flex-col items-center justify-center z-30 pointer-events-none">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 border border-white/50"
                    >
                        <Play fill="white" className="text-white ml-0.5" size={24} />
                    </motion.div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                        <a
                            href={`https://www.instagram.com/reel/${id}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[#8b3d8b] font-bold text-[10px] md:text-xs shadow-xl hover:bg-[#8b3d8b] hover:text-white transition-colors pointer-events-auto whitespace-nowrap"
                        >
                            <Instagram size={14} />
                            View on Instagram
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ReelsSection() {
    const scrollRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load Instagram embed script if not already present
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                setIsLoaded(true);
                if (window.instgrm) window.instgrm.Embeds.process();
            };
        } else {
            setIsLoaded(true);
            if (window.instgrm) window.instgrm.Embeds.process();
        }

        // Re-process on every mount to be safe
        const timer = setTimeout(() => {
            if (window.instgrm) window.instgrm.Embeds.process();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
        <section className="relative py-8 md:py-12 bg-[#fffcf5] overflow-hidden">
            {/* Dynamic Background Glowing Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-12 -left-12 w-64 h-64 bg-purple-200/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-200/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header - Compact & High Contrast */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#8b3d8b] mb-3">
                           उत्सव मालिका
                        </h2>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-8 bg-[#8b3d8b]/20" />
                            <p className="text-[#8b3d8b]/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                                Experience Vrindavan on Instagram
                            </p>
                            <div className="h-px w-8 bg-[#8b3d8b]/20" />
                        </div>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel">
                    {/* Navigation Buttons - Smaller */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/80 hover:bg-white text-[#8b3d8b] backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm hidden md:flex active:scale-90"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/80 hover:bg-white text-[#8b3d8b] backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm hidden md:flex active:scale-90"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4 min-h-[420px] items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reelIds.map((id, index) => (
                            <ReelCard key={id} id={id} index={index} />
                        ))}
                    </div>

                    {/* Mobile Indicators */}
                    <div className="flex justify-center gap-2 mt-2 md:hidden">
                        {reelIds.map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-purple-200" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Elegant Bottom Curve - Smaller */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".15"></path>
                </svg>
            </div>
        </section>
    );
}
