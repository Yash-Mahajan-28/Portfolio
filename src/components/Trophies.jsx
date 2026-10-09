import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TROPHIES } from '../data/portfolioData';

export default function Trophies() {
  const [showAllMobile, setShowAllMobile] = useState(false);

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
          {TROPHIES.map((trophy, idx) => {
            const isHiddenOnMobile = !showAllMobile && idx >= 4;
            return (
              <div 
                key={trophy.title} 
                className={`trophy-card ${trophy.rankType} ${isHiddenOnMobile ? 'mobile-hidden-trophy' : ''} reveal stagger-${(idx % 4) + 1}`}
              >
                <div className="trophy-card-header">
                  <div className="trophy-icon-wrap">{trophy.icon}</div>
                  <span className={`trophy-rank ${trophy.rankType}`}>{trophy.rank}</span>
                </div>
                <h3 className="trophy-title">{trophy.title}</h3>
                <p className="trophy-event">{trophy.event}</p>
                <span className="trophy-year">{trophy.year}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Trophies Toggle */}
        <div className="mobile-trophies-toggle">
          <button
            type="button"
            className="btn-pill btn-pill-outline font-mono"
            style={{ fontSize: '0.78rem', padding: '7px 16px', margin: '16px auto 0', display: 'flex' }}
            onClick={() => setShowAllMobile(prev => !prev)}
          >
            {showAllMobile ? (
              <>
                <span>Show Top 4 Podiums</span>
                <ChevronUp size={14} />
              </>
            ) : (
              <>
                <span>View All 8 Podium Finishes</span>
                <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
