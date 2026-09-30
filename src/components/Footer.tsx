import React from 'react';
import { ArrowUp } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FFF9EF] text-[#291C1A] border-t-2 border-[#B5965A]/40 pt-16 pb-12 px-4 md:px-8 overflow-hidden text-center">
      {/* Decorative Floral & Symbol Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex flex-col items-center">
          <span className="text-4xl font-serif text-[#6E1F2E] font-bold tracking-widest mb-1 select-none">
            ੴ
          </span>
          <span className="text-xs font-cinzel font-semibold tracking-widest text-[#B5965A] uppercase">
            Satnam Waheguru
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
          {WEDDING_DATA.couple.heading}
        </h2>

        <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-lg mx-auto">
          "With gratitude in our hearts and blessings from our elders, we look forward to celebrating our special day with you."
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans-body font-semibold text-[#6E1F2E] uppercase tracking-wider py-4 border-y border-[#B5965A]/20 my-6">
          <a href="#invitation" className="hover:text-[#B5965A] transition-colors">Invitation</a>
          <a href="#celebrations" className="hover:text-[#B5965A] transition-colors">Functions</a>
          <a href="#couple" className="hover:text-[#B5965A] transition-colors">Our Story</a>
          <a href="#video" className="hover:text-[#B5965A] transition-colors">Film</a>
          <a href="#details" className="hover:text-[#B5965A] transition-colors">Guide</a>
          <a href="#rsvp" className="hover:text-[#B5965A] transition-colors">RSVP</a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] hover:bg-[#42131E] text-xs font-sans-body font-semibold shadow-md transition-all border border-[#B5965A]/40"
        >
          <span>Back To Top</span>
          <ArrowUp className="w-4 h-4 text-[#D4AF37]" />
        </button>

        {/* Copyright */}
        <p className="text-[11px] font-sans-body text-[#291C1A]/60 pt-6">
          Made with love & devotion for Ranbir Singh Ahluwalia & Alia Kaur Dhillon • 31 January 2027
        </p>
      </div>
    </footer>
  );
};
