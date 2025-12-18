import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, ArrowDown, Scissors, Play, ArrowUpRight,
} from 'lucide-react';
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




const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    // Updated selection color to a solid amber that matches the gradient (gradients don't work in selection)
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#D7BD9A]/30 overflow-x-hidden">

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
          <h1 className="font-serif italic text-white leading-[0.9] tracking-tighter flex flex-col w-full items-center gap-2 lg:gap-1">

            {/* Line 1: True */}
            <span className="text-[9vw] md:text-[7vw] lg:text-[4.5vw]">
              True
            </span>

            {/* Line 2: Unfiltered */}
            <span className="block font-light text-[9vw] md:text-[7vw] lg:text-[4.5vw]" style={{ color: '#D7BD9A' }}>
              Unfiltered
            </span>

            {/* Line 3: Glow Up */}
            <span className="text-[9vw] md:text-[7vw] lg:text-[4.5vw]">
              Glow Up<span style={{ color: '#D7BD9A' }}>.</span>
            </span>

          </h1>

          {/* Subheading Description */}
          <p className="mt-8 md:mt-10 lg:mt-8 text-center text-sm md:text-base font-light text-[#e5e5e5] max-w-2xl">
            From sleek hair styling to expertly finished nails, we offer luxury services for women and men with precision and attention to every detail.
          </p>

          {/* CTA Area */}
          <div className="mt-10 lg:mt-12 w-full flex justify-center lg:justify-start lg:pl-24 mb-8 lg:mb-0">
            <Link to="/booking" className="group relative px-8 py-4 rounded-full border border-white/20 hover:border-[#D7BD9A]/50 transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-sm lg:bg-transparent">
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D7BD9A] to-[#D7BD9A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] bg-gradient-to-tr from-[#D7BD9A]/20 to-[#D7BD9A]/10 rounded-full blur-[90px] -z-10"></div>

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
 


      {/* --- ABOUT/DESCRIPTION SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#0a0a0a] border-b border-white/5">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Decorative Top Accent */}
          <div className="mb-12 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D7BD9A] to-transparent"></div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60 text-[#D7BD9A]">
              Our Studio
            </span>
          </div>

          {/* About Us Heading */}
          <h2 className="text-5xl md:text-3xl lg:text-5xl font-serif italic font-light mb-12" style={{ color: 'white' }}>
            About <span className="text-white/40 italic">Us</span>
          </h2>

          {/* Main Description */}
          <div className="space-y-8 md:space-y-12">
            
            {/* First Paragraph */}
            <p className="font-light text-md md:text-lg leading-relaxed text-[#e5e5e5] max-w-3xl">
              At The Glow Up London, we offer a full range of premium hair services for men and women from precision cuts and stylish colouring to expert styling, alongside luxurious nail treatments for women, including manicures and nail art. Every service is designed to enhance your confidence, leaving you feeling polished, pampered, and ready to shine.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 py-4">
              <div className="flex-grow h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
              
              <div className="flex-grow h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>

            {/* Second Paragraph */}
            <p className="font-light text-md md:text-lg leading-relaxed text-[#e5e5e5] max-w-3xl">
              With a calm, welcoming atmosphere, every detail is thoughtfully designed to enhance your confidence and leave you feeling polished, pampered, and radiant.
            </p>

          </div>

          {/* Decorative Bottom Accent */}
          <div className="mt-12 w-8 h-[2px] bg-gradient-to-r from-[#D7BD9A] to-transparent"></div>

        </div>

      </section>

      <section className="py-24 md:py-24 w-full flex justify-center bg-[#0a0a0a]">
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
          <div className="relative z-10 container mx-auto px-6 py-2 md:py-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

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
{/* 
              <p className="mt-8 text-black/70 max-w-md font-medium text-lg md:text-xl leading-relaxed">
                The mirror is waiting. Slots for this month are filling rapidly—secure your transformation today.
              </p> */}
            </div>

            {/* Right: Magnetic Button */}
            <div className="relative group shrink-0">

              {/* Outer Glow Ring (Animates on hover) */}
              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>

              <Link
                to="/booking"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1a1a1a] text-[#E8DCC4] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-black shadow-2xl border border-white/5"
              >
                {/* Hover Fill Effect (Amber Glow) */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-amber-600/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                {/* Text */}
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold">
                  Book Now
                </span>

                {/* Animated Arrow Icon (Small & Sharp) */}
                <div className="relative z-10 w-5 h-5 overflow-hidden">
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 text-amber-400" />
                </div>
              </Link>
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