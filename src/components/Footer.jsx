export default function Footer() {
    return (
        <footer className="bg-white text-black pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-[#FF9933]">श्री राधा वल्लभ लाल</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            "Dedicated to the preservation and celebration of our eternal spiritual heritage."
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black border-b-2 border-[#FF9933] inline-block pb-2">Explore</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-600 hover:text-[#FF9933] transition-colors">Home</a></li>
                            <li><a href="/about-jai-jai" className="text-gray-600 hover:text-[#FF9933] transition-colors">About Mandir</a></li>
                            <li><a href="/hit-shahitya" className="text-gray-600 hover:text-[#FF9933] transition-colors">Hit Shahitya</a></li>
                            <li><a href="/vanshawali" className="text-gray-600 hover:text-[#FF9933] transition-colors">Vanshawali</a></li>
                            <li><a href="/sewa-manorath" className="text-gray-600 hover:text-[#FF9933] transition-colors">Sewa Manorath</a></li>
                            <li><a href="/contact" className="text-gray-600 hover:text-[#FF9933] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black border-b-2 border-[#FF9933] inline-block pb-2">Visit</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>Shri Dham Vrindavan</li>
                            <li>Mathura, Uttar Pradesh</li>
                            <li className="pt-2 text-[#FF9933]">contact@shriradhavallabhlal.com</li>
                            <li>+91 98765 43210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} श्री राधा वल्लभ लाल. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#FF9933] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#FF9933] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
