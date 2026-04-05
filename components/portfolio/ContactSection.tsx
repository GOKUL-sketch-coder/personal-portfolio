"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (form.message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  // === Parallax floating effect ===
  useEffect(() => {
    const container = document.getElementById("contact");
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      container?.style.setProperty("--xShift", `${x}px`);
      container?.style.setProperty("--yShift", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "120px 2rem",
        position: "relative",
        overflow: "hidden",
        transform: "translate(var(--xShift,0), var(--yShift,0))",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* === Animated Gradient Blobs === */}
      <div className="animated-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "80px" }}>
          <p className="section-tag" style={{ marginBottom: "16px", fontFamily: "var(--font-jetbrains)" }}>
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(1.2rem,3vw,2.5rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              lineHeight: 1.1,
              fontFamily: "var(--font-syne)",
            }}
          >
            Let&apos;s <span className="grad-text">Build</span> Something
          </h2>
          <p
            style={{
              marginTop: "16px",
              color: "rgba(100,116,139,0.8)",
              maxWidth: "460px",
              margin: "16px auto 0",
              lineHeight: 1.7,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Open to work and eager to contribute—let’s get in touch. My inbox is always open.
          </p>
        </div>

        {/* === Grid Section === */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Info */}
          <div className="reveal">
            <div style={{ marginBottom: "40px" }}>
              {[
                { icon: "📧", label: "Email", value: "gk955594@gmail.com", color: "#a855f7" },
                { icon: "💼", label: "LinkedIn", value: "[linkedin.com](https://www.linkedin.com/in/gokulkrishnanbsccs/)", color: "#3b82f6" },
                { icon: "🐙", label: "GitHub", value: "[github.com](https://github.com/GOKUL-sketch-coder)", color: "#06b6d4" },
                { icon: "📍", label: "Location", value: "Udumalpet", color: "#10b981" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass glass-float"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    borderRadius: "14px",
                    padding: "18px 22px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "0.7rem",
                        color: "rgba(100,116,139,0.7)",
                        marginBottom: "3px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.9rem",
                        color: "#e2e8f0",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         {/* === Form === */}
          <div className="reveal reveal-delay-2 glass-float">
            {submitted ? (
              <div
                className="glass"
                style={{
                  borderRadius: "24px",
                  padding: "60px 40px",
                  textAlign: "center",
                  border: "1px solid rgba(16,185,129,0.3)",
                  animation: "popIn 0.8s ease",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚀</div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#10b981",
                    marginBottom: "12px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    color: "rgba(148,163,184,0.75)",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass glowing-form" style={{ borderRadius: "24px", padding: "40px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "8px", fontFamily: "var(--font-jetbrains)" }}>NAME</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                  {errors.name && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "4px" }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "8px", fontFamily: "var(--font-jetbrains)" }}>EMAIL</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                  {errors.email && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "4px" }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "8px", fontFamily: "var(--font-jetbrains)" }}>SUBJECT</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                  {errors.subject && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "4px" }}>{errors.subject}</p>}
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", marginBottom: "8px", fontFamily: "var(--font-jetbrains)" }}>MESSAGE</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none" }}
                  />
                  {errors.message && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "4px" }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn-glow"
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "1rem"
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}