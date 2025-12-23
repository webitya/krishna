"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MahaprabhuIntro() {
  return (
    <section className="relative py-4 md:py-8 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">

      {/* Soft Background Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF9933] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center pt-2">

            {/* Image Section - Left (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-4 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-none group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/pic1.jpg"
                    alt="गो० श्री हित हरिवंश महाप्रभु जी"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-400/20 rounded-full blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Content Section - Right (Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 h-full flex flex-col justify-center"
            >
              <div className="bg-white/70 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-orange-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">

                {/* Title and Subtitle Area */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-[#FF9933] animate-pulse" />
                    <span className="h-px w-12 bg-gradient-to-r from-[#FF9933] to-transparent rounded-full" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] font-serif leading-tight">
                    गो० श्री हित हरिवंश महाप्रभु जी
                  </h2>
                </div>

                {/* Text Paragraphs */}
                <div className="space-y-4 text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                  <p>
                    वंशी प्रेमावतार प्रेमस्वरूप रसिकाचार्य अनन्त श्री हित हरिवंश चंद्र महाप्रभु जु जो की निकुंज में श्री जुगल जोड़ी के अनंत प्रेम स्वरूप निज सखी श्री हित सजनी जु है । श्रीहित हरिवंश महाप्रभु जु श्रीजी की कृपा से धराधाम में रसिक संतों के कल्याण एवं अनन्य भक्तों को हित रसोपासना के सागर में डुबकी लगवाने के लिए प्रकट हुए । “ हित की यहाँ उपासना हित के हैं हम दास , हित विशेष राखत रहे चित नित हित की आस “ श्रीहित हरिवंश महाप्रभु जी एकमात्र संत हुए जिनका जन्म ब्रज में बाद ग्राम में हुआ ।
                  </p>
                  <p>
                    जब श्रीहित जु महाराज श्री राधावल्लभ लाल जु को लेकर श्रीधाम वृंदावन पधारे तब वृंदावन एक सघन वन था लता पता से घिरा हुआ , डाकू और जंगली जानवर के डर से वृंदावन कोई साधू संत रहते नहीं थे , उन्होंने श्रीहित राधावल्लभ लाल जी को सघन वन में लता पता के मध्य कुंज की स्थापना कर श्रीहित राधावल्लभ लाल जु को लाड लड़ाया ।
                  </p>
                  <p>
                    श्रीहित हरिवंश महाप्रभु जी ने छह : माह में ही श्रीजी की कृपा बल से श्री राधासुधानिधि ग्रंथ की रचना कर दिए जिनको लिपिबद्ध उनके ताऊ जी श्री नरसिंहश्रम जी ने किए । श्री हित हरिवंश महाप्रभु ने रसोनपासना का गुड़ निकुंज रस प्रसादी अन्य ग्रंथों में प्रदान किए - श्रीहित चौरासी जी , श्री स्फुट वाणी , श्री यमुनाकटाक्ष एवं अनन्या रचनाओं से रसिकों को निकुंज प्रेम रस की प्राप्ति करवाई जो की ब्रह्मा शुक आदि को भी दुर्लभ है।
                  </p>
                </div>

                {/* Bottom Decorative Footer */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF9933] to-transparent rounded-full" />
                    <span className="text-xs font-bold text-[#FF9933] tracking-[0.2em] uppercase">Jai Jai Shri Radhavallabh</span>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="w-6 h-6 text-[#FF9933]/40" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
