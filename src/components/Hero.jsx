import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Award, Zap, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function Hero({ soundEnabled }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    if (soundEnabled) {
      playWarmTone(523.25, 'sine', 0.2);
    }
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content reveal is-visible">
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <span>🏛 VESIT Mumbai · Class of 2027</span>
            </span>
            <span className="hero-badge hero-cgpi-badge">
              <Zap size={14} />
              <span>CGPI: {PERSONAL_INFO.cgpi}</span>
            </span>
            <span className="hero-badge" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399', background: 'rgba(16, 185, 129, 0.1)' }}>
              <Award size={14} />
              <span>10+ Hackathon Podiums</span>
            </span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="gradient-text">Backends</span> & <br />
            Applied <span className="gradient-violet">AI Systems</span>.
          </h1>

          <p className="hero-lead">
            {PERSONAL_INFO.bio}
          </p>

          <div className="hero-tags">
            <span className="tech-chip">Python / FastAPI</span>
            <span className="tech-chip">LangChain & Gemini</span>
            <span className="tech-chip">Spring Boot & Redis</span>
            <span className="tech-chip">Qiskit Quantum ML</span>
            <span className="tech-chip">TypeScript / Next.js</span>
            <span className="tech-chip">Docker & Cloud Run</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-pill btn-pill-primary">
              <span>Explore Selected Work</span>
              <ArrowDown size={16} />
            </a>
            
            <a href="#contact" className="btn-pill btn-pill-outline">
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>

            <button 
              type="button" 
              className={`copy-email-chip ${copied ? 'copied' : ''}`}
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard!' : PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>

        <div className="hero-visual reveal is-visible stagger-2">
          <div className="portrait-frame">
            {/* Floating Badges */}
            <div className="floating-chip chip-1">
              <span>🏆</span>
              <span>GOLC Int'l Winner '26</span>
            </div>

            <div className="floating-chip chip-2">
              <span>⚡</span>
              <span>9.76 Aggregate CGPI</span>
            </div>

            <div className="floating-chip chip-3">
              <span>📄</span>
              <span>Springer Nature Author</span>
            </div>

            <div className="portrait-image-wrapper">
              <img 
                src={PERSONAL_INFO.portraitPath} 
                alt="Yash Mahajan" 
                className="portrait-img" 
                width="360" 
                height="450" 
                loading="eager" 
              />
            </div>

            <div className="portrait-footer">
              <div>
                <div className="portrait-name">{PERSONAL_INFO.name}</div>
                <div className="portrait-loc">{PERSONAL_INFO.location}</div>
              </div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                // SDE & AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
