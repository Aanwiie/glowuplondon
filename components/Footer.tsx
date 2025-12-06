import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8 text-center md:text-left">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">The Glow Up London</h3>
          <p className="text-gray-400 mb-6 max-w-xs mx-auto md:mx-0">
            Confidence starts with self-care. Experience luxury treatments in a calm, welcoming atmosphere.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gold-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-gold-500 transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-white mb-6 tracking-wide">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start justify-center md:justify-start gap-3">
              <MapPin className="text-gold-500 shrink-0" size={18} />
              <span>Unit 1, Tintern House, 114 High Street,<br/>Brentford, TW8 8AF</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-gold-500 shrink-0" size={18} />
              <a href="tel:07494452332" className="hover:text-gold-400">07494 452332</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-white mb-6 tracking-wide">Opening Hours</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex justify-between max-w-[200px] mx-auto md:mx-0">
              <span>Mon - Fri</span>
              <span className="text-white">09:00 AM - 08:00 PM</span>
            </li>
            <li className="flex justify-between max-w-[200px] mx-auto md:mx-0">
              <span>Saturday</span>
              <span className="text-white">09:00 AM - 07:00 PM</span>
            </li>
            <li className="flex justify-between max-w-[200px] mx-auto md:mx-0">
              <span>Sunday</span>
              <span className="text-white">10:00 AM - 05:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} The Glow Up London. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;