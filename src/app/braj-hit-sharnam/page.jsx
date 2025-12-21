"use client";

import { motion } from "framer-motion";
import {
    Heart,
    Wind,
    Droplets,
    Leaf,
    Users,
    MapPin,
    Sparkles,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import WaterIcon from "@mui/icons-material/Water";
import ParkIcon from "@mui/icons-material/Park";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";

const foundationServices = [
    {
        title: "गौ माता भेंट व सेवा",
        subtitle: "Gau Seva & Donation",
        icon: <AgricultureIcon sx={{ fontSize: 32 }} />,
        color: "bg-orange-50",
        textColor: "text-orange-600",
        description: "Protecting and serving the holy cows of Braj through nourishment, medical care, and sustainable shelters."
    },
    {
        title: "साधु सेवा",
        subtitle: "Sadhu Seva",
        icon: <SelfImprovementIcon sx={{ fontSize: 32 }} />,
        color: "bg-amber-50",
        textColor: "text-amber-600",
        description: "Supporting the selfless saints and brijwasis by providing basic necessities, medicines, and spiritual respect."
    },
    {
        title: "यमुना सफाई सेवा",
        subtitle: "Yamuna Ji Cleaning Service",
        icon: <WaterIcon sx={{ fontSize: 32 }} />,
        color: "bg-blue-50",
        textColor: "text-blue-600",
        description: "Dedicated efforts to restore the purity of Shri Yamuna Maharani through regular cleaning drives and awareness."
    },
    {
        title: "वृक्ष रोपण",
        subtitle: "Tree Plantation",
        icon: <ParkIcon sx={{ fontSize: 32 }} />,
        color: "bg-green-50",
        textColor: "text-green-600",
        description: "Greening the divine land of Braj to preserve its natural beauty and provide shelter for birds and wildlife."
    },
    {
        title: "वस्त्र वितरण",
        subtitle: "Cloth Distribution",
        icon: <VolunteerActivismIcon sx={{ fontSize: 32 }} />,
        color: "bg-pink-50",
        textColor: "text-pink-600",
        description: "Distributing clean clothing and blankets to the underprivileged during winters and major festivals."
    },
    {
        title: "ब्रज 84 कोस यात्रा",
        subtitle: "Braj 84 kos Yatra",
        icon: <TempleHinduIcon sx={{ fontSize: 32 }} />,
        color: "bg-red-50",
        textColor: "text-red-600",
        description: "Facilitating sacred pilgrimages for devotees to experience the 84-kos divine circle of Braj Mandal."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BrajHitSharnam() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64 opacity-60" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-[#8b3d8b] rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-purple-100">
                            <ShieldCheck size={14} /> Humanitarian Wing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            हित वृंदावन <span className="text-[#8b3d8b]">सहयोग फाउंडेशन</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed italic">
                            "Shit-Vrindavan Sahyog Foundation" is dedicated to the holistic service of Braj Dham, its inhabitants, and its sacred environment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#8b3d8b] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg shadow-purple-900/10 flex items-center gap-2">
                                Support Our Cause <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview Grid */}
            <section className="py-20 bg-gray-50/50 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {foundationServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-100 group"
                            >
                                <div className={`${service.color} ${service.textColor} w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-[#8b3d8b] text-sm font-bold tracking-wider uppercase mb-4 opacity-70 italic">{service.subtitle}</p>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Active Program</span>
                                    <Sparkles className="text-purple-200" size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Detailed sections for each can go here... for now keeping it compact as per request */}

            {/* Mission Statement */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-[#8b3d8b] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                        {/* Decorative background for the card */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <Heart className="w-16 h-16 mx-auto mb-8 opacity-40" />
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Nurturing the Heart of Braj</h2>
                            <p className="text-xl md:text-2xl font-light text-purple-100 leading-loose italic mb-10">
                                "Our foundation's core mission is to serve Braj with the same selfless love that the Gopis had for Krishna. Whether it's feeding a cow or cleaning the Yamuna, every act is a prayer."
                            </p>
                            <div className="h-px w-24 bg-white/20 mx-auto mb-8" />
                            <p className="font-bold tracking-[0.3em] uppercase text-xs opacity-60">Hit Vrindavan Sahyog Foundation</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
