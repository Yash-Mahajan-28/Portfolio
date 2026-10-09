import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
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

        <div className="timeline-container">
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
