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
    { name: "BRAJ HIT SHARNAM", href: "/braj-hit-sharnam" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white ${isScrolled
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg"
          : "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section - Compact */}
            <Link href="/" className="flex items-center justify-center group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="श्री राधा वल्लभ लाल"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Compact */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-xs font-bold tracking-wide transition-all duration-200 rounded ${isActive
                      ? "bg-white text-yellow-600 shadow-md"
                      : "text-yellow-900 hover:bg-white/30 hover:text-yellow-800"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Decorative Divider */}
              <div className="h-8 w-px bg-yellow-600/30 mx-2"></div>

              {/* NGO Logo */}
              <Link href="/braj-hit-sharnam" className="relative group cursor-pointer block">
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logobraj.png"
                    alt="Braj Hit Sharnam"
                    width={40}
                    height={40}
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden bg-white text-yellow-600 p-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer - Compact */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 z-50 shadow-2xl"
            >
              <div className="p-4 h-full overflow-y-auto flex flex-col">
                {/* Close Button */}
                <button
                  className="self-end bg-white text-yellow-600 p-2 rounded-lg shadow-md mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} strokeWidth={2.5} />
                </button>

                {/* Logo */}
                <div className="flex items-center mb-6 pb-4 border-b border-yellow-500/30">
                  <div className="w-12 h-12">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-bold rounded-lg transition-all ${isActive
                          ? "bg-white text-yellow-600 shadow-md"
                          : "text-yellow-900 hover:bg-white/30"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Bottom Text */}
                <div className="mt-4 pt-4 border-t border-yellow-500/30 text-center space-y-3">
                  <p className="text-sm font-bold text-yellow-900">
                    जय श्री राधे
                  </p>

                  {/* NGO Logo */}
                  <div className="flex justify-center">
                    <div className="relative w-12 h-12 transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/logobraj.png"
                        alt="Braj Hit Sharnam"
                        width={48}
                        height={48}
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
