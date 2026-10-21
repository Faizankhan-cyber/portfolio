import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">ENGINEERING_LABS // SOURCE_&amp;_DEMOS</span>
          <h2>Featured Technical Projects</h2>
          <p className="subheading">
            Hands-on infrastructure deployments, identity access controls, and collaborative hackathon applications. The Microsoft Entra ID and Azure infrastructure projects highlight my primary cloud security specialization.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.isProminent ? 'prominent-project-card' : ''}`}
              style={
                project.isProminent
                  ? {
                      borderColor: 'rgba(0, 245, 160, 0.35)',
                      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 245, 160, 0.1)'
                    }
                  : undefined
              }
            >
              {/* Top status bar */}
              <div className="project-topbar">
                <span className="project-status-tag online">
                  <span className="status-indicator-dot" style={{ width: '6px', height: '6px' }} />
                  <span>{project.status}</span>
                </span>
                {project.isProminent && (
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      color: 'var(--primary)',
                      background: 'rgba(0, 245, 160, 0.12)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--border)'
                    }}
                  >
                    PRIMARY CLOUD LAB
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="project-body">
                <div className="project-header-row">
                  <div className="project-icon-wrapper">
                    <i
                      className={
                        project.id.includes('entra')
                          ? 'fa-solid fa-id-badge'
                          : project.id.includes('azure')
                          ? 'fa-solid fa-server'
                          : project.id.includes('threat')
                          ? 'fa-solid fa-shield-virus'
                          : project.id.includes('together')
                          ? 'fa-solid fa-users-gear'
                          : 'fa-solid fa-link'
                      }
                      aria-hidden="true"
                    />
                  </div>
                  <div className="project-title-area">
                    <h3>{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Event Context if applicable */}
                {project.eventContext && (
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--mono)',
                      color: 'var(--primary-light)',
                      background: 'rgba(0, 245, 160, 0.05)',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      borderLeft: '2px solid var(--primary)'
                    }}
                  >
                    <i className="fa-solid fa-calendar-check" style={{ marginRight: '6px' }} />
                    {project.eventContext}
                  </div>
                )}

                {/* Architecture & Implementation Highlights */}
                <div className="architecture-notes-box">
                  <div className="architecture-title">
                    <i className="fa-solid fa-microchip" />
                    <span>Implementation Highlights:</span>
                  </div>
                  <ul className="architecture-list">
                    {project.keyHighlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="project-tags-wrap" aria-label="Project technologies">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-footer-actions">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link primary"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <i className="fab fa-github" />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.78rem',
                        color: 'var(--muted)',
                        fontStyle: 'italic'
                      }}
                    >
                      Source repository unindexed
                    </span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link secondary"
                      aria-label={`Open verified live deployment for ${project.title}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span>Live Deployment</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
