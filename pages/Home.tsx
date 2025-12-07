import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowDown, Scissors, Play } from 'lucide-react';

const services = [
  { id: 1, name: "Hair Artistry", description: "Precision Cutting & Balayage", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Skin Therapy", description: "Hydrafacials & Peels", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Nail Architecture", description: "Biab & Gel Sculpting", image: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?q=80&w=800&auto=format&fit=crop" }
];

// Reusable Ticker Text Component
const TickerText = () => (
  <>
    <span>THE   GLOW   UP</span> <span className="text-white text-2xl">✦</span>
    <span>HAIR CARE</span> <span className="text-white text-2xl">✦</span>
    <span>SKIN THERAPY</span> <span className="text-white text-2xl">✦</span>
    <span>London Studio</span> <span className="text-white text-2xl">✦</span>
    <span>Artsy Nails</span> <span className="text-white text-2xl">✦</span>
  </>
);

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    // Updated selection color to a solid amber that matches the gradient (gradients don't work in selection)
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-amber-400/30 overflow-x-hidden">

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

<section className="relative h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center border-b border-white/5 mt-12">

  {/* Background Grid Pattern */}
  <div className="absolute inset-0 z-0 opacity-[0.03]"
    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
  </div>

  {/* --- LEFT: TYPOGRAPHY --- */}
  <div className="lg:w-[55%] h-full flex flex-col justify-center px-6 md:px-12 lg:pl-24 relative z-10 border-r border-white/5">

    {/* --- NEW LOGO (Mobile Only) --- */}
    <div className="lg:hidden w-full flex justify-center mb-8">
      <img
        src="/logo2.png"
        alt="Brand Logo"
        className="w-36 h-auto object-contain"
      />
    </div>

    {/* Main Headline */}
    <h1 className="font-serif italic text-[13vw] lg:text-[9vw] leading-[0.85] tracking-tighter text-white mix-blend-difference text-center lg:text-left">
      True <br />
      <span className="block  pl-12 lg:pl-24 font-light bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent text-left">
        Unfiltered
      </span>
      Glow Up<span className="text-amber-500 italic">.</span>
    </h1>

    {/* CTA Area (Button) */}
    {/* UPDATED: 
        1. Added 'lg:justify-start' to align left on desktop.
        2. Added 'lg:pl-24' to match the indentation of the "Unfiltered" text above. 
    */}
    <div className="mt-12 w-full flex justify-center lg:justify-start lg:pl-24">
      
      <Link to="/booking" className="group relative px-8 py-4 rounded-full border border-white/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden">
        
        {/* Animated Gradient Background - Fades in on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-3 font-medium tracking-widest text-xs uppercase text-white group-hover:text-black transition-colors duration-300">
          Book Experience
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      
      </Link>
    </div>
  </div>

  {/* --- RIGHT: AESTHETIC VISUAL --- */}
  <div className="lg:w-[45%] h-full relative flex items-end justify-center pr-12 overflow-hidden">

    {/* Ambient Gradient Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-amber-200/20 to-amber-600/10 rounded-full blur-[90px] -z-10"></div>

    {/* The Model */}
    <img
      src="/woman-new2.png"
      alt="Editorial Beauty"
      className="relative z-10 h-[85%] lg:h-[90%] w-auto object-contain drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
      style={{
        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
      }}
    />

  </div>
</section>
      {/* --- SCROLLING TICKER (Gradient Background) --- */}
      <div className="py-8 bg-gradient-to-r from-amber-200 to-amber-600 -rotate-1 scale-110 origin-left border-y-4 border-black relative z-20 shadow-xl overflow-hidden flex">
        {/* Set 1 */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
        {/* Set 2 (Duplicate for Loop) */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
      </div>

      {/* --- SERVICES --- */}
      <section className="py-24 bg-neutral-900 rounded-[3rem] mx-2 md:mx-6 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-6xl text-white">The Menu</h2>
            {/* Gradient Text Clip */}
            <span className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent font-mono text-sm font-bold">
              (03) Categories
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`
                        group cursor-pointer p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden
                        ${activeService === index
                      ? 'bg-gradient-to-r from-amber-200 to-amber-600 border-transparent text-black'
                      : 'bg-white/5 border-white/5 hover:border-white/20 text-white'}
                      `}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">0{service.id}</span>
                      <h3 className="text-3xl font-serif">{service.name}</h3>
                    </div>
                    <ArrowRight className={`w-6 h-6 transition-transform ${activeService === index ? '-rotate-45' : ''}`} />
                  </div>
                  <p className={`mt-4 text-sm relative z-10 opacity-80 ${activeService === index ? 'font-medium' : 'font-light'}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:w-1/2 relative h-[400px] lg:h-auto hidden md:block">
              <div className="sticky top-12 w-full aspect-square rounded-[2rem] overflow-hidden">
                {services.map((service, index) => (
                  <img
                    key={index}
                    src={service.image}
                    alt={service.name}
                    className={`
                             absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                             ${activeService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                          `}
                  />
                ))}
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="self-end p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                    <Scissors className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-4xl font-serif text-white">{services[activeService].name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[4rem] md:rounded-[10rem] overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Texture"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center group/btn hover:border-transparent relative overflow-hidden transition-all duration-300">
                {/* Gradient Hover Overlay for Button */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="fill-current w-8 h-8 ml-1 relative z-10 group-hover:text-black transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-20 border-b border-neutral-900">
        <div className="container mx-auto px-6 text-center">
          {/* Gradient doesn't apply to SVG fill easily without defs, used the lighter amber to match */}
          <Star className="w-8 h-8 text-amber-400 mx-auto mb-8 fill-current" />
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl mx-auto text-neutral-300">
            "The Glow Up has mastered the balance between ultra-modern styling and warm, personalized care."
          </p>
          <div className="mt-8 text-sm uppercase tracking-widest font-bold text-neutral-500">
            — Vogue UK
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER (Gradient Background) --- */}
      <section className="relative py-32 bg-gradient-to-r from-amber-200 to-amber-600 text-black overflow-hidden rounded-t-[3rem] mt-12 mx-2">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif leading-none mb-6">
              Your Turn <br /> To Glow.
            </h2>
            <p className="text-black/70 max-w-md font-medium text-lg">
              Slots for this month are filling rapidly. Secure your consultation today.
            </p>
          </div>
          <Link
            to="/booking"
            className="group h-40 w-40 md:h-56 md:w-56 bg-black rounded-full flex flex-col items-center justify-center text-white relative transition-transform hover:scale-105"
          >
            <span className="uppercase tracking-widest text-xs mb-2">Book Now</span>
            <ArrowRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;