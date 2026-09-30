import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, User, Phone, Users, AlertCircle, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const RsvpSection: React.FC = () => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [fullName, setFullName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [eventsSelected, setEventsSelected] = useState<string[]>([
    'mehndi-sangeet',
    'anand-karaj',
    'reception'
  ]);
  const [dietaryNotes] = useState('');
  const [blessing, setBlessing] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check local storage for previous RSVP
    const savedRSVP = localStorage.getItem('ranbir_alia_wedding_rsvp');
    if (savedRSVP) {
      try {
        const parsed = JSON.parse(savedRSVP);
        setSubmitted(true);
        setAttending(parsed.attending);
        setFullName(parsed.fullName);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleEventToggle = (eventId: string) => {
    if (eventsSelected.includes(eventId)) {
      setEventsSelected(eventsSelected.filter((id) => id !== eventId));
    } else {
      setEventsSelected([...eventsSelected, eventId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!attending) {
      setErrorMsg('Please select whether you will be attending.');
      return;
    }
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phoneOrEmail.trim()) {
      setErrorMsg('Please enter your phone number or email.');
      return;
    }

    const payload = {
      attending,
      fullName: fullName.trim(),
      phoneOrEmail: phoneOrEmail.trim(),
      guestCount,
      eventsSelected,
      dietaryNotes: dietaryNotes.trim(),
      blessing: blessing.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem('ranbir_alia_wedding_rsvp', JSON.stringify(payload));
      setSubmitted(true);

      if (attending === 'yes') {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#D4AF37']
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    localStorage.removeItem('ranbir_alia_wedding_rsvp');
    setSubmitted(false);
    setAttending(null);
    setFullName('');
    setPhoneOrEmail('');
  };

  return (
    <section id="rsvp" className="py-24 px-4 md:px-8 bg-[#FFF9EF] text-[#291C1A] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E]">
            <Heart className="w-4 h-4 text-[#6E1F2E]" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Kindly Respond
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            RSVP For The Celebrations
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-lg mx-auto">
            Please let us know if you will be joining our wedding festivities by 15 January 2027.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Form Container Card */}
        <div className="bg-[#F8F0E3] border-2 border-[#B5965A]/40 rounded-2xl p-6 sm:p-10 shadow-xl relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
                  Thank You, {fullName}!
                </h3>

                <p className="text-sm font-sans-body text-[#291C1A]/80 max-w-md mx-auto">
                  {attending === 'yes'
                    ? "Your RSVP has been saved! We are overjoyed to welcome you to Ranbir & Alia's Anand Karaj and wedding celebrations in Amritsar."
                    : "Your response has been noted. We will miss your presence, but thank you for sending your warm love and blessings!"}
                </p>

                <div className="pt-6 border-t border-[#B5965A]/20 flex justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="text-xs font-sans-body font-semibold text-[#6E1F2E] underline hover:text-[#42131E]"
                  >
                    Edit your RSVP details
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-sans-body flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Step 1: Attending Choice */}
                <div className="space-y-3">
                  <label className="text-xs font-cinzel font-semibold uppercase tracking-wider text-[#6E1F2E] block text-center">
                    Will you be attending? *
                  </label>

                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`p-4 rounded-xl border-2 font-serif-luxury text-base font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                        attending === 'yes'
                          ? 'bg-[#6E1F2E] text-[#FFF9EF] border-[#6E1F2E] shadow-md scale-[1.02]'
                          : 'bg-[#FFF9EF] text-[#291C1A] border-[#B5965A]/40 hover:border-[#B5965A]'
                      }`}
                    >
                      <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                      <span>Joyfully Accept</span>
                      <span className="text-[11px] font-sans-body font-normal opacity-80">Yes, I'll be there</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`p-4 rounded-xl border-2 font-serif-luxury text-base font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                        attending === 'no'
                          ? 'bg-[#42131E] text-[#FFF9EF] border-[#42131E] shadow-md scale-[1.02]'
                          : 'bg-[#FFF9EF] text-[#291C1A] border-[#B5965A]/40 hover:border-[#B5965A]'
                      }`}
                    >
                      <Heart className="w-5 h-5 text-rose-300" />
                      <span>Regretfully Decline</span>
                      <span className="text-[11px] font-sans-body font-normal opacity-80">Sending love</span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Guest Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#B5965A]/20">
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans-body font-semibold text-[#291C1A] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#B5965A]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh Ahluwalia"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans-body font-semibold text-[#291C1A] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#B5965A]" /> Phone or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765 43210 or name@domain.com"
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                    />
                  </div>
                </div>

                {/* Step 3: Guest Count & Event Selection (if attending) */}
                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-6 pt-4 border-t border-[#B5965A]/20"
                  >
                    <div className="space-y-1.5 max-w-xs">
                      <label className="text-xs font-sans-body font-semibold text-[#291C1A] flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B5965A]" /> Number of Guests Attending
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-sans-body font-semibold text-[#291C1A] block">
                        Which functions will you attend?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {WEDDING_DATA.events.map((evt) => {
                          const isChecked = eventsSelected.includes(evt.id);
                          return (
                            <div
                              key={evt.id}
                              onClick={() => handleEventToggle(evt.id)}
                              className={`p-3 rounded-xl border cursor-pointer text-xs font-sans-body flex items-center gap-2.5 transition-all ${
                                isChecked
                                  ? 'bg-[#6E1F2E]/10 border-[#6E1F2E] font-semibold text-[#6E1F2E]'
                                  : 'bg-[#FFF9EF] border-[#B5965A]/30 text-[#291C1A]/70'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center text-white ${
                                  isChecked ? 'bg-[#6E1F2E] border-[#6E1F2E]' : 'border-[#B5965A]/60'
                                }`}
                              >
                                {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                              </div>
                              <span>{evt.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Blessing Message */}
                <div className="space-y-1.5 pt-4 border-t border-[#B5965A]/20">
                  <label className="text-xs font-sans-body font-semibold text-[#291C1A] block">
                    Message or Warm Blessings for Ranbir & Alia
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write your wishes here..."
                    value={blessing}
                    onChange={(e) => setBlessing(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6E1F2E] to-[#42131E] hover:from-[#521722] hover:to-[#291C1A] text-[#FFF9EF] font-serif-luxury font-bold text-lg shadow-lg border border-[#B5965A]/40 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99]"
                >
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                  <span>Submit RSVP Confirmation</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
