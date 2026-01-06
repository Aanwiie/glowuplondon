import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, ArrowDown, Scissors, Play, ArrowUpRight, Pause, Volume2, VolumeX,
} from 'lucide-react';
// 1. Import Framer Motion
import { motion } from 'framer-motion';

import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';

const testimonials = [
  {
    id: 1,
    text: "The Glow Up has mastered the balance between ultra-modern styling and warm, personalized care.",
    author: "Vogue UK",
    role: "Editorial Feature",
    rating: 5
  },
  {
    id: 2,
    text: "A sensory experience that transcends a typical salon visit. The interior alone is worth the trip.",
    author: "Harper's Bazaar",
    role: "Design Review",
    rating: 5
  },
  {
    id: 3,
    text: "Finally, a studio that understands texture. My curls have never looked this defined and healthy.",
    author: "Sarah J.",
    role: "Hair Artistry Client",
    rating: 5
  },
  {
    id: 4,
    text: "The Hydrafacial completely reset my skin barrier. I walked out glowing—literally unfiltered.",
    author: "Elena R.",
    role: "Skin Therapy Client",
    rating: 5
  },
  {
    id: 5,
    text: "Unapologetically luxurious. The attention to detail in the nail architecture is unmatched in London.",
    author: "Elle Magazine",
    role: "Beauty Edit",
    rating: 5
  },
  {
    id: 6,
    text: "The precision cutting here is art. It’s not just a haircut, it’s a structural change to your look.",
    author: "James M.",
    role: "Regular Client",
    rating: 5
  }
];

const products = [
  { id: 1, name: "Brillbird", image: "/products/brillbird.png" },
  { id: 2, name: "CNDC", image: "/products/cndc.png" },
  { id: 3, name: "K18", image: "/products/k18.png" },
  { id: 4, name: "L'Oreal", image: "/products/loreal.png" },
  { id: 5, name: "Olaplex", image: "/products/olaplex.png" },
  { id: 6, name: "OPI", image: "/products/opi.png" },
];

