import React from 'react';

const team = [
  { name: "Sheetal", role: "Expert Stylist" },
  { name: "Tush", role: "Creative Director" },
  { name: "Niki", role: "Nail Artist" },
  { name: "Naz", role: "Skincare Specialist" },
];

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop" 
              alt="Salon Interior" 
              className="rounded-lg shadow-2xl shadow-gold-500/20 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">
              More than just <br/> <span className="text-gold-500">Beauty.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Glow Up London is a luxury Brentford salon focused on confidence, self-care, and feeling your best. Our expert stylists, nail artists, and skincare specialists deliver premium treatments using modern techniques and high-quality products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a calm, welcoming atmosphere, we blend relaxation with creativity to offer an experience that goes beyond beauty — it's your moment to unwind, recharge, and truly glow.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
           <h2 className="text-3xl font-serif text-gold-400 mb-2">Meet Our Team</h2>
           <div className="w-24 h-0.5 bg-gold-500 mx-auto mb-12"></div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             {team.map((member, idx) => (
               <div key={idx} className="group bg-neutral-900 p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-24 h-24 mx-auto bg-neutral-800 rounded-full mb-4 flex items-center justify-center border border-gold-500/30 group-hover:border-gold-500 transition-colors">
                    <span className="text-3xl font-serif text-gold-500">{member.name[0]}</span>
                 </div>
                 <h3 className="text-xl font-serif text-white">{member.name}</h3>
                 <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">{member.role}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;