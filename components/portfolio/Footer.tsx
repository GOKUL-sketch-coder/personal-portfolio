"use client";

export function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.05)', padding:'48px 2rem', background:'rgba(3,7,18,0.9)' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px' }}>
        <div>
          <div style={{ fontFamily:'var(--font-syne), Syne, sans-serif', fontWeight:800, fontSize:'1.2rem', marginBottom:'6px' }}>
            <span className="grad-text">GokulKrishnan</span>
          </div>
          <p style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.72rem', color:'rgba(100,116,139,0.6)', letterSpacing:'0.08em' }}>gk955594@gmail.com</p>
        </div>
        <div style={{ display:'flex', gap:'24px', flexWrap:'wrap' }}>
          {['GitHub','LinkedIn',].map(s => (
            <a key={s} href="#" className="nav-link" style={{ textDecoration:'none', color:'rgba(100,116,139,0.7)', fontFamily:'var(--font-dm-sans), DM Sans, sans-serif', fontSize:'0.85rem', cursor:'none' }}>{s}</a>
          ))}
        </div>
        <p style={{ fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace', fontSize:'0.7rem', color:'rgba(100,116,139,0.5)', letterSpacing:'0.08em' }}>
          Built with ♥ &amp; Three.js
        </p>
      </div>
    </footer>
  );
}
