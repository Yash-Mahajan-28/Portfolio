import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Arsenal() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

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

        {/* Mobile Domain Selector (Eliminates 1,200px of scrolling) */}
        <div className="mobile-arsenal-wrap">
          <div className="mobile-skill-tabs-scroll">
            <div className="mobile-skill-tabs" role="tablist">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const shortLabel = cat.title.includes('AI') ? 'AI & Agents' :
                  cat.title.includes('Backend') ? 'Backend & Dist.' :
                  cat.title.includes('Languages') ? 'Languages' :
                  cat.title.includes('Cloud') ? 'Cloud & DevOps' :
                  cat.title.includes('Quantum') ? 'Quantum ML' : 'Web & Interfaces';
                return (
                  <button
                    key={cat.title}
                    type="button"
                    role="tab"
                    aria-selected={activeCategoryIndex === idx}
                    className={`skill-tab-pill ${activeCategoryIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveCategoryIndex(idx)}
                  >
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <article className="skill-category-card mobile-active-skill-card">
            <div className="skill-cat-header">
              <div className="skill-icon">{SKILL_CATEGORIES[activeCategoryIndex].icon}</div>
              <h3 className="skill-cat-title">{SKILL_CATEGORIES[activeCategoryIndex].title}</h3>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              {SKILL_CATEGORIES[activeCategoryIndex].description}
            </p>

            <div className="skill-pills">
              {SKILL_CATEGORIES[activeCategoryIndex].skills.map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </article>
        </div>

        {/* Desktop Full 3-Column Skills Grid */}
        <div className="skills-grid desktop-skills-grid">
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
