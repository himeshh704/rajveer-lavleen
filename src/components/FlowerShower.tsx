import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/soundEffects';

interface Petal {
  id: number;
  x: number;
  drift: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  symbol: string;
}

export const FlowerShower: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isShowering, setIsShowering] = useState(false);

  const flowerSymbols = ['🌸', '🌹', '🌼', '🌺', '✨', '💐', '🌷'];

  const triggerShower = () => {
    soundEngine.playFlowerShower();
    setIsShowering(true);

    // 1. High Performance 60FPS Canvas Confetti Petal Burst
    try {
      // Left Cannon Burst
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors: ['#FF69B4', '#FF1493', '#D4AF37', '#B5965A', '#FFF9EF', '#FFC0CB'],
        ticks: 200,
        gravity: 0.8,
        scalar: 1.2
      });

      // Right Cannon Burst
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors: ['#FF69B4', '#FF1493', '#D4AF37', '#B5965A', '#FFF9EF', '#FFC0CB'],
        ticks: 200,
        gravity: 0.8,
        scalar: 1.2
      });

      // Center Fountain Rain
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 100,
          origin: { x: 0.5, y: 0.2 },
          colors: ['#FF69B4', '#D4AF37', '#FFF9EF'],
          ticks: 250,
          gravity: 0.6,
          scalar: 1.1
        });
      }, 300);
    } catch (e) {
      console.error(e);
    }

    // 2. Pre-calculated lightweight floating 2D flower elements (18 particles)
    const newPetals: Petal[] = Array.from({ length: 18 }).map((_, index) => {
      const startX = Math.random() * 90 + 5;
      return {
        id: Date.now() + index,
        x: startX,
        drift: startX + (Math.random() * 12 - 6),
        size: Math.floor(Math.random() * 14 + 20),
        rotation: Math.floor(Math.random() * 360),
        duration: Math.random() * 2 + 3.5, // 3.5s to 5.5s
        delay: Math.random() * 0.8,
        symbol: flowerSymbols[index % flowerSymbols.length]
      };
    });

    setPetals(newPetals);

    setTimeout(() => {
      setIsShowering(false);
    }, 5000);
  };

  return (
    <>
      {/* Floating Action Button for Phool Varsha */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={triggerShower}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#6E1F2E] via-[#B5965A] to-[#D4AF37] text-[#FFF9EF] font-sans-body text-xs sm:text-sm font-semibold shadow-2xl border-2 border-amber-200/70 backdrop-blur-md transition-all hover:brightness-110 active:scale-95 cursor-pointer"
        >
          <span className="text-base sm:text-lg animate-bounce">🌸</span>
          <span className="tracking-wide">Shower Blessings</span>
        </motion.button>
      </div>

      {/* Hardware Accelerated GPU Falling Petals Overlay */}
      <AnimatePresence>
        {isShowering && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{
                  opacity: 0,
                  y: -50,
                  x: `${petal.x}vw`,
                  rotate: 0,
                  scale: 0.8
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: '105vh',
                  x: `${petal.drift}vw`,
                  rotate: petal.rotation + 360,
                  scale: [0.8, 1.1, 1]
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  ease: 'linear'
                }}
                style={{
                  fontSize: `${petal.size}px`,
                  position: 'absolute',
                  willChange: 'transform, opacity'
                }}
                className="select-none filter drop-shadow-md transform-gpu"
              >
                {petal.symbol}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
