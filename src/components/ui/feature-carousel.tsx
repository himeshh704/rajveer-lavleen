"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Calendar,
  MapPin,
  Sun,
  Flame,
  Wine,
  Music,
  Clock,
  Shirt,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "../../lib/utils";

export interface EventFeatureItem {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  image: string;
  venue: string;
  time: string;
  dressCode: string;
  description: string;
}

const EVENTS_DATA: EventFeatureItem[] = [
  {
    id: "aarambh-akhand-path",
    label: "Shri Akhand Path Sahib Ji",
    sublabel: "28 Oct • 10:00 AM",
    icon: Sparkles,
    image: "/images/sikh_wedding_akhand_path_2d.png",
    venue: "Gurudwara Sahib / Residence",
    time: "Wednesday, 28th Oct • 10:00 AM",
    dressCode: "",
    description: "Inaugural Commencement of Sri Guru Granth Sahib Ji Recitation seeking divine blessings for the couple.",
  },
  {
    id: "sampati-kirtan-brunch",
    label: "Samapti Shri Akhand Path Sahib Ji",
    sublabel: "30 Oct • 10:00 AM",
    icon: Calendar,
    image: "/images/sikh_wedding_kirtan_2d.png",
    venue: "",
    time: "Friday, 30th Oct • 10:00 AM - 11:30 AM (Kirtan Darbaar)",
    dressCode: "",
    description: "30, Samapti Shri Akhand Path Sahib and Kirtan Darbar at Gurudwara Sahib, followed by Lunch Brunch at Laaj Haveli (11:30 AM).",
  },
  {
    id: "sagan-mehndi-cocktail",
    label: "Sagan, Mehndi, Cocktail & Jaggo",
    sublabel: "30 Oct • 8:00 PM",
    icon: Wine,
    image: "/images/sikh_wedding_mehndi_2d.png",
    venue: "Laaz Haveli, Mill Road",
    time: "Friday, 30th Oct • 8:00 PM Onwards",
    dressCode: "Glitz & Glamour (Black)",
    description: "Sagan di Mehndi, Jaggo, Cocktail & Evening Celebration in Black at Laaj Haveli, Mill Road.",
  },
  {
    id: "pool-party",
    label: "Pool Party",
    sublabel: "31 Oct • 8:00 AM",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    venue: "LAAZ HAVELI, Beawar",
    time: "Saturday, 31st Oct • 8:00 AM Onwards",
    dressCode: "SHADES OF PASTEL",
    description: "Let's Make a Splash! Morning sunshine, poolside music, games & endless fun followed by breakfast.",
  },
  {
    id: "haldi",
    label: "Haldi Ceremony",
    sublabel: "31 Oct • 11:30 AM",
    icon: Flame,
    image: "/images/sikh_wedding_haldi_2d.png",
    venue: "LAAZ HAVELI, Beawar",
    time: "Saturday, 31st Oct • 11:30 AM (Lunch at 1:00 PM)",
    dressCode: "YELLOW COLOUR",
    description: "Sacred Turmeric Blessing Ceremony at 11:30 AM, followed by delicious Lunch at 1:00 PM.",
  },
  {
    id: "ghadoli",
    label: "Ghadoli Ritual",
    sublabel: "31 Oct • 3:00 PM",
    icon: Music,
    image: "/images/sikh_wedding_ghadoli_2d.png",
    venue: "LAAZ HAVELI, Beawar",
    time: "Saturday, 31st Oct • 3:00 PM Onwards",
    dressCode: "PUNJABI TOUCH",
    description: "",
  },
  {
    id: "baraat-departure",
    label: "Baraat Departure",
    sublabel: "31 Oct • 6:00 PM",
    icon: Sparkles,
    image: "/images/sikh_wedding_baraat_2d.png",
    venue: "Residence to LAAZ HAVELI",
    time: "Saturday, 31st Oct • 6:00 PM Onwards",
    dressCode: "Royal Festive / Formal",
    description: "Grand Baraat Departure from home to Laaj Haveli at 6:00 PM with live dhol beats, fireworks & celebration.",
  },
  {
    id: "wedding-reception",
    label: "Wedding Reception",
    sublabel: "31 Oct • 8:00 PM",
    icon: Sparkles,
    image: "/images/reception_stage_2d.jpg",
    venue: "LAAZ HAVELI, Mill Road",
    time: "Wednesday, 31st Oct • 8:00 PM Onwards",
    dressCode: "Formals / Glitz",
    description: "A Celebration of Love & Togetherness. With hearts full of joy, we invite you to grace the evening as the couple celebrate the beginning of their beautiful journey together (Followed by Dinner).",
  },
  {
    id: "anand-karaj",
    label: "Anand Karaj",
    sublabel: "1 Nov • 10:30 AM",
    icon: Heart,
    image: "/images/sikh_wedding_anand_karaj_2d.png",
    venue: "Gurudwara Sahib & LAAZ HAVELI",
    time: "Sunday, 1st Nov • 10:30 AM Onwards",
    dressCode: "",
    description: "Holy Four Laavan Nuptials at Gurudwara Sahib.",
  },
];

