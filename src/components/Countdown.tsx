import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(WEDDING_DATA.weddingDateISO).getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#42131E] to-[#6E1F2E] text-[#FFF9EF] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/40 text-[#D4AF37] mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs uppercase font-sans-body tracking-[0.2em] font-semibold">
            Counting Down To The Big Day
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 mb-2">
          Until We Say "I Do"
        </h2>

        <p className="text-xs sm:text-sm font-sans-body text-[#FFF9EF]/80 mb-10 max-w-md mx-auto">
          Every second brings us closer to the sacred Anand Karaj ceremony in Amritsar.
        </p>

        {/* Countdown Digits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#291C1A]/80 border-2 border-[#B5965A]/40 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col items-center justify-center relative group hover:border-[#B5965A]"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-[#D4AF37] tracking-tight my-1">
                {String(block.value).padStart(2, '0')}
              </div>
              <span className="text-xs font-cinzel font-semibold uppercase tracking-widest text-[#FFF9EF]/70 mt-1">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
