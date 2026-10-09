import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playMelodicArpeggio } from '../utils/audioSynth';

export default function Navbar({ onOpenTerminal, soundEnabled, setSoundEnabled }) {
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'projects', 'experience', 'research', 'trophies', 'skills', 'music', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playMelodicArpeggio();
    }
  };

  const navLinks = [
    { href: '#projects', label: 'Work', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#research', label: 'Research', id: 'research' },
    { href: '#trophies', label: 'Awards', id: 'trophies' },
    { href: '#skills', label: 'Arsenal', id: 'skills' },
    { href: '#music', label: 'Sound', id: 'music' },
    { href: '#contact', label: 'Connect', id: 'contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="nav-shell">
        <a href="#top" className="nav-brand" aria-label="Yash Mahajan Home">
          <div className="brand-monogram">YM</div>
          <div className="brand-title">Yash Mahajan</div>
          <div className="brand-status-pill">
            <span className="pulse-dot"></span>
            <span className="pill-text">Available</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button 
            type="button"
            className={`btn-icon ${soundEnabled ? 'active' : ''}`}
            onClick={handleSoundToggle}
            aria-label="Toggle Sound Mode"
            title={soundEnabled ? "Mute Ambient Audio" : "Enable Ambient Synthesizer"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button 
            type="button"
            className="btn-icon"
            onClick={onOpenTerminal}
            aria-label="Open Interactive CLI Terminal"
            title="Press Ctrl+K or click for CLI"
          >
            <Terminal size={16} />
          </button>

          <a 
            href={PERSONAL_INFO.resumePath} 
            download="Yash-Mahajan-Resume.pdf"
            className="btn-pill btn-pill-outline font-mono cv-btn"
            style={{ fontSize: '0.76rem', padding: '5px 12px' }}
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-nav-backdrop" 
            onClick={() => setMobileMenuOpen(false)} 
            style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
          />
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
            <div className="mobile-nav-inner">
              <div className="mobile-nav-header">
                <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                  NAVIGATION JUMP
                </span>
                <button 
                  type="button" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--text-muted)' }}
                  aria-label="Close navigation jump drawer"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="mobile-nav-links">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    >
                      <span>{link.label}</span>
                      <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Yash-Mahajan-Resume.pdf"
                  className="btn-pill btn-pill-primary font-mono"
                  style={{ fontSize: '0.8rem', padding: '8px 14px', width: '100%', justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={14} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
