import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Star, Quote } from 'lucide-react';

// --- DATA ---
const testimonials = [
    {
        id: 1,
        text: "The Glow Up has mastered the balance between ultra-modern styling and warm, personalized care.",
        author: "Vogue UK",
        role: "Editorial Feature",
        rating: 5
    },
    {
        id: 2,
        text: "A sensory experience that transcends a typical salon visit. The interior alone is worth the trip.",
        author: "Harper's Bazaar",
        role: "Design Review",
        rating: 5
    },
    {
        id: 3,
        text: "Finally, a studio that understands texture. My curls have never looked this defined and healthy.",
        author: "Sarah J.",
        role: "Hair Artistry Client",
        rating: 5
    },
    {
        id: 4,
        text: "The Hydrafacial completely reset my skin barrier. I walked out glowing—literally unfiltered.",
        author: "Elena R.",
        role: "Skin Therapy Client",
        rating: 5
    },
    {
        id: 5,
        text: "Unapologetically luxurious. The attention to detail in the nail architecture is unmatched.",
        author: "Elle Magazine",
        role: "Beauty Edit",
        rating: 5
    },
    {
        id: 6,
        text: "The precision cutting here is art. It’s not just a haircut, it’s a structural change to your look.",
        author: "James M.",
        role: "Regular Client",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Animation Refs
    const positionRef = useRef(0);
    const startXRef = useRef(0);
    const currentTranslateRef = useRef(0);
    const prevTranslateRef = useRef(0);
    const animationRef = useRef<number>(0);

    const speed = 0.5;

    const animate = useCallback(() => {
        if (contentRef.current && !isDragging) {
            positionRef.current -= speed;
            const totalWidth = contentRef.current.scrollWidth / 2;

            if (Math.abs(positionRef.current) >= totalWidth) {
                positionRef.current = 0;
            }

            contentRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
        }
        animationRef.current = requestAnimationFrame(animate);
    }, [isDragging]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [animate]);

    // Handlers
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        startXRef.current = clientX;
        prevTranslateRef.current = positionRef.current;
        if (contentRef.current) contentRef.current.style.cursor = 'grabbing';
    };

    const handleMove = (clientX: number) => {
        if (!isDragging || !contentRef.current) return;
        const currentX = clientX;
        const diff = currentX - startXRef.current;
        positionRef.current = prevTranslateRef.current + diff;
        contentRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
    };

    const handleEnd = () => {
        setIsDragging(false);
        if (contentRef.current) contentRef.current.style.cursor = 'grab';
    };

    const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
    const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => handleEnd();
    const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    return (
        <section className="py-12 md:py-16 relative bg-[#0a0a0a] border-b border-white/5 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D7BD9A]/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

            {/* --- HEADER --- */}
            <div className="container mx-auto px-6 mb-10 text-center md:text-left">
                <span className="text-[#D7BD9A] font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
                    The Verdict
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white italic">
                    Client <span className="text-white/40 not-italic">Stories</span>
                </h2>
            </div>

            {/* --- SLIDER WRAPPER --- */}
            <div className="w-full overflow-hidden" ref={containerRef}>
                <div
                    ref={contentRef}
                    className="flex gap-4 md:gap-6 cursor-grab touch-pan-y items-stretch" 
                    style={{ willChange: 'transform' }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            // Changed Width: Kept similar, but width affects how height distributes text
                            className="relative flex-shrink-0 w-[80vw] md:w-[400px] lg:w-[450px]"
                        >
                            {/* 
                               CHANGES HERE:
                               1. Reduced padding: p-6 md:p-8 (was md:p-12)
                               2. kept flex-col justify-between to align footer at bottom 
                            */}
                            <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] transition-all duration-300 hover:bg-white/[0.07] hover:border-amber-400/30 group/card flex flex-col justify-between select-none">

                                <div>
                                    {/* Top Row: Reduced margin-bottom (mb-4 was mb-8) */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 flex items-center justify-center border border-white/10 group-hover/card:border-amber-400/50 transition-colors">
                                            <Quote className="w-3 h-3 md:w-4 md:h-4 text-white/40 group-hover/card:text-amber-400 transition-colors" />
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content: Reduced text size & margin-bottom */}
                                    <p className="text-base md:text-xl text-white/90 font-serif leading-relaxed italic mb-6 pointer-events-none">
                                        "{item.text}"
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center gap-3 pointer-events-none border-t border-white/5 pt-4 mt-auto">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-amber-200 to-amber-600 p-[1px]">
                                        <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-white font-bold text-xs">
                                            {item.author.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                                            {item.author}
                                        </h4>
                                        <p className="text-white/40 text-[10px] font-mono">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;