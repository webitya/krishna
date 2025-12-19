"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MahaprabhuIntro() {
  return (
    <section className="relative py-6 md:py-10 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-44 h-44 bg-[#FF9933] rounded-full blur-3xl" />
        <div className="absolute bottom-8 right-8 w-56 h-56 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[#FF9933]" />
            <Sparkles className="w-5 h-5 text-[#FF9933]" />
            <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[#FF9933]" />
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-[#8B4513] font-serif">
            गो० श्री हित हरिवंश महाप्रभु जी
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/85 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-orange-200 shadow-md">
              <p
                className="text-sm md:text-base text-gray-800 leading-relaxed text-justify font-serif"
              >
                तृतीय प्रमावतार, प्रमात्मरूप राधिकाचार्य, अन्तर्यामी श्री हित
                हरिवंश चन्द्र महाप्रभु जी निकुंज की गूढ़तम लीला परम्परा के
                दिव्य प्रकाशक थे। वे निज श्री राधा जी के अन्तर प्रेम स्वरूप
                होकर रासलीला के गूढ़ रहस्यों को रसात्मक अनुभूति के रूप में
                प्रकट करने वाले महापुरुष थे।  
                <br /><br />
                श्रीधाम वृन्दावन में पधार कर महाप्रभु जी ने श्रीराधावल्लभ
                प्रेम-रस की अविरल धारा प्रवाहित की। उस समय वृन्दावन में
                किसी भी संप्रदाय का स्पष्ट स्वरूप स्थापित नहीं था, किन्तु
                महाप्रभु जी ने शुद्ध शिष्टाचार, माधुर्य भाव एवं राधा-केन्द्रित
                भक्ति परम्परा को स्थिर कर दिया।  
                <br /><br />
                उन्होंने श्रीराधावल्लभ मंत्र की दीक्षा द्वारा साधकों को
                निकुंज-भाव की अनुभूति कराई और प्रेम-रस की दुर्लभ प्राप्ति
                का मार्ग प्रशस्त किया। उनके उपदेश, पद, वाणी तथा रचनाएँ
                आज भी साधकों के हृदय में राधा-रस का संचार करती हैं।  
                <br /><br />
                श्री हित हरिवंश महाप्रभु जी का सम्पूर्ण जीवन श्री राधा
                जी की सेवा, प्रेम और रस में समर्पित रहा — यही
                श्रीराधावल्लभ सम्प्रदाय की आत्मा है।
              </p>

              {/* Bottom Accent */}
              <div className="flex items-center gap-2 mt-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-[#FF9933] to-transparent rounded-full" />
                <Sparkles className="w-4 h-4 text-[#FF9933]" />
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">

              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-orange-300">
                <Image
                  src="/pic1.jpg"
                  alt="गो० श्री हित हरिवंश महाप्रभु जी"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
