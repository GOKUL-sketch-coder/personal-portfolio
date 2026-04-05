"use client";

export function StatsBar() {
  const stats = [
    { value:'Create', },
    { value:'Automate', },
    { value:'Innovate', },
    
  ];
  return (
    <div style={{ background:'rgba(10,15,30,0.8)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)', padding:'28px 2rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'300px' }} className="stats-grid">
        {stats.map((s,i) => (
          <div key={i} className="reveal" style={{ textAlign:'center' }}>
            <div className="stat-number grad-text" style={{ fontSize:'clamp(0.8rem,2vw,1.8rem)', fontWeight:800 }}>{s.value}</div>
            <div style={{ fontFamily:'var(--font-dm-sans), DM Sans, sans-serif', fontSize:'0.8rem', color:'rgba(100,116,139,0.8)', marginTop:'4px', letterSpacing:'0.06em', textTransform:'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}