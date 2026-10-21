import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">TECHNICAL_STACK // VERIFIED_COMPETENCIES</span>
          <h2>Technical Skills &amp; Tools</h2>
          <p className="subheading">
            Technologies and concepts directly supported by completed labs, academic coursework, and verified project repositories. Listed to reflect hands-on familiarity rather than commercial expert claims.
          </p>
        </div>

        <div className="stack-groups-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="stack-group-card">
              <div className="stack-group-header">
                <div className="stack-group-title">
                  <i className={category.icon} aria-hidden="true" />
                  <h3>{category.title}</h3>
                </div>
                <span className="stack-module-code">{category.groupCode}</span>
              </div>

              <div className="stack-group-body">
                <p className="stack-group-desc">{category.description}</p>

                <div className="tech-items-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="tech-item-row">
                      <div className="tech-item-info">
                        <span className="tech-item-name">{skill.name}</span>
                        {skill.context && (
                          <span className="tech-item-details">{skill.context}</span>
                        )}
                      </div>
                      <span className="tech-status-badge hands-on">VERIFIED</span>
                    </div>
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
