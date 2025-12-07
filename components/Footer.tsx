import React from 'react';
import { Instagram, Facebook, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden font-sans">
      {/* Subtle Ambient Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12 max-w-7xl">
        
        {/* Top Section: Logo & Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:w-1/3 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo2.png" 
                alt="The Glow Up London" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90" 
              />
            </div>
            
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm text-sm">
              Confidence starts with self-care. Experience luxury treatments in a calm, welcoming atmosphere designed for your restoration.
            </p>

            {/* Socials - Minimal Circles */}
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Info Columns Wrapper */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
            
            {/* Contact Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-200 mb-8">
                Get in Touch
              </h4>
              <ul className="space-y-6">
                <li className="group">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-amber-100 transition-colors duration-300">
                    <MapPin className="shrink-0 mt-1 text-amber-500/80 group-hover:text-amber-400 transition-colors" size={18} strokeWidth={1.5} />
                    <span className="text-sm font-light leading-relaxed">
                      Unit 1, Tintern House, <br />
                      114 High Street, Brentford, <br />
                      TW8 8AF
                    </span>
                  </a>
                </li>
                <li className="group">
                  <a href="tel:07494452332" className="flex items-center gap-4 hover:text-amber-100 transition-colors duration-300">
                    <Phone className="shrink-0 text-amber-500/80 group-hover:text-amber-400 transition-colors" size={18} strokeWidth={1.5} />
                    <span className="text-sm font-light">07494 452332</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Section - Tabular Look */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-200 mb-8">
                Opening Hours
              </h4>
              <ul className="space-y-4">
                <HourRow day="Monday - Friday" time="09:00 AM — 08:00 PM" />
                <HourRow day="Saturday" time="09:00 AM — 07:00 PM" />
                <HourRow day="Sunday" time="10:00 AM — 05:00 PM" />
              </ul>
            </div>

          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} The Glow Up London. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Opening Hours Rows
const HourRow = ({ day, time }: { day: string; time: string }) => (
  <li className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 hover:pl-2 transition-all duration-300 cursor-default group">
    <span className="text-sm text-neutral-500 group-hover:text-neutral-300">{day}</span>
    <span className="text-sm font-medium text-neutral-300 group-hover:text-amber-100">{time}</span>
  </li>
);

// Helper Component for Social Links
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white hover:border-neutral-700 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;