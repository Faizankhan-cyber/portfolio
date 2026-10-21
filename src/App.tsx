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
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    console.log(
      '%c[SYSTEM] root@FaizanKhan initialized successfully.',
      'color:#00F5A0;font-family:monospace;font-size:14px;font-weight:bold;'
    );
    console.log(
      '%c[TELEMETRY] Cloud Security & Infrastructure Portfolio // Bangalore',
      'color:#8FA397;font-family:monospace;font-size:12px;'
    );
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Dynamic Cyber Canvas & Background Glow */}
      <BackgroundGlow />
      <NetworkCanvas />

      {/* Slim Header Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={handleContactClick}
        />
        <Dashboard />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer and Controls */}
      <Footer />
      <BackToTop />

      {/* Interactive Terminal Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
