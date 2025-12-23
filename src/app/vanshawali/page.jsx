"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const acharyaList = [
    {
        id: 1,
        name: "गोस्वामी श्री हित प्रताप चंद्र जी महाराज",
        image: "/vansavali/गोस्वामी श्री हित प्रताप चंद्र जी महाराज 1.png"
    },
    {
        id: 2,
        name: "गोस्वामी श्री हित मनमोहन लाल जी महाराज",
        image: "/vansavali/गोस्वामी श्री हित मनमोहन लाल जी महाराज 2.png"
    },
    {
        id: 3,
        name: "गोस्वामी श्री हित निमिष जी महाराज",
        image: "/vansavali/गोस्वामी श्री हित निमिष जी महाराज 3.png"
    },
    {
        id: 4,
        name: "गोस्वामी श्री हित रितेश जी महाराज",
        image: "/vansavali/गोस्वामी श्री हित रितेश जी महाराज 4.png"
    }
];

export default function Vanshawali() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Scale for vertical mobile line
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[#fffcf5] pt-32 pb-24 px-4 md:px-8 overflow-x-hidden relative" ref={containerRef}>
            {/* Royal Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-50 via-[#fffcf5] to-amber-100/50 -z-10" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 md:mb-32 relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-amber-200/20 rounded-full blur-3xl -z-10" />

                    <span className="text-amber-700 font-bold tracking-[0.3em] font-serif text-sm md:text-base uppercase mb-4 block">
                        Our Scared Lineage
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#6d2e6d] mb-6 drop-shadow-sm leading-tight">
                        वंश परंपरा
                    </h1>

                    {/* Decorative Divider */}
                    <div className="flex justify-center items-center gap-4">
                        <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                        <div className="w-3 h-3 rotate-45 border-2 border-amber-500 bg-amber-100" />
                        <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Mobile View: Vertical Timeline (Robust) */}
                <div className="md:hidden relative flex flex-col space-y-16 pl-6 pr-2">
                    {/* Animated Line */}
                    <div className="absolute left-[29px] top-6 bottom-0 w-[2px] bg-amber-200/50">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-400 to-[#8b3d8b]"
                        />
                    </div>

                    {acharyaList.map((acharya, index) => (
                        <motion.div
                            key={acharya.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex items-start pl-12"
                        >
                            {/* Connector Node */}
                            <div className="absolute left-[21px] top-12 -translate-x-1/2 w-4 h-4 bg-[#fffcf5] border-[3px] border-[#8b3d8b] rounded-full z-10 shadow-md">
                                <div className="absolute inset-0 m-0.5 bg-[#8b3d8b] rounded-full animate-pulse" />
                            </div>

                            {/* Card with Royal Styling */}
                            <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-[0_4px_15px_rgba(139,61,139,0.08)] w-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

                                <div className="flex gap-4 items-center">
                                    <div className="relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-amber-200 shadow-inner">
                                        <Image
                                            src={acharya.image}
                                            alt={acharya.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold text-gray-800 font-serif leading-snug group-hover:text-[#8b3d8b] transition-colors">
                                            {acharya.name}
                                        </h2>
                                        <div className="w-8 h-0.5 bg-amber-300 mt-2 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop View: Zigzag Grid Layout (Fluid) */}
                <div className="hidden md:block relative pb-20">
                    {/* Horizontal Line positioned relative to grid */}
                    <div className="absolute top-[280px] left-8 right-8 h-[2px] bg-amber-200/60 rounded-full z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            style={{ originX: 0 }}
                            className="h-full w-full bg-gradient-to-r from-amber-300 via-[#8b3d8b] to-amber-300"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-8 relative z-10">
                        {acharyaList.map((acharya, index) => (
                            <motion.div
                                key={acharya.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                // Staggered layout: Even items pushed down
                                className={`flex flex-col items-center ${index % 2 !== 0 ? 'mt-72' : ''}`}
                            >
                                {/* Connector Line (Up or Down) */}
                                <div className={`w-[2px] bg-[#8b3d8b]/30 h-16 absolute left-1/2 -translate-x-1/2 -z-10 ${index % 2 !== 0 ? '-top-16 bg-gradient-to-b from-[#8b3d8b] to-transparent' : 'top-[280px] h-[calc(100%-280px)] hidden' // Adjusted logic for simplicity
                                    }`} />

                                {/* Specific Connection Logic */}
                                {index % 2 === 0 ? (
                                    /* Top Item */
                                    <>
                                        <div className="relative group w-full max-w-[240px]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-[#8b3d8b]/50 rounded-[2rem] opacity-30 group-hover:opacity-60 blur transition duration-500" />
                                            <div className="relative bg-[#fffcf5] p-5 rounded-[1.8rem] border border-amber-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center transition-transform hover:-translate-y-2 duration-500">
                                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-amber-100">
                                                    <Image src={acharya.image} alt={acharya.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="240px" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-800 font-serif leading-tight group-hover:text-[#8b3d8b] transition-colors">{acharya.name}</h3>
                                            </div>
                                            {/* Connector Node Button */}
                                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                                                <div className="w-[2px] h-8 bg-amber-300" />
                                                <div className="w-4 h-4 rounded-full border-2 border-amber-500 bg-white z-20" />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    /* Bottom Item */
                                    <>
                                        {/* Connector Node Top */}
                                        <div className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                                            <div className="w-4 h-4 rounded-full border-2 border-amber-500 bg-white z-20" />
                                            <div className="w-[2px] h-14 bg-amber-300" />
                                        </div>

                                        <div className="relative group w-full max-w-[240px]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#8b3d8b]/50 to-amber-300 rounded-[2rem] opacity-30 group-hover:opacity-60 blur transition duration-500" />
                                            <div className="relative bg-[#fffcf5] p-5 rounded-[1.8rem] border border-amber-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center transition-transform hover:-translate-y-2 duration-500">
                                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-amber-100">
                                                    <Image src={acharya.image} alt={acharya.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="240px" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-800 font-serif leading-tight group-hover:text-[#8b3d8b] transition-colors">{acharya.name}</h3>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
