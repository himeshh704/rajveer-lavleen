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
  const [isOpening, setIsOpening] = useState(false);
  const [cardExtracted, setCardExtracted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    soundEngine.playChime();

    // Step 1: Top flap opens 3D up
    setTimeout(() => {
      setCardExtracted(true);
      try {
        confetti({
          particleCount: 140,
          spread: 110,
          origin: { y: 0.5 },
          colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#D4AF37', '#FFF9EF']
        });
      } catch (e) {
        console.error(e);
      }
    }, 600);

    // Step 2: Card fully reveals & envelope fades away
    setTimeout(() => {
      setIsFinished(true);
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(16px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1C080C] via-[#350E18] to-[#120407] p-4 sm:p-6 overflow-hidden select-none"
        >
          {/* Ambient Royal Lights */}
          <div className="absolute w-[600px] h-[600px] bg-[#B5965A]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Full Screen Envelope Container */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[480px] sm:h-[540px] flex items-center justify-center perspective-[1200px]">
            {/* 1. THE INVITATION CARD (Inside pocket, slides UP when unsealed) */}
            <motion.div
              initial={{ y: 20, scale: 0.95 }}
              animate={{
                y: cardExtracted ? -180 : 20,
                scale: cardExtracted ? 1.05 : 0.95,
                zIndex: cardExtracted ? 40 : 10
              }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute w-[90%] sm:w-[92%] h-[340px] sm:h-[380px] bg-gradient-to-b from-[#FFF9EF] via-[#F8F0E3] to-[#F1E2C3] rounded-2xl border-2 border-[#B5965A] p-6 shadow-2xl flex flex-col items-center justify-between text-center text-[#291C1A]"
            >
              <div className="space-y-1 pt-1">
                <span className="text-3xl font-serif text-[#6E1F2E] font-bold block">ੴ</span>
                <span className="text-[10px] font-cinzel font-semibold tracking-widest text-[#B5965A] uppercase block">
                  Ranbir weds Alia
                </span>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
                  <Sparkles className="w-3 h-3 text-[#B5965A]" />
                  <span className="text-[10px] font-sans-body uppercase tracking-[0.2em] font-semibold">
                    Royal Wedding Invitation
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#6E1F2E]">
                  {WEDDING_DATA.couple.heading}
                </h2>

                <p className="text-xs font-cormorant italic text-[#291C1A]/80">
                  "Bless our union with your gracious presence"
                </p>
              </div>

              <div className="border-t border-[#B5965A]/30 pt-3 w-full text-[11px] font-sans-body text-[#B5965A] uppercase tracking-widest font-semibold">
                31 January 2027 • Amritsar, Punjab
              </div>
            </motion.div>

            {/* 2. REAL ENVELOPE BACKING POCKET */}
            <div className="absolute inset-0 w-full h-full bg-[#42131E] rounded-3xl border-4 border-[#B5965A] shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-20">
              {/* Inner Pocket Pattern Lining */}
              <div className="absolute inset-0 bg-[radial-gradient(#B5965A_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

              {/* Front Lower Pocket V-Cut */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-[#521722] to-[#6E1F2E] border-t-2 border-[#B5965A]/60 rounded-b-2xl shadow-inner flex flex-col items-center justify-end pb-8">
                {/* Envelope Front Gold Emblem */}
                <div className="text-center space-y-1">
                  <span className="text-2xl font-serif text-[#D4AF37] font-bold block">ੴ</span>
                  <span className="text-[11px] font-cinzel text-amber-200 tracking-[0.3em] uppercase font-bold block">
                    Ranbir Singh Ahluwalia & Alia Kaur Dhillon
                  </span>
                </div>
              </div>
            </div>

            {/* 3. TOP TRIANGULAR ENVELOPE FLAP (Flips UP 180deg in 3D) */}
            <motion.div
              style={{ transformOrigin: 'top center' }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpening ? -175 : 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute top-0 inset-x-0 h-[52%] bg-gradient-to-b from-[#6E1F2E] via-[#521722] to-[#42131E] border-b-2 border-[#B5965A] z-30 shadow-2xl flex items-center justify-center rounded-t-3xl [transform-style:preserve-3d]"
            >
              {/* Triangle Flap Cut Shape overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(181,150,90,0.15)_0%,transparent_50%)] pointer-events-none" />

              {/* 4. GOLDEN WAX SEAL BUTTON (CENTERED ON ENVELOPE) */}
              {!isOpening && (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleOpenEnvelope}
                  className="absolute bottom-[-28px] z-50 flex flex-col items-center cursor-pointer"
                >
                  {/* Wax Seal Body */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B5965A] to-[#8C6D32] border-4 border-[#FFF9EF] shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-[#42131E] p-2">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500 mb-0.5" />
                    <span className="text-[9px] font-serif-luxury font-bold uppercase tracking-wider text-center leading-tight">
                      TAP TO UNSEAL
                    </span>
                  </div>

                  {/* Pulsing Hint Text */}
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mt-3 px-4 py-1 rounded-full bg-[#FFF9EF]/90 border border-[#B5965A] text-[#6E1F2E] text-[11px] font-sans-body font-bold shadow-lg flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B5965A]" />
                    <span>Tap Wax Seal To Peel Open</span>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
