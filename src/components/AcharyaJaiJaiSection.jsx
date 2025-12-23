"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";

export default function AcharyaJaiJaiSection() {
  return (
    <section className="relative py-6 md:py-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">

      {/* Soft Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 w-40 h-40 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-6 right-6 w-52 h-52 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8">
        {/* Main Content Grid - Responsive Layout with Text Section Big */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center max-w-[1600px] mx-auto pt-4">

          {/* Image - Left Side (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[400px]">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white p-3 md:p-4 rounded-3xl shadow-2xl border-2 border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/pic4.jpg"
                    alt="आचार्य श्री हित निमिष गोस्वामी जी महाराज"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/80 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/80 rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Bigger Width (lg:col-span-8) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 order-2"
          >
            <div className="bg-white/85 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-amber-200">
              {/* Title Section Inside Content Box */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
                  <span className="h-px w-16 bg-gradient-to-r from-amber-600 to-transparent rounded-full"></span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-900 font-serif leading-tight">
                  आचार्य श्री हित निमिष गोस्वामी जी महाराज
                </h2>
              </div>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                श्री राधावल्लभ संप्रदाय के प्रतिष्ठित आचार्य श्री हित निमिष गोस्वामी जी महाराज, एक गौरवशाली और दिव्य आचार्य परंपरा के संवाहक हैं। महाराज जी सुप्रसिद्ध आचार्य श्री हित प्रमोद चंद्र गोस्वामी जी महाराज के पौत्र तथा श्री हित आचार्य श्री हित मनमोहन लाल गोस्वामी जी महाराज के सुपुत्र हैं। इस प्रकार महाराज जी पीढ़ियों से चली आ रही ब्रज-भक्ति और रसरीति का रास पान कराते हैं।
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                महाराज जी, भगवान श्रीकृष्ण के बंसी (वंशी) अवतार श्री हित हरिवंश महाप्रभु के वंशज हैं। श्री हित हरिवंश महाप्रभु ने ही वृन्दावन धाम में विश्वविख्यात श्री राधावल्लभ मंदिर की स्थापना की थी तथा स्वयं श्री राधावल्लभ लाल की अष्टयाम सेवा के द्वारा निरंतर आराधना की। उसी रसरीति के अनुसार आज भी श्री राधावल्लभ लाल जी को श्रद्धा एवं विधिपूर्वक अष्टयाम सेवा अर्पित की जाती है।
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                श्री हित कुल वंश परंपरा के 19वें आचार्य के रूप में श्री हित निमिष गोस्वामी जी महाराज, अपने पूर्वज आचार्यों द्वारा स्थापित रसरीति , उपासना और सिद्धांतों का पूर्ण निष्ठा के साथ पालन कर रहे हैं। उनके आचार, विचार और उपदेशों में ब्रज की माधुर्य भक्ति, सरलता और रसिक परंपरा की स्पष्ट झलक मिलती है।
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                इसके अतिरिक्त, महाराज जी “वृन्दावन महिमामृत” की दिव्य एवं रसपूर्ण कथाओं के वर्णन के माध्यम से भक्तों को ब्रजधाम की महिमा, राधा–कृष्ण की अलौकिक लीलाओं और प्रेम-भक्ति के गूढ़ रहस्यों से परिचित कराते हैं। उनके उपदेश न केवल आध्यात्मिक ज्ञान प्रदान करते हैं, बल्कि साधकों को प्रिया–प्रियतम श्री राधावल्लभ लाल जी की निष्काम सेवा और भक्ति के पथ पर अग्रसर करते हैं।
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
                महाराज जी के करुणामय मार्गदर्शन, सरल स्वभाव और आध्यात्मिक प्रेरणा से आज देश–विदेश में हजारों श्रद्धालु लाभान्वित हो रहे हैं। इसी कारण उनके अनेक शिष्य और अनुयायी हैं, जो उनके सान्निध्य में रहकर ब्रज-भक्ति और रसरीति का पालन कर रहे हैं।
              </p>

              {/* Bottom Accent */}
              <div className="flex items-center gap-3 mt-8">
                <span className="h-[2px] w-24 bg-gradient-to-r from-amber-600 to-transparent rounded-full" />
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
