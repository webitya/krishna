"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";

export default function AcharyaSurajSection() {
  return (
    <section className="relative py-6 md:py-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">

      {/* Soft Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 w-40 h-40 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-6 right-6 w-52 h-52 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-amber-600" />
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-amber-600" />
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-orange-900 font-serif">
            आचार्य श्री हित सूरज गोस्वामी
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/85 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-amber-200 shadow-md">
              <p
                className="text-sm md:text-base text-gray-800 leading-relaxed text-justify font-serif mb-4"
              >
                श्री राधावल्लभ संप्रदाय के आचार्य श्री हित सूरज गोस्वामी जी,
                प्रसिद्ध आचार्य श्री हित ध्यानदेव गोस्वामी जी महाराज के पौत्र
                एवं श्री हित आचार्य प्रकाश चंद्र गोस्वामी जी महाराज के पुत्र
                हैं। आप श्री हित हरिवंश महाप्रभु जी के वंशज हैं, जिन्होंने
                राधावल्लभ मंदिर की स्थापना कर राधा-कृष्ण सेवा परम्परा को
                प्रतिष्ठित किया।  
                <br /><br />
                वर्तमान में आप श्री राधावल्लभ मंदिर जी के अधिकारिक आचार्य
                हैं एवं श्री हित कृष्ण वंश प्रसाद के 19वें आचार्य माने जाते
                हैं। महाराज जी दिव्य कथाओं, भक्ति-मार्गदर्शन एवं सेवा-भाव
                द्वारा असंख्य श्रद्धालुओं को प्रभु-प्रेम की ओर प्रेरित करते
                हैं।
              </p>

              {/* Darshan Timing */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <p className="text-sm md:text-base text-gray-800 font-semibold font-serif">
                  मंदिर दर्शन एवं सेवा का समय :
                  <span className="text-amber-700">
                    {" "}सुबह 11 AM से 2 PM, संध्या 5 PM से 7 PM
                  </span>
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-700 font-serif">
                  सेवा एवं मंदिर से जुड़ने हेतु संपर्क करें :
                </p>
                <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-amber-700 font-serif">
                  <Phone className="w-4 h-4" />
                  <span>
                    7060761907 , WhatsApp : 9694261907
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="flex items-center gap-2 mt-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-amber-600 to-transparent rounded-full" />
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
            </div>
          </motion.div>

          {/* Compact Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-amber-300">
                <Image
                  src="/pic4.jpg"
                  alt="आचार्य श्री हित सूरज गोस्वामी"
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
