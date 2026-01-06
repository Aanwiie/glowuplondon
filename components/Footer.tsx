import React from 'react';
import { Instagram, Facebook, ArrowUp, MapPin, Phone, ArrowRight, Clock } from 'lucide-react';

const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] text-[#e5e5e5] font-sans border-t border-white/10 mt-24">

      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
      </div>

      {/* --- TOP ROW: NEWSLETTER --- */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-10 gap-6">

            {/* Left: Heading & Input */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-serif italic whitespace-nowrap">
                Join the <span style={{ color: '#D7BD9A' }}>Circle.</span>
              </h3>
              <div className="flex items-center gap-3 w-full md:w-80 border-b border-white/20 pb-2 group focus-within:border-[#D7BD9A] transition-colors">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-600 font-light"
                />
                <button className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right: Scroll Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
            >
              Back to Top
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUp size={16} />
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* --- MIDDLE ROW: MAIN GRID (CENTERED CONTENT) --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 border-l border-white/10">

          {/* COL 1: BRANDING */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-6 md:p-8 flex flex-col justify-center items-start gap-6 min-h-[280px]">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-32 md:w-40 h-auto brightness-0 invert opacity-90"
            />

            <div className="space-y-4">
              <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed font-mono uppercase tracking-widest">
                Refining Beauty <br /> Standards since 2024
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#D7BD9A] transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-[#D7BD9A] transition-colors"><Facebook size={18} /></a>
              </div>
            </div>
          </div>

          {/* COL 2: ADDRESS */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors group flex flex-col justify-center items-start gap-6 min-h-[280px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7BD9A]/70 flex items-center gap-2">
              <MapPin size={14} /> The Studio
            </h4>

            <div className="flex flex-col gap-4">
              <address className="not-italic text-sm font-light text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                Unit 1, Tintern House<br />
                114 High Street<br />
                Brentford, TW8 8AF
              </address>
              <a href="https://maps.app.goo.gl/1bBJSB4SUuUkkN8u9" className="inline-flex items-center gap-2 text-xs uppercase font-bold text-neutral-500 group-hover:text-[#D7BD9A] transition-colors">
                Get Directions <ArrowRight size={10} />
              </a>
            </div>
          </div>

          {/* COL 3: CONTACT */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors group flex flex-col justify-center items-start gap-6 min-h-[280px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7BD9A]/70 flex items-center gap-2">
              <Phone size={14} /> Connect
            </h4>

            <div className="flex flex-col gap-6 w-full">
              <div>
                <span className="block text-[9px] text-neutral-600 uppercase tracking-widest mb-1">Bookings</span>
                <a href="tel:07494452332" className="block text-base font-medium text-white hover:text-[#D7BD9A] transition-colors">07494 452332</a>
              </div>
              <div>
                <span className="block text-[9px] text-neutral-600 uppercase tracking-widest mb-1">Enquiries</span>
                <a href="mailto:theglowuplondon@gmail.com" className="block text-sm text-neutral-400 hover:text-white transition-colors">theglowuplondon@gmail.com</a>
              </div>
            </div>
          </div>

          {/* COL 4: HOURS (UPDATED) */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors flex flex-col justify-center items-start gap-6 min-h-[280px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7BD9A]/70 flex items-center gap-2">
              <Clock size={14} /> Opening Hours
            </h4>
            <ul className="space-y-3 w-full">
              <li className="flex justify-between text-sm font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Mon - Fri</span>
                <span className="text-white font-mono text-xs uppercase">9 am — 8 pm</span>
              </li>
              <li className="flex justify-between text-sm font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Saturday</span>
                <span className="text-white font-mono text-xs uppercase">9 am — 7 pm</span>
              </li>
              <li className="flex justify-between text-sm font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Sunday</span>
                <span className="text-white font-mono text-xs uppercase">10 am — 5 pm</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-mono">
        <p>© 2024 The Glow Up London.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;