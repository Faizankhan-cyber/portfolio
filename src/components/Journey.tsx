import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">JOURNEY_CHRONOLOGY // CAREER_LABS</span>
          <h2>Hands-on Learning Milestones</h2>
          <p className="subheading">
            Progression from core computing fundamentals to cloud architecture, practical defensive labs, and hackathon system builds.
          </p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-meta-bar">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-category">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.tags && (
                  <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '0.72rem',
                          color: 'var(--primary)',
                          background: 'rgba(0, 245, 160, 0.06)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid rgba(0, 245, 160, 0.15)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
