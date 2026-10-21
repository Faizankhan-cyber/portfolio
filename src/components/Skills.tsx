import React, { useState } from 'react';
import { TECH_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hands-on' | 'learning'>('all');

  return (
    <section id="stack">
      <div className="container">
        <div className="section-heading">
          <span className="terminal-meta-tag">TECH_INVENTORY // CLASSIFIED_STACK</span>
          <h2>Technical Stack &amp; Tooling</h2>
          <p className="subheading">
            Categorized technical capabilities grounded in lab experience and active coursework. Clearly distinguishing verified hands-on proficiency from current learning paths.
          </p>
        </div>

        {/* Filter controls */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`tech-status-badge ${filter === 'all' ? 'hands-on' : ''}`}
            onClick={() => setFilter('all')}
            style={{
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: '0.82rem',
              background: filter === 'all' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
              color: filter === 'all' ? '#050807' : 'var(--muted)',
              border: '1px solid var(--border)'
            }}
          >
            [ VIEW_ALL ]
          </button>
          <button
            type="button"
            className="tech-status-badge hands-on"
            onClick={() => setFilter('hands-on')}
            style={{
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: '0.82rem',
              background: filter === 'hands-on' ? 'rgba(0, 245, 160, 0.25)' : 'rgba(0, 245, 160, 0.05)'
            }}
          >
            ● VERIFIED HANDS-ON
          </button>
          <button
            type="button"
            className="tech-status-badge learning"
            onClick={() => setFilter('learning')}
            style={{
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: '0.82rem',
              background: filter === 'learning' ? 'rgba(255, 189, 46, 0.25)' : 'rgba(255, 189, 46, 0.05)'
            }}
          >
            ○ ACTIVE STUDY / EXPLORING
          </button>
        </div>

        {/* Stack Groups Grid */}
        <div className="stack-groups-grid">
          {TECH_GROUPS.map((group) => {
            const visibleItems = group.items.filter((item) => {
              if (filter === 'all') return true;
              return item.status === filter;
            });

            if (visibleItems.length === 0) return null;

            return (
              <div key={group.id} className="stack-group-card">
                <div className="stack-group-header">
                  <div className="stack-group-title">
                    <i className={group.icon} aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>
                  <span className="stack-module-code">{group.groupCode}</span>
                </div>

                <div className="stack-group-body">
                  <p className="stack-group-desc">{group.description}</p>

                  <div className="tech-items-list">
                    {visibleItems.map((item) => (
                      <div key={item.name} className="tech-item-row">
                        <div className="tech-item-info">
                          <span className="tech-item-name">{item.name}</span>
                          {item.details && (
                            <span className="tech-item-details">{item.details}</span>
                          )}
                        </div>

                        <span className={`tech-status-badge ${item.status}`}>
                          {item.status === 'hands-on' ? 'HANDS-ON' : 'EXPLORING'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
