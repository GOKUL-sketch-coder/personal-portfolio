"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/data";

// 1. Decorative background elements
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: Math.random() * 1000 }}
        animate={{ 
          opacity: [0, 0.4, 0], 
          y: [null, Math.random() * -500],
          x: Math.random() * 100 - 50 
        }}
        transition={{ 
          duration: Math.random() * 10 + 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          position: "absolute",
          left: `${Math.random() * 100}%`,
          width: "2px",
          height: "20px",
          background: "linear-gradient(to bottom, transparent, #a855f7, transparent)",
        }}
      />
    ))}
  </div>
);

export function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a slight parallax effect for the background grid
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="skills"
      style={{
        padding: "120px 2rem",
        background: "#020203",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* 2. ENHANCED BACKGROUND LAYERS */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          y: backgroundY
        }}
      />
      
      {/* Grainy Noise Texture */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        opacity: 0.03, 
        pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3ExternalIcon%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <FloatingParticles />

      {/* SCAN LINE (Faster, higher frequency) */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "150px",
          background: "linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.1), transparent)",
          zIndex: 1
        }}
      />

      {/* Heading with Glitch Animation */}
      <div style={{ textAlign: "center", marginBottom: "100px", position: "relative", zIndex: 2 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ fontSize: "clamp(1.2rem,3vw,2.5rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
        >
          <p className="section-tag" style={{ marginBottom:'16px', fontFamily:'var(--font-jetbrains), JetBrains Mono, monospace' }}>Skills</p>
          Tech <span className="grad-text-warm">Arsenal</span>
        </motion.h2>
         <p style={{ marginTop:'16px', color:'rgba(100,116,139,0.8)', maxWidth:'500px', margin:'16px auto 0', lineHeight:1.7, fontFamily:'var(--font-dm-sans), DM Sans, sans-serif' }}>
            A curated collection of technologies and tools I use to build modern, scalable applications.
          </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}
      >
        {SKILLS.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                position: "relative",
                padding: "30px 20px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                cursor: "pointer"
              }}
            >
              {/* 3. DYNAMIC BORDER BEAM (Hover effect) */}
              <motion.div
                className="absolute inset-0 rounded-[16px]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  border: `2px solid ${skill.color}`,
                  boxShadow: `0 0 20px ${skill.color}44`,
                  zIndex: -1
                }}
              />

              {/* Icon Container with Floating animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                  filter: `drop-shadow(0 0 10px ${skill.color})`
                }}
              >
                <Icon size={40} color={skill.color} />
              </motion.div>

              <div style={{ textAlign: "center" }}>
                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                  {skill.name}
                </h3>
                <p style={{
                  marginTop: "8px",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "monospace"
                }}>
                  {skill.category}
                </p>
              </div>

              {/* Interactive Corner Dots */}
              <div style={{ position: "absolute", top: "10px", right: "10px", width: "4px", height: "4px", borderRadius: "50%", background: skill.color }} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}