import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Navigation, ArrowUp } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

export const FooterMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative bg-[#FFF9EF] text-[#291C1A] border-t-2 border-[#B5965A]/40 pt-16 pb-12 overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="max-w-6xl mx-auto px-4 sm:px-6 will-change-transform">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
            <MapPin className="w-4 h-4 text-[#B5965A]" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Venue Location & Directions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            Getting To The Venue
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-lg mx-auto">
            The Royal Palms Estate & Taj Swarna Ballroom • Amritsar, Punjab
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* FULL SIZE INTERACTIVE GOOGLE MAP CONTAINER */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#B5965A] shadow-2xl bg-black">
          {/* Map Frame Header Overlay Bar */}
          <div className="bg-[#6E1F2E] text-[#FFF9EF] px-6 py-3 border-b border-[#B5965A]/40 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif text-[#D4AF37]">ੴ</span>
              <div>
                <span className="text-xs font-serif-luxury font-bold text-amber-100 block">
                  The Royal Palms Estate & Lawns
                </span>
                <span className="text-[10px] font-sans-body text-[#FFF9EF]/70 block">
                  Taj Swarna Premises, Mall Road, Amritsar, Punjab 143001
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Taj+Swarna+Amritsar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B5965A] hover:bg-[#D4AF37] text-[#291C1A] text-xs font-bold font-sans-body shadow-md transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Full Size iFrame Map */}
          <div className="w-full h-[380px] sm:h-[480px]">
            <iframe
              src="https://maps.google.com/maps?q=Taj%20Swarna%20Amritsar%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Royal Palms Estate Full Map"
            />
          </div>
        </div>

        {/* Footer Closing & Back to Top */}
        <div className="text-center mt-12 space-y-4">
          <div className="inline-flex flex-col items-center">
            <span className="text-3xl font-serif text-[#6E1F2E] font-bold tracking-widest mb-1 select-none">
              ੴ
            </span>
            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#B5965A] uppercase">
              Satnam Waheguru
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
            {WEDDING_DATA.couple.heading}
          </h3>

          <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/70 max-w-md mx-auto">
            Made with love & devotion for Rajveer Singh Ahluwalia & Lavleen Kaur Dhillon • 31 January 2027
          </p>

          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] hover:bg-[#42131E] text-xs font-sans-body font-semibold shadow-md transition-all border border-[#B5965A]/40"
            >
              <span>Back To Top Cover</span>
              <ArrowUp className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
