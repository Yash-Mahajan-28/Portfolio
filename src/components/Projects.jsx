import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, GitBranch, Layers, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function Projects({ onOpenArchitecture, soundEnabled }) {
  const [filter, setFilter] = useState('all');
  const [showAllSecondary, setShowAllSecondary] = useState(false);
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const carouselRef = useRef(null);

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
    setCurrentProjectIdx(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
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

  const displayedSecondary = showAllSecondary ? filteredSecondary : filteredSecondary.slice(0, 3);

  const handleScrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('.project-card')?.offsetWidth || 300;
    const scrollAmount = direction === 'next' ? cardWidth + 14 : -(cardWidth + 14);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.querySelector('.project-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    const newIdx = Math.round(container.scrollLeft / cardWidth);
    setCurrentProjectIdx(Math.min(Math.max(newIdx, 0), filteredFeatured.length - 1));
  };

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

        {/* Filter Navigation */}
        <div className="projects-nav-scroll-wrap">
          <div className="projects-nav" role="tablist">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat.id)}
                role="tab"
              >
                <span>{cat.label}</span>
                <span className="filter-count-badge">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Bar with Pagination Dots & Arrows */}
        <div className="mobile-carousel-controls">
          <div className="carousel-status-text font-mono">
            <span>Project {Math.min(currentProjectIdx + 1, filteredFeatured.length)} of {filteredFeatured.length}</span>
          </div>

          <div className="carousel-dots">
            {filteredFeatured.map((_, i) => (
              <span 
                key={i} 
                className={`carousel-dot ${currentProjectIdx === i ? 'active' : ''}`}
                onClick={() => {
                  if (carouselRef.current) {
                    const card = carouselRef.current.querySelector('.project-card');
                    if (card) {
                      carouselRef.current.scrollTo({ left: i * (card.offsetWidth + 14), behavior: 'smooth' });
                    }
                  }
                }}
              />
            ))}
          </div>

          <div className="carousel-nav-arrows">
            <button 
              type="button" 
              className="carousel-arrow-btn" 
              onClick={() => handleScrollCarousel('prev')}
              disabled={currentProjectIdx === 0}
              aria-label="Previous project card"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              type="button" 
              className="carousel-arrow-btn" 
              onClick={() => handleScrollCarousel('next')}
              disabled={currentProjectIdx >= filteredFeatured.length - 1}
              aria-label="Next project card"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Primary Featured Projects */}
        <div 
          className="projects-grid" 
          ref={carouselRef}
          onScroll={handleCarouselScroll}
        >
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
          <div className="secondary-projects-section">
            <div className="secondary-section-title font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              // ADDITIONAL IMPLEMENTATIONS & HACKATHON BUILDS
            </div>

            <div className="more-projects-grid">
              {displayedSecondary.map((p) => (
                <article key={p.title} className="mini-project-card">
                  <div className="mini-top">
                    <span className="font-mono mini-badge">
                      {p.badge}
                    </span>
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mini-link"
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

            {filteredSecondary.length > 3 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  type="button"
                  className="btn-pill btn-pill-outline font-mono"
                  style={{ fontSize: '0.8rem', padding: '8px 18px' }}
                  onClick={() => setShowAllSecondary(prev => !prev)}
                >
                  {showAllSecondary ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      <span>View All Secondary Projects ({filteredSecondary.length})</span>
                      <ChevronDown size={14} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
