import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const SpecialNotes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Framer motion variants for smooth, gentle staggered fade
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="special-notes"
      className="min-h-screen py-24 sm:py-32 px-6 md:px-12 bg-[#FFF9EF] text-[#291C1A] flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Subtle paper texture & ambient warmth overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF2E4] via-[#FFF9EF] to-[#F5EAD7] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: parallaxY }}
        className="max-w-2xl w-full mx-auto relative z-10 text-center space-y-12 sm:space-y-16 will-change-transform"
      >
        {/* Top Minimal Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-col items-center"
        >
          <span className="text-3xl sm:text-4xl font-serif text-[#6E1F2E] font-bold tracking-widest mb-1 select-none">
            ੴ
          </span>
          <span className="text-[10px] sm:text-xs font-cinzel font-semibold tracking-[0.3em] text-[#B5965A] uppercase">
            A Few Special Notes
          </span>
          <div className="w-16 h-[1px] bg-[#B5965A]/30 mx-auto mt-4" />
        </motion.div>

        {/* Staggered Minimal Typography Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Kirtan Darbaar Note */}
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#B5965A] block font-semibold">
              Sacred Recitation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#6E1F2E] font-bold">
              10:00 AM – 11:30 AM
            </h3>
            <p className="text-lg sm:text-xl font-cormorant italic text-[#291C1A]/85">
              Kirtan Darbaar
            </p>
          </motion.div>

          {/* Minimal Line Separator */}
          <motion.div variants={itemVariants} className="w-12 h-[1px] bg-[#B5965A]/25 mx-auto" />

          {/* Special Request */}
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-xs font-cinzel font-semibold uppercase tracking-[0.25em] text-[#B5965A] block">
              With Special Request
            </span>
            <div className="space-y-2 font-cormorant text-xl sm:text-2xl text-[#291C1A] leading-relaxed">
              <motion.p variants={itemVariants} className="font-semibold text-[#6E1F2E]">
                Ranveer Singh
              </motion.p>
              <motion.p variants={itemVariants}>
                Manpreet Singh & Manjeet Kaur
              </motion.p>
              <motion.p variants={itemVariants}>
                Lovpreet Batra & Jyoti Batra
              </motion.p>
            </div>
          </motion.div>

          {/* Minimal Line Separator */}
          <motion.div variants={itemVariants} className="w-12 h-[1px] bg-[#B5965A]/25 mx-auto" />

          {/* Awaiting Eyes */}
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-xs font-cinzel font-semibold uppercase tracking-[0.25em] text-[#B5965A] block">
              Awaiting Eyes
            </span>
            <div className="space-y-3 font-cormorant text-lg sm:text-xl text-[#291C1A]/90 leading-relaxed max-w-lg mx-auto">
              <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#6E1F2E]">
                Dadi
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>Ardas</span>
                <span className="text-[#B5965A]/60">•</span>
                <span>Aizish</span>
                <span className="text-[#B5965A]/60">•</span>
                <span>Sahil Vyaar</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>Arshi</span>
                <span className="text-[#B5965A]/60">•</span>
                <span>Abeer</span>
                <span className="text-[#B5965A]/60">•</span>
                <span>Bhagat</span>
                <span className="text-[#B5965A]/60">•</span>
                <span>Falak</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Minimal Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-6"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A]/40 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialNotes;
