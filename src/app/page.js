"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sun, BookOpen, Music } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import MahaprabhuIntro from "@/components/MahaprabhuIntro";
import RadhaVallabhSection from "@/components/RadhaVallabhSection";
import AcharyaJaiJaiSection from "@/components/AcharyaJaiJaiSection";
import SewaManorathSection from "@/components/SewaManorathSection";
import UtsavSection from "@/components/UtsavSection";
import AshtyamSewaSection from "@/components/AshtyamSewaSection";
import FoundationSection from "@/components/FoundationSection";
import OtherTemplesSection from "@/components/OtherTemplesSection";
import ReelsSection from "@/components/ReelsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-black pt-16 md:pt-14">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Mahaprabhu Introduction Section */}
      <MahaprabhuIntro />

      {/* Radha Vallabh Section */}
      <RadhaVallabhSection />

      {/* Acharya Jai Jai Section */}
      <AcharyaJaiJaiSection />

      {/* Sewa Manorath Section */}
      <SewaManorathSection />

      {/* Ashtyam Sewa Section */}
      <AshtyamSewaSection />

      {/* Utsav Section */}
      <UtsavSection />

      {/* Foundation Section */}
      <FoundationSection />

      {/* Other Temples Section */}
      <OtherTemplesSection />

      {/* Social Reels Section */}
      <ReelsSection />




    </div>
  );
}
