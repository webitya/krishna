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
            {/* Compact Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] -mr-64 -mt-64 opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -ml-64 -mb-64 opacity-60" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-[#8b3d8b] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-purple-100">
                            <ShieldCheck size={12} /> Humanitarian Wing
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                            श्री ब्रज हित <span className="text-[#8b3d8b]">शरणम् फाउंडेशन</span>
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed italic">
                            Dedicated to the holistic service of Braj Dham, its inhabitants, and its sacred environment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="px-6 py-3 bg-[#8b3d8b] text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg shadow-purple-900/10 flex items-center gap-2 text-sm">
                                Support Our Cause <ArrowRight size={16} />
                            </button>
                            <button className="px-6 py-3 bg-white text-gray-700 font-bold rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-sm">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Compact Services Overview Grid */}
            <section className="py-12 bg-gray-50/50 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {foundationServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-[2rem] shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-purple-100 group"
                            >
                                <div className={`${service.color} ${service.textColor} w-16 h-16 rounded-[1.2rem] flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{service.title}</h3>
                                <p className="text-[#8b3d8b] text-[10px] font-bold tracking-widest uppercase mb-3 opacity-70 italic">{service.subtitle}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Active Program</span>
                                    <Sparkles className="text-purple-200" size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Compact Mission Statement */}
            <section className="py-16 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-[#8b3d8b] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-24 -mb-24" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <Heart className="w-12 h-12 mx-auto mb-6 opacity-40" />
                            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Nurturing the Heart of Braj</h2>
                            <p className="text-lg md:text-xl font-light text-purple-100 leading-relaxed italic mb-8">
                                "Our core mission is to serve Braj with selfless love. Every act of service is a prayer."
                            </p>
                            <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
                            <p className="font-bold tracking-[0.2em] uppercase text-[10px] opacity-60 text-white/80">श्री ब्रज हित शरणम् फाउंडेशन</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
