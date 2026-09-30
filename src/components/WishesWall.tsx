import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, Send, Sparkles, Search } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import type { WishMessage } from '../data/weddingData';

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<WishMessage[]>(WEDDING_DATA.initialWishes);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedToast, setSubmittedToast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ranbir_alia_wishes_list');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveWishes = (newList: WishMessage[]) => {
    setWishes(newList);
    try {
      localStorage.setItem('ranbir_alia_wishes_list', JSON.stringify(newList));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishMessage = {
      id: `w_${Date.now()}`,
      name: name.trim(),
      relation: relation.trim() || 'Well-Wisher',
      message: message.trim(),
      timestamp: 'Just now',
      likes: 1
    };

    const updated = [newWish, ...wishes];
    saveWishes(updated);
    setName('');
    setRelation('');
    setMessage('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((w) => {
      if (w.id === id) {
        return { ...w, likes: w.likes + 1 };
      }
      return w;
    });
    saveWishes(updated);
  };

  const filteredWishes = wishes.filter(
    (w) =>
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.relation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="wishes" className="py-20 px-4 md:px-8 bg-[#F8F0E3] text-[#291C1A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Guest Blessings & Wishes
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            The Wall of Eternal Love
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-lg mx-auto">
            Leave your warm wishes and prayers for Ranbir & Alia as they unite in holy Anand Karaj.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Input Form & Wishes Wall Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Post a Wish Form */}
          <div className="lg:col-span-5 bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-2xl p-6 shadow-xl sticky top-24">
            <h3 className="text-xl font-serif-luxury font-bold text-[#6E1F2E] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B5965A]" /> Send Your Blessing
            </h3>

            {submittedToast && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-sans-body">
                ✨ Your wish has been posted to the wall! Thank you!
              </div>
            )}

            <form onSubmit={handleAddWish} className="space-y-4">
              <div>
                <label className="text-xs font-sans-body font-semibold text-[#291C1A] block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jasleen Kaur"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F8F0E3] border border-[#B5965A]/40 text-xs font-sans-body focus:outline-none focus:border-[#6E1F2E]"
                />
              </div>

              <div>
                <label className="text-xs font-sans-body font-semibold text-[#291C1A] block mb-1">
                  Relationship / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cousin from Toronto"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F8F0E3] border border-[#B5965A]/40 text-xs font-sans-body focus:outline-none focus:border-[#6E1F2E]"
                />
              </div>

              <div>
                <label className="text-xs font-sans-body font-semibold text-[#291C1A] block mb-1">
                  Your Blessing Message *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="May Waheguru Ji bless you both with endless joy..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F8F0E3] border border-[#B5965A]/40 text-xs font-sans-body focus:outline-none focus:border-[#6E1F2E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#6E1F2E] hover:bg-[#42131E] text-[#FFF9EF] font-serif-luxury font-bold text-sm shadow-md border border-[#B5965A]/40 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>Post Blessing on Wall</span>
              </button>
            </form>
          </div>

          {/* Wishes Display Wall */}
          <div className="lg:col-span-7 space-y-4">
            {/* Search Filter Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#B5965A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search wishes by name or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFF9EF] border border-[#B5965A]/40 text-xs font-sans-body focus:outline-none focus:border-[#6E1F2E] shadow-sm"
              />
            </div>

            {/* Wishes Cards Feed */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
              <AnimatePresence>
                {filteredWishes.length === 0 ? (
                  <div className="p-8 bg-[#FFF9EF] rounded-2xl text-center text-xs font-sans-body text-[#291C1A]/60">
                    No blessings found matching "{searchQuery}". Be the first to send a message!
                  </div>
                ) : (
                  filteredWishes.map((w) => (
                    <motion.div
                      key={w.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-[#FFF9EF] border border-[#B5965A]/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-base font-serif-luxury font-bold text-[#6E1F2E]">
                            {w.name}
                          </h4>
                          <span className="text-[11px] font-sans-body text-[#B5965A] font-semibold">
                            {w.relation} • {w.timestamp}
                          </span>
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={() => handleLike(w.id)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#6E1F2E]/10 hover:bg-[#6E1F2E]/20 text-[#6E1F2E] text-xs font-sans-body font-semibold transition-colors"
                        >
                          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                          <span>{w.likes}</span>
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/85 leading-relaxed italic mt-2">
                        "{w.message}"
                      </p>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
