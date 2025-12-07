import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, ArrowDown, Scissors, Play, ArrowUpRight,
  Pause, Volume2, VolumeX,
  Quote
} from 'lucide-react';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';

const services = [
  { id: 1, name: "Hair Artistry", description: "Precision Cutting & Balayage", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Skin Therapy", description: "Hydrafacials & Peels", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Nail Architecture", description: "Biab & Gel Sculpting", image: "/nail.jpeg" }
];
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


// Reusable Ticker Text Component
const TickerText = () => (
  <>
    <span>THE   GLOW   UP</span> <span className="text-white text-2xl">✦</span>
    <span>HAIR CARE</span> <span className="text-white text-2xl">✦</span>
    <span>SKIN THERAPY</span> <span className="text-white text-2xl">✦</span>
    <span>London Studio</span> <span className="text-white text-2xl">✦</span>
    <span>Artsy Nails</span> <span className="text-white text-2xl">✦</span>
  </>
);

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    // Updated selection color to a solid amber that matches the gradient (gradients don't work in selection)
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-amber-400/30 overflow-x-hidden">

      {/* --- INJECT CSS ANIMATION DIRECTLY --- */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .ticker-slide {
          animation: scrollLeft 25s linear infinite;
        }
      `}</style>

      <section className="relative w-full min-h-[100dvh] lg:h-screen flex flex-col lg:flex-row items-center border-b border-white/5 mt-12 overflow-hidden">

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* --- LEFT: TYPOGRAPHY & CTA --- */}
        {/* Mobile: pt-24 (space for header) | Desktop: centered vertically */}
        <div className="w-full lg:w-[55%] flex-shrink-0 flex flex-col justify-center px-4 md:px-12 lg:pl-24 pt-20 lg:pt-0 relative z-10 lg:h-full lg:border-r border-white/5">

          {/* --- NEW LOGO (Mobile Only) --- */}
          <div className="lg:hidden w-full flex justify-center mb-6">
            <img
              src="/logo2.png"
              alt="Brand Logo"
              className="w-28 h-auto object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif italic text-white mix-blend-difference leading-[0.85] tracking-tighter flex flex-col items-center lg:items-start w-full">

            {/* Line 1: True */}
            <span className="text-[17vw] md:text-[14vw] lg:text-[9vw] self-start lg:self-auto pl-4 lg:pl-0">
              True
            </span>

            {/* Line 2: Unfiltered (Gradient) */}
            {/* Added 'self-end' on mobile to create visual rhythm/stagger */}
            <span className="block font-light bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent 
                             text-[17vw] md:text-[14vw] lg:text-[9vw] 
                             pr-4 lg:pr-0 pl-0 lg:pl-24 
                             self-end lg:self-auto">
              Unfiltered
            </span>

            {/* Line 3: Glow Up */}
            <span className="text-[17vw] md:text-[14vw] lg:text-[9vw] self-start lg:self-auto pl-4 lg:pl-0">
              Glow Up<span className="text-amber-500 italic">.</span>
            </span>

          </h1>

          {/* CTA Area */}
          <div className="mt-10 lg:mt-12 w-full flex justify-center lg:justify-start lg:pl-24 mb-8 lg:mb-0">
            <Link to="/booking" className="group relative px-8 py-4 rounded-full border border-white/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-sm lg:bg-transparent">
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 font-medium tracking-widest text-xs uppercase text-white group-hover:text-black transition-colors duration-300">
                Book Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* --- RIGHT: AESTHETIC VISUAL --- */}
        {/* Mobile: Grows to fill remaining space, minimum height ensures visibility */}
        <div className="w-full flex-grow lg:flex-grow-0 lg:w-[45%] h-[50vh] lg:h-full relative flex items-end justify-center lg:pr-12 overflow-hidden mt-auto">

          {/* Ambient Gradient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] bg-gradient-to-tr from-amber-200/20 to-amber-600/10 rounded-full blur-[90px] -z-10"></div>

          {/* The Model */}
          <img
            src="/woman-new2.png"
            alt="Editorial Beauty"
            className="relative z-10 h-full w-auto max-w-none lg:max-w-full lg:h-[90%] object-contain object-bottom drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />

        </div>
      </section>
      {/* --- SCROLLING TICKER (Gradient Background) --- */}
      <div className="py-8 bg-gradient-to-r from-amber-200 to-amber-600 -rotate-1 scale-110 origin-left border-y-4 border-black relative z-20 shadow-xl overflow-hidden flex">
        {/* Set 1 */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
        {/* Set 2 (Duplicate for Loop) */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
      </div>

      <section className="py-4 md:py-4 px-2 md:px-6">

        {/* Main Container */}
        <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="container mx-auto px-6 md:px-16 py-12 md:py-24">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>

                {/* UPDATED TYPOGRAPHY */}
                <h2 className="text-white leading-[0.8]">

                  <span className="font-serif italic text-6xl md:text-8xl bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                    The Menu
                  </span>
                </h2>
              </div>


            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

              {/* --- LEFT: SERVICE LIST --- */}
              <div className="lg:w-1/2 flex flex-col">
                {services.map((service, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className="group relative border-b border-white/10 last:border-0"
                  >
                    <div className={`
                    cursor-pointer py-8 md:py-10 transition-all duration-500 ease-out flex flex-col
                    ${activeService === index ? 'lg:pl-8 opacity-100' : 'opacity-60 hover:opacity-100'}
                  `}>

                      {/* Top Row: ID + Title + Arrow */}
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-baseline gap-4 md:gap-8">
                          <span className="font-mono text-xs text-white/40">0{service.id}</span>

                          <h3 className={`
                          text-2xl md:text-4xl font-serif transition-colors duration-300
                          ${activeService === index
                              ? 'bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent'
                              : 'text-white'}
                        `}>
                            {service.name}
                          </h3>
                        </div>

                        {/* Animated Arrow */}
                        <div className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center
                        transition-all duration-500
                        ${activeService === index ? 'rotate-90 md:rotate-[-45deg] border-amber-400/50 bg-amber-400/10 text-amber-200' : 'text-white/30'}
                      `}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* EXPANDABLE CONTENT (Description + Mobile Image) */}
                      {/* Increased max-h to accommodate mobile image */}
                      <div className={`
                      overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${activeService === index ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
                    `}>
                        <p className="text-white/70 font-light leading-relaxed max-w-md md:pl-12 text-sm md:text-base">
                          {service.description}
                        </p>

                        {/* --- MOBILE ONLY IMAGE --- */}
                        <div className="lg:hidden mt-6 w-full rounded-2xl overflow-hidden relative aspect-video">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase">
                            Explore Service <ArrowUpRight className="w-3 h-3 text-amber-400" />
                          </div>
                        </div>

                        {/* Desktop Link (Text only) */}
                        <div className="hidden lg:flex pl-12 mt-4 items-center gap-2 text-amber-400 text-xs tracking-widest uppercase hover:underline">
                          View Details <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Active Indicator Line (Left Side - Desktop Only) */}
                      <div className={`
                      hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-gradient-to-b from-amber-200 to-amber-600 transition-all duration-500
                      ${activeService === index ? 'h-16' : 'h-0'}
                    `}></div>

                    </div>
                  </div>
                ))}
              </div>

              {/* --- RIGHT: STICKY IMAGE DISPLAY (Desktop Only) --- */}
              <div className="hidden lg:block lg:w-1/2 relative">
                <div className="sticky top-24 w-full h-[600px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5">

                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`
                      absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${activeService === index
                          ? 'opacity-100 scale-100 visible'
                          : 'opacity-0 scale-110 invisible delay-100'}
                    `}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover grayscale-[20%] contrast-110"
                      />

                      {/* Aesthetic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                      {/* Floating Caption */}
                      <div className="absolute bottom-8 left-8">
                        <p className="text-white/80 font-mono text-xs uppercase tracking-widest backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10 inline-block">
                          {service.name} — Experience
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 md:py-4 w-full flex justify-center bg-[#0a0a0a]">
        <VideoSection />
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-4 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <Testimonials />
      </section>

      <section className="relative mt-24 mx-2 md:mx-4 mb-4">

        <div className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#E8DCC4] text-[#1a1a1a]">

          {/* --- 1. DYNAMIC LIQUID BACKGROUND --- */}
          <div className="absolute inset-0 w-full h-full">
            {/* Base Color */}
            <div className="absolute inset-0 bg-[#E8DCC4]"></div>

            {/* Moving Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-amber-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-amber-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] bg-orange-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>

            {/* Grain Texture (Crucial for the 'Unfiltered' look) */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
            </div>
          </div>

          {/* --- 2. CONTENT CONTAINER --- */}
          <div className="relative z-10 container mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

            {/* Left: Typography */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              {/* Decorative Tag */}
              <div className="mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60">
                  Limited Availability
                </span>
              </div>

              <h2 className="font-serif leading-[0.9]">
                <span className="block text-5xl md:text-7xl lg:text-8xl italic opacity-80 mb-2">
                  Ready to
                </span>
                <span className="block text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase mix-blend-darken">
                  Glow Up?
                </span>
              </h2>

              <p className="mt-8 text-black/70 max-w-md font-medium text-lg md:text-xl leading-relaxed">
                The mirror is waiting. Slots for this month are filling rapidly—secure your transformation today.
              </p>
            </div>

            {/* Right: Magnetic Button */}
            <div className="relative group shrink-0">

              {/* Outer Glow Ring (Animates on hover) */}
              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>

              <Link
                to="/booking"
                className="relative flex flex-col items-center justify-center w-40 h-40 md:w-64 md:h-64 bg-[#1a1a1a] rounded-full text-[#E8DCC4] transition-all duration-500 hover:scale-105 hover:bg-black shadow-2xl"
              >
                <div className="flex flex-col items-center gap-2 z-10 overflow-hidden">
                  <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                    Book Now
                  </span>

                  {/* Animated Arrow Wrapper */}
                  <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden">
                    {/* Arrow 1 (Slide out) */}
                    <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full" />
                    {/* Arrow 2 (Slide in) */}
                    <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 text-amber-200" />
                  </div>
                </div>

                {/* Aesthetic Border Spin */}
                <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="300" strokeDashoffset="300" className="text-white/20 group-hover:stroke-dashoffset-0 transition-all duration-1000 ease-in-out" />
                </svg>
              </Link>
            </div>

          </div>

          {/* --- 3. BOTTOM SCROLLING MARQUEE (Aesthetic Touch) --- */}
          <div className="absolute bottom-0 left-0 w-full py-3 bg-black/5 border-t border-black/5 backdrop-blur-sm overflow-hidden flex">
            <div className="animate-marquee whitespace-nowrap flex gap-8 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest opacity-40 text-black">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="flex items-center gap-8">
                  London Studio • Hair • Skin • Nails <span className="text-amber-600">✦</span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- INJECT ANIMATIONS --- */}
      <style>{`
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Home;