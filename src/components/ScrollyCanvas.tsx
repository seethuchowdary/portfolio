'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Overlay from '@/components/Overlay';

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 40;

  useEffect(() => {
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);
    
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Load Images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNumber}.png`;
      
      const onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      
      img.onload = onload;
      // Handle missing/broken images gracefully
      img.onerror = () => {
        console.warn(`Missing sequence image: ${frameNumber}`);
        onload();
      };
      loadedImages.push(img);
    }
    
    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initial Resize & Draw Helper
    const renderFrame = (index: number) => {
      if (!images[index] || !canvasRef.current) return;
      
      const img = images[index];
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      
      canvas.width = cw;
      canvas.height = ch;

      const iw = img.width;
      const ih = img.height;
      if (iw === 0 || ih === 0) return;

      const ratio = Math.max(cw / iw, ch / ih);
      const x = (cw - iw * ratio) / 2;
      const y = (ch - ih * ratio) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, x, y, iw * ratio, ih * ratio);
    };

    renderFrame(0);

    window.addEventListener('resize', () => renderFrame(Math.round(playhead.frame)));

    // GSAP Scroll Scrub Animation
    const playhead = { frame: 0 };
    
    gsap.to(playhead, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%", // 500vh
        scrub: 0.5, // smooth scrubbing 
      },
      onUpdate: () => renderFrame(Math.round(playhead.frame))
    });

  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Loading State Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
        </div>
      )}

      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      <Overlay />
    </div>
  );
}
