import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { InvitationBlessing } from './components/InvitationBlessing';
import { DateReveal } from './components/DateReveal';
import { Celebrations } from './components/Celebrations';
import { CoupleStory } from './components/CoupleStory';
import { InstagramHashtag } from './components/InstagramHashtag';
import { PreWeddingVideo } from './components/PreWeddingVideo';
import { Countdown } from './components/Countdown';
import { ThingsToKnow } from './components/ThingsToKnow';
import { RsvpSection } from './components/RsvpSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { WEDDING_DATA } from './data/weddingData';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'invitation', label: 'Invitation' },
    { id: 'celebrations', label: 'Functions' },
    { id: 'couple', label: 'Couple Story' },
    { id: 'video', label: 'Film' },
    { id: 'details', label: 'Guide' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#291C1A] selection:bg-[#6E1F2E] selection:text-[#FFF9EF] overflow-x-hidden font-sans">
      {/* Sticky Mobile/Desktop Navigation Bar */}
      <AnimatePresence>
        {scrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#6E1F2E]/95 backdrop-blur-md text-[#FFF9EF] border-b border-[#B5965A]/40 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              {/* Couple Branding */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-left"
              >
                <span className="text-xl font-serif text-[#D4AF37] font-bold">ੴ</span>
                <div>
                  <span className="text-sm font-serif-luxury font-bold text-amber-100 block leading-tight">
                    {WEDDING_DATA.couple.heading}
                  </span>
                  <span className="text-[10px] font-cinzel text-[#B5965A] block">
                    31 JANUARY 2027
                  </span>
                </div>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6 text-xs font-sans-body font-semibold uppercase tracking-wider">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-[#42131E] text-amber-100 border border-[#B5965A]/40"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden bg-[#42131E] border-t border-[#B5965A]/30 px-4 py-4 space-y-3"
                >
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#6E1F2E] text-sm font-serif-luxury text-amber-100"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with Portal Transition */}
        <Hero onExploreClick={() => handleScrollTo('invitation')} />

        {/* 2. Invitation Blessing Section */}
        <InvitationBlessing />

        {/* 3. Interactive Date Reveal Section */}
        <DateReveal />

        {/* 4. Deep Maroon Celebrations & Events Section */}
        <Celebrations />

        {/* 5. Bride and Groom Story Section & Image Carousel */}
        <CoupleStory />

        {/* 6. Instagram Hashtag Section */}
        <InstagramHashtag />

        {/* 7. Pre-Wedding YouTube Video Section */}
        <PreWeddingVideo />

        {/* 8. Countdown Timer */}
        <Countdown />

        {/* 9. Things to Know / Essential Guide */}
        <ThingsToKnow />

        {/* 10. RSVP Form Flow */}
        <RsvpSection />
      </main>

      {/* 11. Ivory Closing Footer */}
      <Footer />

      {/* Floating Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
