import React from 'react';
import { RESEARCH_STUDIES } from '../data/portfolioData';

export default function Research() {
  const primaryPaper = RESEARCH_STUDIES[0];
  const secondaryStudies = RESEARCH_STUDIES.slice(1);

  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Scholarly Inquiry</span>
          <h2 className="section-title">Research Publications & Technical Studies</h2>
          <p className="section-desc">
            Bridging fundamental theoretical computer science, computer vision, and applied machine learning for environmental and astronomical systems.
          </p>
        </div>

        <div className="research-container">
          {/* Main Paper */}
          <article className="research-card reveal stagger-1">
            <div className="research-badge">
              <span>{primaryPaper.badge}</span>
            </div>

            <h3 className="research-title">{primaryPaper.title}</h3>

            <p className="research-meta">{primaryPaper.description}</p>
            <p className="research-meta" style={{ color: '#cbd5e1' }}>{primaryPaper.details}</p>

            <div className="project-tech-stack" style={{ marginTop: '10px' }}>
              {primaryPaper.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </article>

          {/* Secondary Studies */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {secondaryStudies.map((study, idx) => (
              <article key={study.title} className={`research-card reveal stagger-${idx + 2}`} style={{ padding: '24px' }}>
                <div 
                  className="research-badge" 
                  style={{ 
                    borderColor: idx === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(245, 158, 11, 0.4)', 
                    color: idx === 0 ? '#60a5fa' : '#fbbf24', 
                    background: idx === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)' 
                  }}
                >
                  <span>{study.badge}</span>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginTop: '8px' }}>
                  {study.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {study.description}
                </p>

                {study.stats && (
                  <div className="research-stats-grid">
                    {study.stats.map(s => (
                      <div key={s.label} className="stat-box">
                        <span className="stat-box-val">{s.value}</span>
                        <span className="stat-box-lbl">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
