import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">COMMUNITY_&amp;_LEARNING // TIMELINE</span>
          <h2>Experience &amp; Community Work</h2>
          <p className="subheading">
            Authentic learning practice and open source community engagement recorded in my resume.
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCE_ITEMS.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-meta-bar">
                  <span className="timeline-year">{item.period}</span>
                  <span className="timeline-category">{item.type}</span>
                </div>

                <h3>{item.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '10px', fontFamily: 'var(--mono)' }}>
                  {item.organization}
                </h4>

                <p>{item.description}</p>

                <ul className="card-bullets" style={{ marginTop: '12px' }}>
                  {item.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.72rem',
                        color: 'var(--primary)',
                        background: 'rgba(0, 245, 160, 0.06)',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 245, 160, 0.15)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
