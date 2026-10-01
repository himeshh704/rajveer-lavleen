import { Hero } from './components/Hero';
import { InvitationBlessing } from './components/InvitationBlessing';
import { DateReveal } from './components/DateReveal';
import { Celebrations } from './components/Celebrations';
import { CoupleStory } from './components/CoupleStory';
import { FooterMap } from './components/FooterMap';
import { MusicPlayer } from './components/MusicPlayer';

export function App() {
  const handleScrollToInvitation = () => {
    const element = document.getElementById('invitation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#291C1A] selection:bg-[#6E1F2E] selection:text-[#FFF9EF] overflow-x-hidden font-sans">
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
    </div>
  );
}

export default App;
