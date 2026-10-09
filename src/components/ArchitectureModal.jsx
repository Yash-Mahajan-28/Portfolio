import React, { useEffect } from 'react';
import { ExternalLink, GitBranch, X } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function ArchitectureModal({ projectId, onClose, soundEnabled }) {
  useEffect(() => {
    if (projectId && soundEnabled) {
      playWarmTone(493.88, 'sine', 0.2);
    }
  }, [projectId, soundEnabled]);

  if (!projectId) return null;

  const project = FEATURED_PROJECTS.find(p => p.id === projectId);
  if (!project || !project.architecture) return null;

  const { architecture } = project;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Architecture Deep Dive">
      <div className="arch-window" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="arch-close-btn" onClick={onClose} aria-label="Close Architecture Modal">
          <X size={18} />
        </button>

        <div>
          <span className="font-mono" style={{ fontSize: '0.78rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {project.award}
          </span>
          <h3 style={{ fontSize: '1.65rem', color: 'var(--text-white)', marginTop: '4px' }}>
            {project.title} — Architectural Topology
          </h3>
          <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', marginTop: '4px' }}>
            {project.tech.join(' · ')}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: '1.65' }}>
            {architecture.summary}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {architecture.sections.map((sec, idx) => (
              <div 
                key={sec.heading} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '10px', 
                  padding: '18px' 
                }}
              >
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                  {sec.heading}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-primary">
              <span>Launch Live App</span>
              <ExternalLink size={14} />
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline">
              <span>View Source Code</span>
              <GitBranch size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
