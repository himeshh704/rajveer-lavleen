import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import type { EventDetail } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

export const Celebrations: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const currentEvent = WEDDING_DATA.events[activeEventIndex];

  const handleNext = () => {
    soundEngine.playChime();
    setActiveEventIndex((prev) => (prev + 1) % WEDDING_DATA.events.length);
  };

  const handlePrev = () => {
    soundEngine.playChime();
    setActiveEventIndex((prev) => (prev - 1 + WEDDING_DATA.events.length) % WEDDING_DATA.events.length);
  };

  return (
    <section ref={sectionRef} id="celebrations" className="relative py-20 px-3 sm:px-6 md:px-12 bg-gradient-to-b from-[#42131E] via-[#5C1A27] to-[#42131E] text-[#FFF9EF] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="w-full max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-bold">
              WEDDING CELEBRATION PROGRAMME
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 tracking-tight">
            Events &amp; Ceremonies
          </h2>
          <p className="text-xs sm:text-sm font-cormorant italic text-[#FFF9EF]/80">
            Swipe or select an event below to view event details, dress codes &amp; timings.
          </p>
        </div>

        {/* Event Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {WEDDING_DATA.events.map((evt: EventDetail, idx: number) => {
            const isActive = idx === activeEventIndex;
            return (
              <button
                key={evt.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveEventIndex(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans-body font-semibold transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B5965A] text-[#291C1A] border-amber-300 shadow-lg scale-105 font-bold'
                    : 'bg-[#291C1A]/80 text-[#FFF9EF]/80 border-[#B5965A]/30 hover:border-[#B5965A]'
                }`}
              >
                {evt.name}
              </button>
            );
          })}
        </div>

        {/* Illustrated Event Card (Matching Reference Card input_file_0.png) */}
        <div className="relative max-w-xl mx-auto">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#291C1A]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous Event"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#291C1A]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Next Event"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-b from-[#F2F7F2] via-[#F6FAF6] to-[#EEF5EE] border-2 border-[#D4AF37]/80 rounded-3xl p-6 sm:p-10 shadow-2xl text-center text-[#291C1A] overflow-hidden"
            >
              {/* Marigold Garland Header Motif */}
              <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none opacity-90">
                <svg viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
                  {/* Garland Strings */}
                  <path d="M0 0 Q62 40 125 0 Q187 40 250 0 Q312 40 375 0 Q437 40 500 0" stroke="#7A5C3D" strokeWidth="1.5" />
                  {/* Marigold Flowers */}
                  {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map((cx, i) => (
                    <g key={i}>
                      <circle cx={cx} cy={i % 2 === 0 ? 18 : 26} r="8" fill={i % 3 === 0 ? "#FF8C00" : "#FFD700"} />
                      <circle cx={cx} cy={i % 2 === 0 ? 18 : 26} r="4" fill="#FFA500" />
                    </g>
                  ))}
                  {/* Hanging Tassels */}
                  {[62, 187, 312, 437].map((tx, j) => (
                    <g key={j}>
                      <line x1={tx} y1="20" x2={tx} y2="45" stroke="#8B0000" strokeWidth="2" />
                      <circle cx={tx} cy="48" r="5" fill="#8B0000" />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="pt-6 pb-2 space-y-4">
                
                {/* Poetic Intro Line */}
                <div className="space-y-1 text-xs sm:text-sm font-sans-body font-semibold text-[#5E4B37] max-w-md mx-auto leading-relaxed">
                  <p>{currentEvent.description}</p>
                </div>

                {/* Event Name (Calligraphic Script) */}
                <div className="py-2">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-great-vibes text-[#7D1D28] font-bold tracking-normal leading-tight">
                    {currentEvent.name}
                  </h3>
                </div>

                {/* Connector */}
                <p className="text-xs font-sans-body text-[#7A5C3D] italic">on</p>

                {/* Date & Time Highlight */}
                <div className="text-sm sm:text-base md:text-lg font-cinzel font-bold text-[#C59B27] tracking-wide">
                  {currentEvent.formattedDate} | {currentEvent.time}
                </div>

                {/* Connector */}
                <p className="text-xs font-sans-body text-[#7A5C3D] italic pt-1">at</p>

                {/* Venue */}
                <div className="space-y-0.5">
                  <h4 className="text-xl sm:text-2xl font-cinzel font-black text-[#B8860B] tracking-wider uppercase">
                    {currentEvent.venue}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans-body text-[#5E4B37] font-semibold">
                    {currentEvent.address}
                  </p>
                </div>

                {/* Dress Code */}
                <div className="pt-4 border-t border-[#D4AF37]/30">
                  <span className="text-xs font-cinzel font-bold text-[#7D1D28] tracking-widest uppercase bg-[#FDE68A]/60 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 inline-block">
                    DRESS CODE : {currentEvent.dressCode}
                  </span>
                </div>

                {/* Couple Illustration at Card Base */}
                <div className="pt-4 flex justify-center items-center relative">
                  <img
                    src="/images/amrit_simran_2d_couple_illustration.png"
                    alt="Sikh Couple Illustration"
                    className="w-48 sm:w-64 h-auto object-contain mx-auto drop-shadow-md"
                  />
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
};

