import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS, CREDENTIALS, EXPERIENCE_ITEMS } from '../data/portfolioData';

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
${PERSONAL_INFO.name.toUpperCase()}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

ACADEMIC BACKGROUND
• ${PERSONAL_INFO.degree} with ${PERSONAL_INFO.diploma}
  ${PERSONAL_INFO.college}, Bengaluru, Karnataka, India

TECHNICAL COMPETENCIES
• Cloud Infrastructure: Microsoft Azure, Azure Virtual Machines, Virtual Networks (VNet), Azure RBAC
• Identity & Security: Microsoft Entra ID, Identity & Access Management (IAM), Network Security, Threat Analysis
• Systems & Administration: Linux (Ubuntu), SSH Key Authentication, Command-Line Operations
• Automation & Development: Terraform, Python, JavaScript, Node.js, Git, GitHub
• Web Development: React, TypeScript, Vite, Tailwind CSS, Vercel

FEATURED TECHNICAL PROJECTS
1. Microsoft Entra ID & Azure RBAC: Identity and Access Management
   - Standalone IAM lab configuring test users, security groups, and least-privilege Azure RBAC scoping with Terraform.
   - Repo: https://github.com/Faizankhan-cyber/microsoft-entra-id-azure-rbac-standalone

2. Secure Linux Web Server on Azure (Azure Enterprise Infrastructure V1)
   - Provisioned hardened Ubuntu VM inside custom Azure VNet with NSG firewall rules, SSH keys, and Nginx.
   - Repo: https://github.com/Faizankhan-cyber/azure-enterprise-infrastructure

3. Togetherly | Workforce Intelligence Platform
   - Hackathon project with Team Weird Minds at AMC Engineering College for employee-to-project skill matching.
   - Live: https://togetherly-omega.vercel.app/

4. ThreatLens | Digital Threat Detection Platform
   - Digital threat investigation platform built for internal Smart India Hackathon at SSMRV College with Team Cloud Sentinals.
   - Live: https://threatlens-project.vercel.app/ | Repo: https://github.com/Faizankhan-cyber/ThreatLens

5. BountyVault | Decentralized Escrow System
   - Blockchain-based escrow project on Algorand for smart-contract fund locking, release, and refund conditions.

EXPERIENCE & COMMUNITY
• Open Source Contributor — GirlScript Summer of Code (GSSoC) 2026 (May 2026 – Aug 2026)
• Self-Directed Cloud & Security Lab Practice (Sept 2025 – Present)

COMPLETED CREDENTIALS & LEARNING ACHIEVEMENTS
• DataCamp: Understanding Azure Fundamentals (AZ-900)
• DataCamp: GitHub Foundations
• DataCamp: Introduction to Python for Developers
• Abstream Technologies: Linux System Engineering
• Abstream Technologies: Introduction to Data Centre & Cloud Technologies
• TryHackMe: Pre-Security Certification Path
• Forage: Deloitte Australia - Cyber Job Simulation
• Cisco Networking Academy: Introduction to Cybersecurity
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
            <i className="fa-solid fa-file-code" />
            <span id="resume-dialog-title">view_resume.pdf // terminal_record</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
              ESC to close
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
            <p className="role">{PERSONAL_INFO.headline}</p>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '4px' }}>
              {PERSONAL_INFO.college}, {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.email}
            </p>
          </div>

          <div className="resume-section-title">01 // ACADEMIC PROFILE</div>
          <p>
            <strong>{PERSONAL_INFO.degree}</strong> &bull; {PERSONAL_INFO.college}
          </p>
          <p style={{ marginTop: '4px' }}>
            <strong>{PERSONAL_INFO.diploma}</strong>
          </p>

          <div className="resume-section-title">02 // TECHNICAL PROJECTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {PROJECTS.map((proj) => (
              <div key={proj.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ color: 'var(--primary)' }}>{proj.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>[{proj.tags.slice(0, 3).join(', ')}]</span>
                </div>
                <p style={{ fontSize: '0.84rem', marginTop: '4px', color: '#CBD5E1' }}>{proj.description}</p>
                {proj.githubUrl && (
                  <div style={{ marginTop: '6px', fontSize: '0.78rem' }}>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                      {proj.githubUrl}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="resume-section-title">03 // EXPERIENCE &amp; COMMUNITY</div>
          {EXPERIENCE_ITEMS.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{exp.role} &bull; {exp.organization}</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--primary)' }}>{exp.period}</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '2px' }}>{exp.description}</p>
            </div>
          ))}

          <div className="resume-section-title">04 // COMPLETED CREDENTIALS</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {CREDENTIALS.filter((c) => !c.isFlaggedForReview).map((cert) => (
              <li key={cert.id} style={{ fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <strong>{cert.issuer}:</strong> {cert.title} ({cert.verificationStatus})
              </li>
            ))}
          </ul>
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
            href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry regarding Cloud Security Portfolio`}
            className="btn-terminal"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <i className="fa-solid fa-envelope" />
            <span>Contact Candidate</span>
          </a>
        </div>
      </div>
    </div>
  );
};
