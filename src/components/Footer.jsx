import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <h2 className="text-3xl font-serif font-bold text-[#FF9933]">श्री राधा वल्लभ लाल</h2>
                        </Link>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            "Dedicated to the preservation and celebration of our eternal spiritual heritage through divine literature and selfless service."
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black border-b-2 border-[#FF9933] inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="text-gray-600 hover:text-[#FF9933] transition-colors">Home</Link></li>
                            <li><Link href="/about-jai-jai" className="text-gray-600 hover:text-[#FF9933] transition-colors">About Mandir</Link></li>
                            <li><Link href="/hit-shahitya" className="text-gray-600 hover:text-[#FF9933] transition-colors">Hit Shahitya</Link></li>
                            <li><Link href="/padawali" className="text-gray-600 hover:text-[#FF9933] transition-colors">Padawali</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black border-b-2 border-[#FF9933] inline-block pb-2">More Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/vanshawali" className="text-gray-600 hover:text-[#FF9933] transition-colors">Vanshawali</Link></li>
                            <li><Link href="/sewa-manorath" className="text-gray-600 hover:text-[#FF9933] transition-colors">Sewa Manorath</Link></li>
                            <li><Link href="/gallery" className="text-gray-600 hover:text-[#FF9933] transition-colors">Gallery</Link></li>
                            <li><Link href="/braj-hit-sharnam" className="text-gray-600 hover:text-[#FF9933] transition-colors">Braj Hit Sharnam</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black border-b-2 border-[#FF9933] inline-block pb-2">Connect</h3>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>Shri Dham Vrindavan, Mathura</li>
                            <li>Uttar Pradesh, India</li>
                            <li className="pt-2">
                                <a href="mailto:contact@brahithsharnam.org" className="text-[#FF9933] hover:underline">
                                    contact@brahithsharnam.org
                                </a>
                            </li>
                            <li className="pt-1">
                                <Link href="/contact" className="hover:text-[#FF9933] transition-colors">Contact Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 mt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-gray-400">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <p>&copy; {new Date().getFullYear()} श्री राधा वल्लभ लाल. All rights reserved.</p>
                            <div className="flex space-x-6">
                                <Link href="/privacy-policy" className="hover:text-[#FF9933] transition-colors">Privacy Policy</Link>
                                <Link href="/terms-of-service" className="hover:text-[#FF9933] transition-colors">Terms of Service</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50 w-full md:w-auto justify-center md:pr-20">
                            <span className="opacity-60">Designed & Maintained by</span>
                            <a
                                href="https://webitya.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#8b3d8b] hover:text-[#FF9933] transition-colors"
                            >
                                Webitya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
