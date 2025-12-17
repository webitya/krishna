"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sun, BookOpen, Music } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#FF9933]/5 z-10"></div>
        {/* Placeholder for Devotional Image */}

        {/* Animated Background Element (Saffron Glow) */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9933]/10 rounded-full blur-[100px] z-0"
        />

        <div className="container relative z-30 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 border border-[#FF9933] text-[#FF9933] text-sm font-serif tracking-[0.2em] uppercase mb-6 bg-white">
              Shri Dham Vrindavan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-serif text-black mb-8 leading-tight"
          >
            Eternal Grace & <br />
            <span className="text-[#FF9933]">Divine Love</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-serif italic"
          >
            "Immerse yourself in the sacred nectar of devotion. Experience the tranquility of the ancient path."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-10 py-4 bg-[#FF9933] text-black font-bold text-lg rounded-sm hover:bg-white hover:text-[#FF9933] border border-[#FF9933] transition-all duration-300 shadow-[0_0_20px_rgba(255,153,51,0.2)]">
              Daily Darshan
            </button>
            <button className="px-10 py-4 border border-black text-black font-bold text-lg rounded-sm hover:bg-black hover:text-white transition-colors">
              Upcoming Events
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Section - Temple Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gray-500 uppercase tracking-widest text-sm mb-2 block">Exploration</span>
            <h2 className="text-4xl font-serif font-bold text-black mb-6">Sacred Offerings</h2>
            <div className="w-16 h-1 bg-[#FF9933] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="w-full aspect-[4/5] bg-gray-50 mb-8 relative overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/5 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF9933] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                {/* Icon Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Sun size={48} strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-black">Morning Aarti</h3>
              <p className="text-gray-500 px-4 leading-relaxed">Begin your day with the divine light of the Mangala Aarti, invoking peace and prosperity.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="w-full aspect-[4/5] bg-gray-50 mb-8 relative overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/5 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF9933] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <BookOpen size={48} strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-black">Hit Shahitya</h3>
              <p className="text-gray-500 px-4 leading-relaxed">Delve into the ancient scriptures and poetry that capture the essence of divine love.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="w-full aspect-[4/5] bg-gray-50 mb-8 relative overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/5 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF9933] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Music size={48} strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-black">Bhajan & Kirtan</h3>
              <p className="text-gray-500 px-4 leading-relaxed">Immerse your soul in the melodious chanting of the holy names.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote / Highlight Section */}
      <section className="py-32 bg-[#FF9933]/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Star className="w-8 h-8 text-[#FF9933] mx-auto mb-8 animate-pulse" />
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-10 max-w-4xl mx-auto text-black">
            "Where devotion meets divinity, the soul finds its eternal home."
          </blockquote>
          <cite className="text-[#FF9933] tracking-widest uppercase not-italic text-sm font-bold">- Sri Hit Harivansh Mahaprabhu</cite>
        </div>
      </section>

      {/* Media / Updates Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-gray-500 uppercase tracking-widest text-sm mb-2 block">Updates</span>
              <h2 className="text-4xl font-serif font-bold text-black">Latest from the Temple</h2>
            </div>
            <a href="#" className="text-black border-b border-black pb-1 hover:text-[#FF9933] hover:border-[#FF9933] transition-colors mt-6 md:mt-0">View All News</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((item) => (
              <div key={item} className="flex flex-col md:flex-row gap-6 group cursor-pointer bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-full md:w-48 aspect-square bg-gray-200 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/20 transition-colors"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[#FF9933] text-sm font-bold mb-2">17 DEC 2025</span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[#FF9933] transition-colors text-black">Grand Celebration of the Appearance Day</h3>
                  <p className="text-gray-500 text-sm line-clamp-3">Join us for a day filled with specialized prayers, feasting, and community gathering to celebrate this auspicious occasion.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
