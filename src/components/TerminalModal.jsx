import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playMelodicArpeggio, playWarmTone } from '../utils/audioSynth';

export default function TerminalModal({ isOpen, onClose, soundEnabled }) {
  const [logs, setLogs] = useState([
    { type: 'header', text: 'Yash Mahajan Interactive CLI Environment [v2.4.0]' },
    { type: 'info', text: "Type 'help' to inspect commands, 'projects' for live demos, or 'sudo hire' to proceed." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (soundEnabled) {
        playWarmTone(440, 'sine', 0.15);
      }
    }
  }, [isOpen, soundEnabled]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setLogs([{ type: 'info', text: 'Terminal buffer cleared.' }]);
      return;
    }

    const newLogs = [...logs, { type: 'cmd', text: `yash@portfolio:~$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available Commands:
  whoami       : Profile summary & identity
  projects     : Key software engineering repositories & live demos
  experience   : Industry internships (Jio, Reliance, Atyeti)
  awards       : Hackathon podiums & international honors
  skills       : Technical stack breakdown
  music        : Play harmonic Web Audio synthesis sequence
  resume       : Download official resume PDF
  contact      : Direct email, phone, and links
  sudo hire    : Fast-track recruiter sequence
  clear        : Clear the terminal screen`
        });
        break;

      case 'whoami':
        newLogs.push({
          type: 'output',
          text: `Yash Mahajan — Software Developer | Backend & Applied AI Engineer
Location: ${PERSONAL_INFO.location}
Education: ${PERSONAL_INFO.degree}, VESIT (CGPI: ${PERSONAL_INFO.cgpi})
Focus: Resilient distributed backends, agentic LLM pipelines, quantum simulation, and cloud automation.`
        });
        break;

      case 'projects':
        newLogs.push({
          type: 'output',
          text: `Key Projects:
  1. Quantum Playground (GOLC Int'l Winner): Interactive Qiskit Aer simulator platform.
  2. EY RFP Copilot (EY Techathon 6.0): Autonomous LangChain agent for enterprise bids. (https://eyrfp-copilot.vercel.app)
  3. SafeLabs (Hackquinox 2.0 & GDG Winner): ESP32 + Vertex AI IoT laboratory system.
  4. Re-mine-AI (Syrus Sustainability Winner): Multimodal AI + Blockchain e-waste valuation.
  5. Citation-First (Ideathon Winner): Grounded AI academic search engine. (https://citation-first.vercel.app)
  6. OS-Tutor: Interactive OS scheduling and memory algorithms simulator. (https://os-tutor.streamlit.app)`
        });
        break;

      case 'experience':
      case 'exp':
        newLogs.push({
          type: 'output',
          text: `Industry Internships:
  • Jio Platforms Limited (Jun-Jul 2026): DevOps Engineer Intern (Cloud & Infrastructure)
  • Atyeti Robotics Pvt Ltd (Dec 2025-Jan 2026): SDE Frontend (Next.js + Django production)
  • Reliance Industries Limited (May-Jul 2025): SDE Python Backend (Flask to FastAPI & Redis caching)
  • VESIT Winter Internships: Smart Question Paper Digitization & Exam Management System`
        });
        break;

      case 'awards':
        newLogs.push({
          type: 'output',
          text: `Trophy Showcase:
  🏆 Winner - GOLC International Award 2026 (Quantum Playground)
  🏆 Winner - GDG TechSprint Hackathon 2026 (SafeLabs IoT-AI)
  🏆 Winner - Hackquinox 2.0 National Hackathon 2026
  🏆 Best Sustainability - Syrus Hackathon 2026 (Re-mine-AI)
  🏆 Top 5 Honorable Mention - Q-volution International Hackathon 2026
  🏆 Winner - ISTE VESIT Ideathon 2025 (Citation-First)
  🏆 Rank 2 - VESIT Build-a-thon 2026`
        });
        break;

      case 'skills':
        newLogs.push({
          type: 'output',
          text: `Technical Arsenal:
  [Backend]  : Python, FastAPI, Django, Java, Spring Boot, Redis, REST APIs
  [AI & Data]: LangChain, Gemini / Vertex AI, Qiskit Aer, PyTorch, Vector DBs, RAG
  [Cloud]    : Docker, Cloud Run, Azure DevOps, CI/CD, Linux, Firebase
  [Frontend] : TypeScript, Next.js, React, Three.js, Flutter / Dart
  [Databases]: PostgreSQL, MongoDB Atlas, Redis`
        });
        break;

      case 'music':
        newLogs.push({
          type: 'output',
          text: `Playing pentatonic harmony...
[♫ Voicing: Cmaj9 chord - C4, E4, G4, B4, D5]`
        });
        playMelodicArpeggio();
        break;

      case 'resume':
      case 'cv':
        newLogs.push({
          type: 'output',
          text: `Initiating resume download: Yash-Mahajan-Resume.pdf`
        });
        const a = document.createElement('a');
        a.href = PERSONAL_INFO.resumePath;
        a.download = 'Yash-Mahajan-Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        break;

      case 'sudo hire':
        newLogs.push({
          type: 'output',
          text: `========================================================
  ACCESS GRANTED: Candidate Yash Mahajan
  Status: High-Impact Backend & Applied AI Engineer
  Recommendation: High Priority Dispatch to ${PERSONAL_INFO.email}
========================================================`
        });
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
        if (soundEnabled) {
          playMelodicArpeggio();
        }
        break;

      case 'contact':
        newLogs.push({
          type: 'output',
          text: `Direct Coordinates:
  • Email   : ${PERSONAL_INFO.email}
  • Phone   : ${PERSONAL_INFO.phone}
  • LinkedIn: ${PERSONAL_INFO.linkedin}
  • GitHub  : ${PERSONAL_INFO.github}`
        });
        break;

      default:
        newLogs.push({
          type: 'error',
          text: `Command not recognized: '${cmd}'. Type 'help' for manual.`
        });
        break;
    }

    setLogs(newLogs);
    if (soundEnabled) {
      playWarmTone(330, 'sine', 0.1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Interactive Terminal">
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="term-dot red" onClick={onClose} style={{ cursor: 'pointer' }}></span>
            <span className="term-dot yellow"></span>
            <span className="term-dot green"></span>
          </div>
          <div className="terminal-title">yash@portfolio:~ (bash)</div>
          <button type="button" className="terminal-close" onClick={onClose} aria-label="Close Terminal">✕</button>
        </div>

        <div ref={bodyRef} className="terminal-body">
          {logs.map((log, i) => (
            <div key={i} className="term-log">
              {log.type === 'cmd' && <p><span className="accent">{log.text}</span></p>}
              {log.type === 'header' && <p><span className="accent" style={{ fontWeight: 700 }}>{log.text}</span></p>}
              {log.type === 'info' && <p style={{ color: '#94a3b8' }}>{log.text}</p>}
              {log.type === 'output' && <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: '#e2e8f0' }}>{log.text}</pre>}
              {log.type === 'error' && <p style={{ color: '#ef4444' }}>{log.text}</p>}
            </div>
          ))}
        </div>

        <div className="terminal-input-row">
          <span className="terminal-prompt">yash@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="type a command... (try 'help' or 'sudo hire')"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
