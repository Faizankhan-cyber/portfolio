import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import { ProjectItem, ProjectVersionItem } from '../types';

interface VersionRoadmapProps {
  versions: ProjectVersionItem[];
}

const VersionRoadmap: React.FC<VersionRoadmapProps> = ({ versions }) => {
  const latestCompletedIndex = (() => {
    for (let i = versions.length - 1; i >= 0; i -= 1) {
      if (versions[i].status === 'Completed') return i;
    }
    return 0;
  })();

  const [selectedIndex, setSelectedIndex] = useState<number>(latestCompletedIndex);
  const activeVersion = versions[selectedIndex] ?? versions[0];
  const completedCount = versions.filter((v) => v.status === 'Completed').length;

  return (
    <div className="version-roadmap-box" aria-label="Project version roadmap">
      <div className="version-roadmap-header">
        <div className="architecture-title" style={{ marginBottom: 0 }}>
          <i className="fa-solid fa-code-branch" aria-hidden="true" />
          <span>Version Roadmap ({completedCount}/{versions.length} Completed):</span>
        </div>
        <span className="version-roadmap-hint">Select a version to inspect scope</span>
      </div>

      {/* Version Selector Strip */}
      <div className="version-tabs-grid" role="tablist" aria-label="Platform versions">
        {versions.map((ver, idx) => {
          const isSelected = idx === selectedIndex;
          const isCompleted = ver.status === 'Completed';
          return (
            <button
              key={ver.version}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`version-tab-btn ${isSelected ? 'active' : ''} ${
                isCompleted ? 'completed' : 'planned'
              }`}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="version-tab-top">
                <span className="version-code">{ver.version}</span>
                <span className={`version-status-pill ${isCompleted ? 'completed' : 'planned'}`}>
                  <i
                    className={isCompleted ? 'fa-solid fa-check' : 'fa-regular fa-clock'}
                    aria-hidden="true"
                  />
                  <span>{ver.status}</span>
                </span>
              </div>
              <span className="version-tab-title">{ver.title}</span>
              <span className="version-cert-track">Track: {ver.certTrack}</span>
            </button>
          );
        })}
      </div>

      {/* Active Version Detail Panel */}
      {activeVersion && (
        <div key={activeVersion.version} className="version-detail-panel" role="tabpanel">
          <div className="version-detail-header">
            <div className="version-detail-title-group">
              <span className="version-detail-code">{activeVersion.version}</span>
              <h4>{activeVersion.title}</h4>
              <span className="version-detail-cert">{activeVersion.certTrack} Alignment</span>
            </div>

            <div className="version-detail-meta">
              <span
                className={`version-status-pill ${
                  activeVersion.status === 'Completed' ? 'completed' : 'planned'
                }`}
              >
                {activeVersion.status === 'Completed' ? 'IMPLEMENTED & DOCUMENTED' : 'PLANNED MILESTONE'}
              </span>
              {activeVersion.releaseUrl && activeVersion.releaseTag && (
                <a
                  href={activeVersion.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="version-release-link"
                  aria-label={`View GitHub release ${activeVersion.releaseTag}`}
                >
                  <i className="fa-solid fa-tag" aria-hidden="true" />
                  <span>{activeVersion.releaseTag}</span>
                </a>
              )}
            </div>
          </div>

          <p className="version-detail-summary">{activeVersion.summary}</p>

          <div className="version-detail-list-label">
            {activeVersion.status === 'Completed'
              ? `Implemented in ${activeVersion.version}:`
              : `Planned Scope for ${activeVersion.version}:`}
          </div>
          <ul className="architecture-list">
            {activeVersion.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  const isFeatured = Boolean(project.isFeatured);
  const isProminent = Boolean(project.isProminent);

  const getIconClass = (id: string) => {
    if (id === 'togetherly-azure-platform') return 'fa-solid fa-layer-group';
    if (id.includes('entra')) return 'fa-solid fa-id-badge';
    if (id.includes('azure')) return 'fa-solid fa-server';
    if (id.includes('threat')) return 'fa-solid fa-shield-virus';
    if (id.includes('together')) return 'fa-solid fa-users-gear';
    return 'fa-solid fa-cube';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isFeatured) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const revealDelayMs = isFeatured ? 0 : Math.min(index * 110, 330);
  const cardStyle: React.CSSProperties & { '--reveal-delay'?: string } = {
    '--reveal-delay': `${revealDelayMs}ms`,
    ...(isProminent && !isFeatured
      ? {
          borderColor: 'rgba(0, 245, 160, 0.35)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 245, 160, 0.1)'
        }
      : {})
  };

  return (
    <article
      className={`project-card project-card-reveal ${isVisible ? 'is-visible' : ''} ${
        isFeatured ? 'featured-hackathon-card' : ''
      } ${isProminent && !isFeatured ? 'prominent-project-card' : ''}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
    >
      {/* Top accent line for visual hierarchy */}
      <div className="project-card-accent-bar" aria-hidden="true" />

      {/* Subtle cursor spotlight layer on flagship/featured cards */}
      {isFeatured && <div className="project-card-spotlight" aria-hidden="true" />}

      {/* Top status bar */}
      <div className="project-topbar">
        <span className="project-status-tag online">
          <span className="status-indicator-dot" style={{ width: '6px', height: '6px' }} />
          <span>{project.status}</span>
        </span>

        {isFeatured ? (
          <span className="featured-project-badge">
            <i className="fa-solid fa-star" aria-hidden="true" />
            <span>{project.featuredLabel || 'FEATURED PROJECT'}</span>
          </span>
        ) : isProminent ? (
          <span className="prominent-project-badge">PRIMARY CLOUD LAB</span>
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
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
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

        {/* Version Roadmap (for versioned platforms) OR Static Implementation Highlights */}
        {project.versions && project.versions.length > 0 ? (
          <VersionRoadmap versions={project.versions} />
        ) : (
          <div className="architecture-notes-box">
            <div className="architecture-title">
              <i className="fa-solid fa-microchip" aria-hidden="true" />
              <span>Implementation Highlights:</span>
            </div>
            <ul className="architecture-list">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Operational / Lifecycle Boundary Note */}
        {project.lifecycleNote && (
          <div className="project-lifecycle-note">
            <i className="fa-solid fa-circle-info" aria-hidden="true" />
            <span>{project.lifecycleNote}</span>
          </div>
        )}

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
              <i className="fab fa-github" aria-hidden="true" />
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
              <i className="fa-solid fa-arrow-up-right-from-square action-external-icon" aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}

          {project.secondaryLinks &&
            project.secondaryLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link secondary"
                aria-label={`${link.label} for ${project.title}`}
              >
                <i className={link.icon} aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            ))}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleCategories, setVisibleCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const allVisible: Record<string, boolean> = {};
      PROJECT_CATEGORIES.forEach((cat) => {
        allVisible[cat.id] = true;
      });
      setVisibleCategories(allVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catId = entry.target.getAttribute('data-category-id');
            if (catId) {
              setVisibleCategories((prev) => (prev[catId] ? prev : { ...prev, [catId]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    PROJECT_CATEGORIES.forEach((cat) => {
      const el = categoryRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            const sortedProjects = [...categoryProjects].sort((a, b) => {
              if (a.isFeatured) return -1;
              if (b.isFeatured) return 1;
              return 0;
            });
            const isCategoryVisible = Boolean(visibleCategories[category.id]);

            return (
              <div
                key={category.id}
                ref={(el) => {
                  categoryRefs.current[category.id] = el;
                }}
                data-category-id={category.id}
                className={`project-category-block ${isCategoryVisible ? 'is-visible' : ''}`}
                id={`category-${category.id}`}
              >
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
                  {sortedProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={idx}
                      isVisible={isCategoryVisible}
                    />
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
