import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-status">
          <span className="status-indicator-dot" style={{ width: '8px', height: '8px' }} />
          <span>
            OPERATIONAL_ENV: <span className="status-indicator">ONLINE</span>
          </span>
          <span style={{ color: 'var(--muted-dark)', margin: '0 8px' }}>|</span>
          <span style={{ color: 'var(--muted)' }}>SSMRV_COLLEGE // BENGALURU</span>
        </div>

        <div className="footer-copyright">
          <span>&copy; {currentYear} {PERSONAL_INFO.name}. Cloud &amp; Cybersecurity Portfolio.</span>
        </div>
      </div>
    </footer>
  );
};
