"use client";

import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const NAV_HEIGHT = 70; // Matches your div height

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero','about','skills','projects','certificates','contact'];
      // Fixed logic: reverse() creates a new array to avoid mutating state
      const currentSections = [...sections].reverse();
      for (const s of currentSections) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - (NAV_HEIGHT + 20)) { 
          setActive(s); 
          break; 
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About','Skills','Projects','Certificates','Contact'];

  // FIX: Manual scroll calculation to account for Navbar Height
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop - NAV_HEIGHT;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        transition:'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding:'0 2rem',
      }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', height:`${NAV_HEIGHT}px`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} style={{ background:'none', border:'none', cursor:'none' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <div className="grad-border" style={{ width:'36px', height:'36px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(168,85,247,0.1)' }}>
                <span style={{ fontFamily:'var(--font-syne)', fontWeight:800, fontSize:'1rem', background:'linear-gradient(135deg,#a855f7,#3b82f6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>GK</span>
              </div>
              <span style={{ fontFamily:'var(--font-syne)', fontWeight:700, fontSize:'1rem', color:'#e2e8f0', letterSpacing:'0.02em' }}>GokulKrishnan</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div style={{ display:'flex', alignItems:'center', gap:'2.5rem' }} className="hidden md:flex">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className={`nav-link ${active === l.toLowerCase() ? 'active' : ''}`}
                style={{ 
                    background:'none', border:'none', cursor:'none', 
                    color: active === l.toLowerCase() ? '#a855f7' : 'rgba(148,163,184,0.8)', 
                    letterSpacing:'0.02em', fontFamily:'var(--font-dm-sans)',
                    transition: 'color 0.3s ease'
                }}>
                {l}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
            <button onClick={() => scrollTo('contact')}
              className="btn-glow grad-border hidden md:block"
              style={{ padding:'9px 22px', borderRadius:'10px', border:'none', cursor:'none', color:'#e2e8f0', fontFamily:'var(--font-dm-sans)', fontWeight:500, fontSize:'0.875rem', background:'rgba(168,85,247,0.08)' }}>
              Hire Me
            </button>
            
            {/* Hamburger (visible on mobile via Tailwind utility) */}
            <button onClick={() => setMenuOpen(m => !m)}
              style={{ background:'none', border:'none', cursor:'none', padding:'8px' }} 
              className="block md:hidden">
              <div style={{ width:'22px', display:'flex', flexDirection:'column', gap:'5px' }}>
                <span style={{ display:'block', height:'2px', background:'#a855f7', borderRadius:'1px', transition:'0.3s', transform: menuOpen ? 'rotate(45deg) translateY(10px)' : '' }}></span>
                <span style={{ display:'block', height:'2px', background:'#a855f7', borderRadius:'1px', transition:'0.3s', opacity: menuOpen ? 0 : 1 }}></span>
                <span style={{ display:'block', height:'2px', background:'#a855f7', borderRadius:'1px', transition:'0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-10px)' : '' }}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position:'fixed', top: menuOpen ? '70px' : '-100%', left:0, right:0, zIndex:999,
        background:'rgba(3,7,18,0.95)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        padding:'24px 2rem', display:'flex', flexDirection:'column', gap:'20px',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none'
      }}>
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l.toLowerCase())}
            style={{ background:'none', border:'none', cursor:'none', color:'rgba(148,163,184,0.8)', fontFamily:'var(--font-dm-sans)', fontSize:'1rem', fontWeight:500, textAlign:'left', padding:'4px 0' }}>
            {l}
          </button>
        ))}
      </div>
    </>
  );
}