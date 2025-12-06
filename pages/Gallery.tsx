import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595854341646-a49824d69c8b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Gallery</h1>
          <p className="text-gold-500 uppercase tracking-widest text-sm">Our Latest Transformations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden aspect-square rounded-sm">
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold-500 font-serif italic text-xl">The Glow Up</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;