"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Download, Eye, Library, Search } from "lucide-react";

const books = [
    {
        title: "Hit Chaurasi ji",
        desc: "The fundamental scripture of the Radhavallabh Sampradaya, containing 84 pads of divine love.",
        author: "Shri Hita Harivansh Mahaprabhu",
        file: "/hit sahitya/Hit Chaurasi ji.pdf",
        category: "Primary Scripture",
        image: "/hit sahitya/1.jpeg"
    },
    {
        title: "Ashtyam Sewa Padawali",
        desc: "Sacred hymns describing the eight-fold daily divine services to the deity.",
        author: "Various Sahacharis",
        file: "/hit sahitya/Ashtyam Sewa Padawali.pdf",
        category: "Sewa Paddhati",
        image: "/hit sahitya/2.jpeg"
    },
    {
        title: "Sewak Vani",
        desc: "The divine teachings and experiences of Shri Damodar Das Ji (Sewak Ji).",
        author: "Shri Damodar Das Ji",
        file: "/hit sahitya/Sewak Vani.pdf",
        category: "Vani Sahitya",
        image: "/hit sahitya/3.jpeg"
    },
    {
        title: "Shrihit Mangal Gaan",
        desc: "A collection of auspicious songs and prayers for divine celebrations.",
        author: "Sampradayik Saints",
        file: "/hit sahitya/Shrihit Mangal Gaan.pdf",
        category: "Devotional Songs",
        image: "/hit sahitya/4.jpeg"
    },
    {
        title: "Vrindavan Satlila",
        desc: "A poetic description of the hundred divine pastimes of Vrindavan.",
        author: "Shri Hita Harivansh",
        file: "/hit sahitya/Vrindavan Satlila.pdf",
        category: "Lila Sahitya",
        image: "/hit sahitya/5.jpeg"
    },
    {
        title: "Vrindavan Dham Mandal",
        desc: "Explanations and descriptions of the sacred geography of Vrindavan.",
        author: "Saints of Braj",
        file: "/hit sahitya/Vrindavan dham ko mandal.pdf",
        category: "Dham Mahima",
        image: "/hit sahitya/6.jpeg"
    },
    {
        title: "Yamunashtak",
        desc: "Eight verses glorifying the sacred Yamuna River, the life-force of Braj.",
        author: "Various Acharyas",
        file: "/hit sahitya/Yamunashtak.pdf",
        category: "Stotra",
        image: "/hit sahitya/7.jpeg"
    },
    {
        title: "Utsav Patrika 25-26",
        desc: "The official calendar and guide for temple festivals for the upcoming year.",
        author: "Mandir Management",
        file: "/hit sahitya/Utsav patrika -25-26.pdf",
        category: "Almanac",
        image: "/hit sahitya/8.jpeg"
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
};

export default function HitShahitya() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#fffcf5] min-h-screen">
            {/* Compact Hero Section */}
            <div className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-40 md:opacity-60" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
                    >
                        हित साहित्य <span className="text-[#8b3d8b]">दर्शन</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8"
                    >
                        Access our collection of divine literature and sacred वाणी.
                    </motion.p>

                    {/* Search Component */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-[#8b3d8b] transition-colors">
                            <Search size={16} />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search title, author or category..."
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-[#8b3d8b]/5 focus:border-[#8b3d8b] outline-none transition-all shadow-sm text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Resource Grid */}
            <div className="container mx-auto px-4 md:px-8 py-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredBooks.map((book) => (
                            <motion.div
                                key={book.title}
                                layout
                                variants={item}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#8b3d8b]/10 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image Section */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute top-3 right-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <BookOpen size={16} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-[#8b3d8b] text-[10px] font-bold rounded-md shadow-sm">
                                            {book.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-lg font-serif font-bold text-black mb-1 leading-snug group-hover:text-[#8b3d8b] transition-colors line-clamp-1">
                                        {book.title}
                                    </h3>
                                    <p className="text-[#8b3d8b] text-[10px] font-bold uppercase tracking-wider mb-2 opacity-60">
                                        {book.author}
                                    </p>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                                        {book.desc}
                                    </p>

                                    <div className="flex gap-2 mt-auto">
                                        <a
                                            href={book.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 bg-[#8b3d8b] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold hover:bg-black transition-all shadow-lg shadow-[#8b3d8b]/10"
                                        >
                                            <Eye size={14} />
                                            Read
                                        </a>
                                        <a
                                            href={book.file}
                                            download
                                            className="px-3 py-2 bg-gray-50 text-gray-400 rounded-lg hover:bg-[#8b3d8b]/5 hover:text-[#8b3d8b] transition-all border border-gray-100 hover:border-[#8b3d8b]/10"
                                        >
                                            <Download size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredBooks.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center"
                    >
                        <Library className="mx-auto text-gray-200 mb-4" size={48} />
                        <h3 className="text-xl font-serif text-gray-400">No matching literature found</h3>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 text-[#8b3d8b] font-bold text-sm hover:underline"
                        >
                            View all resources
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
