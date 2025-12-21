"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const sewaItems = [
    {
        title: "व्याहला (विवाह) उत्सव सेवा मनोरथ",
        image: "/seva/व्याहुला उत्सव दर्शन.jpg",
    },
    {
        title: "इत्र सेवा मनोरथ",
        image: "/seva/श्रृंगार दर्शन.jpg",
    },
    {
        title: "श्रीजी पोशाक सेवा मनोरथ",
        image: "/seva/श्रीजी पोशाक सेवा मनोरथ.jpg",
    },
    {
        title: "अष्टयाम भोग सेवा मनोरथ",
        image: "/seva/अन्नकूट 56 भोग व राजभोग दर्शन.jpg",
    },
    {
        title: "साधु संत सेवा मनोरथ",
        image: "/seva/साधु संत सेवा मनोरथ.webp",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SewaManorath() {
    return (
        <div className="min-h-screen bg-[#fffcf5]">
            {/* Header Section - Vibrant Saffron */}
            <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-[#FFD700] via-[#FFB700] to-[#FF9933] overflow-hidden shadow-2xl">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -ml-48 -mb-48" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-orange-950 mb-4 leading-tight drop-shadow-md">
                            श्रीजी के चरणकमलों पर समर्पित सेवा मनोरथ
                        </h1>
                        <p className="text-orange-900 font-medium text-lg md:text-xl tracking-wide max-w-2xl">
                            Services devoted at Shri Radhavallabh lal ji's Lotus Feet
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 md:w-20 h-px bg-orange-900/30" />
                            <div className="w-3 h-3 rotate-45 border-2 border-orange-900/40" />
                            <div className="w-12 md:w-20 h-px bg-orange-900/30" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid Section */}
            <div className="container mx-auto px-4 md:px-8 py-16 -mt-10 md:-mt-12 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-6 md:gap-8"
                >
                    {sewaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-orange-900/5 hover:shadow-2xl transition-all duration-500 border border-white"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-transparent opacity-40" />
                            </div>

                            {/* Title */}
                            <div className="text-center px-2 pb-4">
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-orange-950 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="mt-4 flex justify-center">
                                    <Sparkles className="text-[#FF9933]/40" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="container mx-auto px-6 py-20 text-center">
                <p className="text-gray-400 italic text-lg max-w-xl mx-auto">
                    Choose a divine service to express your devotion and contribute to the eternal service of Shri Radha Vallabh Lal Ji.
                </p>
            </div>
        </div>
    );
}
