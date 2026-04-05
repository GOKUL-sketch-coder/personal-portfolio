"use client";

import { useState } from "react";
import { CERTIFICATES } from '@/lib/data';

export function Certificates() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="certificates"
      style={{
        padding: '120px 2rem',
        background: 'rgba(5,10,20,0.7)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glow Background */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent)',
        top: '-150px',
        right: '-150px',
        filter: 'blur(60px)'
      }}></div>

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* ✅ FIXED HEADING */}
        <div style={{ marginBottom: '60px' }}>
          <p style={{
            marginBottom: '16px',
            fontFamily: 'var(--font-jetbrains), monospace',
            color: '#a855f7',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            Certificates
          </p>

          <h2 style={{
            fontSize: 'clamp(1.2rem,3vw,2.5rem)',
            fontWeight: 800,
            color: '#e2e8f0'
          }}>
           Credential <span className="grad-text">Vault</span> 
          </h2>
           <p style={{ marginTop:'16px', color:'rgba(100,116,139,0.8)', maxWidth:'500px', margin:'16px auto 0', lineHeight:1.7, fontFamily:'var(--font-dm-sans), DM Sans, sans-serif' }}>
            A collection of certifications that validate my skills, learning, and continuous growth.
          </p>
        </div>

        {/* Slider */}
        <div style={{ position: 'relative', height: '260px' }}>
          {CERTIFICATES.map((cert, i) => {
            const isActive = i === index;

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: `
                    translateX(-50%) 
                    scale(${isActive ? 1 : 0.85}) 
                    translateY(${isActive ? '0px' : '30px'})
                  `,
                  opacity: isActive ? 1 : 0,
                  transition: 'all 0.6s ease',
                  width: '100%',
                  maxWidth: '600px',
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                <div
                  style={{
                    padding: '30px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: isActive
                      ? `0 0 25px ${cert.color}, 0 0 60px rgba(168,85,247,0.2)`
                      : 'none',
                    transition: 'all 0.5s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Glow overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at top left, ${cert.color}33, transparent 60%)`,
                    pointerEvents: 'none'
                  }}></div>

                  {/* ✅ CERTIFICATE CONTENT */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#e2e8f0',
                  }}>
                    🎓 {cert.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    marginTop: '4px',
                    color: cert.color
                  }}>
                    {cert.issuer}
                  </p>

                  <span style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {cert.date}
                  </span>

                  <p style={{
                    marginTop: '16px',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'rgba(148,163,184,0.85)'
                  }}>
                    {cert.desc}
                  </p>

                  {/* 🔥 Optional button */}
                  <a href="#" style={{
                    display: 'inline-block',
                    marginTop: '12px',
                    fontSize: '0.8rem',
                    color: cert.color
                  }}>
                    Verified ↗
                  </a>

                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <button onClick={prev} style={btnStyle}>← Prev</button>
          <button onClick={next} style={btnStyle}>Next →</button>
        </div>

        {/* Dots */}
        <div style={{
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }}>
          {CERTIFICATES.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? '14px' : '8px',
                height: '8px',
                borderRadius: '20px',
                cursor: 'pointer',
                background: i === index ? '#a855f7' : 'rgba(148,163,184,0.4)',
                transition: '0.3s'
              }}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}

const btnStyle = {
  padding: '8px 16px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.05)',
  color: '#e2e8f0',
  cursor: 'pointer',
  transition: '0.3s'
};