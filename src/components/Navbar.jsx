import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playWarmTone, playMelodicArpeggio } from '../utils/audioSynth';

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

  return (
    <header className="navbar" role="banner">
      <div className="nav-shell">
        <a href="#top" className="nav-brand" aria-label="Yash Mahajan Home">
          <div className="brand-monogram">YM</div>
          <div className="brand-title">Yash Mahajan</div>
          <div className="brand-status-pill">
            <span className="pulse-dot"></span>
            <span>Available</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Work</a></li>
            <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
            <li><a href="#research" className={`nav-link ${activeSection === 'research' ? 'active' : ''}`}>Research</a></li>
            <li><a href="#trophies" className={`nav-link ${activeSection === 'trophies' ? 'active' : ''}`}>Awards</a></li>
            <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Arsenal</a></li>
            <li><a href="#music" className={`nav-link ${activeSection === 'music' ? 'active' : ''}`}>Sound</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Connect</a></li>
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
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button 
            type="button"
            className="btn-icon"
            onClick={onOpenTerminal}
            aria-label="Open Interactive CLI Terminal"
            title="Press Ctrl+K or click for CLI"
          >
            <Terminal size={18} />
          </button>

          <a 
            href={PERSONAL_INFO.resumePath} 
            download="Yash-Mahajan-Resume.pdf"
            className="btn-pill btn-pill-outline font-mono"
            style={{ fontSize: '0.78rem', padding: '6px 14px' }}
          >
            <Download size={14} />
            <span>CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
