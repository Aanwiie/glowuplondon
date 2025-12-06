import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Visit Us</h1>
          <p className="text-gold-500 uppercase tracking-widest text-sm">We'd love to see you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/5">
              <h3 className="text-2xl font-serif text-white mb-6">The Glow Up London</h3>
              
              <div className="space-y-6 text-gray-300 font-light">
                <div className="flex gap-4">
                  <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p>Unit 1, Tintern House,</p>
                    <p>114 High Street, Brentford, TW8 8AF</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="text-gold-500 shrink-0 mt-1" size={20} />
                  <a href="tel:07494452332" className="hover:text-gold-500 transition-colors">07494 452332</a>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="https://instagram.com" className="bg-white/5 p-3 rounded-full hover:bg-gold-500 hover:text-black transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" className="bg-white/5 p-3 rounded-full hover:bg-gold-500 hover:text-black transition-all">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/5">
               <h3 className="text-xl font-serif text-white mb-4">Opening Hours</h3>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li className="flex justify-between border-b border-white/5 pb-2">
                   <span>Monday - Friday</span>
                   <span className="text-white">09:00 - 20:00</span>
                 </li>
                 <li className="flex justify-between border-b border-white/5 pb-2">
                   <span>Saturday</span>
                   <span className="text-white">09:00 - 19:00</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Sunday</span>
                   <span className="text-white">10:00 - 17:00</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-xl">
            <h3 className="text-2xl font-serif text-white mb-2">Enquiries</h3>
            <p className="text-gray-500 text-sm mb-8">For bookings, please use the Book Now button.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full bg-black border border-white/20 rounded-none px-4 py-3 text-white focus:border-gold-500 focus:outline-none placeholder:text-gray-700" placeholder="Name" />
              <input type="email" className="w-full bg-black border border-white/20 rounded-none px-4 py-3 text-white focus:border-gold-500 focus:outline-none placeholder:text-gray-700" placeholder="Email" />
              <textarea rows={4} className="w-full bg-black border border-white/20 rounded-none px-4 py-3 text-white focus:border-gold-500 focus:outline-none placeholder:text-gray-700" placeholder="Message"></textarea>
              <button className="w-full bg-gold-500 text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-all duration-300 mt-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;