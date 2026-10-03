import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Navigation, ArrowUp, Sparkles } from 'lucide-react';
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
            LAAZ HAVELI • Mill Road, Beawar, Rajasthan
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
                  LAAZ HAVELI, BEAWAR
                </span>
                <span className="text-[10px] font-sans-body text-[#FFF9EF]/70 block">
                  Mill Road, Beawar, Rajasthan 305901
                </span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw"
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
              src="https://maps.google.com/maps?q=Laaz%20Haveli%20Mill%20Road%20Beawar%20Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laaz Haveli Location Map"
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

          {/* Magical Creator Credit & Preloaded WhatsApp Tag */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#42131E] via-[#6E1F2E] to-[#290B13] border-2 border-[#D4AF37]/60 text-[#FFF9EF] shadow-2xl relative overflow-hidden max-w-xl mx-auto text-center group">
            {/* Ambient Sparkle Glows */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-amber-200 text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>Crafted With Magic & Devotion</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-amber-100">
                Want something magical like this for your special day?
              </h4>

              <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/85 max-w-md mx-auto leading-relaxed">
                Tap below to send a direct preloaded message to <strong className="text-amber-300 font-semibold">Himesh</strong> on WhatsApp!
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/918824962843?text=Hey%20Himesh,%20can%20you%20make%20something%20like%20what%20you%20made%20for%20Rajveer%20and%20Lavleen%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] text-white text-xs sm:text-sm font-sans-body font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-emerald-300/40 group/wa"
                >
                  {/* Official WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current shrink-0 text-white group-hover/wa:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat With Himesh on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

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
