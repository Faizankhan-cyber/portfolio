import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onContactClick }) => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [commandPromptReady, setCommandPromptReady] = useState(false);
  const [interactiveHistory, setInteractiveHistory] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState('');

  // Progressive terminal sequence
  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTerminalLines(PERSONAL_INFO.terminalBootSequence.map((item) => item.text));
      setCommandPromptReady(true);
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];
    PERSONAL_INFO.terminalBootSequence.forEach((item, index) => {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, item.text]);
        if (index === PERSONAL_INFO.terminalBootSequence.length - 1) {
          setCommandPromptReady(true);
        }
      }, item.delay);
      timeouts.push(timer);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    if (cmd === 'help') {
      response = 'commands: status, projects, certs, stack, contact, clear, reboot';
    } else if (cmd === 'status') {
      response = 'SYSTEM: ONLINE | DEFENSE: ACTIVE | ENV: PRODUCTION-HARDENED';
    } else if (cmd === 'projects') {
      response = 'found: [Azure Enterprise Infra, ThreatLens, BountyVault, Python Port Scanner]';
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'certs') {
      response = 'credentials: Cisco Cybersecurity, TryHackMe Pre-Security, Deloitte Sim, Abstream Cloud & Linux';
      const el = document.getElementById('certifications');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'stack') {
      response = 'stack: Azure, Linux, Python, Bash, TCP/IP, NSGs, IAM';
      const el = document.getElementById('stack');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'contact') {
      response = 'dispatching to contact matrix...';
      if (onContactClick) onContactClick();
      else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cmd === 'clear') {
      setInteractiveHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'reboot') {
      setInteractiveHistory([]);
      setTerminalLines([]);
      setCommandPromptReady(false);
      PERSONAL_INFO.terminalBootSequence.forEach((item, index) => {
        setTimeout(() => {
          setTerminalLines((prev) => [...prev, item.text]);
          if (index === PERSONAL_INFO.terminalBootSequence.length - 1) {
            setCommandPromptReady(true);
          }
        }, item.delay);
      });
      setInputVal('');
      return;
    } else {
      response = `bash: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setInteractiveHistory((prev) => [...prev, `root@faizan:~# ${inputVal}`, response]);
    setInputVal('');
  };

  const handleInitContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleViewResume = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenResume) {
      onOpenResume();
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid-layout">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          {/* Status Indicator */}
          <div className="system-status-pill">
            <span className="status-indicator-dot" />
            <span>{PERSONAL_INFO.systemStatus}</span>
          </div>

          {/* Main Heading */}
          <h1>{PERSONAL_INFO.name}</h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">{PERSONAL_INFO.role}</h2>

          {/* Three Technical Tags */}
          <div className="technical-tags" aria-label="Technical focus tags">
            {PERSONAL_INFO.technicalTags.map((tag) => (
              <span key={tag} className="tag-badge">
                <span className="bracket">[</span>
                <span>{tag}</span>
                <span className="bracket">]</span>
              </span>
            ))}
          </div>

          {/* Short Introduction */}
          <p className="hero-bio">
            &ldquo;Building secure cloud systems through hands-on projects and practical labs.&rdquo;
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="hero-ctas">
            <button
              type="button"
              className="btn-terminal"
              onClick={handleInitContact}
              aria-label="Initialize contact"
            >
              <i className="fa-solid fa-terminal" />
              <span>init_contact()</span>
            </button>

            <button
              type="button"
              className="btn-terminal-outline"
              onClick={handleViewResume}
              aria-label="View security resume document"
            >
              <i className="fa-solid fa-file-code" />
              <span>view_resume.pdf</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: REALISTIC TERMINAL WINDOW */}
        <div className="hero-terminal-wrapper">
          <div className="terminal-window">
            {/* Title Bar with 3 Window Controls */}
            <div className="terminal-titlebar">
              <div className="window-controls">
                <span className="control-dot close" title="Close" />
                <span className="control-dot minimize" title="Minimize" />
                <span className="control-dot expand" title="Expand" />
              </div>

              <span className="terminal-title">faizan@cyber-station:~ (bash)</span>

              <span className="terminal-chip">ARM64_AZURE</span>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body" tabIndex={0} aria-label="Simulated system boot terminal">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="terminal-line output">
                  <span className="prompt-symbol">&gt;</span>
                  <span>{line}</span>
                </div>
              ))}

              {/* Interactive history */}
              {interactiveHistory.map((line, idx) => (
                <div
                  key={`hist-${idx}`}
                  className={`terminal-line ${line.startsWith('root@faizan') ? 'command' : 'output'}`}
                >
                  {line.startsWith('root@faizan') ? (
                    <span>{line}</span>
                  ) : (
                    <>
                      <span className="prompt-symbol">&gt;</span>
                      <span style={{ color: 'var(--primary-light)' }}>{line}</span>
                    </>
                  )}
                </div>
              ))}

              {/* Active command line with blinking cursor */}
              {commandPromptReady && (
                <form onSubmit={handleTerminalSubmit} style={{ width: '100%' }}>
                  <div className="terminal-line active-prompt">
                    <span style={{ color: 'var(--primary)' }}>root@faizan:~#</span>
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="type 'help' or explore..."
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-bright)',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        flex: 1,
                        caretColor: 'var(--primary)'
                      }}
                      aria-label="Terminal command input"
                    />
                    <span className="cursor-blink" />
                  </div>
                </form>
              )}

              <div className="terminal-interactive-hint">
                <span>STATUS: SECURE_CHANNEL_READY</span>
                <span>ENC: AES-256-GCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
