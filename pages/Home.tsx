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
    <span>Signature Styling</span> <span className="text-white text-2xl">✦</span>
    <span>Bespoke Treatments</span> <span className="text-white text-2xl">✦</span>
    <span>Luxury Care</span> <span className="text-white text-2xl">✦</span>
    <span>London Studio</span> <span className="text-white text-2xl">✦</span>
  </>
);

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="w-full bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-amber-500/30 overflow-x-hidden">

      {/* --- INJECT CSS ANIMATION DIRECTLY (NO TAILWIND CONFIG NEEDED) --- */}
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
        <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16">

          {/* Left: Typography & CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center relative z-10 pt-10 lg:pt-0">
            <div className="mb-8 flex items-center gap-4 animate-fade-in">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Est. London 2024</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl xl:text-9xl leading-[0.9] tracking-tighter mb-8">
              Beauty <br />
              <span className="italic text-neutral-500 ml-4 lg:ml-12">Beyond</span> <br />
              The Grid.
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
              <Link to="/booking" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all duration-300">
                Book Experience
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                Experience the fusion of technical precision and artistic vision at London's premier styling house.
              </div>
            </div>
          </div>

          {/* Right: Woman Image */}
          <div className="lg:w-1/2 relative h-[50vh] lg:h-auto mt-8 lg:mt-0 flex items-center justify-center">
            {/* Background gradient for the backgroundless image */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-neutral-800/30 to-neutral-900/40 rounded-[3rem] blur-3xl"></div>

            {/* Large translucent "90" typography in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="font-serif text-[280px] lg:text-[400px] font-bold leading-none opacity-[0.06] text-white">
                BEAUTY
              </span>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/hero-woman.png"
                alt="Beautiful woman with curly hair"
                className="w-full h-full object-contain scale-95 hover:scale-100 transition-transform duration-[2s] ease-in-out relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLLING TICKER (Pure CSS Animation) --- */}
      <div className="py-8 bg-amber-500 -rotate-1 scale-110 origin-left border-y-4 border-black relative z-20 shadow-xl overflow-hidden flex">
        {/* Set 1 */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
        {/* Set 2 (Duplicate for Loop) */}
        <div className="ticker-slide flex-shrink-0 flex gap-12 items-center text-black font-black text-4xl md:text-6xl uppercase italic tracking-tighter pr-12">
          <TickerText />
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <section className="py-32 container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative">
            <div className="w-[85%] aspect-[3/4] rounded-2xl overflow-hidden relative z-10">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Interior" />
            </div>
            <div className="absolute -bottom-12 -right-4 lg:-right-12 w-2/3 aspect-square rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-8 border-[#0a0a0a] z-20 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Detail" />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-24 mt-20 lg:mt-0 z-30">
            <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
              We craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Confidence.</span>
            </h2>
            <div className="flex gap-4 mb-8">
              <div className="w-px h-24 bg-neutral-800"></div>
              <p className="text-lg text-neutral-400 leading-relaxed font-light">
                Located in the heart of Brentford, The Glow Up is an antidote to the ordinary. We combine architectural precision with organic textures to create looks that are uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 bg-neutral-900 rounded-[3rem] mx-2 md:mx-6 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-6xl text-white">The Menu</h2>
            <span className="text-amber-500 font-mono text-sm">(03) Categories</span>
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
                      ? 'bg-amber-500 border-amber-500 text-black'
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
              <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center group/btn hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300">
                <Play className="fill-current w-8 h-8 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-20 border-b border-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <Star className="w-8 h-8 text-amber-500 mx-auto mb-8 fill-current" />
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl mx-auto text-neutral-300">
            "The Glow Up has mastered the balance between ultra-modern styling and warm, personalized care."
          </p>
          <div className="mt-8 text-sm uppercase tracking-widest font-bold text-neutral-500">
            — Vogue UK
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="relative py-32 bg-amber-500 text-black overflow-hidden rounded-t-[3rem] mt-12 mx-2">
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