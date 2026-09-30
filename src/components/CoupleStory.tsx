import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { ImageCarousel } from './ImageCarousel';

export const CoupleStory: React.FC = () => {
  return (
    <section id="couple" className="py-20 px-4 md:px-8 bg-[#FFF9EF] text-[#291C1A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
            <Heart className="w-4 h-4 text-[#6E1F2E]" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Two Souls, One Destiny
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            Meet the Bride & Groom
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-xl mx-auto">
            "Ek Joti Due Murti" — Two hearts coming together to embark on a holy journey of lifetime togetherness.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Couple Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 items-stretch">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F0E3] border-2 border-[#B5965A]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-lg hover:border-[#B5965A] transition-all"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#B5965A]/50 overflow-hidden shrink-0 shadow-md">
              <img
                src={WEDDING_DATA.couple.groom.image}
                alt={WEDDING_DATA.couple.groom.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <span className="text-xs font-cinzel font-semibold uppercase tracking-widest text-[#B5965A]">
                {WEDDING_DATA.couple.groom.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
                {WEDDING_DATA.couple.groom.fullName}
              </h3>
              <p className="text-xs font-sans-body text-[#291C1A]/80 leading-relaxed italic">
                "{WEDDING_DATA.couple.groom.about}"
              </p>
              <div className="pt-2 text-[11px] font-sans-body text-[#6E1F2E] font-medium border-t border-[#B5965A]/20">
                Parents: {WEDDING_DATA.couple.groom.parents}
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F0E3] border-2 border-[#B5965A]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-lg hover:border-[#B5965A] transition-all"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#B5965A]/50 overflow-hidden shrink-0 shadow-md">
              <img
                src={WEDDING_DATA.couple.bride.image}
                alt={WEDDING_DATA.couple.bride.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <span className="text-xs font-cinzel font-semibold uppercase tracking-widest text-[#B5965A]">
                {WEDDING_DATA.couple.bride.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
                {WEDDING_DATA.couple.bride.fullName}
              </h3>
              <p className="text-xs font-sans-body text-[#291C1A]/80 leading-relaxed italic">
                "{WEDDING_DATA.couple.bride.about}"
              </p>
              <div className="pt-2 text-[11px] font-sans-body text-[#6E1F2E] font-medium border-t border-[#B5965A]/20">
                Parents: {WEDDING_DATA.couple.bride.parents}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Memory Carousel Component */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
              Our Journey in Chapters
            </h3>
            <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/70">
              Moments that brought us closer to our wedding day.
            </p>
          </div>

          <ImageCarousel moments={WEDDING_DATA.storyMoments} />
        </div>
      </div>
    </section>
  );
};
