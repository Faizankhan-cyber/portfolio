import React, { useEffect, useRef, useState } from 'react';
import { CREDENTIALS, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
  onExploreProjects?: () => void;
}

interface TerminalEntry {
  id: number;
  command: string;
  lines: Array<{ text: string; tone?: 'accent' | 'bright' | 'muted' | 'warn' }>;
}

const QUICK_COMMANDS = ['help', 'whoami', 'azure', 'certs', 'projects', 'contact', 'clear'] as const;

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyCursor, setHistoryCursor] = useState<number>(-1);
  const [showOverview, setShowOverview] = useState(true);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextIdRef = useRef(1);

  useEffect(() => {
    if (terminalBodyRef.current && entries.length > 0) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [entries]);

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

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const normalized = trimmed.toLowerCase();
    setCommandHistory((prev) => [trimmed, ...prev.slice(0, 19)]);
    setHistoryCursor(-1);
    setInput('');

    if (normalized === 'clear' || normalized === 'cls') {
      setEntries([]);
      setShowOverview(false);
      return;
    }

    if (normalized === 'reset') {
      setEntries([]);
      setShowOverview(true);
      return;
    }

    let lines: TerminalEntry['lines'] = [];

    if (normalized === 'help' || normalized === '?') {
      lines = [
        { text: 'Available commands:', tone: 'accent' },
        { text: '  whoami      -> Profile, college & specialization', tone: 'bright' },
        { text: '  azure       -> Togetherly Azure Platform V1-V4 roadmap', tone: 'bright' },
        { text: '  certs       -> Verified Microsoft certification & courses', tone: 'bright' },
        { text: '  projects    -> List all 6 Azure & Hackathon projects', tone: 'bright' },
        { text: '  contact     -> Direct email, GitHub & LinkedIn links', tone: 'bright' },
        { text: '  resume      -> Open printable resume preview modal', tone: 'bright' },
        { text: '  clear/reset -> Clear output or restore focus panel', tone: 'muted' }
      ];
    } else if (normalized === 'whoami') {
      lines = [
        { text: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`, tone: 'bright' },
        { text: `${PERSONAL_INFO.degree} | ${PERSONAL_INFO.college}, Bengaluru`, tone: 'muted' },
        { text: `Focus: ${PERSONAL_INFO.currentFocus.target}`, tone: 'accent' },
        { text: `Track: ${PERSONAL_INFO.currentFocus.studyTrack}`, tone: 'muted' }
      ];
    } else if (normalized === 'azure' || normalized === 'azure --roadmap') {
      const flagship = PROJECTS.find((p) => p.id === 'togetherly-azure-platform');
      lines = [
        { text: 'Togetherly Azure Platform (Flagship Project — v2.0.0 released):', tone: 'accent' },
        ...(flagship?.versions || []).map((v) => ({
          text: `  [${v.status === 'Completed' ? 'DONE' : 'PLAN'}] ${v.version} (${v.certTrack}) — ${v.title}`,
          tone: (v.status === 'Completed' ? 'bright' : 'warn') as 'bright' | 'warn'
        })),
        { text: '  Lifecycle: Build -> Verify -> Document -> Decommission (26 screenshots)', tone: 'muted' }
      ];
    } else if (normalized === 'certs' || normalized === 'certifications') {
      const featured = CREDENTIALS.find((c) => c.isFeatured);
      lines = [
        {
          text: `★ Featured: ${featured?.title} (${featured?.examCode}) — ${featured?.issuer}`,
          tone: 'accent'
        },
        {
          text: `  + ${CREDENTIALS.length - 1} verified course certificates, learning paths & simulations`,
          tone: 'bright'
        },
        { text: '  Tip: Scroll to #certifications for full audited breakdown.', tone: 'muted' }
      ];
    } else if (normalized === 'projects' || normalized === 'ls projects') {
      const azure = PROJECTS.filter((p) => p.category === 'azure');
      const hack = PROJECTS.filter((p) => p.category === 'hackathon');
      lines = [
        { text: `Azure Projects (${azure.length}):`, tone: 'accent' },
        ...azure.map((p) => ({
          text: `  • ${p.title}${p.isFeatured ? ' [FLAGSHIP]' : ''}`,
          tone: 'bright' as const
        })),
        { text: `Hackathon Projects (${hack.length}):`, tone: 'accent' },
        ...hack.map((p) => ({
          text: `  • ${p.title}${p.isFeatured ? ' [FEATURED]' : ''}`,
          tone: 'muted' as const
        }))
      ];
    } else if (normalized === 'contact') {
      lines = [
        { text: `Email:    ${PERSONAL_INFO.email}`, tone: 'bright' },
        { text: `GitHub:   ${PERSONAL_INFO.github}`, tone: 'accent' },
        { text: `LinkedIn: ${PERSONAL_INFO.linkedin}`, tone: 'accent' }
      ];
    } else if (normalized === 'resume') {
      lines = [{ text: 'Opening printable terminal resume modal...', tone: 'accent' }];
      if (onOpenResume) {
        onOpenResume();
      }
    } else {
      lines = [
        { text: `bash: ${trimmed}: command not found`, tone: 'warn' },
        { text: "Type 'help' or click a quick command chip below.", tone: 'muted' }
      ];
    }

    const id = nextIdRef.current++;
    setEntries((prev) => [...prev.slice(-5), { id, command: trimmed, lines }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextCursor = Math.min(historyCursor + 1, commandHistory.length - 1);
      setHistoryCursor(nextCursor);
      setInput(commandHistory[nextCursor]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyCursor <= 0) {
        setHistoryCursor(-1);
        setInput('');
      } else {
        const nextCursor = historyCursor - 1;
        setHistoryCursor(nextCursor);
        setInput(commandHistory[nextCursor]);
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
              <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              <span>Explore Projects</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-outline"
              aria-label="Open Faizan's GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-outline"
              aria-label="Open Faizan's LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            {onOpenResume && (
              <button
                type="button"
                className="btn-terminal-outline"
                onClick={onOpenResume}
                aria-label="Open resume preview modal"
              >
                <i className="fa-solid fa-file-code" aria-hidden="true" />
                <span>Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE TERMINAL-STYLE CURRENT-FOCUS PANEL */}
        <div className="hero-terminal-wrapper">
          <div
            className="terminal-window"
            aria-label="Interactive terminal current technical focus panel"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title Bar */}
            <div className="terminal-titlebar">
              <div className="window-controls">
                <span className="control-dot close" title="Close" />
                <span className="control-dot minimize" title="Minimize" />
                <span className="control-dot expand" title="Expand" />
              </div>
              <span className="terminal-title">current_focus.sh &bull; SSMRV_LABS</span>
              <span className="terminal-chip">INTERACTIVE_SH</span>
            </div>

            {/* Terminal Panel Content */}
            <div ref={terminalBodyRef} className="terminal-body terminal-body-interactive">
              {showOverview && (
                <>
                  <div className="terminal-line output">
                    <span className="prompt-symbol">&gt;</span>
                    <span style={{ color: 'var(--primary)' }}>system.inspect(active_engineer)</span>
                  </div>

                  <div className="terminal-line output">
                    <span className="prompt-symbol">&gt;</span>
                    <span>
                      Name: <strong style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.name}</strong>
                    </span>
                  </div>

                  <div className="terminal-line output">
                    <span className="prompt-symbol">&gt;</span>
                    <span>
                      Institution: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.college}</span>, Bengaluru
                    </span>
                  </div>

                  <div className="terminal-line output">
                    <span className="prompt-symbol">&gt;</span>
                    <span>Program: BCA + Adv. Diploma in Cloud Architecture &amp; Cyber</span>
                  </div>

                  <div style={{ margin: '6px 0', borderTop: '1px dashed rgba(255, 255, 255, 0.08)' }} />

                  <div className="terminal-line output">
                    <span className="prompt-symbol">&gt;</span>
                    <span style={{ color: 'var(--primary-light)', fontWeight: 600 }}>CURRENT TECHNICAL FOCUS:</span>
                  </div>

                  <div className="terminal-line output" style={{ paddingLeft: '14px' }}>
                    <span>
                      &bull; Target: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.target}</span>
                    </span>
                  </div>

                  <div className="terminal-line output" style={{ paddingLeft: '14px' }}>
                    <span>
                      &bull; Lab: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.labInProgress}</span>
                    </span>
                  </div>

                  <div className="terminal-line output" style={{ paddingLeft: '14px' }}>
                    <span>
                      &bull; Study: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.studyTrack}</span>
                    </span>
                  </div>

                  <div className="terminal-line output" style={{ paddingLeft: '14px' }}>
                    <span>
                      &bull; OS: <span style={{ color: 'var(--text-bright)' }}>{PERSONAL_INFO.currentFocus.operatingSystem}</span>
                    </span>
                  </div>
                </>
              )}

              {/* Interactive Command Output History */}
              {entries.map((entry) => (
                <div key={entry.id} className="terminal-cmd-block">
                  <div className="terminal-line command">
                    <span style={{ color: 'var(--primary)' }}>faizan@ssmrv:~$</span>
                    <span>{entry.command}</span>
                  </div>
                  {entry.lines.map((line, i) => (
                    <div
                      key={i}
                      className={`terminal-line output terminal-tone-${line.tone || 'muted'}`}
                      style={{ whiteSpace: 'pre-wrap' }}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              ))}

              {/* Live Interactive Prompt */}
              <form
                onSubmit={handleSubmit}
                className="terminal-input-form"
                onClick={(e) => e.stopPropagation()}
              >
                <label htmlFor="hero-terminal-input" className="terminal-prompt-label">
                  faizan@ssmrv:~$
                </label>
                <input
                  id="hero-terminal-input"
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or click a command..."
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Portfolio terminal command input"
                  className="terminal-cmd-input"
                />
              </form>

              {/* Quick Clickable Command Chips */}
              <div
                className="terminal-quick-cmds"
                aria-label="Quick terminal commands"
                onClick={(e) => e.stopPropagation()}
              >
                {QUICK_COMMANDS.map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    className="terminal-quick-chip"
                    onClick={() => executeCommand(cmd)}
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
