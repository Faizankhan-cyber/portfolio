import React from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isTogetherlyFeatured = Boolean(project.isFeatured);
  const isProminent = Boolean(project.isProminent);

  const getIconClass = (id: string) => {
    if (id.includes('entra')) return 'fa-solid fa-id-badge';
    if (id.includes('azure')) return 'fa-solid fa-server';
    if (id.includes('threat')) return 'fa-solid fa-shield-virus';
    if (id.includes('together')) return 'fa-solid fa-users-gear';
    return 'fa-solid fa-cube';
  };

  return (
    <article
      className={`project-card ${isTogetherlyFeatured ? 'featured-hackathon-card' : ''} ${
        isProminent && !isTogetherlyFeatured ? 'prominent-project-card' : ''
      }`}
      style={
        isProminent && !isTogetherlyFeatured
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

        {isTogetherlyFeatured ? (
          <span className="featured-project-badge">
            <i className="fa-solid fa-star" />
            <span>FEATURED PROJECT</span>
          </span>
        ) : isProminent ? (
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
        ) : null}
      </div>

      {/* Card body */}
      <div className="project-body">
        <div className="project-header-row">
          <div className="project-icon-wrapper">
            <i className={getIconClass(project.id)} aria-hidden="true" />
          </div>
          <div className="project-title-area">
            <h3>{project.title}</h3>
            <span className="project-subtitle">{project.subtitle}</span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Contextual Note (Practical application of certification knowledge) */}
        {project.contextNote && (
          <div className="project-context-note">
            <div className="context-note-header">
              <i className="fa-solid fa-graduation-cap" />
              <span>Certification Application:</span>
            </div>
            <p>{project.contextNote}</p>
          </div>
        )}

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
          {project.githubUrl && (
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
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-action-link ${project.githubUrl ? 'secondary' : 'primary'}`}
              aria-label={`Open verified live deployment for ${project.title}`}
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">ENGINEERING_LABS // SOURCE_&amp;_DEMOS</span>
          <h2>Projects</h2>
          <p className="subheading">
            Hands-on cloud infrastructure implementations, identity access governance, and collaborative hackathon applications organized across practical Azure engineering labs and competitive hackathons.
          </p>
        </div>

        <div className="project-categories-wrap">
          {PROJECT_CATEGORIES.map((category) => {
            const categoryProjects = PROJECTS.filter((p) => p.category === category.id);
            // Put featured hackathon project first to anchor the featured layout cleanly
            const sortedProjects = [...categoryProjects].sort((a, b) => {
              if (a.isFeatured) return -1;
              if (b.isFeatured) return 1;
              return 0;
            });

            return (
              <div key={category.id} className="project-category-block" id={`category-${category.id}`}>
                <div className="category-section-header">
                  <div className="category-header-title-row">
                    <div className="category-icon-chip">
                      <i className={category.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="terminal-meta-tag">{category.badge}</span>
                      <h3 className="category-title">{category.title}</h3>
                    </div>
                  </div>
                  <p className="category-subtitle">{category.subtitle}</p>
                </div>

                <div className="projects-grid">
                  {sortedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
