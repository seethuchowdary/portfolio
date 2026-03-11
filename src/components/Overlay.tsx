'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Slightly shorter than the canvas scroll (500%)
        scrub: 1, // Smooth scrub
      }
    });

    // Ensure elements start invisible
    gsap.set([text2Ref.current, text3Ref.current], { opacity: 0, y: 100 });
    gsap.set(text1Ref.current, { opacity: 1, y: 0 });

    // Section 1 Fade Out
    tl.to(text1Ref.current, { opacity: 0, y: -100, duration: 1 })
      
      // Section 2 Fade In then Out
      .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(text2Ref.current, { opacity: 0, y: -100, duration: 1 }, "+=0.5") // hold slightly
      
      // Section 3 Fade In
      .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(text3Ref.current, { opacity: 0, y: -100, duration: 1 }, "+=0.5"); // hold before end

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Section 1 */}
        <div 
          ref={text1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10"
        >
          <div className="text-center bg-black/30 p-8 rounded-3xl backdrop-blur-md border border-white/10">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-white">Chintanippu Seethu</h1>
            <p className="text-xl md:text-3xl text-gray-300 font-medium">Engineering Student & Developer.</p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-sm tracking-widest uppercase text-white font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Section 2 */}
        <div 
          ref={text2Ref}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24 z-10 opacity-0"
        >
          <div className="text-left max-w-2xl bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">I build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">intelligent systems.</span></h2>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">Focusing on Python development, IoT systems, and Cybersecurity labs to create robust and secure applications.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div 
          ref={text3Ref}
          className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24 z-10 opacity-0"
        >
          <div className="text-right max-w-2xl bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">Bridging <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">hardware & software.</span></h2>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">Skilled in building network applications, implementing sensor-based embedded systems, and applying ethical hacking techniques.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
