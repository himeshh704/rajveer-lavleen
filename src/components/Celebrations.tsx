import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles, Heart, GlassWater, Shirt, ChevronRight, Layers, LayoutList, Palette } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import type { EventDetail } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

export const Celebrations: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'all'>('interactive');
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxContentY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const currentEvent = WEDDING_DATA.events[activeDayIndex];

  // Color Swatches per Event
  const colorSwatches: Record<string, { name: string; hex: string }[]> = {
    'mehndi-sangeet': [
      { name: 'Emerald Green', hex: '#004B23' },
      { name: 'Saffron Yellow', hex: '#E9B44C' },
      { name: 'Royal Gold', hex: '#D4AF37' }
    ],
    'anand-karaj': [
      { name: 'Velvet Crimson', hex: '#6E1F2E' },
      { name: 'Pastel Blush', hex: '#F4ACB7' },
      { name: 'Ivory Gold', hex: '#F8F0E3' }
    ],
    'reception': [
      { name: 'Midnight Black', hex: '#121212' },
      { name: 'Royal Maroon', hex: '#42131E' },
      { name: 'Champagne Gold', hex: '#D4AF37' }
    ]
  };

  const currentSwatches = colorSwatches[currentEvent.id] || [];

  return (
    <section ref={sectionRef} id="celebrations" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#6E1F2E] via-[#521722] to-[#42131E] text-[#FFF9EF] overflow-hidden">
      {/* Ambient Radial Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B5965A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ y: parallaxContentY }} className="max-w-5xl mx-auto relative z-10 will-change-transform">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              The Celebrations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-amber-100 tracking-tight">
            Creative Wedding Itinerary
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#FFF9EF]/80 max-w-xl mx-auto">
            Select a day below to step into each chapter of our royal Punjabi celebrations.
          </p>

          {/* View Mode Switcher Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-[#291C1A]/80 border border-[#B5965A]/40 text-xs font-sans-body">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setViewMode('interactive');
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-[#B5965A] text-[#291C1A] font-bold shadow-md'
                    : 'text-[#FFF9EF]/80 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive Day Experience</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  setViewMode('all');
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${
                  viewMode === 'all'
                    ? 'bg-[#B5965A] text-[#291C1A] font-bold shadow-md'
                    : 'text-[#FFF9EF]/80 hover:text-white'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Show All Events</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Interactive Day-by-Day Experience */}
        {viewMode === 'interactive' && (
          <div className="space-y-8">
            {/* Interactive Day Timeline Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {WEDDING_DATA.events.map((evt: EventDetail, idx: number) => {
                const isActive = idx === activeDayIndex;
                return (
                  <button
                    key={evt.id}
                    onClick={() => {
                      soundEngine.playChime();
                      setActiveDayIndex(idx);
                    }}
                    className={`px-5 py-3 rounded-2xl border transition-all flex flex-col items-center gap-0.5 text-center ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#B5965A] to-[#8C6D32] text-[#291C1A] border-amber-300 shadow-xl scale-105 font-bold'
                        : 'bg-[#291C1A]/70 text-[#FFF9EF]/80 border-[#B5965A]/30 hover:border-[#B5965A]'
                    }`}
                  >
                    <span className="text-[10px] font-cinzel tracking-widest uppercase opacity-80">
                      Day 0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-serif-luxury font-bold">
                      {evt.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Active Event Stage with 3D Slide Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#291C1A]/90 backdrop-blur-md border-2 border-[#B5965A] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#B5965A]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Event Info (Left 7 Cols) */}
                  <div className="md:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#B5965A]/20 text-[#D4AF37] text-xs font-cinzel font-semibold tracking-widest border border-[#B5965A]/40 uppercase">
                        Day 0{activeDayIndex + 1} • {currentEvent.date}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#B5965A]/15 flex items-center justify-center text-[#D4AF37]">
                        {currentEvent.iconName === 'Sparkles' && <Sparkles className="w-4 h-4" />}
                        {currentEvent.iconName === 'Heart' && <Heart className="w-4 h-4" />}
                        {currentEvent.iconName === 'GlassWater' && <GlassWater className="w-4 h-4" />}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
                        {currentEvent.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans-body text-[#B5965A] font-semibold mt-1">
                        {currentEvent.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/85 leading-relaxed">
                      {currentEvent.description}
                    </p>

                    {/* Details Pills */}
                    <div className="space-y-3 pt-3 border-t border-[#B5965A]/25 text-xs sm:text-sm font-sans-body">
                      <div className="flex items-center gap-2.5 text-[#FFF9EF]/90">
                        <Clock className="w-4 h-4 text-[#B5965A] shrink-0" />
                        <span>{currentEvent.time}</span>
                      </div>

                      <div className="flex items-start gap-2.5 text-[#FFF9EF]/90">
                        <MapPin className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-100">{currentEvent.venue}</p>
                          <p className="text-xs text-[#FFF9EF]/70">{currentEvent.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-[#FFF9EF]/90">
                        <Shirt className="w-4 h-4 text-[#B5965A] shrink-0" />
                        <div>
                          <span className="text-[#B5965A] font-semibold">Dress Code: </span>
                          <span className="text-amber-200">{currentEvent.dressCode}</span>
                        </div>
                      </div>

                      {/* Dress Code Color Swatches */}
                      {currentSwatches.length > 0 && (
                        <div className="flex items-center gap-2 pt-1">
                          <Palette className="w-3.5 h-3.5 text-[#B5965A]" />
                          <span className="text-[11px] text-[#B5965A] font-semibold uppercase tracking-wider">Palette:</span>
                          <div className="flex items-center gap-1.5">
                            {currentSwatches.map((swatch, sIdx) => (
                              <div
                                key={sIdx}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFF9EF]/10 border border-white/20 text-[10px]"
                              >
                                <span className="w-2.5 h-2.5 rounded-full border border-white/40" style={{ backgroundColor: swatch.hex }} />
                                <span className="text-amber-100 font-medium">{swatch.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Maps & Calendar Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href={currentEvent.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B5965A] text-[#291C1A] text-xs font-bold font-sans-body shadow-md hover:brightness-110 transition-all"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Get Directions</span>
                      </a>

                      <a
                        href={currentEvent.calendarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFF9EF]/10 hover:bg-[#FFF9EF]/20 border border-[#FFF9EF]/30 text-[#FFF9EF] text-xs font-semibold font-sans-body transition-all"
                      >
                        <Calendar className="w-4 h-4 text-[#B5965A]" />
                        <span>Add to Calendar</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Highlight Card (Right 5 Cols) */}
                  <div className="md:col-span-5 relative bg-[#6E1F2E]/80 border border-[#B5965A]/40 rounded-2xl p-6 text-center space-y-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-[#B5965A]/20 border border-[#B5965A] mx-auto flex items-center justify-center text-3xl">
                      {activeDayIndex === 0 && '🪘'}
                      {activeDayIndex === 1 && 'ੴ'}
                      {activeDayIndex === 2 && '🥂'}
                    </div>

                    <h4 className="text-lg font-serif-luxury font-bold text-amber-100">
                      {activeDayIndex === 0 && 'Henna, Jaggo & Dholki'}
                      {activeDayIndex === 1 && 'Sacred Laavan & Langar'}
                      {activeDayIndex === 2 && 'Toasts, Music & Gala Dinner'}
                    </h4>

                    <p className="text-xs font-sans-body text-[#FFF9EF]/80 italic">
                      {activeDayIndex === 0 && 'Brass lanterns on heads, singing traditional Punjabi bolis into the starry night.'}
                      {activeDayIndex === 1 && 'Four circumambulations around Sri Guru Granth Sahib Ji, uniting two souls into one.'}
                      {activeDayIndex === 2 && 'Celebratory champagne, live acoustic violin, and a grand Punjabi feast.'}
                    </p>

                    <div className="pt-3 border-t border-[#B5965A]/20">
                      <button
                        onClick={() => {
                          soundEngine.playClick();
                          setActiveDayIndex((prev) => (prev + 1) % WEDDING_DATA.events.length);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-sans-body text-[#D4AF37] font-semibold hover:underline"
                      >
                        <span>Explore Next Day</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* View Mode 2: Show All Events List */}
        {viewMode === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEDDING_DATA.events.map((evt: EventDetail, idx: number) => (
              <div
                key={evt.id}
                className="bg-[#291C1A]/80 border border-[#B5965A]/40 rounded-2xl p-6 shadow-xl space-y-4"
              >
                <span className="text-xs font-cinzel text-[#B5965A] uppercase font-semibold">
                  Day 0{idx + 1} • {evt.formattedDate}
                </span>

                <h3 className="text-xl font-serif-luxury font-bold text-amber-100">
                  {evt.name}
                </h3>

                <p className="text-xs font-sans-body text-[#FFF9EF]/80">
                  {evt.description}
                </p>

                <div className="pt-3 border-t border-[#B5965A]/20 text-xs font-sans-body space-y-1">
                  <p className="text-amber-200"><strong>Time:</strong> {evt.time}</p>
                  <p className="text-amber-200"><strong>Venue:</strong> {evt.venue}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};
