import React, { useState } from 'react';
import { CONTACT_CHANNELS, PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">COMMUNICATION // DIRECT_CHANNELS</span>
          <h2>Get in Touch</h2>
          <p className="subheading">
            Direct communication sockets for discussing cloud architecture projects, internship opportunities, or security lab collaborations.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {/* Main Direct Channel Card */}
          <div
            className="terminal-card"
            style={{
              padding: '36px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0, 245, 160, 0.1)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                fontSize: '1.8rem'
              }}
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>Direct Email Contact</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                For technical discussions, internships, or reviewing my project code:
              </p>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--mono)',
                  fontSize: '1.15rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  marginTop: '10px'
                }}
              >
                {PERSONAL_INFO.email}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-terminal"
                aria-label={`Send email directly to ${PERSONAL_INFO.email}`}
              >
                <i className="fa-solid fa-paper-plane" />
                <span>Launch Email Client</span>
              </a>

              <button
                type="button"
                className="btn-terminal-outline"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                <i className="fa-solid fa-copy" />
                <span>{copied ? '✓ Email Copied!' : 'Copy Email Address'}</span>
              </button>

              {onOpenResume && (
                <button
                  type="button"
                  className="btn-terminal-outline"
                  onClick={onOpenResume}
                  aria-label="View verified resume"
                >
                  <i className="fa-solid fa-file-lines" />
                  <span>View Resume</span>
                </button>
              )}
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              marginTop: '24px'
            }}
          >
            {CONTACT_CHANNELS.filter((c) => c.id !== 'email').map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label={`Open ${channel.name} Profile`}
              >
                <div className="channel-left">
                  <div className="channel-icon">
                    <i className={channel.icon} aria-hidden="true" />
                  </div>
                  <div className="channel-details">
                    <h4>{channel.name}</h4>
                    <span className="command">{channel.command}</span>
                    <span className="label">{channel.label}</span>
                  </div>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: 'var(--primary)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
