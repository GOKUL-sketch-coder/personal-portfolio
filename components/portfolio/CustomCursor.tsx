"use client";

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0, dotX = 0, dotY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = dotX + 'px';
        dotRef.current.style.top = dotY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);

    const animRing = () => {
      rafId = requestAnimationFrame(animRing);
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
    };
    animRing();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={dotRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999, mixBlendMode: 'difference' }}>
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor-ring" id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
