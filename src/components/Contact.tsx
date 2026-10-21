import React, { useState } from 'react';
import { CONTACT_CHANNELS, PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, id: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedChannel(id);
      setTimeout(() => setCopiedChannel(null), 2500);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry: Cloud Security Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">COMM_CHANNEL // CONNECT_SECURE</span>
          <h2>Execute Contact</h2>
          <p className="subheading">
            Direct communication sockets for cloud security internships, technical discussions, and infrastructure collaboration.
          </p>
        </div>

        <div className="contact-terminal-grid">
          {/* Left: Quick Dispatch Terminal */}
          <div className="contact-terminal-window">
            <div className="terminal-titlebar">
              <div className="window-controls">
                <span className="control-dot close" />
                <span className="control-dot minimize" />
                <span className="control-dot expand" />
              </div>
              <span className="terminal-title">message_dispatcher.sh</span>
              <span className="terminal-chip">SOCKET:OPEN</span>
            </div>

            <form onSubmit={handleSendMessage} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  htmlFor="contact-target"
                  style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '6px' }}
                >
                  TARGET_RECIPIENT:
                </label>
                <input
                  id="contact-target"
                  type="text"
                  value={PERSONAL_INFO.email}
                  disabled
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '6px' }}
                >
                  SUBJECT_LINE:
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g., Cloud Security Project Collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.85rem'
                  }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-body"
                  style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '6px' }}
                >
                  TRANSMISSION_PAYLOAD:
                </label>
                <textarea
                  id="contact-body"
                  rows={4}
                  placeholder="Enter message details or interview invitation..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.85rem',
                    resize: 'vertical'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '6px' }}>
                <button type="submit" className="btn-terminal" style={{ flex: 1 }}>
                  <i className="fa-solid fa-paper-plane" />
                  <span>send_transmission()</span>
                </button>

                {onOpenResume && (
                  <button
                    type="button"
                    className="btn-terminal-outline"
                    onClick={onOpenResume}
                  >
                    <i className="fa-solid fa-file-code" />
                    <span>Resume</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right: Direct Connection Channels */}
          <div className="contact-channels-grid">
            {CONTACT_CHANNELS.map((channel) => (
              <div key={channel.id} className="contact-channel-card">
                <div className="channel-left">
                  <div className="channel-icon">
                    <i className={channel.icon} aria-hidden="true" />
                  </div>
                  <div className="channel-details">
                    <h4>{channel.name}</h4>
                    <span className="command">{channel.command}</span>
                    <span className="label">
                      {copiedChannel === channel.id ? '✓ COPIED TO CLIPBOARD' : channel.label}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {channel.id === 'email' ? (
                    <>
                      <button
                        type="button"
                        className="channel-action-btn"
                        onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                        title="Copy email to clipboard"
                        aria-label="Copy email address"
                      >
                        <i className="fa-solid fa-copy" />
                        <span>Copy</span>
                      </button>
                      <a
                        href={channel.href}
                        className="channel-action-btn"
                        style={{ background: 'var(--primary)', color: '#050807' }}
                        aria-label="Send email"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span>Mail</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-action-btn"
                      aria-label={`Open ${channel.name}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span>Connect</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
