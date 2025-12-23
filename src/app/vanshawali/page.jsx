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
        <div className="min-h-screen bg-[#fffcf5] pt-24 pb-16 px-4 md:px-8 overflow-x-hidden relative" ref={containerRef}>
            {/* Royal Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-50 via-[#fffcf5] to-amber-100/50 -z-10" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16 relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-amber-200/20 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6d2e6d] mb-4 drop-shadow-sm leading-tight">
                        वंश परंपरा
                    </h1>

                    {/* Decorative Divider */}
                    <div className="flex justify-center items-center gap-3">
                        <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                        <div className="w-2 h-2 rotate-45 border border-amber-500 bg-amber-100" />
                        <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Mobile View: Vertical Zigzag Timeline (Left/Right) */}
                <div className="md:hidden relative flex flex-col space-y-8">
                    {/* Center Animated Line */}
                    <div className="absolute left-1/2 top-4 bottom-0 w-[2px] bg-amber-200/50 -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-400 to-[#8b3d8b]"
                        />
                    </div>

                    {acharyaList.map((acharya, index) => (
                        <motion.div
                            key={acharya.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }} // Left or Right entrance
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            {/* Card Content (Left for even, Right for odd via reverse) */}
                            <div className={`w-[45%] ${index % 2 === 0 ? 'pr-3' : 'pl-3'}`}>
                                <div className="bg-white p-2.5 rounded-lg border border-amber-100 shadow-[0_2px_10px_rgba(139,61,139,0.05)] w-full relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

                                    <div className="flex flex-col gap-2 items-center text-center">
                                        <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden border border-amber-200 shadow-inner">
                                            <Image
                                                src={acharya.image}
                                                alt={acharya.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-xs font-bold text-gray-800 font-serif leading-snug group-hover:text-[#8b3d8b] transition-colors">
                                                {acharya.name}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Connector Node */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#fffcf5] border-[2px] border-[#8b3d8b] rounded-full z-10 shadow-sm">
                                <div className="absolute inset-0 m-0.5 bg-[#8b3d8b] rounded-full animate-pulse" />
                            </div>

                            {/* Empty Space for Balance */}
                            <div className="w-[45%]" />

                        </motion.div>
                    ))}
                </div>

                {/* Desktop View: Zigzag Grid Layout (Compact) */}
                <div className="hidden md:block relative pb-12">
                    {/* Horizontal Line positioned relative to grid */}
                    <div className="absolute top-[210px] left-8 right-8 h-[2px] bg-amber-200/60 rounded-full z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            style={{ originX: 0 }}
                            className="h-full w-full bg-gradient-to-r from-amber-300 via-[#8b3d8b] to-amber-300"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-6 relative z-10">
                        {acharyaList.map((acharya, index) => (
                            <motion.div
                                key={acharya.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                // Staggered layout: Even items pushed down (Reduced offset)
                                className={`flex flex-col items-center ${index % 2 !== 0 ? 'mt-32' : ''}`}
                            >
                                {/* Connector Line (Up or Down) */}
                                <div className={`w-[2px] bg-[#8b3d8b]/30 h-10 absolute left-1/2 -translate-x-1/2 -z-10 ${index % 2 !== 0 ? '-top-10 bg-gradient-to-b from-[#8b3d8b] to-transparent' : 'top-[210px] h-[calc(100%-210px)] hidden'
                                    }`} />

                                {/* Specific Connection Logic */}
                                {index % 2 === 0 ? (
                                    /* Top Item */
                                    <>
                                        <div className="relative group w-full max-w-[200px]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-[#8b3d8b]/50 rounded-[1.5rem] opacity-20 group-hover:opacity-50 blur transition duration-500" />
                                            <div className="relative bg-[#fffcf5] p-4 rounded-[1.3rem] border border-amber-100 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.08)] text-center transition-transform hover:-translate-y-1 duration-500">
                                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-amber-100">
                                                    <Image src={acharya.image} alt={acharya.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="200px" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-800 font-serif leading-tight group-hover:text-[#8b3d8b] transition-colors">{acharya.name}</h3>
                                            </div>
                                            {/* Connector Node Button */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                                                <div className="w-[2px] h-4 bg-amber-300" />
                                                <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-500 bg-white z-20" />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    /* Bottom Item */
                                    <>
                                        {/* Connector Node Top */}
                                        <div className="absolute -top-[3.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                                            <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-500 bg-white z-20" />
                                            <div className="w-[2px] h-10 bg-amber-300" />
                                        </div>

                                        <div className="relative group w-full max-w-[200px]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#8b3d8b]/50 to-amber-300 rounded-[1.5rem] opacity-20 group-hover:opacity-50 blur transition duration-500" />
                                            <div className="relative bg-[#fffcf5] p-4 rounded-[1.3rem] border border-amber-100 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.08)] text-center transition-transform hover:-translate-y-1 duration-500">
                                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-amber-100">
                                                    <Image src={acharya.image} alt={acharya.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="200px" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-800 font-serif leading-tight group-hover:text-[#8b3d8b] transition-colors">{acharya.name}</h3>
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
