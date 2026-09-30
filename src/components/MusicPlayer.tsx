import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log('Audio autoplay prevented', e));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 select-none">
      {/* Expanded Track Name Pill */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#291C1A]/90 backdrop-blur-md border border-[#B5965A]/40 text-[#FFF9EF] text-xs font-sans-body shadow-xl">
        <Music className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} />
        <span className="font-medium text-[11px] truncate max-w-[140px]">
          {WEDDING_DATA.audioTrack.title}
        </span>
      </div>

      {/* Floating Play/Pause Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6E1F2E] to-[#42131E] hover:from-[#521722] hover:to-[#291C1A] text-[#FFF9EF] border-2 border-[#B5965A] shadow-2xl flex items-center justify-center transition-all transform active:scale-95 group"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-[#D4AF37]" />
        ) : (
          <Play className="w-5 h-5 text-[#D4AF37] ml-0.5" />
        )}
      </button>
    </div>
  );
};
