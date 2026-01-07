import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Star, Quote } from 'lucide-react';

// --- DATA ---
const testimonials = [
    {
        id: 1,
        text: "Lovely and welcoming service. Hadn’t had a haircut for a few years - lovely hair wash and styled beautifully. I never style my hair, so was nice to have the pamper! Thank you Naz!!",
        author: "Hannah Wilks",
        role: "Hair Styling Client",
        rating: 5
    },
    {
        id: 2,
        text: "I had a great experience today at the glow up! I had really uneven hair that was a mess, and they managed to sort it all out within an hour! Nikki is a great hairdresser, I would highly recommend! 😍",
        author: "Imene",
        role: "Hair Restyle Client",
        rating: 5
    },
    {
        id: 3,
        text: "i didn’t expect to have a curly haircut done this well from a local salon. She was super friendly and gave the best advice. The owner and other staff members were great too, definitely talented hairstylists! 100% coming back! Thanks guys ❤️",
        author: "Sara Bennis",
        role: "Curly Cut Client",
        rating: 5
    },
    {
        id: 4,
        text: "Called in on the day, spoke to the owner and she was super accommodating-booked me in for a gel removal and mani. She offered me a tea and we had a lovely chat. She paid so much attention to detail while being really gentle with my weak nails!",
        author: "Vesile T",
        role: "Gel Manicure Client",
        rating: 5
    },
    {
        id: 5,
        text: "Naz did an amazing job with my hair!! Very grateful and will definitely recommend. I also had my nails done by Sheetal she gave me a beautiful French Manicure.",
        author: "Barbara Stange",
        role: "Hair & Nail Client",
        rating: 5
    },
    {
        id: 6,
        text: "Lovely new salon and very welcoming team. My gel manicure is perfect and gorgeous nail art. I’ll be back soon.",
        author: "Charlotte Moulton",
        role: "Nail Art Client",
        rating: 5
    },
    {
        id: 7,
        text: "Very relaxing and professional, she styled my hair just the way I like it x",
        author: "Macy Ward",
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
            <div className="container mx-auto px-6 mb-32 text-center md:text-center">
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
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-[1.5rem] transition-all duration-300 hover:bg-white/[0.07] hover:border-[#D7BD9A]/30 group/card flex flex-col justify-between select-none">

                                <div>
                                    {/* Top Row */}
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex items-center justify-center border border-white/10 group-hover/card:border-[#D7BD9A]/50 transition-colors">
                                            <Quote className="w-3 h-3 text-white/40 group-hover/card:text-[#D7BD9A] transition-colors" />
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} className="w-2.5 h-2.5 text-[#D7BD9A] fill-[#D7BD9A]" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <p className="text-sm md:text-base text-white/90 font-serif leading-relaxed italic mb-4 pointer-events-none">
                                        "{item.text}"
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center gap-2 pointer-events-none border-t border-white/5 pt-3 mt-auto">
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-[#D7BD9A] to-[#D7BD9A] p-[1px]">
                                        <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-white font-bold text-xs">
                                            {item.author.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                                            {item.author}
                                        </h4>
                                        <p className="text-white/40 text-[9px] font-mono">
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