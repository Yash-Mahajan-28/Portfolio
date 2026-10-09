import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Trophies from './components/Trophies';
import Arsenal from './components/Arsenal';
import StageAndSound from './components/StageAndSound';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ArchitectureModal from './components/ArchitectureModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeArchId, setActiveArchId] = useState(null);

  // Activate scroll-triggered reveal animations
  useScrollReveal();

  // Mouse spotlight position tracking
  useEffect(() => {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Global Ctrl+K / Cmd+K listener for Terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setTerminalOpen(false);
        setActiveArchId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Ambient Cursor Spotlight */}
      <div id="cursor-spotlight" className="cursor-spotlight" aria-hidden="true" />

      {/* Floating Navbar */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content */}
      <main>
        <Hero soundEnabled={soundEnabled} />
        <Metrics />
        <Projects 
          onOpenArchitecture={(id) => setActiveArchId(id)}
          soundEnabled={soundEnabled}
        />
        <Experience />
        <Research />
        <Trophies />
        <Arsenal />
        <StageAndSound />
        <Contact soundEnabled={soundEnabled} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal 
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        soundEnabled={soundEnabled}
      />

      {/* Architecture Deep Dive Modal */}
      <ArchitectureModal 
        projectId={activeArchId}
        onClose={() => setActiveArchId(null)}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}
