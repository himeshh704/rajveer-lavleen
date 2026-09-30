import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const InstagramHashtag: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(WEDDING_DATA.couple.hashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="py-16 px-4 bg-[#F8F0E3] text-[#291C1A] overflow-hidden border-y border-[#B5965A]/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Instagram Gradient Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600" />

          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 mx-auto mb-4 shadow-md flex items-center justify-center text-white">
            <div className="w-full h-full rounded-full bg-[#FFF9EF] flex items-center justify-center text-rose-600">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E1F2E]/10 text-[#6E1F2E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-sans-body uppercase tracking-widest font-semibold">
              Share The Memories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#6E1F2E] mb-2">
            Tag Your Wedding Moments
          </h2>

          <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/75 max-w-lg mx-auto mb-6">
            Help us capture every smile, bhangra move, and candid emotion! Tag your photos and reels with our official wedding hashtag.
          </p>

          {/* Hashtag Pill with Copy Button */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#F8F0E3] border-2 border-[#B5965A] p-2.5 sm:px-6 sm:py-3 rounded-full shadow-md">
            <span className="text-2xl sm:text-3xl font-cinzel font-bold text-[#6E1F2E] tracking-wider select-all">
              {WEDDING_DATA.couple.hashtag}
            </span>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans-body font-semibold transition-all shadow-sm ${
                copied
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#6E1F2E] hover:bg-[#42131E] text-[#FFF9EF]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>Hashtag Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Hashtag</span>
                </>
              )}
            </button>
          </div>

          {/* Mini Grid Teaser */}
          <div className="mt-8 pt-6 border-t border-[#B5965A]/20 grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden border border-[#B5965A]/30 shadow-sm">
              <img src="/images/anand_karaj_palki_couple.png" alt="Wedding preview 1" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-[#B5965A]/30 shadow-sm">
              <img src="/images/golden_temple_amrit_sarovar.png" alt="Wedding preview 2" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-[#B5965A]/30 shadow-sm">
              <img src="/images/couple_memory.png" alt="Wedding preview 3" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
