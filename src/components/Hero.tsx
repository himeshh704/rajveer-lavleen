import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Play, Pause, Volume2, VolumeX, Film, Image } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { soundEngine } from '../utils/soundEffects';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [heroMode, setHeroMode] = useState<'video' | 'portal'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Track window scroll progress for hero transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Portal scroll transformations for Illustrated mode
  const templeScale = useTransform(scrollYProgress, [0, 0.65], [1, 2.4]);
  const doorLeftX = useTransform(scrollYProgress, [0.08, 0.65], ['0%', '-100%']);
  const doorRightX = useTransform(scrollYProgress, [0.08, 0.65], ['0%', '100%']);
  const portalGlowOpacity = useTransform(scrollYProgress, [0.05, 0.4, 0.75], [0, 1, 0.25]);

  // Video mode transformations
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

  const switchMode = (mode: 'video' | 'portal') => {
    soundEngine.playChime();
    setHeroMode(mode);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[100dvh] min-h-[620px] overflow-hidden text-white flex flex-col justify-between items-center transition-colors duration-700 ${
        heroMode === 'video' ? 'bg-black' : 'bg-gradient-to-b from-[#38bdf8] via-[#7dd3fc] to-[#bae6fd]'
      }`}
    >
      {/* ----------------- MODE A: FULL FRAME VIDEO ----------------- */}
      {heroMode === 'video' && (
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/videos/hero_video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Cinematic Dark & Gold Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#42131E]/90" />
        </motion.div>
      )}

      {/* ----------------- MODE B: ILLUSTRATED PORTAL SKY ----------------- */}
      {heroMode === 'portal' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Fluffy Sky Clouds */}
          <div className="absolute -top-6 -left-10 w-72 sm:w-96 h-36 bg-white/45 rounded-full blur-2xl animate-cloud-move" />
          <div
            className="absolute top-12 -right-12 w-80 sm:w-[500px] h-44 bg-white/50 rounded-full blur-3xl animate-cloud-move"
            style={{ animationDuration: '30s' }}
          />
          <div
            className="absolute top-1/3 left-2 w-64 sm:w-80 h-32 bg-white/35 rounded-full blur-2xl animate-cloud-move"
            style={{ animationDuration: '38s' }}
          />
          {/* Radial Sun Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-b from-white/35 via-sky-200/15 to-transparent rounded-full blur-3xl" />
        </div>
      )}

      {/* TOP FLOATING CONTROLS (Mode Switcher + Sound Controls) */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 pt-5 flex items-center justify-between pointer-events-auto">
        {/* Mode Switcher Pill */}
        <div className="inline-flex p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-xs font-sans-body shadow-lg">
          <button
            onClick={() => switchMode('video')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              heroMode === 'video'
                ? 'bg-[#B5965A] text-[#291C1A] font-bold shadow-sm'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Cinematic Film</span>
          </button>
          <button
            onClick={() => switchMode('portal')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              heroMode === 'portal'
                ? 'bg-[#B5965A] text-[#291C1A] font-bold shadow-sm'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Gurdwara Portal</span>
          </button>
        </div>

        {/* Video Audio & Play Toggles (when in video mode) */}
        {heroMode === 'video' && (
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg"
              aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-amber-100 transition-all shadow-lg"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
          </div>
        )}
      </div>

      {/* HERO CALLIGRAPHIC TYPOGRAPHY */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 px-4 text-center flex flex-col items-center select-none max-w-3xl mx-auto my-auto"
      >
        {/* Subheading Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-7xl md:text-8xl font-serif-luxury font-bold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)] my-2 leading-none"
        >
          {WEDDING_DATA.couple.heading}
        </motion.h1>

        {/* Date Callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-3xl font-cinzel font-semibold tracking-widest text-amber-100 drop-shadow-lg mt-2"
        >
          {WEDDING_DATA.formattedDate}
        </motion.p>

        <p className="text-xs sm:text-base font-sans-body font-light tracking-wider text-sky-100 opacity-90 mt-1">
          {WEDDING_DATA.city}
        </p>
      </motion.div>

      {/* GURDWARA PORTAL STAGE (Active in Portal Mode) */}
      {heroMode === 'portal' && (
        <div className="relative z-15 w-full flex flex-col items-center justify-end pointer-events-none pb-2 sm:pb-0">
          <motion.div
            style={{ scale: templeScale }}
            className="relative w-[96vw] max-w-3xl aspect-[1024/558] origin-bottom flex items-end justify-center"
          >
            {/* Temple Left Half */}
            <motion.img
              src="/images/temple_left.png"
              alt="Gurdwara Left Portal"
              style={{ x: doorLeftX }}
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            />
            {/* Temple Right Half */}
            <motion.img
              src="/images/temple_right.png"
              alt="Gurdwara Right Portal"
              style={{ x: doorRightX }}
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* Portal Glow */}
          <motion.div
            style={{ opacity: portalGlowOpacity }}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-radial from-amber-100 via-amber-200/65 to-transparent blur-3xl" />
          </motion.div>
        </div>
      )}

      {/* SCROLL DOWN CUE */}
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
