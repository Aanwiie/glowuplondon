import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, ArrowRight } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-12 md:py-24 w-full flex justify-center bg-[#0a0a0a]">
      <div className="w-[94%] relative">
        <div className="absolute top-0 left-0 z-20 p-8 md:p-16 w-full pointer-events-none">
          <span className="font-mono text-[10px] text-[#D7BD9A] tracking-[0.4em] uppercase mb-4 block">The Process</span>
          <h2 className="text-white font-serif italic text-4xl md:text-7xl leading-none">Artistry <br /> in Motion</h2>
        </div>

        <div className="relative group w-full h-[70vh] md:h-[90vh] rounded-[3rem] md:rounded-[6rem] overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef} autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            src="/beauty-video.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

          {/* PLAY/PAUSE UI */}
          <div className={`absolute inset-0 flex items-center justify-center z-30 transition-all duration-700 ${isPlaying && !isMuted ? 'opacity-0' : 'opacity-100'}`}>
            <button onClick={(e) => { e.stopPropagation(); videoRef.current?.play(); setIsPlaying(true); setIsMuted(false); if(videoRef.current) videoRef.current.muted=false; }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D7BD9A] flex items-center justify-center group/play transition-transform hover:scale-110">
              <Play className="w-8 h-8 text-black fill-current ml-1" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-md">
              <p className="text-white/90 font-serif italic text-xl md:text-2xl leading-snug">
                Experience the architectural precision of our cuts.
              </p>
              <div className="mt-6 flex gap-4">
                 <button onClick={toggleMute} className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <Link to="/gallery" className="px-8 py-4 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                  Gallery <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;