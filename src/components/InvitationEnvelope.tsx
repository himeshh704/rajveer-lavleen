import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
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
          <div className="relative w-full h-full flex items-center justify-center bg-[#291C1A]">
            <video
              ref={videoRef}
              src="/videos/envelope_preloader.mp4"
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover min-w-full min-h-full scale-100"
            />

            {/* Dark Tint & Simple Clean Overlay Before Play */}
            {!hasStarted && (
              <div
                onClick={handleStartPlay}
                className="absolute inset-0 bg-black/25 flex flex-col items-center justify-end pb-20 px-4 text-center z-20 cursor-pointer"
              >
                {/* Minimalist Clean Tap To Reveal Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/30 text-white backdrop-blur-md shadow-2xl transition-all"
                >
                  <span className="text-sm sm:text-base font-sans-body font-medium tracking-wider uppercase">
                    Tap to Reveal
                  </span>
                </motion.div>
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
