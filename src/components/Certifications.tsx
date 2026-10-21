import React from 'react';
import { CERTIFICATIONS, LEARNING_PATHS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">AUDIT_LOGS // CREDENTIALS</span>
          <h2>Certifications &amp; Learning Progress</h2>
          <p className="subheading">
            Strictly distinguishing earned credentials verified through industry platforms from current syllabus tracks and certification exam preparation.
          </p>
        </div>

        <div className="certs-section-wrap">
          {/* 1. VERIFIED CREDENTIALS */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary)' }} />
              <span>Verified Earned Credentials ({CERTIFICATIONS.length})</span>
            </div>

            <div className="certs-grid">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-badge-row">
                    <span className="cert-verified-pill">
                      <i className="fa-solid fa-check" />
                      <span>{cert.status}</span>
                    </span>
                    <span className="cert-date">{cert.dateOrStatus}</span>
                  </div>

                  <div className="cert-info">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h3>{cert.title}</h3>
                  </div>

                  {cert.skillsLearned && (
                    <div className="cert-skills-list">
                      {cert.skillsLearned.map((skill) => (
                        <span key={skill} className="cert-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. ACTIVE LEARNING PATHS & EXAM PREPARATION */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-clock-rotate-left" style={{ color: '#FFBD2E' }} />
              <span>Active Learning Paths &amp; Exam Preparation</span>
            </div>

            <div className="learning-paths-grid">
              {LEARNING_PATHS.map((path) => (
                <div key={path.id} className="learning-path-card">
                  <span className="learning-status-pill">{path.status}</span>
                  <div>
                    <span className="learning-provider">{path.provider}</span>
                    <h4>{path.title}</h4>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--primary)', fontFamily: 'var(--mono)' }}>
                      FOCUS TOPICS:
                    </span>
                    {path.topics.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: 'var(--primary)' }}>▹</span> {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
