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

    // Safety fallback: if video doesn't finish or play on mobile low power mode, auto reveal after 3.5s
    const fallbackTimer = setTimeout(() => {
      triggerGlowAndReveal();
    }, 3500);

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          // Playing smoothly
        })
        .catch(() => {
          // Fallback if browser blocks sound or low-power mode restricts video
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
              .play()
              .catch(() => {
                clearTimeout(fallbackTimer);
                triggerGlowAndReveal();
              });
          } else {
            clearTimeout(fallbackTimer);
            triggerGlowAndReveal();
          }
        });
    } else {
      clearTimeout(fallbackTimer);
      triggerGlowAndReveal();
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#291C1A] text-[#FFF9EF] overflow-hidden select-none"
        >
          {/* 1. CUSTOM ENVELOPE PRELOADER VIDEO & COVER */}
          <div className="relative w-full h-full flex items-center justify-center bg-[#291C1A]">
            <video
              ref={videoRef}
              src="/videos/envelope_preloader.mp4"
              poster="/images/golden_temple_vector_card.png"
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className={`w-full h-full object-cover min-w-full min-h-full transition-opacity duration-700 ${
                hasStarted ? 'opacity-100' : 'opacity-30'
              }`}
            />

            {/* Gorgeous Royal Cover Overlay Before Play */}
            {!hasStarted && (
              <div
                onClick={handleStartPlay}
                className="absolute inset-0 bg-gradient-to-b from-[#6E1F2E]/80 via-[#291C1A]/85 to-[#120B0B]/95 flex flex-col items-center justify-center p-6 text-center z-20 cursor-pointer"
              >
                {/* Background Artwork */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/golden_temple_vector_card.png')" }}
                />

                {/* Royal Ik Onkar & Names */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 space-y-4 max-w-sm mx-auto"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B5965A] p-0.5 mx-auto shadow-2xl">
                    <div className="w-full h-full rounded-full bg-[#6E1F2E] flex items-center justify-center text-3xl sm:text-4xl text-[#D4AF37] border border-[#B5965A]/40 font-serif">
                      ੴ
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-cinzel tracking-[0.3em] text-[#D4AF37] uppercase block font-semibold">
                      Royal Matrimonial Invitation
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100 tracking-wide">
                      Rajveer &amp; Lavleen
                    </h1>
                    <p className="text-xs font-cormorant italic text-[#FFF9EF]/80">
                      "Two souls bound in sacred union"
                    </p>
                  </div>

                  {/* Pulsing Royal Golden Button */}
                  <div className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B5965A] to-[#8C6D32] text-[#291C1A] font-bold text-xs sm:text-sm tracking-widest uppercase font-sans-body shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-amber-200"
                    >
                      <span>✉️ Tap To Open Invitation</span>
                    </motion.div>
                  </div>
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
