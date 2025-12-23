"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT JAI JAI SHRI", href: "/about-jai-jai" },
    { name: "HIT SAHITYA", href: "/hit-shahitya" },
    { name: "PADAWALI", href: "/padawali" },
    { name: "VANSHAWALI", href: "/vanshawali" },
    { name: "SEWA MANORATH", href: "/sewa-manorath" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723]"
          }`}
      >
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

        {/* Matte Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

        {/* Decorative Blur Circles */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Lotus Decorations */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-amber-400/40 text-4xl hidden lg:block z-10 pointer-events-none">❀</div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 text-amber-400/40 text-4xl hidden lg:block z-10 pointer-events-none">❀</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center justify-center group py-2">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/30 transition-all duration-500" />
                <Image
                  src="/logo.png"
                  alt="श्री राधा वल्लभ लाल"
                  width={80}
                  height={80}
                  className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-all duration-500"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-xs font-bold tracking-wide transition-all duration-300 rounded-lg relative group ${isActive
                      ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-[#4a2c2a] shadow-[0_2px_10px_rgba(251,191,36,0.3)]"
                      : "text-amber-100 hover:text-amber-200"
                      }`}
                  >
                    {link.name}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:w-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}

              {/* Decorative Divider */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent mx-2"></div>

              {/* NGO Logo */}
              <Link href="/braj-hit-sharnam" className="relative group cursor-pointer block">
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg group-hover:bg-amber-400/30 transition-all duration-300" />
                  <Image
                    src="/logobraj.png"
                    alt="Braj Hit Sharnam"
                    width={40}
                    height={40}
                    className="object-contain drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] relative z-10"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden bg-gradient-to-r from-amber-400 to-yellow-400 text-[#3E2723] p-2 rounded-lg shadow-[0_2px_10px_rgba(251,191,36,0.3)] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] transition-all"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#3E2723] z-50 shadow-2xl"
            >
              {/* Matte Background Texture */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

              {/* Decorative Blur Circles */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Decorative Left Border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-60" />

              {/* Lotus Decorations */}
              <div className="absolute top-1/4 right-4 text-amber-400/20 text-4xl">❀</div>
              <div className="absolute bottom-1/3 left-4 text-amber-400/20 text-4xl">❀</div>

              <div className="p-4 h-full overflow-y-auto flex flex-col relative z-10">
                {/* Close Button */}
                <button
                  className="self-end bg-gradient-to-r from-amber-400 to-yellow-400 text-[#3E2723] p-2 rounded-lg shadow-[0_2px_10px_rgba(251,191,36,0.3)] mb-4 hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} strokeWidth={2.5} />
                </button>


                {/* Navigation Links */}
                <nav className="flex-1 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-bold rounded-lg transition-all relative group ${isActive
                          ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-[#3E2723] shadow-[0_2px_10px_rgba(251,191,36,0.3)]"
                          : "text-amber-100 hover:text-amber-200 hover:bg-white/10"
                          }`}
                      >
                        {link.name}
                        {!isActive && (
                          <span className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:w-1 transition-all duration-300 rounded-l-lg" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Bottom Section */}
                <div className="mt-4 pt-4 border-t border-amber-400/20 text-center space-y-3">
                  <p className="text-sm font-bold text-amber-200">
                    BRAJ HIT SHARNAM
                  </p>

                  {/* NGO Logo */}
                  <div className="flex justify-center">
                    <Link
                      href="/braj-hit-sharnam"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative w-12 h-12 transition-transform duration-300 hover:scale-110"
                    >
                      <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg" />
                      <Image
                        src="/logobraj.png"
                        alt="Braj Hit Sharnam"
                        width={48}
                        height={48}
                        className="object-contain drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] relative z-10"
                      />
                    </Link>
                  </div>

                  {/* Decorative Lotus Symbol */}
                  <div className="text-amber-400/30 text-2xl">✦</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