const ITEM_HEIGHT = 68;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);

  const currentIndex =
    ((step % EVENTS_DATA.length) + EVENTS_DATA.length) % EVENTS_DATA.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const handleChipClick = (index: number) => {
    setStep(index);
  };

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = EVENTS_DATA.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-0 sm:px-4 md:p-4">
      <div className="relative overflow-hidden rounded-none sm:rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col lg:flex-row min-h-[88vh] lg:min-h-[580px] lg:aspect-video border-0 sm:border border-[#D4AF37]/40 shadow-2xl bg-[#42131E]">
        
        {/* Mobile Horizontal Pill Strip (< lg screens) */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-none py-3 px-3 gap-2 border-b border-[#D4AF37]/30 bg-gradient-to-r from-[#5A1220] via-[#42131E] to-[#330D16] z-40 shrink-0">
          {EVENTS_DATA.map((feature, index) => {
            const isActive = index === currentIndex;
            const IconComponent = feature.icon;

            return (
              <button
                key={feature.id}
                onClick={() => handleChipClick(index)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all text-left shrink-0 border cursor-pointer",
                  isActive
                    ? "bg-gradient-to-r from-[#D4AF37] via-[#FDE68A] to-[#B5965A] text-[#291C1A] border-amber-300 shadow-md font-bold scale-105"
                    : "bg-black/40 text-amber-100/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                )}
              >
                <IconComponent className={cn("w-3.5 h-3.5 shrink-0", isActive ? "text-[#6E1F2E]" : "text-[#D4AF37]")} />
                <span className="font-serif-luxury font-bold text-[11px] whitespace-nowrap uppercase">
                  {feature.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Vertical Navigation Rail (>= lg screens) */}
        <div className="hidden lg:flex w-[42%] h-full relative z-30 flex-col items-start justify-center overflow-hidden pl-12 bg-gradient-to-b from-[#5A1220] via-[#42131E] to-[#330D16]">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#5A1220] via-[#5A1220]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#330D16] via-[#330D16]/80 to-transparent z-40" />
          
          <div className="relative w-full h-full flex items-center justify-start z-20">
            {EVENTS_DATA.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(EVENTS_DATA.length / 2),
                EVENTS_DATA.length / 2,
                distance
              );

              const IconComponent = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    className={cn(
                      "relative flex items-center gap-4 px-8 py-3 rounded-full transition-all duration-700 text-left group border cursor-pointer",
                      isActive
                        ? "bg-gradient-to-r from-[#D4AF37] via-[#FDE68A] to-[#B5965A] text-[#291C1A] border-amber-300 shadow-xl z-10 font-bold scale-105"
                        : "bg-black/30 text-amber-100/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500 shrink-0",
                        isActive ? "text-[#6E1F2E]" : "text-[#D4AF37]"
                      )}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-serif-luxury font-bold text-sm tracking-wide whitespace-nowrap uppercase">
                        {feature.label}
                      </span>
                      <span className="text-[11px] font-sans-body opacity-80 whitespace-nowrap">
                        {feature.sublabel}
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Full-Bleed Event Visual Stage & Card */}
        <div className="flex-1 min-h-[500px] sm:min-h-[560px] lg:h-full relative bg-[#291C1A]/90 flex items-center justify-center py-4 sm:py-12 md:py-20 lg:py-12 px-2 sm:px-6 md:px-10 lg:px-8 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#D4AF37]/30">
          
          {/* Mobile Touch / Navigation Arrows */}
          <button
            onClick={prevStep}
            aria-label="Previous Event"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#291C1A] transition-all shadow-2xl active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextStep}
            aria-label="Next Event"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#291C1A] transition-all shadow-2xl active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-[92%] sm:w-full max-w-[360px] sm:max-w-[390px] md:max-w-[420px] aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center">
            {EVENTS_DATA.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-3 sm:border-4 md:border-6 border-[#D4AF37] bg-[#42131E] shadow-2xl origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  {/* Active Event Info Backdrop Overlay */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 pt-24 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        {/* Event Title Badge */}
                        <div className="bg-[#6E1F2E] text-[#FFF9EF] px-3 py-1 rounded-full text-[10px] sm:text-xs font-cinzel font-bold uppercase tracking-[0.2em] w-fit shadow-md mb-2.5 border border-[#D4AF37]/60">
                          {index + 1} • {feature.label}
                        </div>

                        {feature.description && (
                          <p className="text-[#FFF9EF]/90 text-xs sm:text-sm font-sans-body mb-2.5 leading-relaxed line-clamp-3">
                            {feature.description}
                          </p>
                        )}

                        {/* Timing & Venue Pills */}
                        <div className="space-y-1.5 text-[11px] sm:text-xs font-sans-body border-t border-[#D4AF37]/40 pt-2 text-[#FFF9EF]/90 pointer-events-auto">
                          <div className="flex items-center gap-1.5 text-amber-200">
                            <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{feature.time}</span>
                          </div>
                          {feature.venue && (
                            <a
                              href="https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-amber-200 hover:text-amber-300 transition-colors group/map"
                            >
                              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover/map:scale-110 transition-transform shrink-0" />
                              <span className="truncate underline underline-offset-2 decoration-[#D4AF37]/60">{feature.venue} 📍</span>
                            </a>
                          )}
                          {feature.dressCode && (
                            <div className="flex items-center gap-1.5 text-amber-200">
                              <Shirt className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <span className="truncate">DRESS CODE: {feature.dressCode}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Live Event Indicator */}
                  <div
                    className={cn(
                      "absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 transition-opacity duration-300 bg-black/60 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]/50",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                    <span className="text-amber-200 text-[9px] sm:text-[10px] font-cinzel uppercase tracking-[0.2em] font-bold">
                      #RajveerWedsLavleen
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
