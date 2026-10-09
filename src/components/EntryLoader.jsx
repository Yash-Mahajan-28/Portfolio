import React, { useState, useEffect } from 'react';

const SYSTEM_LOGS = [
  { min: 0, text: 'BOOTING YASH MAHAJAN KERNEL [v2.4.0]...' },
  { min: 12, text: 'MIGRATING LEGACY FLASK SERVICES TO FASTAPI...' },
  { min: 24, text: 'WARMING REDIS CLUSTER FOR ERP MASTERDATA...' },
  { min: 36, text: 'ENTANGLING QUBITS ON QISKIT AER BACKEND...' },
  { min: 50, text: 'ORCHESTRATING LANGCHAIN AGENT GRAPH [GEMINI 2.5]...' },
  { min: 64, text: 'TUNING PENTATONIC CHORDS ON GUITAR & KEYS...' },
  { min: 76, text: 'STREAMING ESP32 SENSOR TELEMETRY TO CLOUD RUN...' },
  { min: 88, text: 'SYNCHRONIZING 9.76 CGPI @ VESIT MUMBAI...' },
  { min: 97, text: 'ALL SYSTEMS NOMINAL · ENTERING PORTFOLIO...' }
];

export default function EntryLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(SYSTEM_LOGS[0].text);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    
    // Smooth ~2.3s countdown
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      // Find the current active message based on progress percentage
      for (let i = SYSTEM_LOGS.length - 1; i >= 0; i--) {
        if (current >= SYSTEM_LOGS[i].min) {
          setStatusText(SYSTEM_LOGS[i].text);
          break;
        }
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 680);
        }, 180);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Click to fast-forward/skip
  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  return (
    <div 
      className={`entry-loader-overlay ${isExiting ? 'is-exiting' : ''}`}
      onClick={handleSkip}
      title="Click anywhere to skip"
    >
      <div className="entry-loader-box">
        {/* Monogram with pulsing cyber glow */}
        <div className="entry-monogram-wrap">
          <div className="entry-monogram-glow"></div>
          <div className="entry-monogram font-mono">YM</div>
        </div>

        {/* Counter */}
        <div className="entry-counter-wrap">
          <span className="entry-counter font-mono">
            {progress.toString().padStart(3, '0')}
          </span>
          <span className="entry-percent font-mono">%</span>
        </div>

        {/* Dynamic Status / Interesting Message Box */}
        <div className="entry-status-terminal font-mono">
          <span className="entry-prompt">&gt;</span>
          <span className="entry-status-text">{statusText}</span>
        </div>

        {/* Progress Bar Track */}
        <div className="entry-bar-track">
          <div 
            className="entry-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="entry-sub-tip font-mono">
          <span>Tip: Press </span>
          <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#00f2fe' }}>Ctrl+K</kbd>
          <span> anywhere for interactive CLI</span>
        </div>

        <div className="entry-skip-hint font-mono">
          [ CLICK ANYWHERE TO SKIP ]
        </div>
      </div>
    </div>
  );
}
