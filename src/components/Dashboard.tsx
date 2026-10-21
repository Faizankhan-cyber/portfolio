import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/portfolioData';

export const Dashboard: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    certifications: 0,
    repositories: 0,
    hackathons: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            STATS.forEach((stat) => {
              const target = stat.count;
              const duration = 1000;
              const startTime = performance.now();

              const updateCount = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeProgress * target);

                setCounts((prev) => ({
                  ...prev,
                  [stat.id]: currentCount
                }));

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  setCounts((prev) => ({
                    ...prev,
                    [stat.id]: target
                  }));
                }
              };

              requestAnimationFrame(updateCount);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="dashboard" ref={sectionRef} aria-label="System status overview">
      <div className="container">
        <div className="dashboard-grid">
          {STATS.map((stat) => (
            <div key={stat.id} className="dashboard-card">
              <span className="metric-code">{stat.code}</span>
              <div className="metric-header">
                <span className="metric-value">
                  {hasAnimated ? counts[stat.id] : stat.count}
                  <span style={{ color: 'var(--primary)', fontSize: '2rem' }}>{stat.suffix}</span>
                </span>
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
