import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, MapPin } from 'lucide-react';
import type { StoryMoment } from '../data/weddingData';

interface ImageCarouselProps {
  moments: StoryMoment[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ moments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moments.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, moments.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % moments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
  };

  const currentMoment = moments[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-2xl shadow-2xl overflow-hidden p-4 md:p-8">
      {/* Decorative Top Bar */}
      <div className="flex items-center justify-between border-b border-[#B5965A]/30 pb-4 mb-6">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#B5965A]" />
          <span className="text-xs uppercase tracking-widest font-cinzel font-semibold text-[#6E1F2E]">
            Memory Gallery • {currentIndex + 1} of {moments.length}
          </span>
        </div>

        {/* Auto Play Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center gap-1.5 text-xs font-sans-body px-3 py-1 rounded-full bg-[#6E1F2E]/10 text-[#6E1F2E] hover:bg-[#6E1F2E]/20 transition-colors"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
        </button>
      </div>

      {/* Main Slide Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Photo Container */}
        <div className="md:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#B5965A]/30 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentMoment.id}
              src={currentMoment.imageUrl}
              alt={currentMoment.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Caption Overlay Pill */}
          <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-[#291C1A]/90 to-transparent p-3 rounded-lg text-white">
            <p className="text-xs font-sans-body font-medium italic text-amber-200">
              "{currentMoment.caption}"
            </p>
          </div>
        </div>

        {/* Story Text Info */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-4 px-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans-body text-[#B5965A] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{currentMoment.location} • {currentMoment.date}</span>
          </div>

          <h3 className="text-2xl font-serif-luxury font-bold text-[#6E1F2E]">
            {currentMoment.title}
          </h3>

          <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/80 leading-relaxed">
            {currentMoment.description}
          </p>

          {/* Controls & Pagination Dots */}
          <div className="flex items-center justify-between pt-4 border-t border-[#B5965A]/20">
            <div className="flex items-center gap-1.5">
              {moments.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-7 bg-[#6E1F2E]'
                      : 'bg-[#B5965A]/40 hover:bg-[#B5965A]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-[#B5965A]/40 hover:bg-[#6E1F2E] hover:text-[#FFF9EF] text-[#6E1F2E] transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-[#B5965A]/40 hover:bg-[#6E1F2E] hover:text-[#FFF9EF] text-[#6E1F2E] transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
