import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Layers
} from 'lucide-react';

// -- TYPE DEFINITIONS --
interface RelatedImage {
  src: string;
  alt: string;
}

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  year: string;
  description: string;
  src: string;
  relatedImages: RelatedImage[];
}

// -- DATA CONFIGURATION (Uniform Data) --
const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: "Signature Style",
    title: "The Golden Hour",
    year: "2024",
    description: "A complete transformation focusing on warm tones and natural lighting. This session involved a 3-stage lighting setup to capture the natural glow.",
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1616766098956-c81f12114571?auto=format&fit=crop&w=800&q=80", alt: "Detail 1" },
      { src: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?auto=format&fit=crop&w=800&q=80", alt: "Detail 2" },
      { src: "https://images.unsplash.com/photo-1534030347209-467a5b0dd909?auto=format&fit=crop&w=800&q=80", alt: "Detail 3" },
    ]
  },
  {
    id: 2,
    category: "Urban Portrait",
    title: "City Minimalist",
    year: "2024",
    description: "Capturing the essence of city life with a minimalist approach. Sharp focus with blurred architectural backgrounds.",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", alt: "Urban 1" },
      { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80", alt: "Urban 2" },
    ]
  },
  {
    id: 3,
    category: "Editorial",
    title: "Vintage Revival",
    year: "2023",
    description: "A throwback style edit bringing 90s aesthetics into modern clarity. Heavy grain usage and film simulation.",
    src: "https://images.unsplash.com/photo-1595854341646-a49824d69c8b?auto=format&fit=crop&q=80&w=800",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80", alt: "Vintage 1" },
    ]
  },
  {
    id: 4,
    category: "High Fashion",
    title: "Bold & Blue",
    year: "2024",
    description: "High contrast fashion shoot. We utilized distinct color blocking to make the subject pop against the studio backdrop.",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", alt: "Fashion 1" },
      { src: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=800&q=80", alt: "Fashion 2" },
    ]
  },
  {
    id: 5,
    category: "B&W Studio",
    title: "Monochrome Study",
    year: "2023",
    description: "Exploring texture and shadow without color. A study in absolute contrast.",
    src: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&q=80&w=1200",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", alt: "Mono 1" },
      { src: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&w=800&q=80", alt: "Mono 2" },
    ]
  },
  {
    id: 6,
    category: "Lifestyle",
    title: "Weekend Vibes",
    year: "2024",
    description: "Candid moments captured in natural environments. The focus is on unposed, authentic emotion.",
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=800&q=80", alt: "Lifestyle 1" },
      { src: "https://images.unsplash.com/photo-1542206391-7f94900247f9?auto=format&fit=crop&w=800&q=80", alt: "Lifestyle 2" },
    ]
  },
  {
    id: 7,
    category: "Abstract",
    title: "Fabric Texture",
    year: "2024",
    description: "Close ups focusing on material and fabric.",
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=800",
    relatedImages: [
      { src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80", alt: "Tex 1" },
    ]
  },
  {
    id: 8,
    category: "Nature",
    title: "Desert Winds",
    year: "2023",
    description: "Shooting in challenging environments.",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    relatedImages: []
  },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [internalImageIndex, setInternalImageIndex] = useState<number>(0);

  const selectedItem = selectedIndex !== null ? galleryData[selectedIndex] : null;

  // Flatten images for internal slider
  const allImages = selectedItem
    ? [{ src: selectedItem.src, alt: 'Main Shot' }, ...selectedItem.relatedImages]
    : [];

  const currentImage = allImages[internalImageIndex];

  // -- LOGIC --
  const nextProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % galleryData.length);
    setInternalImageIndex(0);
  }, [selectedIndex]);

  const prevProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + galleryData.length) % galleryData.length);
    setInternalImageIndex(0);
  }, [selectedIndex]);

  const nextInternalImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (allImages.length <= 1) return;
    setInternalImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevInternalImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (allImages.length <= 1) return;
    setInternalImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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

      {/* -- EDITORIAL GRID (The Even Layout) -- */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => { setSelectedIndex(index); setInternalImageIndex(0); }}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image Card - FORCED ASPECT RATIO 3:4 for perfect evenness */}
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

                {/* Category Tag (Top Right) */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[10px] tracking-widest uppercase font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  {item.category}
                </div>
              </div>

              {/* Metadata (Below Image) - Kept Visible for clean layout */}
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
          <div className="relative w-full h-full max-w-[1800px] max-h-[95vh] bg-black border border-white/5 shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row animate-scale-in">

            {/* --- NAVIGATION BUTTONS (FLOATING) --- */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/50 text-white/70 hover:text-[#D7BD9A] hover:bg-black/80 transition-all backdrop-blur-sm border border-white/10 group"
            >
              <ChevronLeft size={32} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/50 text-white/70 hover:text-[#D7BD9A] hover:bg-black/80 transition-all backdrop-blur-sm border border-white/10 group"
            >
              <ChevronRight size={32} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>


            {/* --- LEFT: IMAGE STAGE (75%) --- */}
            <div className="w-full lg:w-3/4 h-[50%] lg:h-full relative bg-neutral-900/50 flex items-center justify-center group/stage">
              {/* Main Image Display */}
              <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-12">
                <img
                  key={currentImage?.src}
                  src={currentImage?.src}
                  alt="Gallery"
                  className="max-w-full max-h-full object-contain shadow-2xl animate-fade-in"
                />
              </div>

              {/* Internal Image Navigation (Hover Only) */}
              {allImages.length > 1 && (
                <div className="absolute bottom-8 flex gap-4 opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300">
                  <button onClick={prevInternalImage} className="p-3 rounded-full bg-white/5 hover:bg-[#D7BD9A] hover:text-white text-white/70 backdrop-blur-sm transition-colors border border-white/10">
                    <ChevronLeft size={20} />
                  </button>
                  <div className="px-4 py-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs tracking-widest text-white/80 font-mono">
                    {internalImageIndex + 1} / {allImages.length}
                  </div>
                  <button onClick={nextInternalImage} className="p-3 rounded-full bg-white/5 hover:bg-[#D7BD9A] hover:text-white text-white/70 backdrop-blur-sm transition-colors border border-white/10">
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>


            {/* --- RIGHT: SIDEBAR (25%) --- */}
            <div className="w-full lg:w-1/4 h-[50%] lg:h-full bg-neutral-950 border-l border-white/5 flex flex-col">

              {/* Top Info */}
              <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-6 bg-[#D7BD9A]"></span>
                  <span className="text-[#D7BD9A] text-[10px] font-bold uppercase tracking-[0.3em]">
                    Project Details
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-[1.1]">
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

                <p className="text-neutral-400 font-light leading-relaxed text-sm lg:text-base">
                  {selectedItem.description}
                </p>
              </div>

              {/* Footer / Thumbs */}
              <div className="p-8 bg-neutral-900/30 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4 text-white/50">
                  <Layers size={14} />
                  <span className="text-xs uppercase tracking-widest font-medium">Related Shots</span>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setInternalImageIndex(idx)}
                      className={`
                                        flex-none w-16 h-16 lg:w-20 lg:h-20 cursor-pointer overflow-hidden rounded border border-transparent transition-all
                                        ${internalImageIndex === idx ? 'border-[#D7BD9A] opacity-100' : 'hover:border-white/20 opacity-50 hover:opacity-100'}
                                    `}
                    >
                      <img src={img.src} className="w-full h-full object-cover" alt="thumb" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;