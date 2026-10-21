import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">DEPLOYED_SYSTEMS // REPOSITORIES</span>
          <h2>Featured Security Projects</h2>
          <p className="subheading">
            Authentic cloud infrastructure deployments, threat telemetry platforms, and network reconnaissance tools built from hands-on engineering labs and national hackathons.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              {/* Top status bar */}
              <div className="project-topbar">
                <span className={`project-status-tag ${project.statusType}`}>
                  <span className="status-indicator-dot" style={{ width: '6px', height: '6px' }} />
                  <span>{project.status}</span>
                </span>
                <span style={{ color: 'var(--muted-dark)' }}>ID: {project.id.toUpperCase()}</span>
              </div>

              {/* Card body */}
              <div className="project-body">
                <div className="project-header-row">
                  <div className="project-icon-wrapper">
                    <i className={project.icon} aria-hidden="true" />
                  </div>
                  <div className="project-title-area">
                    <h3>{project.title}</h3>
                    {project.subtitle && (
                      <span className="project-subtitle">{project.subtitle}</span>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Architecture & Engineering Highlights */}
                {project.architectureNotes && (
                  <div className="architecture-notes-box">
                    <div className="architecture-title">
                      <i className="fa-solid fa-microchip" />
                      <span>Architecture &amp; Security Specs:</span>
                    </div>
                    <ul className="architecture-list">
                      {project.architectureNotes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="project-tags-wrap" aria-label="Technology tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links / Actions */}
                <div className="project-footer-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link primary"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <i className="fab fa-github" />
                    <span>View Repository</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link secondary"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span>Live Demo</span>
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
