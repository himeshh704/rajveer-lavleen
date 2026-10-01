import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCard = () => {
    soundEngine.playChime();
    setIsOpen(true);

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#D4AF37', '#FFF9EF']
      });
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#291C1A] bg-opacity-95 p-4 sm:p-6 overflow-hidden select-none"
        >
          {/* Animated Ambient Royal Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#6E1F2E]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Luxury Card Container */}
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-full max-w-md sm:max-w-lg bg-gradient-to-b from-[#FFF9EF] via-[#F8F0E3] to-[#EEDEB9] rounded-3xl border-4 border-[#B5965A] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center text-[#291C1A] flex flex-col items-center justify-between min-h-[520px] sm:min-h-[580px] overflow-hidden"
          >
            {/* Corner Ornamental Patterns */}
            <div className="absolute top-3 left-3 text-[#B5965A]/40 text-xl font-serif">✦</div>
            <div className="absolute top-3 right-3 text-[#B5965A]/40 text-xl font-serif">✦</div>
            <div className="absolute bottom-3 left-3 text-[#B5965A]/40 text-xl font-serif">✦</div>
            <div className="absolute bottom-3 right-3 text-[#B5965A]/40 text-xl font-serif">✦</div>

            {/* Top Emblem Header */}
            <div className="space-y-2 pt-2">
              <span className="text-4xl font-serif text-[#6E1F2E] font-bold tracking-widest block drop-shadow-sm">
                ੴ
              </span>
              <span className="text-[11px] font-cinzel font-semibold tracking-[0.3em] text-[#B5965A] uppercase block">
                Ek Onkar • Satnam Waheguru
              </span>
            </div>

            {/* Central Card Crest & Monogram */}
            <div className="my-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
                <Sparkles className="w-3.5 h-3.5 text-[#B5965A]" />
                <span className="text-[11px] font-sans-body tracking-[0.25em] uppercase font-semibold">
                  Royal Wedding Invitation
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#B5965A]" />
              </div>

              {/* Couple Names Heading */}
              <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E] leading-tight drop-shadow">
                {WEDDING_DATA.couple.heading}
              </h1>

              <p className="text-xs sm:text-sm font-cormorant italic text-[#291C1A]/80 max-w-xs mx-auto">
                "Together with their families, invite you to celebrate their sacred union"
              </p>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto" />
            </div>

            {/* Interactive Golden Wax Seal Button */}
            <div className="w-full pb-4 flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleOpenCard}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6E1F2E] via-[#521722] to-[#42131E] text-[#FFF9EF] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(110,31,46,0.5)] transition-all cursor-pointer overflow-hidden"
              >
                {/* Glowing Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#42131E] flex items-center justify-center shrink-0 shadow-md">
                  <Heart className="w-4 h-4 fill-current text-[#6E1F2E]" />
                </div>

                <div className="text-left">
                  <span className="block text-xs font-serif-luxury font-bold text-amber-100 tracking-wider uppercase">
                    Tap To Open Invitation Card
                  </span>
                  <span className="block text-[10px] font-sans-body text-[#FFF9EF]/80">
                    Touch to unpeel & unveil festivities
                  </span>
                </div>

                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" />
              </motion.button>

              <span className="text-[10px] font-sans-body text-[#291C1A]/60 mt-4 tracking-widest uppercase">
                31 January 2027 • Amritsar, Punjab
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
