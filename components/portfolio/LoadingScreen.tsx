"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="loading" 
      className={hidden ? 'hidden' : ''}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: '#030712',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
        transition: 'opacity 0.8s ease, visibility 0.8s ease',
        opacity: hidden ? 0 : 1,
        visibility: hidden ? 'hidden' : 'visible',
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      <div style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '1.5rem', color: '#a855f7', letterSpacing: '0.1em' }}>GOKULKRISHNAN</div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill"></div>
      </div>
      <p style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace', fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', letterSpacing: '0.2em' }}>INITIALIZING</p>
    </div>
  );
}
