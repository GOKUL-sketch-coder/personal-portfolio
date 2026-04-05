"use client";

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  LoadingScreen,
  CustomCursor,
  Navbar,
  HeroSection,
  StatsBar,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  Certificates,
  ContactSection,
  Footer,
} from '@/components/portfolio';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    // Trigger reveal on initial elements that are in view
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <div style={{ minHeight:'100vh' }}>
        <Navbar />
        <HeroSection />
        <StatsBar />
        <div className="section-divider"></div>
        <AboutSection />
        <div className="section-divider"></div>
        <SkillsSection />
        <div className="section-divider"></div>
        <ProjectsSection />
        <div className="section-divider"></div>
        <Certificates />
        <div className="section-divider"></div>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
