import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'stack', 'projects', 'certifications', 'journey', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#stack', label: 'Stack', id: 'stack' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#certifications', label: 'Certifications', id: 'certifications' },
    { href: '#journey', label: 'Journey', id: 'journey' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExecuteContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="navbar container" aria-label="Main Navigation">
        {/* Terminal Logo: root@FaizanKhan */}
        <a
          href="#home"
          className="terminal-logo"
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label="root@FaizanKhan Home"
        >
          <span className="logo-prompt">root@</span>
          <span className="logo-host">FaizanKhan</span>
          <span style={{ color: 'var(--primary)', marginLeft: '2px' }}>:~#</span>
        </a>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile version of Execute_Contact() button */}
          <li className="mobile-only-item" style={{ marginTop: '10px' }}>
            <button
              type="button"
              className="btn-execute-contact"
              onClick={handleExecuteContact}
              style={{ display: isMenuOpen ? 'inline-flex' : 'none', width: '100%', justifyContent: 'center' }}
            >
              <i className="fa-solid fa-terminal" />
              <span>Execute_Contact()</span>
            </button>
          </li>
        </ul>

        {/* Prominent Execute_Contact() button in desktop navbar */}
        <button
          type="button"
          className="btn-execute-contact"
          onClick={handleExecuteContact}
          aria-label="Execute Contact Command"
        >
          <i className="fa-solid fa-terminal" />
          <span>Execute_Contact()</span>
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </nav>
    </header>
  );
};
