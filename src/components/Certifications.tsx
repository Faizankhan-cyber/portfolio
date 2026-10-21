import React from 'react';
import { CREDENTIALS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const completedCourses = CREDENTIALS.filter((c) => !c.isFlaggedForReview);
  const flaggedCredentials = CREDENTIALS.filter((c) => c.isFlaggedForReview);

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">CREDENTIALS // AUDITED_RECORDS</span>
          <h2>Certifications &amp; Course Achievements</h2>
          <p className="subheading">
            Strictly distinguishing verified course certificates, learning paths, and simulated enterprise training from official vendor certification exams currently in syllabus preparation.
          </p>
        </div>

        <div className="certs-section-wrap">
          {/* 1. COMPLETED COURSES & JOB SIMULATIONS */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary)' }} />
              <span>Completed Course Certificates &amp; Learning Achievements ({completedCourses.length})</span>
            </div>

            <div className="certs-grid">
              {completedCourses.map((cred) => (
                <div key={cred.id} className="cert-card">
                  <div className="cert-badge-row">
                    <span className="cert-verified-pill">
                      <i className="fa-solid fa-check" />
                      <span>{cred.type}</span>
                    </span>
                    <span className="cert-date">{cred.verificationStatus}</span>
                  </div>

                  <div className="cert-info">
                    <span className="cert-issuer">{cred.issuer}</span>
                    <h3>{cred.title}</h3>
                  </div>

                  {cred.topics && (
                    <div className="cert-skills-list">
                      {cred.topics.map((topic) => (
                        <span key={topic} className="cert-skill-pill">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. CERTIFICATION EXAM STATUS / FLAGGED FOR REVIEW */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-clipboard-question" style={{ color: '#FFBD2E' }} />
              <span>Vendor Certification Status &bull; Flagged for Clarification</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              {flaggedCredentials.map((cred) => (
                <div
                  key={cred.id}
                  className="cert-card"
                  style={{
                    borderStyle: 'dashed',
                    borderColor: 'rgba(255, 189, 46, 0.35)',
                    background: 'rgba(255, 189, 46, 0.03)'
                  }}
                >
                  <div className="cert-badge-row">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255, 189, 46, 0.15)',
                        border: '1px solid rgba(255, 189, 46, 0.35)',
                        color: '#FFBD2E',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                    >
                      <i className="fa-solid fa-flag" />
                      <span>FLAGGED FOR CANDIDATE CONFIRMATION</span>
                    </span>
                    <span className="cert-date" style={{ color: '#FFBD2E' }}>
                      {cred.verificationStatus}
                    </span>
                  </div>

                  <div className="cert-info">
                    <span className="cert-issuer">{cred.issuer}</span>
                    <h3>{cred.title}</h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: '6px' }}>
                      Note: Per verification guidelines, vendor certificates are not publicly presented as formally passed unless accompanied by an official verification credential ID. Currently treated as active curriculum study.
                    </p>
                  </div>

                  {cred.topics && (
                    <div className="cert-skills-list">
                      {cred.topics.map((topic) => (
                        <span key={topic} className="cert-skill-pill">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
