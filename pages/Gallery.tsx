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
  src: string;
  // Kept optional for internal reference, even if not displayed
  title?: string;
  description?: string;
}

// -- DATA CONFIGURATION --
const galleryData: GalleryItem[] = [
  { id: 1, src: "/gallery/1.jpeg", title: "The Golden Hour" },
  { id: 2, src: "/gallery/2.jpeg", title: "City Minimalist" },
  { id: 3, src: "/gallery/3.jpeg", title: "Vintage Revival" },
  { id: 4, src: "/gallery/4.jpeg", title: "Bold & Blue" },
  { id: 5, src: "/gallery/5.jpeg", title: "Monochrome Study" },
  { id: 6, src: "/gallery/6.jpeg", title: "Weekend Vibes" },
  { id: 7, src: "/gallery/7.jpeg", title: "Fabric Texture" },
  { id: 8, src: "/gallery/8.jpeg", title: "Desert Winds" },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? galleryData[selectedIndex] : null;

  // -- LOGIC --
  const nextProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % galleryData.length);
  }, [selectedIndex]);

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

      {/* HEADER SECTION (Page Title only) */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <p className="text-[#D7BD9A] font-bold tracking-[0.3em] text-xs uppercase mb-3 pl-1">
              Portfolio 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white">
              Visual <span className="text-neutral-500 italic">Journal.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* -- IMAGE GRID (Images Only) -- */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer"
            >
              {/* Image Card */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 shadow-2xl transition-all duration-500 hover:shadow-[#D7BD9A]/10 border border-transparent hover:border-white/10">
                {/* Image */}
                <img
                  src={item.src}
                  alt="Gallery Item"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Hover Overlay Icon (Only visual cue left) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-black/40 p-3 rounded-full backdrop-blur-sm border border-white/20 text-white transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX VIEW) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Dark Backdrop */}
          <div
            className="absolute inset-0 bg-neutral-950/98 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedIndex(null)}
          />

          {/* Controls & Image Container */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 p-3 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-white/10 rounded-full backdrop-blur-md"
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevProject}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 rounded-full text-white/50 hover:text-[#D7BD9A] hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={32} md:size={48} strokeWidth={1} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 rounded-full text-white/50 hover:text-[#D7BD9A] hover:bg-white/5 transition-all"
            >
              <ChevronRight size={32} md:size={48} strokeWidth={1} />
            </button>

            {/* Main Image */}
            <div
              className="w-full h-[85vh] flex items-center justify-center pointer-events-none"
            // Using flex items-center ensures horizontal centering
            // h-[85vh] ensures the image doesn't touch the very edges vertically
            >
              <img
                src={selectedItem.src}
                alt="Full view"
                className="max-w-[90vw] max-h-full object-contain shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;