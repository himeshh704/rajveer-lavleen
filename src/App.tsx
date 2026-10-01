import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { Hero } from './components/Hero';
import { InvitationBlessing } from './components/InvitationBlessing';
import { DateReveal } from './components/DateReveal';
import { Celebrations } from './components/Celebrations';
import { CoupleStory } from './components/CoupleStory';
import { FooterMap } from './components/FooterMap';
import { MusicPlayer } from './components/MusicPlayer';
import { FlowerShower } from './components/FlowerShower';

export function App() {
  const [hasOpenedCard, setHasOpenedCard] = useState(false);

  // Initialize Lenis 60fps hardware-accelerated smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollToInvitation = () => {
    const element = document.getElementById('invitation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#291C1A] selection:bg-[#6E1F2E] selection:text-[#FFF9EF] overflow-x-hidden font-sans relative">
      {/* Royal Opening Wedding Envelope Modal */}
      {!hasOpenedCard && (
        <InvitationEnvelope onOpen={() => setHasOpenedCard(true)} />
      )}

      {/* Main Page Flow */}
      <main>
        {/* 1. Cinematic Mobile-First Hero Portal Section */}
        <Hero onExploreClick={handleScrollToInvitation} />

        {/* 2. Invitation Blessing Section */}
        <InvitationBlessing />

        {/* 3. Interactive Scratch Card & Live Countdown Section */}
        <DateReveal />

        {/* 4. Creative Day-by-Day Wedding Itinerary */}
        <Celebrations />

        {/* 5. Bride and Groom Story Section & Image Carousel */}
        <CoupleStory />

        {/* 6. Full Size Interactive Google Map & Footer */}
        <FooterMap />
      </main>

      {/* Floating Audio Music Player */}
      <MusicPlayer />

      {/* Interactive Phool Varsha (Shower Blessings) Button & Petals */}
      <FlowerShower />
    </div>
  );
}

export default App;
