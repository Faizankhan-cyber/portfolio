import React, { useState, useEffect } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { NetworkCanvas } from './components/NetworkCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    console.log(
      '%c[PORTFOLIO] Faizan Khan Khaleel // BCA Cloud Architecture & Cybersecurity',
      'color:#00F5A0;font-family:monospace;font-size:13px;font-weight:bold;'
    );
    console.log(
      '%c[INSTITUTION] SSMRV College, Bengaluru // Independent Cloud Labs',
      'color:#8FA397;font-family:monospace;font-size:11px;'
    );
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Background Cyber Grid & Subtle Glow */}
      <BackgroundGlow />
      <NetworkCanvas />

      {/* Slim Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />
        <Dashboard />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />
      <BackToTop />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
