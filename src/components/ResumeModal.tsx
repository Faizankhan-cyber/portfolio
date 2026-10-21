import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textResume = `
FAIZAN KHAN
Cloud Computing & Cybersecurity Student
Location: Bengaluru, Karnataka, India
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

ACADEMIC BACKGROUND
• Bachelor of Computer Applications (BCA) - Cloud Computing & Cybersecurity
• Advanced Diploma in Cloud Architecture & Cybersecurity

CORE TECHNICAL COMPETENCIES
• Cloud Infrastructure: Microsoft Azure (VNets, Subnets, NSGs, Azure VMs, Cloud Shell, Blob Storage), AWS Foundational Labs
• Cybersecurity & Systems: Linux (Ubuntu/Debian), Network Security, TCP/IP, Port Scanning, IAM, SSH Key Governance
• Development & Scripting: Python (Socket programming, Automation), Bash Scripting, JavaScript, Node.js (Express), SQL

VERIFIED PROJECTS
1. Azure Enterprise Infrastructure
   - Designed isolated Azure Virtual Network with segmented subnets, NSG rules, and hardened Ubuntu VM running Nginx.
   - Repo: https://github.com/Faizankhank-cy/azure-enterprise-infrastructure

2. ThreatLens (Security Telemetry & Threat Analysis)
   - Visual telemetry dashboard monitoring security events, indicators of compromise, and vulnerability tracking.
   - Live: https://threatlens-project.vercel.app/ | Repo: https://github.com/Faizankhank-cy/ThreatLens

3. BountyVault (Blockchain Hackathon Project)
   - Backend Lead for decentralized bounty management platform on Algorand.
   - Repo: https://github.com/Faizankhan-cyber

4. Python Port Scanner
   - Multi-target TCP socket reconnaissance utility for inspecting open ports and banner grabbing.
   - Repo: https://github.com/Faizankhan-cyber/python-port-scanner

VERIFIED CREDENTIALS
• Cisco Networking Academy: Introduction to Cybersecurity (2025)
• TryHackMe: Pre Security Path (2026)
• Deloitte: Cyber Job Simulation (2026)
• Abstream Technologies: Introduction to Cloud Computing (2025)
• Abstream Technologies: Linux System Engineering (2025)
    `.trim();

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="resume-modal">
        {/* Title Bar */}
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <i className="fa-solid fa-file-lines" />
            <span id="resume-dialog-title">view_resume.pdf // terminal_preview</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
              ESC to exit
            </span>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="resume-modal-body">
          <div className="resume-text-header">
            <h2>{PERSONAL_INFO.name}</h2>
            <p className="role">{PERSONAL_INFO.role} &bull; BCA Student</p>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '4px' }}>
              Bengaluru, Karnataka &bull; {PERSONAL_INFO.email}
            </p>
          </div>

          <div className="resume-section-title">01 // ACADEMIC PROFILE</div>
          <p>
            <strong>Bachelor of Computer Applications (BCA)</strong> — Specialization in Cloud Computing &amp; Cybersecurity.
          </p>
          <p style={{ marginTop: '4px' }}>
            <strong>Advanced Diploma in Cloud Architecture &amp; Cybersecurity</strong>.
          </p>

          <div className="resume-section-title">02 // VERIFIED CLOUD &amp; SECURITY PROJECTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {PROJECTS.map((proj) => (
              <div key={proj.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ color: 'var(--primary)' }}>{proj.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>[{proj.tags.slice(0, 3).join(', ')}]</span>
                </div>
                <p style={{ fontSize: '0.84rem', marginTop: '4px', color: '#CBD5E1' }}>{proj.description}</p>
                <div style={{ marginTop: '6px', fontSize: '0.78rem' }}>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                    {proj.githubUrl}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="resume-section-title">03 // VERIFIED CREDENTIALS</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.id} style={{ fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <strong>{cert.issuer}:</strong> {cert.title} ({cert.dateOrStatus})
              </li>
            ))}
          </ul>

          <div className="resume-section-title">04 // VERIFIED PROFILES</div>
          <p style={{ fontSize: '0.84rem' }}>
            LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>{PERSONAL_INFO.linkedin}</a>
          </p>
          <p style={{ fontSize: '0.84rem', marginTop: '4px' }}>
            GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>{PERSONAL_INFO.github}</a>
          </p>
        </div>

        {/* Modal Footer */}
        <div className="resume-modal-footer">
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn-terminal-outline"
              onClick={handleCopyText}
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <i className="fa-solid fa-copy" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plaintext'}</span>
            </button>

            <button
              type="button"
              className="btn-terminal-outline"
              onClick={handlePrint}
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <i className="fa-solid fa-print" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Request for PDF Resume`}
            className="btn-terminal"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <i className="fa-solid fa-envelope" />
            <span>Request Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
