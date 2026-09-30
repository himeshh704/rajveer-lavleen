import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles, Heart, GlassWater, Shirt } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import type { EventDetail } from '../data/weddingData';

export const Celebrations: React.FC = () => {
  return (
    <section id="celebrations" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#6E1F2E] via-[#521722] to-[#42131E] text-[#FFF9EF] overflow-hidden">
      {/* Background Decorative Gold Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B5965A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              The Celebrations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-amber-100 tracking-tight">
            Wedding Itinerary & Functions
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#FFF9EF]/80 max-w-xl mx-auto">
            Join us in honoring traditions, dancing to joyous beats, and celebrating eternal union.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {WEDDING_DATA.events.map((evt: EventDetail, idx: number) => {
            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-[#291C1A]/80 backdrop-blur-md border border-[#B5965A]/40 hover:border-[#B5965A] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent group-hover:via-[#D4AF37]" />

                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-cinzel font-semibold tracking-widest text-[#B5965A] uppercase">
                      Event 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#B5965A]/15 border border-[#B5965A]/40 flex items-center justify-center text-[#D4AF37]">
                      {evt.iconName === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                      {evt.iconName === 'Heart' && <Heart className="w-5 h-5" />}
                      {evt.iconName === 'GlassWater' && <GlassWater className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-serif-luxury font-bold text-amber-100 mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {evt.name}
                  </h3>
                  <p className="text-xs font-sans-body text-[#B5965A] font-medium mb-6">
                    {evt.tagline}
                  </p>

                  {/* Date, Time, Venue Pills */}
                  <div className="space-y-3 text-xs sm:text-sm font-sans-body border-y border-[#B5965A]/20 py-4 my-4">
                    <div className="flex items-start gap-2.5 text-[#FFF9EF]/90">
                      <Calendar className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                      <span>{evt.formattedDate}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#FFF9EF]/90">
                      <Clock className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                      <span>{evt.time}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#FFF9EF]/90">
                      <MapPin className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-100">{evt.venue}</p>
                        <p className="text-xs text-[#FFF9EF]/70">{evt.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[#FFF9EF]/90 pt-2 border-t border-[#B5965A]/15">
                      <Shirt className="w-4 h-4 text-[#B5965A] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#B5965A] font-semibold block">Dress Code</span>
                        <span className="text-xs text-amber-200">{evt.dressCode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/80 leading-relaxed mb-6">
                    {evt.description}
                  </p>
                </div>

                {/* Action Buttons: Maps & Calendar */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#B5965A]/20">
                  <a
                    href={evt.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#B5965A]/20 hover:bg-[#B5965A] border border-[#B5965A]/50 text-amber-100 hover:text-[#291C1A] text-xs font-semibold font-sans-body transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={evt.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFF9EF]/10 hover:bg-[#FFF9EF]/20 border border-[#FFF9EF]/30 text-[#FFF9EF] text-xs font-semibold font-sans-body transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Add to Calendar</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
