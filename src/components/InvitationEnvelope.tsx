import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpen }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [showGlowFlash, setShowGlowFlash] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartPlay = () => {
    if (hasStarted) return;
    setHasStarted(true);
    soundEngine.playChime();

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Fallback if browser forces mute
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  };

  const handleVideoEnded = () => {
    triggerGlowAndReveal();
  };

  const triggerGlowAndReveal = () => {
    if (showGlowFlash) return;
    setShowGlowFlash(true);

    try {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#D4AF37', '#FFF9EF', '#FF69B4']
      });
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      setIsFinished(true);
      onOpen();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(16px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-[#FFF9EF] overflow-hidden select-none"
        >
          {/* 1. CUSTOM ENVELOPE PRELOADER VIDEO */}
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src="/videos/envelope_preloader.mp4"
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover min-w-full min-h-full scale-100"
            />

            {/* Dark & Gold Gradient Overlay Before Play */}
            {!hasStarted && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 flex flex-col items-center justify-between py-12 px-4 text-center z-20">
                {/* Header emblem */}
                <div className="space-y-1 pt-4">
                  <span className="text-4xl font-serif text-[#D4AF37] font-bold block drop-shadow-lg">ੴ</span>
                  <span className="text-xs font-cinzel text-amber-200 tracking-[0.3em] uppercase font-bold block">
                    {WEDDING_DATA.couple.heading}
                  </span>
                </div>

                {/* Central Tap To Reveal Seal Button */}
                <div className="my-auto flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleStartPlay}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6E1F2E] via-[#521722] to-[#42131E] text-[#FFF9EF] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.6)] cursor-pointer overflow-hidden transition-all"
                  >
                    {/* Glowing Pulse Ring */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>

                    <div className="text-left">
                      <span className="block text-xs font-serif-luxury font-bold text-amber-100 tracking-wider uppercase">
                        Tap To Open Invitation
                      </span>
                      <span className="block text-[10px] font-sans-body text-amber-200/90">
                        Touch to reveal the royal card
                      </span>
                    </div>

                    <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" />
                  </motion.button>
                </div>

                {/* Subtitle */}
                <span className="text-[11px] font-sans-body text-amber-100/70 tracking-widest uppercase pb-2">
                  31 January 2027 • Amritsar, Punjab
                </span>
              </div>
            )}

            {/* Quick Skip Button if playing */}
            {hasStarted && !showGlowFlash && (
              <button
                onClick={triggerGlowAndReveal}
                className="absolute top-6 right-6 z-30 px-4 py-1.5 rounded-full bg-black/60 border border-[#B5965A]/40 text-amber-100 text-xs font-sans-body backdrop-blur-md hover:bg-black/80 transition-all"
              >
                Skip Video →
              </button>
            )}

            {/* 2. GOLDEN GLOW & FLASH TRANSITION EFFECT (Fires upon video completion) */}
            <AnimatePresence>
              {showGlowFlash && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,_#FFF9EF_0%,_#D4AF37_35%,_#6E1F2E_70%,_#000000_100%)] pointer-events-none mix-blend-screen"
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
