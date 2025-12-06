import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCategory, ServiceItem } from '../types';

const Services: React.FC = () => {
  const womenHair: ServiceItem[] = [
    { name: "Wash, Haircut & Blow Dry (Short)", price: "£35" },
    { name: "Wash, Haircut & Blow Dry (Medium)", price: "£40+" },
    { name: "Wash, Haircut & Blow Dry (Long)", price: "£45+" },
    { name: "Fringe Cut", price: "£10" },
    { name: "Curls / Half Hair Up", price: "£40+" },
    { name: "Finger Waves / Hair Up", price: "£50+" },
    { name: "Hollywood Waves", price: "£65+" },
    { name: "Bridal Hairstyle", price: "£100+" },
  ];

  const womenColour: ServiceItem[] = [
    { name: "Money Piece Face Framing", price: "£40" },
    { name: "Root Colour", price: "from £50" },
    { name: "Full Head Colour", price: "from £60" },
    { name: "Highlights (Half Head)", price: "from £70" },
    { name: "Highlights (Full Head)", price: "from £90" },
    { name: "Balayage / Ombre", price: "from £60" },
  ];

  const menHair: ServiceItem[] = [
    { name: "Clipper Cut", price: "£14" },
    { name: "Scissor Cut / Beard Shape", price: "£15" },
    { name: "Skin Fade", price: "£18" },
    { name: "Wash & Cut", price: "£20" },
    { name: "Boys Cut", price: "£12" },
  ];

  const beautyMakeup: ServiceItem[] = [
    { name: "Natural Soft Glam Makeup", price: "£60+" },
    { name: "Full Glow Up Makeup", price: "£70+" },
    { name: "Bridal Makeup", price: "£200+" },
    { name: "Lash Lift & Tint", price: "£60" },
    { name: "Brow Tint & Shape", price: "£15" },
  ];

  const nails: ServiceItem[] = [
    { name: "Gel Polish Hands", price: "Inquire" },
    { name: "Pedicure with Gel", price: "Inquire" },
    { name: "Nail Art Add-ons", price: "from £25" },
  ];

  const categories = [
    { title: "Hair Styling", items: womenHair },
    { title: "Colour & Highlights", items: womenColour },
    { title: "Men's Grooming", items: menHair },
    { title: "Beauty & Makeup", items: beautyMakeup },
    { title: "Nails", items: nails },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Header Image */}
      <div className="relative h-[40vh] bg-neutral-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" 
          alt="Salon Services" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-center pb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Service Menu</h1>
          <p className="text-gold-500 uppercase tracking-widest text-sm">Luxury • Care • Style</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-10">
                 <div className="h-px bg-white/20 w-12 mr-4"></div>
                 <h2 className="text-3xl font-serif text-gold-400 text-center">{cat.title}</h2>
                 <div className="h-px bg-white/20 w-12 ml-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="group flex justify-between items-baseline border-b border-dashed border-white/10 pb-2 hover:border-gold-500/30 transition-colors">
                    <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-gold-200 font-medium whitespace-nowrap ml-4 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-8 border border-gold-500/20 rounded-lg bg-neutral-900/30">
          <h3 className="text-2xl font-serif text-white mb-4">Ready to Glow?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Book your appointment today. For complex color corrections or bridal services, we recommend a consultation first.
          </p>
          <Link 
            to="/booking" 
            className="inline-block bg-white text-black px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;