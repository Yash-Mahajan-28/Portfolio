import React from 'react';
import { TROPHIES } from '../data/portfolioData';

export default function Trophies() {
  return (
    <section id="trophies" className="section" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Honors & Recognition</span>
          <h2 className="section-title">The Trophy Room</h2>
          <p className="section-desc">
            Competitive hackathons, algorithmic sprints, and engineering ideathons where technical rigor met real-world execution.
          </p>
        </div>

        <div className="trophy-grid">
          {TROPHIES.map((trophy, idx) => (
            <div 
              key={trophy.title} 
              className={`trophy-card ${trophy.rankType} reveal stagger-${(idx % 4) + 1}`}
            >
              <div className="trophy-icon-wrap">{trophy.icon}</div>
              <span className={`trophy-rank ${trophy.rankType}`}>{trophy.rank}</span>
              <h3 className="trophy-title">{trophy.title}</h3>
              <p className="trophy-event">{trophy.event}</p>
              <span className="trophy-year">{trophy.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
