import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
  onExploreProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid-layout">
        {/* LEFT COLUMN: IDENTIFIER, HEADLINE, INTRO, TAGS & ACTIONS */}
        <div className="hero-left">
          {/* Status Indicator */}
          <div className="system-status-pill">
            <span className="status-indicator-dot" />
            <span>CLOUD ARCHITECTURE &bull; CYBERSECURITY</span>
          </div>

          {/* Full Name */}
          <h1>{PERSONAL_INFO.name}</h1>

          {/* Headline */}
          <h2 className="hero-subtitle">{PERSONAL_INFO.headline}</h2>

          {/* Accurate Introduction */}
          <p className="hero-bio">{PERSONAL_INFO.introduction}</p>

          {/* Skill Tags */}
          <div className="technical-tags" aria-label="Core Technical Focus Tags">
            {PERSONAL_INFO.skillTags.map((tag) => (
              <span key={tag} className="tag-badge">
                <span className="bracket">[</span>
                <span>{tag}</span>
                <span className="bracket">]</span>
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="hero-ctas">
            <button
              type="button"
              className="btn-terminal"
              onClick={handleScrollToProjects}
              aria-label="Explore featured technical projects"
            >
              <i className="fa-solid fa-arrow-down" />
              <span>Explore Projects</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-outline"
              aria-label="Open Faizan's GitHub Profile"
            >
              <i className="fab fa-github" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-outline"
              aria-label="Open Faizan's LinkedIn Profile"
            >
              <i className="fab fa-linkedin" />
              <span>LinkedIn</span>
            </a>

            {onOpenResume && (
              <button
                type="button"
                className="btn-terminal-outline"
                onClick={onOpenResume}
                aria-label="Open resume preview modal"
              >
                <i className="fa-solid fa-file-code" />
                <span>Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: TERMINAL-STYLE CURRENT-FOCUS PANEL */}
        <div className="hero-terminal-wrapper">
          <div className="terminal-window" aria-label="Terminal-style current technical focus panel">
            {/* Title Bar */}
            <div className="terminal-titlebar">
              <div className="window-controls">
                <span className="control-dot close" title="Close" />
                <span className="control-dot minimize" title="Minimize" />
                <span className="control-dot expand" title="Expand" />
              </div>
              <span className="terminal-title">current_focus.sh &bull; SSMRV_LABS</span>
              <span className="terminal-chip">AZURE_UBUNTU</span>
            </div>

            {/* Terminal Panel Content */}
            <div className="terminal-body">
              <div className="terminal-line output">
                <span className="prompt-symbol">&gt;</span>
                <span style={{ color: 'var(--primary)' }}>system.inspect(active_engineer)</span>
              </div>

              <div className="terminal-line output">
                <span className="prompt-symbol">&gt;</span>
                <span>Name: <strong style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.name}</strong></span>
              </div>

              <div className="terminal-line output">
                <span className="prompt-symbol">&gt;</span>
                <span>Institution: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.college}</span>, Bengaluru</span>
              </div>

              <div className="terminal-line output">
                <span className="prompt-symbol">&gt;</span>
                <span>Program: BCA + Adv. Diploma in Cloud Architecture &amp; Cyber</span>
              </div>

              <div style={{ margin: '8px 0', borderTop: '1px dashed rgba(255, 255, 255, 0.08)' }} />

              <div className="terminal-line output">
                <span className="prompt-symbol">&gt;</span>
                <span style={{ color: 'var(--primary-light)', fontWeight: 600 }}>CURRENT TECHNICAL FOCUS:</span>
              </div>

              <div className="terminal-line output" style={{ paddingLeft: '16px' }}>
                <span>&bull; Target: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.target}</span></span>
              </div>

              <div className="terminal-line output" style={{ paddingLeft: '16px' }}>
                <span>&bull; Lab: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.labInProgress}</span></span>
              </div>

              <div className="terminal-line output" style={{ paddingLeft: '16px' }}>
                <span>&bull; Study: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.studyTrack}</span></span>
              </div>

              <div className="terminal-line output" style={{ paddingLeft: '16px' }}>
                <span>&bull; OS: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.operatingSystem}</span></span>
              </div>

              <div className="terminal-line active-prompt" style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <span style={{ color: 'var(--primary)' }}>faizan@ssmrv:~$</span>
                <span style={{ color: 'var(--text-bright)' }}>git status --porcelain</span>
                <span className="cursor-blink" />
              </div>

              <div className="terminal-interactive-hint">
                <span>IDENTITY: SSMRV_STUDENT</span>
                <span>SECURITY_POSTURE: DEFENSIVE_LEARNER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
