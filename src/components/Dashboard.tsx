import React from 'react';
import { QUICK_METRICS } from '../data/portfolioData';

export const Dashboard: React.FC = () => {
  return (
    <section className="dashboard" aria-label="System status & background overview">
      <div className="container">
        <div className="dashboard-grid">
          {QUICK_METRICS.map((stat) => (
            <div key={stat.id} className="dashboard-card">
              <span className="metric-code">{stat.code}</span>
              <div className="metric-header">
                <span className="metric-value">{stat.value}</span>
                <i className={stat.icon} aria-hidden="true" />
              </div>
              <div className="metric-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
