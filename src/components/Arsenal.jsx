import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Arsenal() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Technical Mastery</span>
          <h2 className="section-title">The Engineering Arsenal</h2>
          <p className="section-desc">
            Pragmatic, battle-tested tools across high-concurrency backends, agentic orchestration frameworks, cloud infrastructure, and modern interfaces.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={cat.title} className={`skill-category-card reveal stagger-${(idx % 3) + 1}`}>
              <div className="skill-cat-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                {cat.description}
              </p>

              <div className="skill-pills">
                {cat.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
