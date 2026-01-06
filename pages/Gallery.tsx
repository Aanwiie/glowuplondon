import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

// -- TYPE DEFINITIONS --
interface GalleryItem {
  id: number;
  category: string;
  title: string;
  year: string;
  description: string;
  src: string;
}

// -- DATA CONFIGURATION (Local Images 1-8) --
const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: "Signature Style",
    title: "The Golden Hour",
    year: "2024",
    description: "A complete transformation focusing on warm tones and natural lighting. This session involved a 3-stage lighting setup to capture the natural glow.",
    src: "/gallery/1.jpeg",
  },
  {
    id: 2,
    category: "Urban Portrait",
    title: "City Minimalist",
    year: "2024",
    description: "Capturing the essence of city life with a minimalist approach. Sharp focus with blurred architectural backgrounds.",
    src: "/gallery/2.jpeg",
  },
  {
    id: 3,
    category: "Editorial",
    title: "Vintage Revival",
    year: "2023",
    description: "A throwback style edit bringing 90s aesthetics into modern clarity. Heavy grain usage and film simulation.",
    src: "/gallery/3.jpeg",
  },
  {
    id: 4,
    category: "High Fashion",
    title: "Bold & Blue",
    year: "2024",
    description: "High contrast fashion shoot. We utilized distinct color blocking to make the subject pop against the studio backdrop.",
    src: "/gallery/4.jpeg",
  },
  {
    id: 5,
    category: "B&W Studio",
    title: "Monochrome Study",
    year: "2023",
    description: "Exploring texture and shadow without color. A study in absolute contrast.",
    src: "/gallery/5.jpeg",
  },
  {
    id: 6,
    category: "Lifestyle",
    title: "Weekend Vibes",
    year: "2024",
    description: "Candid moments captured in natural environments. The focus is on unposed, authentic emotion.",
    src: "/gallery/6.jpeg",
  },
  {
    id: 7,
    category: "Abstract",
    title: "Fabric Texture",
    year: "2024",
    description: "Close ups focusing on material and fabric.",
    src: "/gallery/7.jpeg",
  },
  {
    id: 8,
    category: "Nature",
    title: "Desert Winds",
    year: "2023",
    description: "Shooting in challenging environments.",
    src: "/gallery/8.jpeg",
  },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? galleryData[selectedIndex] : null;

  // -- LOGIC --
  // Go to next project in the main list
  const nextProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % galleryData.length);
  }, [selectedIndex]);

  // Go to previous project in the main list
  const prevProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + galleryData.length) % galleryData.length);
  }, [selectedIndex]);


  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextProject, prevProject]);

  return (
    <div className="bg-neutral-950 min-h-screen pt-28 pb-24 text-white font-sans selection:bg-[#D7BD9A]/30">

      {/* HEADER SECTION */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <p className="text-[#D7BD9A] font-bold tracking-[0.3em] text-xs uppercase mb-3 pl-1">
              Portfolio 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white">
              Visual <span className="text-neutral-500 italic">Journal.</span>
            </h1>
          </div>

          <div className="flex gap-12 text-sm text-neutral-400 font-light">
            <div>
              <span className="block text-white font-medium mb-1">08</span>
              <span className="tracking-widest uppercase text-xs">Projects</span>
            </div>
            <div>
              <span className="block text-white font-medium mb-1">Selects</span>
              <span className="tracking-widest uppercase text-xs">Curated</span>
            </div>
          </div>
        </div>
      </div>

      {/* -- EDITORIAL GRID -- */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image Card - FORCED ASPECT RATIO 3:4 */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:shadow-[#D7BD9A]/10">
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Minimalist Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 border border-white/20 text-white">
                    <Maximize2 size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[10px] tracking-widest uppercase font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  {item.category}
                </div>
              </div>

              {/* Metadata */}
              <div className="flex justify-between items-start pt-1 border-t border-transparent group-hover:border-white/10 transition-colors duration-500">
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#D7BD9A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 line-clamp-1 group-hover:text-neutral-400 transition-colors">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs text-neutral-600 font-mono pt-1 group-hover:text-neutral-400 transition-colors">
                  /{item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (CINEMA VIEW) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Dark Blur Background */}
          <div
            className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedIndex(null)}
          />

          {/* Main Modal Box */}
          <div className="relative w-full h-full max-w-[1600px] max-h-[90vh] bg-black border border-white/5 shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row animate-scale-in">

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-colors bg-black/40 rounded-full"
            >
              <X size={24} />
            </button>


            {/* --- LEFT: IMAGE STAGE (75%) --- */}
            <div className="w-full lg:w-3/4 h-[55%] lg:h-full relative bg-neutral-900/50 flex items-center justify-center">

              {/* Prev Project Button */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 text-white/70 hover:text-[#D7BD9A] hover:bg-black/80 transition-all backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-12">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </div>

              {/* Next Project Button */}
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 text-white/70 hover:text-[#D7BD9A] hover:bg-black/80 transition-all backdrop-blur-sm border border-white/10"
              >
                <ChevronRight size={24} />
              </button>

            </div>


            {/* --- RIGHT: SIDEBAR (25%) --- */}
            <div className="w-full lg:w-1/4 h-[45%] lg:h-full bg-neutral-950 border-l border-white/5 flex flex-col p-8 lg:p-12 overflow-y-auto">

              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-6 bg-[#D7BD9A]"></span>
                <span className="text-[#D7BD9A] text-[10px] font-bold uppercase tracking-[0.3em]">
                  Details
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 leading-[1.1]">
                {selectedItem.title}
              </h2>

              <div className="grid grid-cols-2 gap-6 mb-8 border-b border-white/10 pb-8">
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Category</span>
                  <span className="text-white text-sm">{selectedItem.category}</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Year</span>
                  <span className="text-white text-sm">{selectedItem.year}</span>
                </div>
              </div>

              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                {selectedItem.description}
              </p>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;