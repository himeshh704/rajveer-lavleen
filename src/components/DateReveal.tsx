import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const DateReveal: React.FC = () => {
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Live Countdown logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(WEDDING_DATA.weddingDateISO).getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initialize Golden Scratch Foil Canvas
  useEffect(() => {
    if (isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;

    // Draw Theme Royal Velvet Maroon & Metallic Gold Foil
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#6E1F2E');
    grad.addColorStop(0.3, '#D4AF37');
    grad.addColorStop(0.6, '#B5965A');
    grad.addColorStop(1, '#42131E');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Draw Subtle Pattern & Text
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 4;
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ Scratch Here With Your Finger ✨', w / 2, h / 2 - 6);
    ctx.font = '12px sans-serif';
    ctx.fillText('to reveal our wedding date', w / 2, h / 2 + 14);
  }, [isScratched]);

  const triggerReveal = () => {
    if (isScratched) return;
    setIsScratched(true);
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#B5965A', '#6E1F2E', '#F8F0E3', '#FFF9EF', '#D4AF37']
      });
    } catch (e) {
      console.error(e);
    }
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    for (let i = 3; i < imgData.data.length; i += 4) {
      if (imgData.data[i] === 0) {
        transparentPixels++;
      }
    }
    const percent = (transparentPixels / (imgData.data.length / 4)) * 100;
    if (percent > 30) {
      triggerReveal();
    }
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2, false);
    ctx.fill();

    checkScratchPercentage();
  };

  // Touch & Mouse Handlers for Scratch Card
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const touch = e.touches[0];
    if (touch) scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    if (touch) scratch(touch.clientX, touch.clientY);
  };

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 bg-[#F8F0E3] text-[#291C1A] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6E1F2E]/10 border border-[#6E1F2E]/30 text-[#6E1F2E] mb-3">
          <Sparkles className="w-4 h-4 text-[#B5965A]" />
          <span className="text-xs font-sans-body uppercase tracking-[0.25em] font-semibold">
            Interactive Scratch Card
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#6E1F2E] mb-2">
          Scratch To Unlock The Date
        </h2>
        <p className="text-xs sm:text-sm font-sans-body text-[#291C1A]/75 mb-8 max-w-md mx-auto">
          Rub your finger across the golden foil card to unveil our wedding date and start the live countdown!
        </p>

        {/* SVG Definition for Heart Clip-Path */}
        {/* Main Card Container */}
        <div className="relative max-w-lg mx-auto bg-[#FFF9EF] border-2 border-[#B5965A]/50 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Unrevealed State: Royal Gold Square Scratch Foil Overlay */}
          {!isScratched && (
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 mx-auto rounded-3xl shadow-[0_10px_35px_rgba(181,150,90,0.45)] group cursor-pointer border-4 border-[#D4AF37] overflow-hidden">
              {/* Underlying Date Text Teaser inside Royal Theme Gold Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6E1F2E] via-[#521722] to-[#42131E] flex flex-col items-center justify-center p-6 text-[#FFF9EF] text-center">
                <span className="text-[10px] font-cinzel text-[#D4AF37] uppercase tracking-widest block mb-1 font-semibold">
                  Save The Date
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-amber-100 leading-tight">
                  {WEDDING_DATA.formattedDate}
                </h3>
                <p className="text-xs font-sans-body text-amber-200 mt-1">{WEDDING_DATA.city}</p>
              </div>

              {/* Scratchable Canvas Surface */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full touch-none select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              />
            </div>
          )}

          {/* Quick Reveal Button if not scratched */}
          {!isScratched && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={triggerReveal}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6E1F2E]/10 hover:bg-[#6E1F2E]/20 text-[#6E1F2E] text-xs font-sans-body font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B5965A]" />
                <span>Quick Reveal Date</span>
              </button>
            </div>
          )}

          {/* Revealed Date & Live Countdown Timer */}
          {isScratched && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="space-y-6"
            >
              {/* Unveiled Date Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#6E1F2E] to-[#42131E] border-2 border-[#B5965A] text-[#FFF9EF] shadow-xl relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] mb-2 uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Date Unlocked
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 my-1">
                  {WEDDING_DATA.formattedDate}
                </h3>

                <p className="text-xs sm:text-sm font-cinzel font-semibold text-[#B5965A] tracking-widest uppercase mt-2">
                  SUNDAY • ANAND KARAJ &amp; WEDDING
                </p>

                <p className="text-xs font-sans-body text-[#FFF9EF]/80 mt-2">
                  {WEDDING_DATA.city} • {WEDDING_DATA.couple.hashtag}
                </p>
              </div>

              {/* Live Ticking Countdown Timer (Reveals right in this section!) */}
              <div className="pt-4 border-t border-[#B5965A]/25">
                <div className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold uppercase tracking-wider text-[#6E1F2E] mb-4">
                  <Clock className="w-4 h-4 text-[#B5965A]" /> Live Countdown To Nuptials
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {timeBlocks.map((block) => (
                    <div
                      key={block.label}
                      className="bg-[#F8F0E3] border border-[#B5965A]/40 rounded-xl p-3 sm:p-4 text-center shadow-sm"
                    >
                      <div className="text-2xl sm:text-4xl font-serif-luxury font-bold text-[#6E1F2E]">
                        {String(block.value).padStart(2, '0')}
                      </div>
                      <span className="text-[10px] sm:text-xs font-cinzel font-semibold uppercase tracking-wider text-[#B5965A]">
                        {block.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
