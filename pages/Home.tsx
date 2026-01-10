import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
// 1. Import Framer Motion
import { motion } from 'framer-motion';

import Testimonials from '@/components/Testimonials';

const products = [
  { id: 1, name: "Brillbird", image: "/products/brillbird.png" },
  { id: 2, name: "CNDC", image: "/products/cndc.png" },
  { id: 3, name: "K18", image: "/products/k18.png" },
  { id: 4, name: "L'Oreal", image: "/products/loreal.png" },
  { id: 5, name: "Olaplex", image: "/products/olaplex.png" },
  { id: 6, name: "OPI", image: "/products/opi.png" },
  // --- NEW PRODUCTS ADDED HERE ---
  { id: 7, name: "Elim", image: "/products/elim.png" },
  { id: 8, name: "Gel", image: "/products/gel.png" },
];

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 4x ensures we have plenty of width even on 4k monitors before the animation resets
  const seamlessProducts = [...products, ...products, ...products, ...products];

  // Your Direct Booksy Profile Link (Updated with your ID)
  const booksyUrl = "https://booksy.com/en-gb/dl/show-business/170549";

  return (
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-amber-400/30 overflow-x-hidden">

      {/* --- INJECT CSS ANIMATIONS --- */}
      <style>{`
        /* Infinite Scrolling Animation */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Blob Animation (Existing) */
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

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-28 md:pt-36 px-4 md:px-8 pb-8 overflow-hidden">

        <div className="relative w-full h-[65vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src="/beauty-video.mp4"
          />

          {/* --- OVERLAYS --- */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent pointer-events-none z-10"></div>

          <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay z-10"
            style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
          </div>

          <div className="absolute bottom-0 left-4 z-30 flex flex-col items-start justify-end gap-6 p-6 md:p-10 lg:p-12 max-w-[90%] md:max-w-[70%]">
            <div className="max-w-xs md:max-w-md ">
              <p className="font-light text-white text-base md:text-lg lg:text-xl leading-relaxed tracking-wide drop-shadow-2xl text-left">
                From sleek hair styling to expertly finished nails, we offer luxury services with precision and attention to detail.
              </p>
            </div>

            {/* UPDATED: Link changed to <a> for new tab redirection */}
            <a 
              href={booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block px-4 py-2 md:px-8 md:py-4 rounded-full border border-white/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D7BD9A] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3 font-medium tracking-widest text-xs md:text-sm uppercase text-white group-hover:text-black transition-colors duration-300">
                Book Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* --- READY TO GLOW UP SECTION --- */}
      <section className="relative mx-4 md:mx-8 mb-36 mt-36">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#E8DCC4] text-[#1a1a1a]">

          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-[#E8DCC4]"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] bg-[#D7BD9A] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
            </div>
          </div>

          <div className="relative z-10 mx-auto px-4 md:px-12 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 w-full max-w-5xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
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

            <div className="relative group shrink-0">
              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
              
              {/* UPDATED: Link changed to <a> for new tab redirection */}
              <a
                href={booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1a1a1a] text-[#E8DCC4] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-black shadow-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D7BD9A]/20 to-[#D7BD9A]/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold">
                  Book Now
                </span>
                <div className="relative z-10 w-5 h-5 overflow-hidden">
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                  <ArrowRight className="absolute inset-0 w-full h-full -rotate-45 -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" style={{ color: '#D7BD9A' }} />
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- INFINITE SCROLL PRODUCTS SECTION --- */}
      <section className="relative py-8 md:py-12 px-0 bg-[#0a0a0a] border-b border-white/5 overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 flex flex-col items-center">

          <div className="mb-8 md:mb-12 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D7BD9A] to-transparent"></div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase opacity-60 text-[#D7BD9A]">
              Carefully selected
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-light mb-16 text-white text-center px-4">
              Professional <span className="text-white/40 not-italic">Products</span>
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

            <div className="flex w-max gap-12 md:gap-24 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
              {seamlessProducts.map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  className="flex items-center justify-center shrink-0 w-32 md:w-48 group grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

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