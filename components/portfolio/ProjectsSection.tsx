"use client";

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  accentColor: string;
  emoji: string;
  stats: { stars: string; forks: string; users: string };
  category: string;

  live: string;     // ✅ add this
  github: string;
}

export function ProjectsSection() {
  const [modal, setModal] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ padding:'120px 2rem', position:'relative', overflow:'hidden' }}>
      <div className="blob" style={{ width:'500px', height:'500px', background:'#06b6d4', top:'-50px', left:'30%', opacity:0.07 }}></div>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div className="reveal" style={{ textAlign:'center', marginBottom:'80px' }}>
          <p className="section-tag" style={{ marginBottom:'16px', fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace' }}>Projects</p>
          <h2 style={{ fontSize:'clamp(1.2rem,3vw,2.5rem)', fontWeight:800, color:'#e2e8f0', lineHeight:1.1, fontFamily:'var(--font-syne), Syne, sans-serif' }}>
            Projects <span className="grad-text-warm">Vault</span>
          </h2>
          <p style={{ marginTop:'16px', color:'rgba(100,116,139,0.8)', maxWidth:'500px', margin:'16px auto 0', lineHeight:1.7, fontFamily:'var(--font-dm-sans), DM Sans, sans-serif' }}>
            A showcase of hands-on projects reflecting my learning, problem-solving ability, and passion for development.”
          </p>
        </div>

        <div className="projects-grid" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'28px' }}>
          {PROJECTS.map((p, i) => (
            <div key={p.title}
              className={`project-card glass reveal reveal-delay-${(i%2)+1}`}
              onClick={() => setModal(p)}
              style={{
                borderRadius:'24px', overflow:'hidden', cursor:'none', position:'relative',
              }}>
              {/* Header visual */}
              <div style={{
                height:'200px', position:'relative', overflow:'hidden',
                background:`linear-gradient(135deg, ${p.accentColor}22, rgba(10,15,30,0.9))`,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <div style={{ fontSize:'5rem' }} className="proj-img">{p.emoji}</div>
                {/* Overlay */}
                <div className="proj-overlay" style={{
                  position:'absolute', inset:0, background:`linear-gradient(135deg, ${p.accentColor}33, rgba(3,7,18,0.9))`,
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'16px'
                }}>
                 <a href={p.live} target="_blank" rel="noopener noreferrer">
  <button
    style={{
      padding:'10px 20px',
      borderRadius:'8px',
      background:p.accentColor,
      border:'none',
      color:'#fff',
      fontWeight:600,
      fontSize:'0.85rem'
    }}
  >
    Live Demo ↗
  </button>
</a>

<a href={p.github} target="_blank" rel="noopener noreferrer">
  <button
    style={{
      padding:'10px 20px',
      borderRadius:'8px',
      background:'rgba(255,255,255,0.15)',
      border:'1px solid rgba(255,255,255,0.2)',
      color:'#fff',
      fontWeight:600,
      fontSize:'0.85rem'
    }}
  >
    GitHub ⌥
  </button>
</a>
<a href="#" target="_blank" rel="noopener noreferrer">
  
</a>
                </div>
                {/* Category badge */}
                <div style={{ position:'absolute', top:'16px', left:'16px', padding:'4px 12px', borderRadius:'999px', background:'rgba(0,0,0,0.5)', backdropFilter:'blur(10px)', border:`1px solid ${p.accentColor}44` }}>
                  <span style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.65rem', color:p.accentColor, letterSpacing:'0.1em' }}>{p.category}</span>
                </div>
              </div>

              <div style={{ padding:'28px' }}>
                <h3 style={{ fontFamily:'var(--font-syne), Syne, sans-serif', fontSize:'1.3rem', fontWeight:700, color:'#e2e8f0', marginBottom:'10px' }}>{p.title}</h3>
                <p style={{ fontSize:'0.88rem', lineHeight:1.7, color:'rgba(148,163,184,0.75)', marginBottom:'20px', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif' }}>{p.description}</p>

                

                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {p.tech.map(t => <span key={t} className="tech-badge" style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace' }}>{t}</span>)}
                </div>
              </div>
              {/* Glow border on hover */}
              <div style={{ position:'absolute', inset:0, borderRadius:'24px', border:`1px solid ${p.accentColor}00`, transition:'border-color 0.35s ease', pointerEvents:'none' }}
                className="project-glow-border"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(null)} style={{
          position:'fixed', inset:0, zIndex:9000, background:'rgba(0,0,0,0.85)',
          backdropFilter:'blur(20px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px', cursor:'none',
        }}>
          <div onClick={e => e.stopPropagation()} className="glass" style={{
            maxWidth:'560px', width:'100%', borderRadius:'24px', overflow:'hidden',
            border:'1px solid rgba(255,255,255,0.1)',
          }}>
            <div style={{ height:'180px', background:`linear-gradient(135deg, ${modal.accentColor}33, rgba(10,15,30,0.9))`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'4rem', position:'relative' }}>
              {modal.emoji}
              <button onClick={() => setModal(null)} style={{ position:'absolute', top:'16px', right:'16px', background:'rgba(255,255,255,0.1)', border:'none', borderRadius:'8px', padding:'8px 14px', color:'#e2e8f0', cursor:'none', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif', fontSize:'0.85rem' }}>✕ Close</button>
            </div>
            <div style={{ padding:'32px' }}>
              <div style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.65rem', color:modal.accentColor, marginBottom:'8px', letterSpacing:'0.1em', textTransform:'uppercase' }}>{modal.category}</div>
              <h3 style={{ fontFamily:'var(--font-syne), Syne, sans-serif', fontSize:'1.6rem', fontWeight:800, color:'#e2e8f0', marginBottom:'12px' }}>{modal.title}</h3>
              <p style={{ fontSize:'0.95rem', lineHeight:1.75, color:'rgba(148,163,184,0.85)', marginBottom:'24px', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif' }}>{modal.description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'28px' }}>
                {modal.tech.map(t => <span key={t} className="tech-badge" style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace' }}>{t}</span>)}
              </div>
              <div style={{ display:'flex', gap:'12px' }}>
                <a href={modal.live} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
  <button
    className="btn-glow"
    style={{
      width:'100%',
      padding:'12px',
      borderRadius:'10px',
      border:'none',
      background:modal.accentColor,
      color:'#fff',
      fontWeight:600
    }}
  >
    Live Demo ↗
  </button>
</a>

<a href={modal.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
  <button
    className="btn-glow glass"
    style={{
      width:'100%',
      padding:'12px',
      borderRadius:'10px',
      color:'#e2e8f0',
      fontWeight:600
    }}
  >
    View Source
  </button>
</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
