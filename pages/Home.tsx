import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
    subtitle: "Welcome to The Glow Up",
    title: "Your Hair Deserves The Best",
    desc: "Expert styling, premium care, and bespoke looks tailored just for you.",
    cta: "View Hair Services",
    link: "/services"
  },
  {
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=2669",
    subtitle: "Radiate Confidence",
    title: "Reveal Your True Beauty",
    desc: "From lashes to brows, discover treatments that enhance your natural glow.",
    cta: "View Beauty Services",
    link: "/services"
  },
  {
    image: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&q=80&w=2669",
    subtitle: "Perfection at Your Fingertips",
    title: "Luxury Nail Treatments",
    desc: "Immaculate manicures and pedicures designed to last.",
    cta: "View Nail Services",
    link: "/services"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-900">
        
        {/* Slider Backgrounds */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
             <div className="absolute inset-0 bg-black/60 z-10"></div>
             <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content Layer */}
        <div className="relative z-20 container mx-auto px-6 pt-20">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
               <div key={index} className={`transition-all duration-700 absolute top-0 left-0 w-full ${index === currentSlide ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}>
                  <h5 className="text-gold-500 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold pl-1">
                    {slide.subtitle}
                  </h5>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
                    {slide.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/booking" 
                      className="inline-flex justify-center items-center gap-2 bg-gold-500 text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 font-bold"
                    >
                      Book Now
                    </Link>
                    <Link 
                      to={slide.link} 
                      className="inline-flex justify-center items-center gap-2 border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-bold"
                    >
                      {slide.cta}
                    </Link>
                  </div>
               </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-4">
          <button onClick={prevSlide} className="p-3 border border-white/20 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 border border-white/20 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Classic About Section */}
      <section className="py-24 bg-black text-center px-6 border-b border-white/5">
        <div className="container mx-auto max-w-3xl">
          <div className="flex justify-center mb-6">
             <span className="text-3xl text-gold-500">✦</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Refining Beauty in Brentford</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
            Experience luxury at The Glow Up London. We blend creative expertise with pure relaxation to help you unwind, recharge, and reveal your most confident self.
          </p>
          <Link to="/about" className="inline-block text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors border-b border-gold-400 pb-1">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Services Grid (Classic Design) */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: "Hair Styling", 
                  desc: "Precision cuts, colors, and treatments.", 
                  img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
                  link: "/services"
                },
                { 
                  title: "Beauty & Spa", 
                  desc: "Rejuvenating facials, lashes, and brows.", 
                  img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
                  link: "/services" 
                },
                { 
                  title: "Nail Artistry", 
                  desc: "Manicures and pedicures executed to perfection.", 
                  img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800",
                  link: "/services" 
                },
              ].map((item, idx) => (
                <Link to={item.link} key={idx} className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 border border-white/10">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 border-[12px] border-neutral-900 m-0 pointer-events-none transition-all duration-500 group-hover:border-[0px]"></div>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm max-w-xs">{item.desc}</p>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;