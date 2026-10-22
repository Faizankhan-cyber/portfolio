import React from 'react';
import { CREDENTIALS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const featuredCert = CREDENTIALS.find((c) => c.isFeatured);
  const courseCerts = CREDENTIALS.filter((c) => !c.isFeatured && c.type === 'Course Certificate');
  const learningPathsAndSims = CREDENTIALS.filter(
    (c) => !c.isFeatured && (c.type === 'Learning Path' || c.type === 'Job Simulation')
  );

  const handleScrollToAzure = (e: React.MouseEvent) => {
    e.preventDefault();
    const azureCategory = document.getElementById('category-azure');
    if (azureCategory) {
      azureCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">CREDENTIALS // AUDITED_RECORDS</span>
          <h2>Certifications &amp; Learning Achievements</h2>
          <p className="subheading">
            Earned Microsoft vendor certification, verified course achievements, and hands-on enterprise simulations. Clearly distinguishing official vendor credentials from platform learning completions.
          </p>
        </div>

        <div className="certs-section-wrap">
          {/* 1. FEATURED OFFICIAL VENDOR CERTIFICATION */}
          {featuredCert && (
            <div>
              <div className="cert-category-heading">
                <i className="fa-solid fa-award" style={{ color: 'var(--primary)' }} />
                <span>Featured Vendor Certification</span>
              </div>

              <div className="featured-cert-card">
                {/* Topbar */}
                <div className="featured-cert-topbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="project-status-tag online">
                      <span className="status-indicator-dot" style={{ width: '6px', height: '6px' }} />
                      <span>{featuredCert.verificationStatus.toUpperCase()}</span>
                    </span>
                    <span className="featured-cert-badge">
                      <i className="fa-solid fa-shield-halved" />
                      <span>FEATURED CERTIFICATION</span>
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {featuredCert.examCode && (
                      <span className="featured-cert-code-chip">
                        <i className="fa-solid fa-barcode" />
                        <span>EXAM CODE: {featuredCert.examCode}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="featured-cert-body">
                  <div className="featured-cert-header-row">
                    <div className="featured-cert-icon-wrapper">
                      <i className="fa-brands fa-microsoft" aria-hidden="true" />
                    </div>
                    <div className="featured-cert-title-area">
                      <div className="featured-cert-issuer-meta">
                        <span className="featured-cert-issuer-name">{featuredCert.issuer}</span>
                        <span
                          style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '0.72rem',
                            color: 'var(--muted)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                          }}
                        >
                          OFFICIAL VENDOR CREDENTIAL
                        </span>
                      </div>
                      <h3>{featuredCert.title}</h3>
                    </div>
                  </div>

                  <p className="featured-cert-desc">
                    Verified Microsoft certification demonstrating foundational mastery of cloud security, compliance principles, identity and access management with Microsoft Entra ID, and zero-trust security postures across Microsoft Azure.
                  </p>

                  {/* Core Exam Domains */}
                  {featuredCert.topics && (
                    <div className="featured-cert-domains-box">
                      <div className="featured-cert-domains-title">
                        <i className="fa-solid fa-list-check" />
                        <span>Core Tested Knowledge Domains:</span>
                      </div>
                      <div className="featured-cert-domains-grid">
                        {featuredCert.topics.map((topic) => (
                          <div key={topic} className="featured-cert-domain-item">
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applied in Projects Link */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '6px' }}>
                    <a
                      href="#category-azure"
                      onClick={handleScrollToAzure}
                      className="featured-cert-applied-link"
                      aria-label="View how SC-900 concepts were practically applied in Azure RBAC project"
                    >
                      <i className="fa-solid fa-flask-vial" />
                      <span>Applied in Azure Lab: Microsoft Entra ID &amp; RBAC Project &rarr;</span>
                    </a>

                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.76rem', color: 'var(--muted)' }}>
                      Credential Verified &bull; Microsoft Security &amp; Identity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. COMPLETED COURSE CERTIFICATES */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--primary)' }} />
              <span>Completed Course Certificates &amp; Technical Training ({courseCerts.length})</span>
            </div>

            <div className="certs-grid">
              {courseCerts.map((cred) => (
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

          {/* 3. LEARNING PATHS & JOB SIMULATIONS */}
          <div>
            <div className="cert-category-heading">
              <i className="fa-solid fa-briefcase" style={{ color: 'var(--primary)' }} />
              <span>Learning Paths &amp; Enterprise Simulations ({learningPathsAndSims.length})</span>
            </div>

            <div className="certs-grid">
              {learningPathsAndSims.map((cred) => (
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
        </div>
      </div>
    </section>
  );
};
