import React from 'react';
import { METRICS } from '../data/portfolioData';

export default function Metrics() {
  return (
    <section className="metrics-section" aria-label="Key Engineering Metrics">
      <div className="container">
        <div className="metrics-grid">
          {METRICS.map((metric, idx) => (
            <div key={metric.label} className={`metric-card reveal stagger-${idx + 1}`}>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-sub">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
