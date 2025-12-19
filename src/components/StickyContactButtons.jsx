"use client";

import { motion } from "framer-motion";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function StickyContactButtons() {
    return (
        <div className="fixed right-1 md:right-1 bottom-1 md:bottom-1 z-40 flex flex-col gap-1">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white p-2 md:p-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
                aria-label="Contact on WhatsApp"
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 24 } }} />
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href="tel:YOUR_PHONE_NUMBER" // Replace with actual phone number
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
                aria-label="Call us"
            >
                <PhoneIcon sx={{ fontSize: { xs: 24, md: 24 } }} />
            </motion.a>
        </div>
    );
}
