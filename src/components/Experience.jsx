import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

  return (
    <section id="experience" className="section" style={{ background: 'rgba(11, 15, 25, 0.45)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Professional History</span>
          <h2 className="section-title">Industry Internships & Roles</h2>
          <p className="section-desc">
            Hands-on production engineering across enterprise backend migrations, high-traffic frontend architectures, cloud DevOps pipelines, and academic systems.
          </p>
        </div>

        {/* Mobile Interactive Company Selector (Eliminates 900px of scrolling) */}
        <div className="mobile-company-selector-wrap">
          <div className="mobile-company-tabs" role="tablist" aria-label="Select company experience">
            {WORK_EXPERIENCE.map((exp, idx) => {
              const shortName = exp.company.includes('Jio') ? 'Jio Platforms' :
                exp.company.includes('Atyeti') ? 'Atyeti Inc' :
                exp.company.includes('Reliance') ? 'Reliance' : 'VESIT AI Cell';
              return (
                <button
                  key={exp.company}
                  type="button"
                  role="tab"
                  aria-selected={activeCompanyIndex === idx}
                  className={`company-tab-btn ${activeCompanyIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveCompanyIndex(idx)}
                >
                  <span className="tab-company-name">{shortName}</span>
                  <span className="tab-company-period">{exp.period.split('–')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          <article className="timeline-card mobile-active-exp-card">
            <div className="timeline-meta">
              <span className="timeline-date">{WORK_EXPERIENCE[activeCompanyIndex].period}</span>
              <h3 className="timeline-company">{WORK_EXPERIENCE[activeCompanyIndex].company}</h3>
              <span className="timeline-location">{WORK_EXPERIENCE[activeCompanyIndex].location}</span>
              <span className="timeline-badge">{WORK_EXPERIENCE[activeCompanyIndex].tag}</span>
            </div>

            <div className="timeline-body">
              <h4 className="timeline-role">{WORK_EXPERIENCE[activeCompanyIndex].role}</h4>
              <ul className="timeline-points">
                {WORK_EXPERIENCE[activeCompanyIndex].points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="timeline-skills">
                {WORK_EXPERIENCE[activeCompanyIndex].tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Desktop Full Timeline View */}
        <div className="timeline-container desktop-experience-timeline">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <article key={exp.company} className={`timeline-card reveal stagger-${idx + 1}`}>
              <div className="timeline-meta">
                <span className="timeline-date">{exp.period}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <span className="timeline-location">{exp.location}</span>
                <span className="timeline-badge">{exp.tag}</span>
              </div>

              <div className="timeline-body">
                <h4 className="timeline-role">{exp.role}</h4>
                <ul className="timeline-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                <div className="timeline-skills">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
