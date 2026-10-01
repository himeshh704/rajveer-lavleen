import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const InvitationBlessing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section ref={sectionRef} id="invitation" className="relative py-24 px-4 md:px-8 bg-[#FFF9EF] text-[#291C1A] overflow-hidden">
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#B5965A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Luxury Frame Card */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          style={{ y: parallaxY, scale: scaleProgress }}
          className="relative bg-[#F8F0E3]/90 backdrop-blur-sm border-2 border-[#B5965A]/40 rounded-2xl p-8 md:p-14 shadow-[0_12px_40px_rgba(41,28,26,0.08)] text-center overflow-hidden will-change-transform"
        >
          {/* Corner Floral Motifs */}
          <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#B5965A]/60 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#B5965A]/60 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#B5965A]/60 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#B5965A]/60 rounded-br-xl pointer-events-none" />

          {/* Celestial / Sacred Symbol Header */}
          <div className="inline-flex flex-col items-center mb-6">
            <span className="text-4xl sm:text-5xl font-serif text-[#6E1F2E] font-bold tracking-widest my-1 select-none">
              ੴ
            </span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent my-2" />
          </div>

          {/* Gurbani Verse & Translation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-10 px-2"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-serif-luxury text-[#6E1F2E] font-semibold tracking-wide leading-relaxed">
              {WEDDING_DATA.gurbaniBlessing.gurmukhi}
            </p>
            <p className="text-xs sm:text-sm font-sans-body italic text-[#291C1A]/80 mt-3 max-w-2xl mx-auto leading-relaxed">
              "{WEDDING_DATA.gurbaniBlessing.translation}"
            </p>
          </motion.div>

          <div className="w-16 h-[1px] bg-[#B5965A]/40 mx-auto my-6" />

          {/* Invitation Intro */}
          <div className="space-y-3 mb-10">
            <p className="text-xs sm:text-sm font-sans-body uppercase tracking-[0.25em] text-[#B5965A] font-semibold">
              With the celestial blessings of Almighty Waheguru & Elders
            </p>
            <p className="text-base sm:text-lg font-cormorant italic text-[#291C1A]/90">
              Together with their families,
            </p>
          </div>

          {/* Parents & Family Names Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-left md:text-center max-w-3xl mx-auto border-y border-[#B5965A]/25 py-8">
            {/* Groom's Side */}
            <div className="space-y-2 px-4 border-b md:border-b-0 md:border-r border-[#B5965A]/20 pb-6 md:pb-0">
              <span className="text-xs uppercase tracking-widest text-[#6E1F2E] font-bold block mb-1">
                Groom's Family
              </span>
              <p className="text-sm sm:text-base font-serif-luxury text-[#291C1A] font-semibold">
                {WEDDING_DATA.couple.groom.parents}
              </p>
              <p className="text-xs font-sans-body text-[#291C1A]/70 italic">
                Grandparents: {WEDDING_DATA.couple.groom.grandparents}
              </p>
            </div>

            {/* Bride's Side */}
            <div className="space-y-2 px-4 pt-2 md:pt-0">
              <span className="text-xs uppercase tracking-widest text-[#6E1F2E] font-bold block mb-1">
                Bride's Family
              </span>
              <p className="text-sm sm:text-base font-serif-luxury text-[#291C1A] font-semibold">
                {WEDDING_DATA.couple.bride.parents}
              </p>
              <p className="text-xs font-sans-body text-[#291C1A]/70 italic">
                Grandparents: {WEDDING_DATA.couple.bride.grandparents}
              </p>
            </div>
          </div>

          {/* Formal Invite Phrasing */}
          <p className="text-sm sm:text-base font-sans-body uppercase tracking-[0.2em] text-[#291C1A]/80 my-6 font-medium">
            Cordially request the honor of your presence to celebrate the nuptials of
          </p>

          {/* Couple Names Highlight */}
          <div className="my-8 py-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold text-[#6E1F2E] tracking-tight leading-tight">
              {WEDDING_DATA.couple.groom.firstName}{' '}
              <span className="text-3xl sm:text-5xl font-italiana text-[#B5965A] font-normal italic px-2">
                &
              </span>{' '}
              {WEDDING_DATA.couple.bride.firstName}
            </h2>
            <p className="text-sm sm:text-base font-cinzel text-[#B5965A] tracking-widest uppercase mt-3 font-semibold">
              Anand Karaj & Wedding Celebrations
            </p>
          </div>

          {/* Date & Location Footer */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] shadow-md border border-[#B5965A]/40 mt-4">
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
            <span className="text-xs sm:text-sm font-cinzel font-semibold tracking-wider">
              {WEDDING_DATA.formattedDate} • {WEDDING_DATA.city}
            </span>
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
