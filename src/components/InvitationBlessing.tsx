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

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.99]);

  return (
    <section ref={sectionRef} id="invitation" className="relative py-20 px-3 sm:px-6 md:px-12 bg-gradient-to-b from-[#E8F3F8] via-[#EFF7FA] to-[#E3F0F6] text-[#291C1A] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Background Hanging Gold Lanterns Left & Right */}
      <div className="absolute top-0 left-4 md:left-12 w-12 sm:w-20 md:w-28 opacity-90 pointer-events-none z-10 animate-float-slow">
        <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          {/* Chain */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 3" />
          {/* Top Cap */}
          <path d="M35 100 Q50 90 65 100 L60 110 L40 110 Z" fill="#C59B27" />
          {/* Lantern Body */}
          <path d="M30 110 Q50 105 70 110 L78 150 Q50 165 22 150 Z" fill="url(#goldGrad)" stroke="#B5965A" strokeWidth="1.5" />
          {/* Inner Light */}
          <ellipse cx="50" cy="130" rx="14" ry="18" fill="#FFF2B2" opacity="0.9" className="animate-pulse-glow" />
          {/* Base & Tassel */}
          <path d="M40 150 L60 150 L55 160 L45 160 Z" fill="#C59B27" />
          <line x1="50" y1="160" x2="50" y2="185" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="187" r="3" fill="#D4AF37" />
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9E29C" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B5965A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 right-4 md:right-12 w-12 sm:w-20 md:w-28 opacity-90 pointer-events-none z-10 animate-float-slow [animation-delay:1.5s]">
        <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          <line x1="50" y1="0" x2="50" y2="90" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M35 90 Q50 80 65 90 L60 100 L40 100 Z" fill="#C59B27" />
          <path d="M30 100 Q50 95 70 100 L78 140 Q50 155 22 140 Z" fill="url(#goldGrad)" stroke="#B5965A" strokeWidth="1.5" />
          <ellipse cx="50" cy="120" rx="14" ry="18" fill="#FFF2B2" opacity="0.9" className="animate-pulse-glow" />
          <path d="M40 140 L60 140 L55 150 L45 150 Z" fill="#C59B27" />
          <line x1="50" y1="150" x2="50" y2="175" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="177" r="3" fill="#D4AF37" />
        </svg>
      </div>

      {/* Main Luxury Sikh Royal Arch Card */}
      <div className="w-full max-w-2xl mx-auto relative z-20 my-6">
        
        {/* Divine Maroon Gurbani Banner Box Above Card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center px-2"
        >
          <div className="inline-flex flex-col items-center justify-center gap-1.5 px-6 sm:px-10 py-3.5 rounded-2xl bg-[#6E1F2E] text-[#FFF9EF] shadow-xl border-2 border-[#D4AF37]/70 max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-cyan-300 font-bold text-base sm:text-lg">ੴ</span>
              <span className="text-base sm:text-lg md:text-xl font-serif-luxury font-bold tracking-wide text-[#FDE68A]">
                {WEDDING_DATA.gurbaniBlessing.gurmukhi}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-sans-body italic text-[#FFF9EF]/95 font-light leading-relaxed">
              "{WEDDING_DATA.gurbaniBlessing.translation}"
            </p>
          </div>
        </motion.div>

        {/* White Arched Inner Invitation Card */}
        <motion.div
          style={{ y: parallaxY, scale: scaleProgress }}
          className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFBF4] border-2 border-[#D4AF37]/70 rounded-t-[100px] sm:rounded-t-[140px] rounded-b-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(30,50,70,0.15)] text-center overflow-hidden will-change-transform"
        >
          
          {/* Inner Golden Arch Border Silhouette */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#B5965A]/40 rounded-t-[90px] sm:rounded-t-[130px] rounded-b-2xl pointer-events-none" />
          
          {/* Top Royal Monogram Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center mt-2 mb-5"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-br from-[#F5E5C0] via-[#D4AF37] to-[#9A7B3E] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#FFFDF9] flex items-center justify-center p-2 border border-[#B5965A]/40 shadow-inner">
                <img
                  src="/images/rl_monogram_cutout.png"
                  alt="RL Monogram Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-[11px] sm:text-xs font-serif-luxury tracking-widest text-[#B8860B] uppercase font-semibold mt-2">
              ੴ ਵਾਹਿਗੁਰੂ
            </p>
          </motion.div>

          {/* Family Blessing Heading */}
          <p className="text-[10px] sm:text-xs font-sans-body uppercase tracking-[0.25em] text-[#B5965A] font-bold mb-4">
            WITH THE CELESTIAL BLESSINGS OF ALMIGHTY WAHEGURU
          </p>

          <p className="text-xs sm:text-sm font-sans-body italic text-[#7A5C3D] my-2 font-medium">
            Together with their families,
          </p>

          {/* Grandparents Line (Golden Cursive Script) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="my-4"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-great-vibes text-[#C59B27] font-semibold tracking-wide drop-shadow-sm px-2">
              {WEDDING_DATA.couple.groom.grandparents}
            </h3>
          </motion.div>

          {/* Invitation Request Lines */}
          <div className="space-y-1 my-5 text-[#6B5139]">
            <p className="text-xs sm:text-sm font-sans-body text-[#7A5C3D] uppercase tracking-wider font-semibold">
              REQUEST THE HONOUR OF YOUR PRESENCE AT THE
            </p>
            <h4 className="text-base sm:text-lg md:text-xl font-cinzel font-bold text-[#B8860B] tracking-wider uppercase py-1">
              "WEDDING CELEBRATIONS"
            </h4>
            <p className="text-xs sm:text-sm font-sans-body text-[#7A5C3D]">
              of their Grandson
            </p>
          </div>

          {/* Groom Section */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-5 space-y-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-great-vibes text-[#7D1D28] font-bold tracking-normal leading-tight">
              {WEDDING_DATA.couple.groom.fullName}
            </h2>
            <p className="text-xs sm:text-sm font-sans-body text-[#5E4B37] font-medium">
              (S/o. {WEDDING_DATA.couple.groom.parents})
            </p>
          </motion.div>

          {/* Connector Word */}
          <div className="my-3">
            <span className="text-sm sm:text-base font-great-vibes text-[#C59B27] italic px-4 font-semibold text-lg">
              with
            </span>
          </div>

          {/* Bride Section */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="my-5 space-y-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-great-vibes text-[#7D1D28] font-bold tracking-normal leading-tight">
              {WEDDING_DATA.couple.bride.fullName}
            </h2>
            <div className="space-y-0.5 text-xs sm:text-sm font-sans-body text-[#5E4B37] font-medium pt-1">
              <p className="text-xs sm:text-sm text-[#5E4B37]/90 font-medium">
                (G/d. {WEDDING_DATA.couple.bride.grandparents})
              </p>
              <p>(D/o. {WEDDING_DATA.couple.bride.parents})</p>
            </div>
          </motion.div>

          {/* Date & Venue Section */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 space-y-1.5 text-[#6B5139]">
            <p className="text-xs font-sans-body text-[#7A5C3D] italic">for the holy</p>
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-[#6E1F2E] tracking-wider uppercase">
              ANAND KARAJ
            </h3>
            <p className="text-xs font-sans-body text-[#7A5C3D] italic pt-1">on</p>
            <p className="text-lg sm:text-xl font-cinzel font-bold text-[#C59B27] tracking-wide uppercase">
              SUNDAY, 1 NOVEMBER 2026
            </p>
            <p className="text-xs font-sans-body text-[#7A5C3D] italic pt-1">at</p>
            <h4 className="text-xl sm:text-2xl font-cinzel font-black text-[#B8860B] tracking-wider uppercase">
              GURUDWARA SAHIB
            </h4>
            <p className="text-sm font-sans-body text-[#5E4B37] font-semibold">
              Beawar (Raj.)
            </p>
          </div>

          {/* Decorative Palace Dome & Lotus Footer SVG Frame */}
          <div className="mt-8 pt-4 flex items-center justify-between opacity-85">
            {/* Left Chhatri Dome & Lotus */}
            <div className="w-16 h-12 flex items-end">
              <svg viewBox="0 0 100 80" fill="none" className="w-full h-full text-[#C59B27]">
                <path d="M50 10 Q25 30 10 50 L90 50 Q75 30 50 10 Z" fill="#F4E8CE" stroke="#C59B27" strokeWidth="2" />
                <rect x="44" y="0" width="12" height="10" fill="#C59B27" />
                <path d="M20 50 C30 65 40 70 50 75 C60 70 70 65 80 50 Z" fill="#E6C887" />
              </svg>
            </div>

            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span className="text-[10px] font-cinzel tracking-widest text-[#B8860B] uppercase font-bold">
                #RajveerWedsLavleen
              </span>
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
            </div>

            {/* Right Chhatri Dome & Lotus */}
            <div className="w-16 h-12 flex items-end">
              <svg viewBox="0 0 100 80" fill="none" className="w-full h-full text-[#C59B27]">
                <path d="M50 10 Q25 30 10 50 L90 50 Q75 30 50 10 Z" fill="#F4E8CE" stroke="#C59B27" strokeWidth="2" />
                <rect x="44" y="0" width="12" height="10" fill="#C59B27" />
                <path d="M20 50 C30 65 40 70 50 75 C60 70 70 65 80 50 Z" fill="#E6C887" />
              </svg>
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

