"use client";
import Image from "next/image";
import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "120px 2rem", position: "relative", overflow: "hidden" }}
    >
      {/* Global CSS for the Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(-45deg, #0f172a, #1e1b4b, #2e1065, #0f172a);
          background-size: 400% 400%;
          animation: gradientMove 10s ease infinite;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
            gap: 80px !important;
          }
        }
      `}</style>

      {/* Main Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "80px", textAlign: "center" }}>
          <p className="section-tag" style={{ marginBottom: "16px", fontFamily: "var(--font-jetbrains), monospace" }}>About</p>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)", fontWeight: 800, color: "#e2e8f0", lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
            Passionate About <span className="grad-text">Building</span><br />
            Modern <span className="grad-text">Digital</span> Experiences
          </h2>
        </div>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "60px", alignItems: "start" }}>
          
          {/* LEFT: Profile Card with Moving BG */}
          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div 
              className="glass grad-border" 
              style={{ 
                borderRadius: "24px", 
                padding: "50px 40px", 
                textAlign: "center", 
                width: "100%",
                position: "relative",
                overflow: "hidden",
                background: "transparent", // Removed static background color
                border: "1px solid rgba(168, 85, 247, 0.2)"
              }}
            >
              {/* THE MOVING ANIMATION LAYER */}
              <div className="animated-bg" />



{/* Avatar Image Wrapper */}
<div
  style={{
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    margin: "0 auto 25px",
    overflow: "hidden",
    border: "4px solid #a855f7",
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
  }}
>
 <Image
  src="/profile.jpg"
  alt="profile"
  width={230}
  height={400}
  style={{
    objectFit: "cover",
    transform: "scale(1.2)" // 👈 zoom in
  }}
/>
</div>

              <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.6rem", fontFamily: "var(--font-syne), sans-serif" }}>
                Gokulkrishnan
              </h3>
              <p style={{ color: "#a855f7", fontSize: "0.85rem", marginBottom: "25px", fontFamily: "var(--font-jetbrains), monospace" }}>
                gokulkrishnanmanohar@gmail.com
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                {["🏢 Udumalpet", "🕐 IST", "✅ Open to work"].map((item, i) => (
                  <span key={i} style={{ fontSize: "0.75rem", color: "rgba(226, 232, 240, 0.8)", background: "rgba(255, 255, 255, 0.05)", padding: "6px 14px", borderRadius: "999px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-glow" style={{ marginTop: "30px", padding: "13px 35px", borderRadius: "10px", border: "1px solid rgba(168, 85, 247, 0.4)", color: "#e2e8f0", background: "rgba(168, 85, 247, 0.15)", fontWeight: 600, cursor: "pointer" }}>
              Let&apos;s Talk →
            </button>
          </div>

          {/* RIGHT: Description & Academic Journey */}
          <div className="reveal reveal-delay-2">
            <div style={{ marginBottom: "50px" }}>
              <p style={{ color: "rgba(148,163,184,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                I&apos;m Gokulkrishnan, a Computer Science student passionate about IT.
                I focus on <span className="grad-text-warm">Problem-Solving</span> and building <span className="grad-text-warm">Modern Web Application</span> using
                technologies like <span className="grad-text-warm">React</span>, <span className="grad-text-warm">Javascript</span>, <span className="grad-text-warm">Python</span>, and <span className="grad-text-warm">Css</span>.
              </p>
              <p style={{ color: "rgba(148,163,184,0.75)", lineHeight: 1.8 }}>
                My journey started with curiosity about how <span className="grad-text-warm">System Works</span>, which led me to
                continuously learn and improve my <span className="grad-text-warm">Development Skills</span> through <span className="grad-text-warm">Real World Projects</span>.
              </p>
            </div>

            {/* Academic Journey */}
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "30px", fontFamily: "var(--font-syne), sans-serif" }}>
                Academic <span style={{ color: "#a855f7" }}>Journey</span>
              </h3>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "7px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #a855f7, #3b82f6)" }} />
                
                {/* Academic Items */}
                {[
                  { title: "M.Sc Computer Science", color: "#a855f7", year: "2023 – 2025" },
                  { title: "B.Sc Computer Science", color: "#3b82f6", year: "2020 – 2023" }
                ].map((edu, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "25px", marginBottom: "35px", position: "relative" }}>
                    <div style={{ minWidth: "16px", height: "16px", borderRadius: "50%", background: edu.color, zIndex: 2, marginTop: "5px", boxShadow: `0 0 10px ${edu.color}` }} />
                    <div className="glass" style={{ padding: "20px", borderRadius: "18px", flex: 1, border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <h4 style={{ color: edu.color, marginBottom: "6px", fontSize: "1.1rem", fontWeight: 600 }}>{edu.title}</h4>
                      <p style={{ color: "rgba(148, 163, 184, 0.9)", fontSize: "0.95rem" }}>Nallamuthu Gounder Mahalingam College</p>
                      <span style={{ fontSize: "0.85rem", color: "#94a3b8", display: "block", marginTop: "8px", fontFamily: "var(--font-jetbrains), monospace" }}>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}