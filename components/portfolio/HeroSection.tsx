"use client";

import { useTypewriter } from '@/hooks/use-typewriter';
import { ParticleSystem } from './ParticleSystem';
import { ThreeScene } from './ThreeScene';

export function HeroSection() {
  const subtitle = useTypewriter([
    'Web Development',
    'Tech Enthusiastic',
    'Desktop Support',
    'IT Support',
    'Modern Web ApplicationS',
  ], 70, 2200);

  return (
    <section id="hero" className="anim-grad" style={{
      minHeight:'100vh', position:'relative', overflow:'hidden',
      display:'flex', alignItems:'center',
    }}>
      {/* Blobs */}
      <div className="blob" style={{ width:'600px', height:'600px', background:'#a855f7', top:'-100px', left:'-200px', animationDuration:'10s' }}></div>
      <div className="blob" style={{ width:'500px', height:'500px', background:'#3b82f6', bottom:'-50px', right:'10%', animationDuration:'13s', animationDelay:'-4s' }}></div>
      <div className="blob" style={{ width:'350px', height:'350px', background:'#06b6d4', top:'40%', right:'30%', animationDuration:'9s', animationDelay:'-6s' }}></div>

      {/* Particles */}
      <ParticleSystem />

      {/* Grid overlay */}
      <div style={{
        position:'absolute', inset:0, zIndex:0, opacity:0.03,
        backgroundImage:'linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)',
        backgroundSize:'60px 60px',
      }}></div>

      {/* 3D Canvas */}
      <ThreeScene />

      {/* Content */}
      <div style={{ position:'relative', zIndex:2, maxWidth:'1200px', margin:'0 auto', padding:'0 2rem', paddingTop:'80px', width:'100%' }}>
        <div style={{ maxWidth:'620px' }}>
          {/* Tag */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            background:'rgba(168,85,247,0.1)', border:'1px solid rgba(168,85,247,0.25)',
            borderRadius:'999px', padding:'6px 16px', marginBottom:'32px',
            opacity:0, animation:'fadeSlideUp 0.6s ease 0.3s forwards',
          }}>
            <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#a855f7', boxShadow:'0 0 8px #a855f7', animation:'blink 1.5s ease infinite' }}></div>
            <span style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.72rem', color:'#c084fc', letterSpacing:'0.12em' }}>AVAILABLE FOR WORK</span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily:'var(--font-syne), Syne, sans-serif', fontWeight:800, lineHeight:1.05, marginBottom:'18px',
            opacity:0, animation:'fadeSlideUp 0.7s ease 0.5s forwards',
          }}>
            <div style={{ 
  fontSize: 'clamp(2rem,5vw,3.5rem)', 
  whiteSpace: 'nowrap' 
}}>
  <span style={{ color: '#e2e8f0' }}>GOKUL</span>
  <span className="grad-text">KRISHNAN</span>
</div>
         
            
          </h1>

          {/* Subtitle */}
          <div style={{
            height:'48px', marginBottom:'28px', display:'flex', alignItems:'center',
            opacity:0, animation:'fadeSlideUp 0.7s ease 0.7s forwards',
          }}>
            <p style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'clamp(1rem,2.5vw,1.35rem)', color:'rgba(148,163,184,0.9)', fontWeight:400 }}>
              <span style={{ color:'#a855f7' }}>{'> '}</span>
              <span className="typewriter-cursor">{subtitle}</span>
            </p>
          </div>

          {/* Bio */}
          <p style={{
            fontSize:'1.05rem', lineHeight:1.75, color:'rgba(244, 246, 249, 0.8)',
            maxWidth:'500px', marginBottom:'40px', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif',
            opacity:0, animation:'fadeSlideUp 0.7s ease 0.9s forwards',
          }}>
            I'm <span className="grad-text">GokulKrishnan</span> a Computer Science student passionate about IT. I apply strong <span className="grad-text">Problem-Solving</span> and communication skills to <span className="grad-text">Real-World Challenges</span>. I continuously focus on learning and development while building <span className="grad-text">Modern Web Application</span>.
          </p>

         {/* CTAs */}
<div style={{
  display:'flex', gap:'16px', flexWrap:'wrap', marginBottom:'48px',
  opacity:0, animation:'fadeSlideUp 0.7s ease 1.1s forwards',
}}>
  {/* View Projects button */}
  <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
    className="btn-glow"
    style={{
      padding:'14px 32px', borderRadius:'12px', border:'none',
      background:'linear-gradient(135deg, #a855f7, #3b82f6)',
      color:'#fff', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif', fontWeight:600, fontSize:'0.95rem',
      letterSpacing:'0.02em', cursor:'pointer',
    }}>
    View Projects ↗
  </button>

 

  {/* Resume button — only this */}
  <a 
    href="/resume.pdf"
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-glow"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 24px',
      borderRadius: '12px',
      textDecoration: 'none',
      color: '#e2e8f0',
      fontWeight: 600,
      fontSize: '0.95rem',
      background: 'rgba(168,85,247,0.1)',
      cursor: 'pointer'
    }}
  >
    Resume
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </a>
</div>

          {/* Social */}
          <div style={{
            display:'flex', gap:'16px', alignItems:'center',
            opacity:0, animation:'fadeSlideUp 0.7s ease 1.3s forwards',
          }}>
            {[
              { label:'GitHub', icon:'⌥', href:'https://github.com/GOKUL-sketch-coder' },
              { label:'LinkedIn', icon:'in', href:'https://www.linkedin.com/in/gokulkrishnanbsccs/', style:{fontFamily:'var(--font-syne), Syne, sans-serif',fontWeight:800,fontSize:'0.85rem'} },
              
            ].map(s => (
              <a key={s.label} href={s.href}
                className="btn-glow"
                style={{
                  width:'42px', height:'42px', borderRadius:'10px', display:'flex',
                  alignItems:'center', justifyContent:'center', textDecoration:'none',
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                  color:'rgba(148,163,184,0.8)', fontSize:'1rem', cursor:'none',
                  ...s.style
                }}
                title={s.label}>{s.icon}
              </a>
            ))}
            <div style={{ width:'1px', height:'28px', background:'rgba(255,255,255,0.1)' }}></div>
            <span style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.72rem', color:'rgba(100,116,139,0.7)', letterSpacing:'0.1em' }}>FOLLOW ME</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:'40px', left:'50%', transform:'translateX(-50%)',
        zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
        opacity:0, animation:'fadeSlideUp 0.7s ease 1.8s forwards',
      }}>
        <span style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.65rem', color:'rgba(100,116,139,0.6)', letterSpacing:'0.15em' }}>SCROLL</span>
        <div style={{ width:'1px', height:'40px', background:'linear-gradient(180deg, rgba(168,85,247,0.6), transparent)', animation:'scrollPulse 2s ease infinite' }}></div>
      </div>
    </section>
  );
}
