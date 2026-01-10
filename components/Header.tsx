import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Your Direct Booksy Profile Link
  const booksyUrl = "https://booksy.com/en-gb/dl/show-business/170549";

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
      <div className="w-full max-w-7xl glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300 bg-neutral-900/80 backdrop-blur-md border border-white/5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/logo2.png"
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
              className={`text-xs xl:text-sm uppercase tracking-widest transition-all duration-300 
                ${isActive(link.path)
                  ? 'bg-gradient-to-r from-[#D7BD9A] to-[#D7BD9A] bg-clip-text text-transparent font-bold'
                  : 'text-gray-300 hover:text-[#D7BD9A]'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* UPDATED: Changed Link to <a> for new tab redirection */}
          <a
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-gradient-to-r from-[#D7BD9A] to-[#D7BD9A] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-none hover:bg-white transition-all duration-300"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#D7BD9A] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-0 p-6 glass-nav rounded-2xl flex flex-col items-center gap-6 lg:hidden animate-fade-in-down bg-neutral-900/95 backdrop-blur-xl border border-[#D7BD9A]/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-wider 
                  ${isActive(link.path)
                    ? 'bg-gradient-to-r from-[#D7BD9A] to-[#D7BD9A] bg-clip-text text-transparent font-bold'
                    : 'text-white hover:text-[#D7BD9A]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* UPDATED: Changed Mobile Link to <a> for new tab redirection */}
            <a
              href={booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-[#D7BD9A] to-[#D7BD9A] text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-none hover:bg-white transition-all duration-300 w-full text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;