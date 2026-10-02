import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FeatureCarousel } from './ui/feature-carousel';

export const Celebrations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={sectionRef} id="celebrations" className="relative py-8 sm:py-20 px-0 sm:px-6 md:px-12 bg-gradient-to-b from-[#42131E] via-[#5C1A27] to-[#42131E] text-[#FFF9EF] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="w-full max-w-7xl mx-auto relative z-10 px-0 sm:px-2">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-10 px-4 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs uppercase font-sans-body tracking-[0.25em] font-bold">
              WEDDING CELEBRATION PROGRAMME
            </span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-serif-luxury font-bold text-amber-100 tracking-tight">
            Events &amp; Ceremonies
          </h2>
          <p className="text-[11px] sm:text-sm font-cormorant italic text-[#FFF9EF]/80 max-w-xl mx-auto hidden sm:block">
            Interactive vertical navigation &amp; live 3D card carousel of all function dates, timings, venues &amp; dress codes.
          </p>
        </div>

        {/* Feature Carousel Component for Events */}
        <FeatureCarousel />

      </motion.div>
    </section>
  );
};


