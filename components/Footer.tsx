import React from 'react';
import { Instagram, Facebook, ArrowUp, MapPin, Phone, Mail, ArrowRight, Clock } from 'lucide-react';

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
          <div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-16 gap-10">

            {/* Left: Heading & Input */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full md:w-auto text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-serif italic whitespace-nowrap">
                Join the <span className="text-amber-500/80">Circle.</span>
              </h3>
              <div className="flex items-center gap-4 w-full md:w-96 border-b border-white/20 pb-2 group focus-within:border-amber-400 transition-colors">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none text-lg w-full placeholder:text-neutral-600 font-light"
                />
                <button className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right: Scroll Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
            >
              Back to Top
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUp size={18} />
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* --- MIDDLE ROW: MAIN GRID (CENTERED CONTENT) --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 border-l border-white/10">

          {/* COL 1: BRANDING */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-10 flex flex-col justify-center items-start gap-10 min-h-[350px]">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-40 md:w-48 h-auto brightness-0 invert opacity-90"
            />

            <div className="space-y-6">
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-mono uppercase tracking-widest">
                Refining Beauty <br /> Standards since 2024
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-amber-400 transition-colors"><Instagram size={22} /></a>
                <a href="#" className="hover:text-amber-400 transition-colors"><Facebook size={22} /></a>
              </div>
            </div>
          </div>

          {/* COL 2: ADDRESS */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors group flex flex-col justify-center items-start gap-8 min-h-[350px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600/70 flex items-center gap-3">
              <MapPin size={16} /> The Studio
            </h4>

            <div className="flex flex-col gap-6">
              <address className="not-italic text-lg font-light text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                Unit 1, Tintern House<br />
                114 High Street<br />
                Brentford, TW8 8AF
              </address>
              <a href="https://maps.google.com" className="inline-flex items-center gap-2 text-xs uppercase font-bold text-neutral-500 group-hover:text-amber-400 transition-colors">
                Get Directions <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* COL 3: CONTACT */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors group flex flex-col justify-center items-start gap-8 min-h-[350px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600/70 flex items-center gap-3">
              <Phone size={16} /> Connect
            </h4>

            <div className="flex flex-col gap-8 w-full">
              <div>
                <span className="block text-[10px] text-neutral-600 uppercase tracking-widest mb-2">Bookings</span>
                <a href="tel:07494452332" className="block text-xl font-medium text-white hover:text-amber-400 transition-colors">07494 452332</a>
              </div>
              <div>
                <span className="block text-[10px] text-neutral-600 uppercase tracking-widest mb-2">Enquiries</span>
                <a href="mailto:hello@glowup.london" className="block text-base text-neutral-400 hover:text-white transition-colors">hello@glowup.london</a>
              </div>
            </div>
          </div>

          {/* COL 4: HOURS */}
          <div className="md:col-span-1 border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors flex flex-col justify-center items-start gap-8 min-h-[350px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600/70 flex items-center gap-3">
              <Clock size={16} /> Opening Hours
            </h4>
            <ul className="space-y-4 w-full">
              <li className="flex justify-between text-base font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Mon - Fri</span>
                <span className="text-white font-mono">09 — 20</span>
              </li>
              <li className="flex justify-between text-base font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Saturday</span>
                <span className="text-white font-mono">09 — 19</span>
              </li>
              <li className="flex justify-between text-base font-light border-b border-white/5 pb-2">
                <span className="text-neutral-500">Sunday</span>
                <span className="text-white font-mono">10 — 17</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-neutral-600 font-mono">
        <p>© 2024 The Glow Up London.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;