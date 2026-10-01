import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Hotel, Camera, PhoneCall, CheckCircle2, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import type { ThingToKnow } from '../data/weddingData';

export const ThingsToKnow: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#6E1F2E]" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6 text-[#6E1F2E]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#6E1F2E]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#6E1F2E]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#6E1F2E]" />;
    }
  };

  return (
    <section id="details" className="py-20 px-4 md:px-8 bg-[#F8F0E3] text-[#291C1A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Essential Guide
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            Things To Know For Guests
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-xl mx-auto">
            Everything you need to know about wedding ceremony etiquette, stay, transfers, and concierges.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEDDING_DATA.thingsToKnow.map((item: ThingToKnow, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-[#B5965A] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6E1F2E]/10 border border-[#6E1F2E]/20 flex items-center justify-center shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-[#6E1F2E]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans-body text-[#291C1A]/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-2.5 mt-6 border-t border-[#B5965A]/20 pt-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans-body text-[#291C1A]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
