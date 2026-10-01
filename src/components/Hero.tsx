import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Ensure Video Autoplay on iOS / Android mobile WebKit browsers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const startPlay = () => {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    startPlay();

    // Trigger video playback on any touch or scroll if mobile OS restricted autoplay initially
    const handleInteraction = () => {
      startPlay();
    };

    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('pointerdown', handleInteraction, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) startPlay();
    });

    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
    };
  }, []);

  // Track window scroll progress for hero transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.05]);

  const togglePlay = () => {
    soundEngine.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log('Video play prevented:', e));
    }
  };

  const toggleMute = () => {
    soundEngine.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-black text-white flex flex-col justify-between items-center"
    >
      {/* 1. FULL FRAME VIDEO BACKGROUND */}
      <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full">
        <video
          ref={(el) => {
            videoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.play().catch(() => {});
            }
          }}
          src="/videos/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Cinematic Dark & Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#42131E]/90" />
      </motion.div>

      {/* 2. TOP FLOATING AUDIO & PLAY CONTROLS */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 pt-6 flex items-center justify-end pointer-events-auto">
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg"
            aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Pause / Play Toggle */}
          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* 3. HERO CALLIGRAPHIC TYPOGRAPHY (Animates in Over Full Frame Video) */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 px-4 text-center flex flex-col items-center select-none max-w-3xl mx-auto my-auto"
      >
        {/* Subheading Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-lg mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span className="text-xs sm:text-sm font-sans-body tracking-[0.25em] uppercase font-semibold">
            {WEDDING_DATA.couple.subheading}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
        </motion.div>

        {/* Large Elegant Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-7xl md:text-8xl font-serif-luxury font-bold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)] my-2 leading-none"
        >
          {WEDDING_DATA.couple.heading}
        </motion.h1>

        {/* Date Callout */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-lg sm:text-3xl font-cinzel font-semibold tracking-widest text-amber-100 drop-shadow-lg mt-2"
        >
          {WEDDING_DATA.formattedDate}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs sm:text-base font-sans-body font-light tracking-wider text-sky-100 opacity-90 mt-1"
        >
          {WEDDING_DATA.city}
        </motion.p>
      </motion.div>

      {/* 4. SCROLL DOWN CUE */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 pb-6 flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
        onClick={() => {
          soundEngine.playClick();
          if (onExploreClick) onExploreClick();
        }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/95 font-sans-body font-semibold drop-shadow">
          Scroll down to explore invitation
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 sm:p-2 rounded-full bg-white/20 border border-white/40 text-white shadow-lg backdrop-blur-md"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>

      {/* Soft Bottom Transition Gradient into Ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF9EF] via-[#FFF9EF]/40 to-transparent z-15 pointer-events-none" />
    </div>
  );
};
