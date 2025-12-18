import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // --- HANDLERS ---

  // 1. Toggle Play/Pause when clicking the video surface
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 2. Toggle Mute/Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling play status
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // 3. "Start Experience" - The Big Center Button
  // Actions: Unmutes video, Ensures it plays, Hides the button
  const handleStartInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);

      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-4 md:py-4 w-full flex justify-center bg-[#0a0a0a]">

      {/* Container */}
      <div className="w-[92%] md:w-[96%] relative">

        {/* --- FLOATING HEADER --- */}
        <div className="absolute top-0 left-0 z-20 p-6 md:p-12 w-full flex justify-between items-start pointer-events-none">
          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#D7BD9A] tracking-[0.3em] uppercase mb-2">
              The Process
            </span>
            <h2 className="text-white font-serif italic text-3xl md:text-5xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Artistry in <br /> Motion
            </h2>
          </div>

          {/* Live Badge (Desktop) */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">
              Live Session
            </span>
          </div>
        </div>

        {/* --- VIDEO CONTAINER --- */}
        <div
          className="relative group w-full h-[60vh] md:h-[85vh] rounded-[2.5rem] md:rounded-[5rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 cursor-pointer"
          onClick={togglePlay}
        >

          {/* 1. VIDEO SOURCE */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[2s] hover:scale-105"
            src="/beauty-video.mp4"
          />

          {/* 2. TEXTURE OVERLAYS */}
          {/* Noise/Grain */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
          </div>
          {/* Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 opacity-60 pointer-events-none"></div>

          {/* 3. BIG CENTER BUTTON (Visible when Paused OR Muted initially) */}
          <div
            className={`absolute inset-0 flex items-center justify-center z-30 transition-all duration-500 ease-in-out
              ${isPlaying && !isMuted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
            `}
          >
            <button
              onClick={(e) => { e.stopPropagation(); handleStartInteraction(); }}
              className="relative group/btn flex items-center justify-center w-32 h-32 md:w-48 md:h-48"
            >
              {/* Spinning Text Ring */}
              <div className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="fill-white/90 text-[10px] uppercase font-bold tracking-widest">
                    <textPath href="#circlePath" startOffset="0%">
                      • Play With Sound • Beauty Unfiltered •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Play Icon Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-[#D7BD9A] group-hover/btn:border-[#D7BD9A] group-hover/btn:shadow-[0_0_30px_rgba(215,189,154,0.4)]">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white group-hover/btn:text-black fill-current ml-1" />
              </div>
            </button>
          </div>

          {/* 4. HOVER PAUSE INDICATOR (Only visible when playing) */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <Pause className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
          )}

          {/* 5. BOTTOM CONTROLS */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">

            {/* Dynamic Caption */}
            <p className="text-white/80 font-light text-sm md:text-lg max-w-md leading-relaxed backdrop-blur-sm md:backdrop-blur-none pointer-events-auto">
              {!isPlaying
                ? "Paused. Tap to resume."
                : "Experience the precision of our architectural cuts and the science behind our hydro-facials."}
            </p>

            {/* Controls */}
            <div className="flex items-center gap-4 pointer-events-auto">

              {/* Mute Toggle */}
              <button
                onClick={toggleMute}
                className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 group/mute"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted
                  ? <VolumeX className="w-5 h-5 group-hover/mute:scale-110 transition-transform" />
                  : <Volume2 className="w-5 h-5 group-hover/mute:scale-110 transition-transform" />
                }
              </button>

              {/* Gallery CTA */}
              <Link to="/gallery" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-medium bg-black/20 backdrop-blur-md">
                Explore Gallery <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Mobile CTA */}
              <Link to="/gallery" className="md:hidden text-[#D7BD9A] text-xs font-bold uppercase tracking-widest flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-sm">
                View Gallery <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;