import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, User, Phone, Users, AlertCircle, Sparkles, QrCode, Download, Ticket } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

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
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [songRequest, setSongRequest] = useState('');
  const [blessing, setBlessing] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  useEffect(() => {
    // Check local storage for previous RSVP
    const savedRSVP = localStorage.getItem('ranbir_alia_wedding_rsvp');
    if (savedRSVP) {
      try {
        const parsed = JSON.parse(savedRSVP);
        setSubmitted(true);
        setAttending(parsed.attending);
        setFullName(parsed.fullName);
        setPassId(parsed.passId || `PASS-${Math.floor(1000 + Math.random() * 9000)}`);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleEventToggle = (eventId: string) => {
    soundEngine.playClick();
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

    const newPassId = `PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassId(newPassId);

    const payload = {
      attending,
      fullName: fullName.trim(),
      phoneOrEmail: phoneOrEmail.trim(),
      guestCount,
      eventsSelected,
      dietaryNotes: dietaryNotes.trim(),
      songRequest: songRequest.trim(),
      blessing: blessing.trim(),
      passId: newPassId,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem('ranbir_alia_wedding_rsvp', JSON.stringify(payload));
      setSubmitted(true);
      soundEngine.playChime();

      if (attending === 'yes') {
        confetti({
          particleCount: 110,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#D4AF37']
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    soundEngine.playClick();
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
            <Ticket className="w-4 h-4 text-[#6E1F2E]" />
            <span className="text-xs uppercase font-sans-body tracking-[0.25em] font-semibold">
              Guest Concierge & RSVP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E]">
            Confirm Your Attendance
          </h2>

          <p className="text-sm sm:text-base font-cormorant italic text-[#291C1A]/80 max-w-lg mx-auto">
            Please respond by 15 January 2027 to generate your official Guest Entry Pass.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto mt-4" />
        </div>

        {/* Form & Guest Card Container */}
        <div className="bg-[#F8F0E3] border-2 border-[#B5965A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#6E1F2E]">
                    RSVP Confirmed, {fullName}!
                  </h3>

                  <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/80 max-w-md mx-auto">
                    {attending === 'yes'
                      ? "We are overjoyed to welcome you to Rajveer & Lavleen's Anand Karaj and wedding festivities in Amritsar!"
                      : "Your response has been noted. Thank you for sending your warm blessings!"}
                  </p>
                </div>

                {/* ROYAL GUEST PASS CARD (Generated upon RSVP) */}
                {attending === 'yes' && (
                  <div className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#6E1F2E] via-[#521722] to-[#42131E] border-2 border-[#B5965A] text-[#FFF9EF] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5965A]/15 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-[#B5965A]/30 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-serif text-[#D4AF37]">ੴ</span>
                        <div>
                          <span className="text-xs font-cinzel text-[#D4AF37] uppercase font-bold tracking-widest block">
                            Rajveer weds Lavleen
                          </span>
                          <span className="text-[10px] font-sans-body text-[#FFF9EF]/70 block">
                            ROYAL GUEST ACCESS PASS
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-[#B5965A]/20 border border-[#B5965A]/50 text-[#D4AF37] text-[10px] font-mono font-bold tracking-widest">
                        {passId}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div className="sm:col-span-8 space-y-2">
                        <p className="text-xs font-sans-body text-[#B5965A] uppercase font-semibold">
                          Guest Name
                        </p>
                        <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-amber-100">
                          {fullName}
                        </h4>

                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#FFF9EF]/10 text-amber-200 text-[11px] font-sans-body">
                            👥 {guestCount} {Number(guestCount) === 1 ? 'Guest' : 'Guests'}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-[#FFF9EF]/10 text-amber-200 text-[11px] font-sans-body">
                            📍 Amritsar, Punjab
                          </span>
                        </div>
                      </div>

                      {/* Simulated Venue Access QR Code */}
                      <div className="sm:col-span-4 flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 border border-[#B5965A]/30 text-center">
                        <QrCode className="w-16 h-16 text-[#D4AF37] my-1" />
                        <span className="text-[9px] font-mono text-amber-200 uppercase tracking-widest">
                          Scan At Venue Entry
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#B5965A]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans-body">
                      <span className="text-[#FFF9EF]/70 text-[11px]">
                        Show this pass at Taj Swarna concierge desks for luxury airport transfers.
                      </span>

                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B5965A] hover:bg-[#D4AF37] text-[#291C1A] font-bold text-xs transition-colors shadow-md"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Print / Save Pass</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-[#B5965A]/20 text-center">
                  <button
                    onClick={resetForm}
                    className="text-xs font-sans-body font-semibold text-[#6E1F2E] underline hover:text-[#42131E]"
                  >
                    Update your RSVP details
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
                      onClick={() => {
                        soundEngine.playClick();
                        setAttending('yes');
                      }}
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
                      onClick={() => {
                        soundEngine.playClick();
                        setAttending('no');
                      }}
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

                {/* Step 3: Attending Details & Preferences */}
                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-6 pt-4 border-t border-[#B5965A]/20"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
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

                      <div className="space-y-1.5">
                        <label className="text-xs font-sans-body font-semibold text-[#291C1A] flex items-center gap-1.5">
                          🎵 Sangeet Song Request
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Gur Nalo Ishq Mitha"
                          value={songRequest}
                          onChange={(e) => setSongRequest(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                        />
                      </div>
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

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans-body font-semibold text-[#291C1A] block">
                        Dietary Preferences / Special Requests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jain Vegetarian, Vegan, Allergies..."
                        value={dietaryNotes}
                        onChange={(e) => setDietaryNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9EF] border border-[#B5965A]/40 focus:border-[#6E1F2E] focus:outline-none text-sm font-sans-body"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Blessing Message */}
                <div className="space-y-1.5 pt-4 border-t border-[#B5965A]/20">
                  <label className="text-xs font-sans-body font-semibold text-[#291C1A] block">
                    Message or Warm Blessings for Rajveer & Lavleen
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
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6E1F2E] to-[#42131E] hover:from-[#521722] hover:to-[#291C1A] text-[#FFF9EF] font-serif-luxury font-bold text-lg shadow-xl border border-[#B5965A]/40 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99]"
                >
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                  <span>Generate Guest Pass & Confirm RSVP</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
