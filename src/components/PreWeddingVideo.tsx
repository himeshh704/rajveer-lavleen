import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const PreWeddingVideo: React.FC = () => {
  return (
    <section id="video" className="py-20 px-4 md:px-8 bg-[#FFF9EF] text-[#291C1A] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 text-[#6E1F2E]">
            <Video className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Cinematic Pre-Wedding Teaser
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            Watch Our Love Story Teaser
          </h2>

          <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/75 max-w-md mx-auto">
            A glimpse into the laughter, promises, and quiet moments leading up to our Anand Karaj.
          </p>
        </div>

        {/* Video Player Frame with Gold Borders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#D4AF37] via-[#B5965A] to-[#8C6D32] shadow-2xl overflow-hidden"
        >
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              src={WEDDING_DATA.preWeddingVideoUrl}
              title="Rajveer & Lavleen Pre-Wedding Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
