import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MapPin, Calendar, Clock, Utensils } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

export const ReceptionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const handleMapClick = () => {
    soundEngine.playClick();
    window.open("https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw", "_blank");
  };

  const handleCalendarClick = () => {
    soundEngine.playClick();
    const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Rajveer+weds+Lavleen&dates=20261031T143000Z/20261031T183000Z&details=Wedding+Reception+followed+by+Dinner&location=Laaz+Haveli,+Mill+Road,+Beawar";
    window.open(calendarUrl, "_blank");
  };

  return (
    <section ref={sectionRef} id="reception" className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#090C15] text-[#FFF9EF] relative overflow-hidden">
      {/* Background Ambient Starry Glows & chandeliers overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A122B] via-[#090C15] to-[#040509] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#D4AF37]/10 blur-3xl pointer-events-none rounded-full" />

      <motion.div style={{ y: parallaxY }} className="max-w-4xl mx-auto relative z-10 will-change-transform">
        {/* Luxury Frame Container */}
        <div className="rounded-3xl border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#130E1E]/95 via-[#0D0A14]/95 to-[#06040A]/95 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden text-center">
          
          {/* Top Hanging Chandeliers & Lights Graphic Frame */}
          <div className="w-full flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-amber-200">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span className="text-xs uppercase font-cinzel tracking-[0.25em] font-semibold">
                Grand Evening Gala
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-cinzel text-amber-200/90 uppercase tracking-[0.2em] font-medium">
              A Celebration of Love & Togetherness
            </p>

            {/* Invitation Prose */}
            <p className="text-sm sm:text-base font-cormorant italic text-[#FFF9EF]/80 leading-relaxed px-2">
              "With hearts full of joy, we invite you to grace the evening as the couple celebrate the beginning of their beautiful journey together."
            </p>

            {/* Main Title */}
            <div className="py-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-200 bg-clip-text text-transparent drop-shadow-md py-1">
                Wedding Reception
              </h2>

              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#6E1F2E]/80 border border-[#D4AF37]/50 text-amber-100 text-xs font-sans-body font-semibold">
                <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>(Followed by Dinner)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-4" />

            {/* Date, Time & Venue Block */}
            <div className="space-y-3 py-2 text-center">
              <p className="text-xs uppercase font-cinzel tracking-widest text-amber-200/70 font-semibold">
                on
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-xl font-serif-luxury font-bold text-amber-100 bg-[#42131E]/60 border border-[#D4AF37]/40 px-6 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <span>Wednesday, 31st October 2026</span>
                </div>
                <span className="hidden sm:inline text-[#D4AF37]">•</span>
                <div className="flex items-center gap-2 text-amber-200">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span>8:00 PM Onwards</span>
                </div>
              </div>

              <p className="text-xs uppercase font-cinzel tracking-widest text-amber-200/70 font-semibold pt-2">
                at
              </p>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-amber-200 tracking-wider">
                  LAAZ HAVELI
                </h3>
                <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/80">
                  Mill Road, Beawar (Raj.)
                </p>
              </div>
            </div>

            {/* Reception Card Image Showcase */}
            <div className="pt-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl max-w-lg mx-auto group">
                <img
                  src="/images/reception_card.jpg"
                  alt="Wedding Reception Card"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Action Buttons: Directions & Calendar */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleMapClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B5965A] via-[#D4AF37] to-[#B5965A] text-[#291C1A] font-bold text-xs sm:text-sm font-sans-body shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#291C1A]" />
                <span>Get Directions to Laaz Haveli</span>
              </button>

              <button
                onClick={handleCalendarClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#42131E] hover:bg-[#6E1F2E] text-amber-100 font-semibold text-xs sm:text-sm font-sans-body border border-[#D4AF37]/50 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Save to Google Calendar</span>
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReceptionSection;
