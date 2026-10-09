import React, { useState, useEffect } from 'react';
import { MUSIC_NOTES } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function StageAndSound() {
  const [activeNote, setActiveNote] = useState(null);
  const [feedback, setFeedback] = useState('Click any key or press [A, S, D, F, G] on your keyboard');

  const triggerNote = (noteObj) => {
    setActiveNote(noteObj.key);
    playWarmTone(noteObj.freq, 'triangle', 1.4);
    setFeedback(`Voiced: ${noteObj.name} (${noteObj.freq.toFixed(1)} Hz)`);

    setTimeout(() => {
      setActiveNote(null);
    }, 220);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Do not trigger if user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const char = e.key.toUpperCase();
      const match = MUSIC_NOTES.find(n => n.char === char);
      if (match) {
        triggerNote(match);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="music" className="section" style={{ background: 'rgba(11, 15, 25, 0.4)' }}>
      <div className="container">
        <div className="music-wrapper reveal">
          <div className="music-content">
            <span className="section-eyebrow" style={{ color: '#fb7185' }}>Beyond The Code</span>
            <h2 className="music-title">Sound, Strings & The Stage</h2>
            <p className="music-lead">
              Code requires mathematical precision; music requires rhythmic cadence and harmonic intuition. When I'm away from the terminal, I'm playing acoustic & electric guitar, keyboard, and performing on stage.
            </p>
            
            <div className="music-badges">
              <span className="music-badge">🎸 Guitarist</span>
              <span className="music-badge">🎹 Keyboard & Piano</span>
              <span className="music-badge">🥈 2nd Position · College Music Competition</span>
              <span className="music-badge">🏆 2x Consecutive Institute Level Winner</span>
              <span className="music-badge">🥉 Bronze Medal · Inter-School Band</span>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
              // Try the interactive Web Audio synthesizer on the right. Press keys A, S, D, F, G on your keyboard or tap below to play real pentatonic chords.
            </p>
          </div>

          {/* Interactive Web Audio Synthesizer */}
          <div className="synth-pad-container">
            <div className="synth-header">
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-white)' }}>
                Polyphonic Mini-Synth
              </span>
              <span className="synth-status">● Web Audio Active</span>
            </div>

            <div className="synth-keys">
              {MUSIC_NOTES.map(note => (
                <button
                  key={note.key}
                  type="button"
                  className={`synth-key ${activeNote === note.key ? 'playing' : ''}`}
                  onClick={() => triggerNote(note)}
                  aria-label={`Play Note ${note.name}`}
                >
                  <span className="key-note">{note.note}</span>
                  <span className="key-char">[{note.char}]</span>
                </button>
              ))}
            </div>

            <div className="synth-note-info">
              {feedback}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
