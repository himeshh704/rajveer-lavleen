import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/soundEffects';

interface Petal {
  id: number;
  x: number;
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

    const newPetals: Petal[] = Array.from({ length: 35 }).map((_, index) => ({
      id: Date.now() + index,
      x: Math.random() * 95, // % from left
      size: Math.random() * 16 + 18, // px size
      rotation: Math.random() * 360,
      duration: Math.random() * 3 + 3, // 3s to 6s
      delay: Math.random() * 1.5,
      symbol: flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)]
    }));

    setPetals(newPetals);

    setTimeout(() => {
      setIsShowering(false);
    }, 5500);
  };

  return (
    <>
      {/* Floating Action Button for Phool Varsha */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={triggerShower}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#6E1F2E] via-[#B5965A] to-[#D4AF37] text-[#FFF9EF] font-sans-body text-xs sm:text-sm font-semibold shadow-2xl border-2 border-amber-200/60 backdrop-blur-md transition-all hover:brightness-110"
        >
          <span className="text-base sm:text-lg animate-bounce">🌸</span>
          <span className="tracking-wide">Shower Blessings</span>
        </motion.button>
      </div>

      {/* Animated Falling Petals Layer */}
      <AnimatePresence>
        {isShowering && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{
                  opacity: 0,
                  y: -40,
                  x: `${petal.x}vw`,
                  rotate: 0
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: '105vh',
                  x: [`${petal.x}vw`, `${petal.x + (Math.random() * 10 - 5)}vw`],
                  rotate: petal.rotation + 360
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  ease: 'easeOut'
                }}
                style={{
                  fontSize: `${petal.size}px`,
                  position: 'absolute'
                }}
                className="select-none filter drop-shadow-md"
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
