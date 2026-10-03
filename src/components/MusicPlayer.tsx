import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(WEDDING_DATA.audioTrack.url);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log('Audio autoplay prevented', e);
          const handleFirstGesture = () => {
            if (audioRef.current) {
              audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(console.error);
            }
            window.removeEventListener('pointerdown', handleFirstGesture);
            window.removeEventListener('click', handleFirstGesture);
          };
          window.addEventListener('pointerdown', handleFirstGesture, { once: true });
          window.addEventListener('click', handleFirstGesture, { once: true });
        });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    soundEngine.playClick();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log('Audio autoplay prevented', e));
    }
  };

  const toggleSoundEffects = () => {
    const nextState = !soundEffectsEnabled;
    setSoundEffectsEnabled(nextState);
    soundEngine.enabled = nextState;
    if (nextState) soundEngine.playChime();
  };

  const handleScrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-center gap-2 select-none">
      {/* Floating Gold Control Dock */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#291C1A]/95 backdrop-blur-md border-2 border-[#B5965A] text-[#FFF9EF] shadow-2xl">
        {/* Track Title Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 text-xs font-sans-body">
          <Music className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-medium text-[11px] truncate max-w-[130px] text-amber-100">
            {WEDDING_DATA.audioTrack.title}
          </span>
        </div>

        {/* Sound FX Chime Toggle */}
        <button
          onClick={toggleSoundEffects}
          className="p-2 rounded-full hover:bg-white/10 text-amber-200 transition-colors"
          aria-label={soundEffectsEnabled ? 'Mute interaction sound effects' : 'Enable interaction sound effects'}
          title={soundEffectsEnabled ? 'Interaction Sounds On' : 'Interaction Sounds Off'}
        >
          {soundEffectsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-60" />}
        </button>

        {/* Music Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#B5965A] text-[#291C1A] shadow-md hover:brightness-110 transition-all font-bold"
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          title={isPlaying ? 'Pause Music' : 'Play Background Raga'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Top Scroll Button */}
        <button
          onClick={handleScrollToTop}
          className="p-2 rounded-full hover:bg-white/10 text-amber-200 transition-colors"
          aria-label="Scroll back to top cover"
          title="Top Cover"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
