import React from 'react';
import { Heart, Star, Users, ArrowDownRight } from 'lucide-react';

const team = [
  {
    name: "Sheetal",
    role: "Nail Artist/Manage",
    image: "/gallery/13.jpeg"
  },
  {
    name: "Tosh",
    role: " Creative Hair Director ",
    image: "/gallery/12.jpeg"
  },
  {
    name: "Niki ",
    role: "Senior Stylist/Beautician",
    image: "/gallery/16.jpeg"
  },
  {
    name: "Naz",
    role: "Stylist/Beautician",
    image: "/gallery/15.jpeg"
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

      {/* --- THE VISION (Collage Layout) --- */}
      {/* 1. Changed py-16 to pt-32 pb-16 for Mobile. 
             This adds space at the top so the Navbar doesn't overlap the image.
      */}
      <section className="pt-32 pb-16 md:py-32 container mx-auto px-6 relative z-10">

        {/* 2. Changed items-center to items-start.
              This ensures the Image and the Text start at the exact same vertical level on Desktop.
        */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">

          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative group">

            {/* Main Image Container */}
            <div className="w-full aspect-video relative z-10 rounded-tr-[3rem] md:rounded-tr-[5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="/gallery/14.jpeg"
                alt="Interior"
                className="w-full h-full object-cover grayscale"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
            </div>

            {/* Decorative Outline */}
            <div className="absolute top-4 -left-4 md:top-8 md:-left-8 w-full h-full border border-[#D7BD9A]/20 rounded-tr-[3rem] md:rounded-tr-[5rem] -z-10 transition-all duration-500 group-hover:top-6 group-hover:-left-6"></div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 lg:pl-12">

            {/* 3. Removed 'mt-24' from the heading.
                  Since we used 'items-start' on the parent, this heading will now naturally 
                  align with the top edge of the image without needing extra margin.
            */}
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              About
              <span className="text-neutral-500 italic"> Us</span>
            </h2>

            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-serif text-xl">The Glow Up London</strong> is a luxury Brentford salon focused on confidence, self-care, and feeling your best. Our expert stylists, nail artists, and skincare specialists deliver premium treatments using modern techniques and high-quality products. With a calm, welcoming atmosphere, we blend relaxation with creativity to offer an experience that goes beyond beauty — it’s your moment to unwind, recharge, and truly glow.
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

          {/* GRID UPDATE: 
              - grid-cols-1: Mobile (1 per row)
              - sm:grid-cols-2: Tablet (2 per row)
              - lg:grid-cols-4: Desktop (4 per row)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group relative w-full">
                <div className="relative overflow-hidden aspect-[3/4] rounded-sm bg-neutral-800 border border-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                      <h3 className="text-2xl font-serif text-white italic">{member.name}</h3>
                      <ArrowDownRight className="text-[#D7BD9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-5 h-5" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-[#D7BD9A] transition-colors">
                      {member.role}
                    </p>
                  </div>
                </div>
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