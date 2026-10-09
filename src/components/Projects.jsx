import React, { useState } from 'react';
import { ExternalLink, GitBranch, Layers } from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function Projects({ onOpenArchitecture, soundEnabled }) {
  const [filter, setFilter] = useState('all');

  const allProjectsCount = FEATURED_PROJECTS.length + SECONDARY_PROJECTS.length;

  const countCategory = (catId) => {
    if (catId === 'all') return allProjectsCount;
    const fCount = FEATURED_PROJECTS.filter(p => p.category.includes(catId)).length;
    const sCount = SECONDARY_PROJECTS.filter(p => p.category.includes(catId)).length;
    return fCount + sCount;
  };

  const categories = [
    { id: 'all', label: 'All Projects', count: countCategory('all') },
    { id: 'ai', label: 'Applied AI & Agents', count: countCategory('ai') },
    { id: 'quantum', label: 'Quantum & Research', count: countCategory('quantum') },
    { id: 'systems', label: 'Backend & Systems', count: countCategory('systems') },
    { id: 'fullstack', label: 'Fullstack & IoT', count: countCategory('fullstack') }
  ];

  const handleFilterChange = (catId) => {
    setFilter(catId);
    if (soundEnabled) {
      playWarmTone(392.00, 'sine', 0.12);
    }
  };

  const filteredFeatured = FEATURED_PROJECTS.filter(project => 
    filter === 'all' || project.category.includes(filter)
  );

  const filteredSecondary = SECONDARY_PROJECTS.filter(project => 
    filter === 'all' || project.category.includes(filter)
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Proven Engineering</span>
          <h2 className="section-title">Selected Systems & Research Projects</h2>
          <p className="section-desc">
            Production-grade backends, agentic LLM systems, hardware IoT ecosystems, and quantum simulation architectures built for real-world impact.
          </p>
        </div>

        {/* Filter Navigation with live counts */}
        <div className="projects-nav reveal stagger-1" role="tablist">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat.id)}
              role="tab"
            >
              <span>{cat.label}</span>
              <span 
                className="font-mono" 
                style={{ 
                  fontSize: '0.72rem', 
                  opacity: 0.8, 
                  marginLeft: '6px',
                  background: filter === cat.id ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  padding: '2px 7px',
                  borderRadius: '999px'
                }}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Primary Featured Projects */}
        <div className="projects-grid">
          {filteredFeatured.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
            >
              <div className="project-banner-wrap">
                <span className="project-badge-overlay">{project.award}</span>
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="project-banner-img" 
                  loading="lazy" 
                />
              </div>

              <div className="project-body">
                <div className="project-header-row">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-subtitle">{project.subtitle}</div>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="project-tech-stack">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-links">
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <span>Live App</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <span>Source</span>
                        <GitBranch size={13} />
                      </a>
                    )}
                  </div>

                  <button 
                    type="button" 
                    className="arch-btn"
                    onClick={() => onOpenArchitecture(project.id)}
                    title="Inspect System Architecture Topology"
                  >
                    <Layers size={14} />
                    <span>Architecture [//]</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Projects Grid */}
        {filteredSecondary.length > 0 && (
          <div className="more-projects-grid">
            {filteredSecondary.map((p) => (
              <article key={p.title} className="mini-project-card">
                <div className="mini-top">
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: '#fbbf24' }}>
                    {p.badge}
                  </span>
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>{p.linkText}</span>
                  </a>
                </div>

                <h4 className="mini-title">{p.title}</h4>
                <p className="mini-desc">{p.description}</p>

                <div className="project-tech-stack">
                  {p.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
