import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="pt-32 pb-0 bg-black min-h-screen flex flex-col">
      <div className="container mx-auto px-6 flex-grow flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">Book Your Appointment</h1>
          <p className="text-gold-500 uppercase tracking-widest text-sm">Select your service below</p>
        </div>

        <div className="flex-grow w-full max-w-5xl mx-auto bg-neutral-900 rounded-lg overflow-hidden border border-white/10 relative mb-12">
           {/* Placeholder for Booksy Widget/Iframe */}
           <div className="w-full h-[800px] bg-white">
             <iframe 
               src="https://booksy.com/en-gb/" 
               title="Booksy Booking"
               className="w-full h-full border-0"
             ></iframe>
           </div>
           
           <div className="text-center mt-4 pb-4">
              <p className="text-gray-500 text-xs">
                Having trouble? <a href="https://booksy.com" target="_blank" rel="noreferrer" className="text-gold-500 hover:underline">Open in new window</a>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;