import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Unlock, Sparkles, CheckCircle2 } from 'lucide-react';

export const DateReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      // Trigger golden confetti burst
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#FFF9EF', '#D4AF37']
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-[#F8F0E3] text-[#291C1A] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6E1F2E]/10 text-[#6E1F2E] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-xs uppercase font-sans-body tracking-widest font-semibold">
            Interactive Experience
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#6E1F2E] mb-2">
          Save Our Auspicious Date
        </h2>
        <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/70 mb-8">
          Tap the royal gold wax seal below to unseal our official wedding date details.
        </p>

        {/* Envelope / Seal Card */}
        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="unrevealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 hover:border-[#B5965A] hover:shadow-2xl"
                onClick={handleReveal}
              >
                <div className="relative mb-6">
                  {/* Outer Pulsing Gold Ring */}
                  <div className="absolute inset-0 rounded-full bg-[#B5965A]/20 animate-ping" />
                  
                  {/* Gold Wax Seal Button */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B5965A] to-[#8C6D32] border-4 border-[#FFF9EF] shadow-lg flex items-center justify-center text-[#FFF9EF] transform transition-transform group-hover:scale-110">
                    <Lock className="w-8 h-8 text-[#FFF9EF] drop-shadow" />
                  </div>
                </div>

                <h3 className="text-lg font-serif-luxury font-semibold text-[#6E1F2E] mb-1">
                  Tap to Unseal Date
                </h3>
                <p className="text-xs font-sans-body text-[#291C1A]/60 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B5965A]" /> Click to unveil the royal invitation
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                className="bg-gradient-to-br from-[#6E1F2E] to-[#42131E] border-2 border-[#B5965A] rounded-2xl p-8 shadow-2xl text-[#FFF9EF] flex flex-col items-center relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#B5965A]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="w-12 h-12 rounded-full bg-[#B5965A]/20 border border-[#B5965A] flex items-center justify-center mb-4 text-[#D4AF37]">
                  <Unlock className="w-6 h-6" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Date Unlocked
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 my-2">
                  31 January 2027
                </h3>

                <p className="text-sm font-cinzel text-[#B5965A] font-semibold tracking-wider">
                  SUNDAY • ANAND KARAJ & WEDDING
                </p>

                <p className="text-xs font-sans-body text-[#FFF9EF]/80 mt-3 max-w-sm">
                  We eagerly await your presence to celebrate love, harmony, and eternal blessings in Amritsar!
                </p>

                <div className="mt-6 pt-4 border-t border-[#B5965A]/30 w-full flex justify-center gap-4 text-xs font-sans-body">
                  <span className="px-3 py-1 rounded-full bg-[#FFF9EF]/10 border border-[#B5965A]/40 text-amber-200">
                    📍 Amritsar, Punjab
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF9EF]/10 border border-[#B5965A]/40 text-amber-200">
                    ✨ #RanbirWedsAlia
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
