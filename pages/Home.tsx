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

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen pt-24 pb-12 px-4 md:px-8 lg:px-12 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 px-12">

          {/* Left: Typography & CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center relative z-10 pt-10 lg:pt-0 ">
            <h1 className="font-serif text-8xl md:text-8xl xl:text-9xl leading-[0.9] tracking-tighter mb-8">
              Beauty <br />
              <span className="italic text-neutral-500 ml-4 lg:ml-12">Beyond</span> <br />
              The Grid.
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
              <Link to="/booking" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:text-black transition-all duration-300 overflow-hidden">
                {/* Gradient Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                <span className="relative z-10 flex items-center">
                  Book Experience
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: The "Arch" Image */}
          <div className="lg:w-1/2 relative h-[50vh] lg:h-auto mt-8 lg:mt-12">
            <div className="w-full h-full rounded-t-[10rem] lg:rounded-t-[20rem] overflow-hidden relative border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1200&auto=format&fit=crop"
                alt="Hero"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s] ease-in-out"
              />
              <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-xl border border-white/10 p-6 rounded-full w-32 h-32 flex items-center justify-center animate-spin-slow">
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="fill-white text-[11px] uppercase tracking-[0.15em] font-bold">
                      <textPath href="#circlePath" startOffset="0%">
                        • The Glow Up • London • Studio
                      </textPath>
                    </text>
                  </svg>
                  {/* Icon color changed to match lighter part of gradient */}
                  <ArrowDown className="absolute inset-0 m-auto text-amber-400 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
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