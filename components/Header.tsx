import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Forms', path: '/forms' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/logo.png"
            alt="The Glow Up London"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs xl:text-sm uppercase tracking-widest transition-all duration-300 hover:text-gold-400 ${isActive(link.path) ? 'text-gold-500 font-semibold' : 'text-gray-300'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="hidden sm:block bg-gold-500 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-0 p-6 glass-nav rounded-2xl flex flex-col items-center gap-6 lg:hidden animate-fade-in-down bg-neutral-900/95 backdrop-blur-xl border border-gold-500/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-wider ${isActive(link.path) ? 'text-gold-500' : 'text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-gold-500 text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors w-full text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;