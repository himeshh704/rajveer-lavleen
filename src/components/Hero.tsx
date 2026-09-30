import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track window scroll progress relative to hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Mobile-first portal scroll transformations
  const templeScale = useTransform(scrollYProgress, [0, 0.65], [1, 2.4]);
  const doorLeftX = useTransform(scrollYProgress, [0.08, 0.65], ['0%', '-100%']);
  const doorRightX = useTransform(scrollYProgress, [0.08, 0.65], ['0%', '100%']);
  const portalGlowOpacity = useTransform(scrollYProgress, [0.05, 0.4, 0.75], [0, 1, 0.25]);
  const portalGlowScale = useTransform(scrollYProgress, [0.05, 0.65], [0.5, 2.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-gradient-to-b from-[#38bdf8] via-[#7dd3fc] to-[#bae6fd] text-white flex flex-col justify-between items-center"
    >
      {/* Sky Blue Ambient & Animated Mobile Clouds Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Clouds */}
        <div className="absolute -top-6 -left-10 w-72 sm:w-96 h-36 bg-white/45 rounded-full blur-2xl animate-cloud-move" />
        <div
          className="absolute top-12 -right-12 w-80 sm:w-[500px] h-44 bg-white/50 rounded-full blur-3xl animate-cloud-move"
          style={{ animationDuration: '30s' }}
        />
        <div
          className="absolute top-1/3 left-2 w-64 sm:w-80 h-32 bg-white/35 rounded-full blur-2xl animate-cloud-move"
          style={{ animationDuration: '38s' }}
        />
        <div
          className="absolute bottom-1/3 right-2 w-56 sm:w-72 h-28 bg-white/30 rounded-full blur-xl animate-cloud-move"
          style={{ animationDuration: '26s' }}
        />

        {/* Soft Sun Ray Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-b from-white/35 via-sky-200/15 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Typography (Upper Third - Mobile First Layout) */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY
        }}
        className="relative z-20 pt-8 sm:pt-14 px-4 text-center flex flex-col items-center select-none max-w-xl mx-auto"
      >
        {/* Uppercase Mobile Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white shadow-sm mb-2 sm:mb-3"
        >
          <Sparkles className="w-3 h-3 text-amber-200" />
          <span className="text-[10px] sm:text-xs md:text-sm font-sans-body tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
            {WEDDING_DATA.couple.subheading}
          </span>
          <Sparkles className="w-3 h-3 text-amber-200" />
        </motion.div>

        {/* Large Elegant Calligraphic Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] my-1 leading-tight"
        >
          {WEDDING_DATA.couple.heading}
        </motion.h1>

        {/* Date Callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-2xl md:text-3xl font-cinzel font-semibold tracking-widest text-amber-100 drop-shadow-md mt-0.5"
        >
          {WEDDING_DATA.formattedDate}
        </motion.p>

        <p className="text-[11px] sm:text-sm font-sans-body font-light tracking-wider text-sky-50 opacity-90 mt-0.5">
          {WEDDING_DATA.city}
        </p>
      </motion.div>

      {/* Cinematic Portal Glow Layer (Blooms through center on mobile touch scroll) */}
      <motion.div
        style={{
          opacity: portalGlowOpacity,
          scale: portalGlowScale
        }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-radial from-amber-100 via-amber-200/65 to-transparent blur-3xl" />
      </motion.div>

      {/* Gurdwara Temple Artwork Stage (Bottom Center - Mobile First Absolute Overlap) */}
      <div className="relative z-15 w-full flex flex-col items-center justify-end pointer-events-none pb-2 sm:pb-0">
        <motion.div
          style={{
            scale: templeScale
          }}
          className="relative w-[96vw] max-w-3xl aspect-[1024/558] origin-bottom flex items-end justify-center"
        >
          {/* Temple Left Half - Absolute Inset Overlap */}
          <motion.img
            src="/images/temple_left.png"
            alt="Gurdwara Left Portal"
            style={{
              x: doorLeftX
            }}
            className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />

          {/* Temple Right Half - Absolute Inset Overlap */}
          <motion.img
            src="/images/temple_right.png"
            alt="Gurdwara Right Portal"
            style={{
              x: doorRightX
            }}
            className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* Mobile Scroll Indicator Cue */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-25 mt-1 sm:mt-3 flex flex-col items-center gap-0.5 cursor-pointer pointer-events-auto"
          onClick={onExploreClick}
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90 font-sans-body font-semibold drop-shadow">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="p-1 sm:p-1.5 rounded-full bg-white/25 border border-white/40 text-white shadow-md backdrop-blur-sm"
          >
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Soft Bottom Transition Gradient to Ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-[#FFF9EF] via-[#FFF9EF]/40 to-transparent z-20 pointer-events-none" />
    </div>
  );
};
