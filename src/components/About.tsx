import React from 'react';
import { ABOUT_CARDS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">PROFILE // ACADEMIC_DISCIPLINE</span>
          <h2>About Me</h2>
          <p className="subheading">
            BCA student at {PERSONAL_INFO.college}, Bengaluru, specializing in Cloud Architecture and Cybersecurity. Committed to building practical, documented infrastructure and mastering defensive concepts.
          </p>
        </div>

        <div className="about-grid">
          {ABOUT_CARDS.map((card) => (
            <div key={card.id} className="terminal-card">
              {/* Terminal command bar */}
              <div className="card-header-bar">
                <span className="card-prompt-title">
                  <span>faizan@ssmrv:~$</span>
                  <span style={{ color: 'var(--text-bright)' }}>{card.commandPrompt}</span>
                </span>
                <span style={{ color: 'var(--muted-dark)' }}>STATUS: VERIFIED</span>
              </div>

              {/* Card content */}
              <div className="card-content-body">
                <div className="card-title-group">
                  <div className="card-icon-box">
                    <i className={card.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="subtitle">{card.subtitle}</span>
                    <h3>{card.title}</h3>
                  </div>
                </div>

                <p className="card-description">{card.description}</p>

                {card.items && (
                  <ul className="card-bullets">
                    {card.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
