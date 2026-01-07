import React from 'react';
import { Sparkles, Heart, Star, Users, ArrowDownRight } from 'lucide-react';

const team = [
  {
    name: "Sheetal",
    role: "Expert Stylist",
    image: "/gallery/13.jpeg"
  },
  {
    name: "Tush",
    role: "Creative Director",
    image: "/gallery/12.jpeg"
  },
];

const features = [
  { title: "Precision", icon: <Star size={20} />, text: "We don't follow trends; we tailor techniques to your unique structure." },
  { title: "Atmosphere", icon: <Heart size={20} />, text: "A sanctuary of calm where anxiety is left at the door." },
  { title: "Community", icon: <Users size={20} />, text: "Brentford is our home, and every client is treated like family." },
];

const About: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-[#D7BD9A]/30 overflow-x-hidden relative">

      {/* --- BACKGROUND FX --- */}
 

      {/* --- HEADER --- */}
      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7BD9A] via-[#D7BD9A] to-[#D7BD9A] italic pr-2">Soul</span>
            of the Salon.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
            We aren't just styling hair; we are curating confidence. Discover the philosophy behind The Glow Up London.
          </p>
        </div>
      </section>

      {/* --- THE VISION (Collage Layout) --- */}
      <section className="py-20 md:py-32 container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Main Image */}
            <div className="w-[90%] aspect-[3/4] relative z-10 rounded-tr-[5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="/gallery/2.jpeg"
                alt="Interior"
                className="w-full h-full object-cover grayscale "
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>


            </div>

            {/* Floating Detail Image */}


            {/* Decorative Outline */}
            <div className="absolute top-12 -left-8 w-full h-full border border-[#D7BD9A]/20 rounded-tr-[5rem] -z-10 hidden md:block"></div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Luxury without the <br />
              <span className="text-neutral-500 italic">Pretension.</span>
            </h2>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-serif text-xl">The Glow Up London</strong> is a sanctuary nestled in Brentford. We founded this space on a simple belief: that high-end beauty treatments shouldn't feel intimidating.
              </p>
              <p>
                Our expert stylists, nail artists, and skincare specialists deliver premium treatments using modern techniques and high-quality products. But more importantly, we listen. We create a look that aligns with your lifestyle, your face shape, and your personal aesthetic.
              </p>
              <p>
                It's your moment to unwind, recharge, and truly glow.
              </p>
            </div>

            {/* Feature Grid (Philosophy) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              {features.map((f, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7BD9A] mb-4 group-hover:bg-[#D7BD9A] group-hover:text-black transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-serif text-lg mb-2">{f.title}</h4>
                  <p className="text-sm text-neutral-500 leading-snug group-hover:text-neutral-300 transition-colors">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE COLLECTIVE (Team Section) --- */}
      <section className="py-24 bg-neutral-900/30 border-t border-white/5 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <p className="text-[#D7BD9A] font-bold uppercase tracking-[0.2em] text-xs mb-3">The Collective</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Meet the Experts</h2>
          </div>

          {/* 
              GRID CHANGED TO FLEX CENTER
              This ensures 2 items are perfectly centered, 
              but they keep their original size logic (w-full max-w-xs)
          */}
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="group relative w-full sm:max-w-xs">
                
                {/* Card Container */}
                <div className="relative overflow-hidden aspect-[3/4] rounded-sm bg-neutral-800 border border-white/5">

                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />

                  {/* Overlay (Gradient from bottom) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                  {/* Content Positioned at Bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                      <h3 className="text-3xl font-serif text-white italic">{member.name}</h3>
                      <ArrowDownRight className="text-[#D7BD9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-[#D7BD9A] transition-colors">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Border Hover Effect */}
                <div className="absolute -inset-2 border border-[#D7BD9A]/30 rounded-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA STRIP --- */}
      <div className="py-24 text-center">
        <h2 className="font-serif text-5xl md:text-7xl opacity-10 font-bold uppercase tracking-tight select-none pointer-events-none">
          Glow Up London
        </h2>
      </div>

    </div>
  );
};

export default About;