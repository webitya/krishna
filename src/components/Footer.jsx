import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#3E2723] text-white overflow-hidden">
            {/* Background Texture & Decorations */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            {/* Floating Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

            {/* Lotus Decorations */}
            <div className="absolute top-8 right-1/4 text-amber-400/20 text-6xl">❀</div>
            <div className="absolute bottom-20 left-1/4 text-amber-400/20 text-6xl">❀</div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Content */}
                <div className="pt-12 md:pt-16 pb-8 md:pb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                        {/* Brand Column */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center">
                            <Link href="/" className="inline-block mb-6 group">
                                {/* Logo Above */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 mx-auto">
                                    <Image
                                        src="/logo.png"
                                        alt="श्री राधा वल्लभ लाल"
                                        fill
                                        className="object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-500"
                                    />
                                </div>
                                {/* Title Below */}
                                <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:via-amber-400 group-hover:to-yellow-300 transition-all duration-500">
                                    श्री राधा वल्लभ लाल
                                </h2>
                                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-500 mt-2 rounded-full mx-auto" />
                            </Link>
                            <p className="text-amber-100/80 leading-relaxed text-sm mb-4">
                                Dedicated to the preservation and celebration of our eternal spiritual heritage through divine literature and selfless service.
                            </p>
                            {/* Decorative Divider */}
                            <div className="flex items-center gap-2 mt-6">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                                <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
                                <div className="h-[1px] w-12 bg-gradient-to-l from-amber-400 to-transparent" />
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-amber-300 mb-2 font-serif">Quick Links</h3>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-jai-jai" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        About Mandir
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hit-shahitya" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Hit Shahitya
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/padawali" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Padawali
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* More Links Column */}
                        <div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-amber-300 mb-2 font-serif">More Links</h3>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/vanshawali" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Vanshawali
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sewa-manorath" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Sewa Manorath
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/braj-hit-sharnam" className="text-amber-100/70 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300" />
                                        Braj Hit Sharnam
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-amber-300 mb-2 font-serif">Connect</h3>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                            </div>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3 text-amber-100/70">
                                    <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                                    <span>Shri Dham Vrindavan, Mathura<br />Uttar Pradesh, India</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={16} className="text-amber-400 flex-shrink-0" />
                                    <a href="mailto:contact@brahithsharnam.org" className="text-amber-100/70 hover:text-amber-300 transition-colors">
                                        contact@brahithsharnam.org
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={16} className="text-amber-400 flex-shrink-0" />
                                    <a href="tel:+918168100515" className="text-amber-100/70 hover:text-amber-300 transition-colors">
                                        +91 81681 00515
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors font-medium">
                                        Contact Support
                                        <span className="text-xs">→</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-amber-400/20 pt-6 md:pt-8 pb-6 md:pb-8">
                    <div className="flex flex-col items-center gap-4 text-xs text-center">
                        {/* Copyright and Links */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-amber-100/60">
                            <p className="flex items-center gap-2">
                                <span>© {new Date().getFullYear()} श्री राधा वल्लभ लाल.</span>
                                <span className="hidden md:inline">All rights reserved.</span>
                            </p>
                            <div className="flex space-x-6">
                                <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-of-service" className="hover:text-amber-300 transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        {/* Webitya Credit - Centered */}
                        <div className="flex items-center gap-2 text-amber-100/60">
                            <span className="flex items-center gap-1.5">
                                Designed & Maintained with
                                <Heart size={12} className="text-amber-400 fill-amber-400 animate-pulse" />
                                by
                            </span>
                            <a
                                href="https://webitya.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-amber-300 hover:text-amber-200 transition-colors"
                            >
                                Webitya
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </footer>
    );
}
