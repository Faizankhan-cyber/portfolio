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
• Cloud Infrastructure: Microsoft Azure, Azure Virtual Machines, Virtual Networks (VNet), Azure RBAC, Azure Policy
• Identity & Security: Microsoft Entra ID, Azure Managed Identity, Azure Key Vault, Identity & Access Management (IAM), Network Security, Threat Analysis
• Systems & Administration: Linux (Ubuntu), SSH Key Authentication, Command-Line Operations
• Automation & Development: Terraform, Python, JavaScript, Node.js, Git, GitHub
• Web Development: React, TypeScript, Vite, Tailwind CSS, Vercel

FEATURED TECHNICAL PROJECTS
1. Togetherly Azure Platform [FLAGSHIP AZURE PROJECT — V2.0.0 RELEASED]
   - Versioned Azure cloud engineering & security project for Togetherly Workforce (V1/V2 completed, V3/V4 planned).
   - V1 (AZ-900): Ubuntu 24.04 VM, VNet, NSG, Nginx HTTPS, systemd Express API. V2 (SC-900): Managed Identity, Key Vault, RBAC, VNet service endpoint & Azure Policy (8/8 compliant).
   - Repo: https://github.com/Faizankhan-cyber/togetherly-azure-platform | Release: https://github.com/Faizankhan-cyber/togetherly-azure-platform/releases/tag/v2.0.0

2. Microsoft Entra ID & Azure RBAC: Identity and Access Management [Azure Projects]
   - Standalone IAM lab configuring test users, security groups, and least-privilege Azure RBAC scoping with Terraform.
   - Built after completing Microsoft SC-900 exam.
   - Repo: https://github.com/Faizankhan-cyber/microsoft-entra-id-azure-rbac-standalone

3. Secure Linux Web Server on Azure [Azure Projects]
   - Hardened Ubuntu VM inside custom Azure VNet with NSG firewall rules, SSH keys, and Nginx.
   - Built after completing Microsoft AZ-900 exam to apply Azure fundamentals.
   - Repo: https://github.com/Faizankhan-cyber/secure-linux-web-server-azure

4. Togetherly | Workforce Intelligence Platform [FEATURED HACKATHON PROJECT]
   - Workforce intelligence platform developed during hackathon at AMC Engineering College with Team Weird Minds.
   - Live: https://togetherly-tinyfish.vercel.app/ | Repo: https://github.com/Faizankhan-cyber/togetherly-workforce

5. ThreatLens | Digital Threat Detection Platform [Hackathon Projects]
   - Digital threat investigation platform built for internal Smart India Hackathon at SSMRV College with Team Cloud Sentinals.
   - Live: https://threatlens-project.vercel.app/ | Repo: https://github.com/Faizankhan-cyber/ThreatLens

6. BountyVault | Decentralized Escrow System [Hackathon Projects]
   - Blockchain-based escrow project on Algorand for smart-contract fund locking, release, and refund conditions.
   - Live: https://bountyvault-project.vercel.app/ | Repo: https://github.com/Faizankhan-cyber/bountyvault

EXPERIENCE & COMMUNITY
• Open Source Contributor — GirlScript Summer of Code (GSSoC) 2026 (May 2026 – Aug 2026)
• Self-Directed Cloud & Security Lab Practice (Sept 2025 – Present)

COMPLETED CREDENTIALS & LEARNING ACHIEVEMENTS
• Microsoft: Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900) [Earned Vendor Certification] — Verify: https://learn.microsoft.com/en-us/users/faizankhankhaleel-1618/credentials/69f9fef53535b00b
• DataCamp: Understanding Azure Fundamentals (AZ-900)
• DataCamp: GitHub Foundations
• DataCamp: Introduction to Python for Developers
• Abstream Technologies: Linux System Engineering
• Abstream Technologies: Introduction to Data Centre & Cloud Technologies
• Cisco Networking Academy: Introduction to Cybersecurity
• TryHackMe: Pre-Security Certification Path
• Forage: Deloitte Australia - Cyber Job Simulation
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
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                  <strong style={{ color: 'var(--primary)' }}>
                    {proj.title}
                    {proj.isFeatured && (
                      <span style={{ marginLeft: '8px', fontSize: '0.7rem', color: '#050807', background: 'var(--primary)', padding: '2px 6px', borderRadius: '3px' }}>
                        {proj.featuredLabel || 'FEATURED'}
                      </span>
                    )}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>[{proj.category === 'azure' ? 'Azure' : 'Hackathon'} &bull; {proj.tags.slice(0, 3).join(', ')}]</span>
                </div>
                <p style={{ fontSize: '0.84rem', marginTop: '4px', color: '#CBD5E1' }}>{proj.description}</p>
                <div style={{ marginTop: '6px', fontSize: '0.78rem', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                      GitHub: {proj.githubUrl.replace('https://github.com/', '')}
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                      Live Demo: {proj.liveUrl.replace('https://', '')}
                    </a>
                  )}
                  {proj.secondaryLinks && proj.secondaryLinks[0] && (
                    <a href={proj.secondaryLinks[0].url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                      {proj.secondaryLinks[0].label}
                    </a>
                  )}
                </div>
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
              <li key={cert.id} style={{ fontSize: '0.84rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span>
                  <strong>{cert.issuer}:</strong> {cert.title} ({cert.verificationStatus})
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.78rem' }}
                  >
                    Verify Credential
                  </a>
                )}
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
