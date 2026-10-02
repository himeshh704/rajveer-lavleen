import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SocialCards from './ui/card-fan-carousel';

const GALLERY_CARDS = [
  {
    imgUrl: "/images/amrit_simran_2d_couple_illustration.png",
    alt: "Rajveer & Lavleen Illustrated Couple",
  },
  {
    imgUrl: "/images/golden_temple_amrit_sarovar.png",
    alt: "Amrit Sarovar Blessing",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    alt: "Royal Indian Wedding Attire",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    alt: "Royal Heritage Moments",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    alt: "Mehandi & Henna Celebration",
  },
  {
    imgUrl: "/images/golden_temple_vector_card.png",
    alt: "Golden Temple Heritage",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Floral Celebrations",
  },
  {
    imgUrl: "/images/punjabi_cartoon_couple_preloader.png",
    alt: "Punjabi Royal Union",
  },
];

export const RoyalGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-[#FFF9EF] text-[#291C1A] overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-bold">
            ROYAL MEMORIES
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
          Celebration Gallery
        </h2>

        <p className="text-xs sm:text-sm font-cormorant italic text-[#291C1A]/80 max-w-xl mx-auto">
          Hover and cycle through our royal interactive card fan gallery.
        </p>
      </div>

      {/* Card Fan Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SocialCards cards={GALLERY_CARDS} />
      </motion.div>
    </section>
  );
};
