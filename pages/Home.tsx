import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowDown, Instagram, Scissors, Sparkles, Droplet } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2669&auto=format&fit=crop",
    super: "Est. 2024",
    title: "Artistry in Motion",
    desc: "Experience hair styling that transcends the ordinary.",
  },
  {
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop",
    super: "Pure Radiance",
    title: "Refined Aesthetics",
    desc: "Bespoke beauty treatments for the modern muse.",
  },
  {
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2669&auto=format&fit=crop",
    super: "Luxury Care",
    title: "The Perfect Touch",
    desc: "Nail artistry designed for sophistication.",
  }
];

const servicesList = [
  {
    id: "01",
    name: "Hair Couture",
    desc: "Cutting, Coloring, Styling",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: "02",
    name: "Facial Aesthetics",
    desc: "Skincare, Lashes, Brows",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "03",
    name: "Nail Studio",
    desc: "Manicure, Pedicure, Art",
    img: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&q=80&w=1200",
    icon: <Droplet className="w-6 h-6" />
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);

  // Slide Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-neutral-950 text-neutral-200">

      {/* 1. Hero Section - Cinematic Editorial */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Layers */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentSlide ? 'opacity-60 scale-105' : 'opacity-0 scale-100'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="overflow-hidden mb-6">
            <span className="block text-gold-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase animate-pulse">
              {slides[currentSlide].super}
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight leading-[0.9]">
            {slides[currentSlide].title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mx-2">{word}</span>
            ))}
          </h1>
          <p className="font-sans text-neutral-300 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-10">
            {slides[currentSlide].desc}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/booking"
              className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden hover:bg-gold-500 transition-colors duration-300"
            >
              <span className="relative z-10">Book Appointment</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </section>

      {/* 2. Infinite Marquee */}
      <div className="bg-gold-500 text-black py-4 overflow-hidden border-y border-gold-600">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center font-bold text-sm uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Luxury Styling</span>
              <span className="w-1 h-1 bg-black rounded-full"></span>
              <span>Bespoke Treatments</span>
              <span className="w-1 h-1 bg-black rounded-full"></span>
              <span>Premium Care</span>
              <span className="w-1 h-1 bg-black rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Introduction - Split Layout */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-6 border border-white/20 max-w-xs">
                <p className="text-white font-serif text-xl italic">"Beauty is not just about how you look, but how you feel."</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-12 -left-12 w-24 h-24 border border-gold-500/30 rounded-full hidden md:block"></div>
          </div>

          <div className="lg:w-1/2">
            <h5 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">About The Glow Up</h5>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-[1.1]">
              Redefining beauty <br /> in the heart of <span className="text-gold-500 italic">London</span>.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
              We believe that self-care is a necessity, not a luxury. Our team of expert stylists and therapists are dedicated to providing a personalized experience that enhances your natural beauty and restores your inner peace.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">15+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">2k+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-3 text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-bold">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Interactive Services Menu */}
      <section className="py-24 bg-neutral-900 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white">Our Services</h2>
            <Link to="/services" className="hidden md:block text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full">
              View All Treatments
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* List */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              {servicesList.map((service, index) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group cursor-pointer border-t border-white/10 py-10 transition-all duration-300 ${activeService === index ? 'pl-4 border-gold-500/50' : 'hover:pl-4'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-bold tracking-widest ${activeService === index ? 'text-gold-500' : 'text-neutral-600'}`}>{service.id}</span>
                      <div>
                        <h3 className={`font-serif text-3xl md:text-4xl mb-2 transition-colors ${activeService === index ? 'text-white' : 'text-neutral-500'}`}>{service.name}</h3>
                        <p className="text-neutral-500 text-sm tracking-wide group-hover:text-neutral-400">{service.desc}</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full border border-white/10 transition-all duration-300 ${activeService === index ? 'bg-gold-500 text-black border-gold-500 rotate-45' : 'text-neutral-600'}`}>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10"></div>
            </div>

            {/* Visual Preview */}
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative hidden md:block">
              {servicesList.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                >
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-sm shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Floating Icon Card */}
                  <div className="absolute -left-6 bottom-12 bg-neutral-950 p-6 border border-white/10 shadow-xl flex items-center gap-4">
                    <div className="text-gold-500">{service.icon}</div>
                    <span className="text-white uppercase tracking-widest text-xs font-bold">Premium Experience</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reviews / Social Proof */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-2 mb-8 text-gold-500">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-8 max-w-4xl mx-auto leading-tight">
            "The Glow Up isn't just a salon, it's a sanctuary. I've never felt more taken care of, or looked better."
          </h3>
          <p className="text-neutral-400 font-bold uppercase tracking-widest text-sm">— Sarah Jenkins, Vogue</p>
        </div>
      </section>

      {/* 6. Instagram Grid / Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h5 className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2">Follow Us</h5>
            <h2 className="font-serif text-3xl text-white">@TheGlowUp.London</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-gold-500 transition-colors text-sm font-bold uppercase tracking-widest">
            <Instagram size={18} />
            <span>Follow on Insta</span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1521590832169-2313620f4cb6?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-neutral-900">
              <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-32 bg-gold-500 text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready to Glow?</h2>
          <p className="max-w-xl mx-auto text-black/80 text-lg mb-10 font-medium">
            Book your appointment today and discover the luxury treatment you deserve. Limited slots available for this month.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-black text-white px-12 py-5 uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 border-[100px] border-black rounded-full"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;