"use client";

import { useEffect, useRef } from 'react';

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speed: number = 0;
      drift: number = 0;
      opacity: number = 0;
      maxOpacity: number = 0;
      color: string = '';
      life: number = 0;
      maxLife: number = 0;
      colors = ['168,85,247', '59,130,246', '6,182,212', '16,185,129'];

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + 10;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.4 + 0.1;
        this.drift = (Math.random() - 0.5) * 0.5;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.4 + 0.1;
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }

      update() {
        this.y -= this.speed;
        this.x += this.drift;
        this.life++;
        if (this.life < 50) this.opacity = (this.life / 50) * this.maxOpacity;
        else if (this.life > this.maxLife - 50) this.opacity = ((this.maxLife - this.life) / 50) * this.maxOpacity;
        else this.opacity = this.maxOpacity;
        if (this.life >= this.maxLife) this.reset();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${this.color},${this.opacity * 0.5})`;
      }
    }

    for (let i = 0; i < 60; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
    };
    animate();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }} />;
}