const Home: React.FC = () => {
  // Video & Hero State
  const [activeService, setActiveService] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // 2. Framer Motion Dragging State
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 3. Measure carousel width for drag constraints
  useEffect(() => {
    if (carouselRef.current) {
      // scrollWidth = total content width, offsetWidth = visible window width
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleStartInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-amber-400/30 overflow-x-hidden">

      {/* --- INJECT CSS ANIMATION DIRECTLY (Kept Blob & Ticker, Removed manual product scroll) --- */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .ticker-slide {
          animation: scrollLeft 25s linear infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <section className="relative w-full min-h-[100dvh] lg:h-screen flex flex-col lg:flex-row items-center border-b border-white/5 mt-12 overflow-hidden">

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* --- LEFT: TYPOGRAPHY & CTA --- */}
        <div className="w-full lg:w-[48%] flex-shrink-0 flex flex-col justify-center px-6 md:px-16 lg:pl-24 pt-24 lg:pt-0 relative z-10 lg:h-full lg:border-r border-white/5">

          {/* Main Headline */}
          <h1 className="font-serif italic text-white leading-[1.2] md:leading-[1.0] tracking-tighter flex flex-col w-full items-center lg:items-start text-center lg:text-left">
            {/* Line 1 */}
            <span className="text-[14vw] md:text-[9vw] lg:text-[5.5vw] relative z-10">
              True
            </span>
            {/* Line 2 */}
            <span className="block font-light text-[14vw] md:text-[9vw] lg:text-[5.5vw] lg:ml-16 -mt-2 md:-mt-4 relative z-20" style={{ color: '#D7BD9A' }}>
              Unfiltered
            </span>
            {/* Line 3 */}
            <span className="text-[14vw] md:text-[9vw] lg:text-[5.5vw] -mt-2 md:-mt-4 relative z-10">
              Glow Up<span style={{ color: '#D7BD9A' }}>.</span>
            </span>
          </h1>

          {/* CTA Area */}
          <div className="mt-10 lg:mt-12 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Link to="/booking" className="group relative px-8 py-4 rounded-full border border-white/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-sm lg:bg-transparent">
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D7BD9A] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 font-medium tracking-widest text-xs uppercase text-white group-hover:text-black transition-colors duration-300">
                Book Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* --- RIGHT: VIDEO WITH CONTROLS & OVERLAY TEXT --- */}
        <div className="w-full flex-grow lg:flex-grow-0 lg:w-[52%] h-[50vh] lg:h-full relative flex items-center justify-center lg:pr-6 overflow-hidden mt-auto lg:mt-0">
          {/* Video Container */}
          <div 
            className="w-[95%] h-[95%] lg:h-[75%] lg:w-[90%] relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group cursor-pointer flex items-center justify-center"
            onClick={togglePlay}
          >
            
            {/* Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-95"
              src="/beauty-video.mp4"
            />
            
            {/* Gradient Overlay - Top */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/40 via-black/10 to-transparent opacity-60 z-10 pointer-events-none"></div>
            
            {/* Gradient Overlay - Bottom for text readability */}
            <div className="absolute bottom-0 inset-x-0 h-64 lg:h-80 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 z-10 pointer-events-none"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
            </div>

            {/* Center Play Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center z-30 transition-all duration-500 ease-in-out
                ${isPlaying && !isMuted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
              `}
            >
              <button
                onClick={(e) => { e.stopPropagation(); handleStartInteraction(); }}
                className="relative group/btn flex items-center justify-center w-28 h-28 md:w-40 md:h-40"
              >
                {/* Spinning Text Ring */}
                <div className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-white/90 text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
                      <textPath href="#circlePath" startOffset="0%">
                        • Play With Sound • Beauty Unfiltered •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Play Icon Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-[#D7BD9A] group-hover/btn:border-[#D7BD9A] group-hover/btn:shadow-[0_0_30px_rgba(215,189,154,0.4)]">
                  <Play className="w-5 h-5 md:w-8 md:h-8 text-white group-hover/btn:text-black fill-current ml-1" />
                </div>
              </button>
            </div>

            {/* Hover Pause Indicator */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Pause className="w-5 h-5 md:w-6 md:h-6 text-white fill-current" />
                </div>
              </div>
            )}

            {/* Top Left Text Overlay */}
            <div className="absolute top-0 left-0 p-4 md:p-6 lg:p-8 z-20 pointer-events-none">
              <p className="text-white font-light text-xs md:text-sm leading-relaxed max-w-xs">
                From sleek hair styling to expertly finished nails, we offer luxury services for women and men with precision and attention to every detail.
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8 z-30 flex flex-col items-center justify-end pointer-events-none">
              {/* Decorative line */}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D7BD9A] to-transparent mb-4"></div>

              {/* Controls */}
              <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- READY TO GLOW UP SECTION --- */}
      <section className="relative mt-16 mx-2 md:mx-4 mb-4 lg:mt-0 lg:mx-0 lg:mb-0">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#E8DCC4] text-[#1a1a1a]">

          {/* --- 1. DYNAMIC LIQUID BACKGROUND --- */}
          <div className="absolute inset-0 w-full h-full">
            {/* Base Color */}
            <div className="absolute inset-0 bg-[#E8DCC4]"></div>

            {/* Moving Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>

            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
            </div>
          </div>

          {/* --- 2. CONTENT CONTAINER --- */}
          <div className="relative z-10 mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-2xl">

            {/* Left: Typography */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              {/* Decorative Tag */}
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60">
                  Limited Availability
                </span>
              </div>

              <h2 className="font-serif leading-[0.9]">
                <span className="block text-2xl md:text-3xl lg:text-4xl italic opacity-80 mb-1">
                  Ready to
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mix-blend-darken">
                  Glow Up?
                </span>
              </h2>
            </div>

            {/* Right: Magnetic Button */}
            <div className="relative group shrink-0">

              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>

              <Link
                to="/booking"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1a1a1a] text-[#E8DCC4] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-black shadow-2xl border border-white/5"
              >
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D7BD9A]/20 to-[#D7BD9A]/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                {/* Text */}
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold">
                  Book Now
                </span>

                {/* Animated Arrow Icon */}
                <div className="relative z-10 w-5 h-5 overflow-hidden">
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" style={{ color: '#D7BD9A' }} />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* --- UPDATED PRODUCTS SECTION WITH FRAMER MOTION --- */}
      <section className="relative py-8 md:py-12 px-4 md:px-12 lg:px-24 bg-[#0a0a0a] border-b border-white/5 overflow-hidden">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10">

          {/* Decorative Top Accent */}
          <div className="mb-12 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D7BD9A] to-transparent"></div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60 text-[#D7BD9A]">
              Premium Brands
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-light mb-16 text-white">
            Professional <span className="text-white/40 not-italic">Products</span>
          </h2>

          {/* 4. Framer Motion Carousel Container */}
          <motion.div 
            ref={carouselRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden relative"
            whileTap={{ cursor: "grabbing" }}
          >
            
            {/* Fade overlays to smooth edges */}
            <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

            {/* 5. The Draggable Inner Track */}
            <motion.div 
              drag="x" 
              dragFree={true} // Enables Momentum/Physics
              dragConstraints={{ right: 0, left: -width }} // "Rubber band" edges
              className="flex gap-10 md:gap-20 py-4 w-max"
            >
              {/* Repeated items to create a long scrollable strip */}
              {[...products, ...products, ...products, ...products].map((product, idx) => (
                <motion.div 
                  key={idx}
                  className="relative group flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-28 md:w-40 h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none grayscale group-hover:grayscale-0"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative Bottom Accent */}
          <div className="mt-12 w-8 h-[2px] bg-gradient-to-r from-[#D7BD9A] to-transparent"></div>

        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-4 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <Testimonials />
      </section>

    </div>
  );
};

export default Home;