import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setMumbaiTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="brand-monogram" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
            YM
          </div>
          <div>
            <div className="footer-copy">
              © 2026 Yash Mahajan. Handcrafted in React & Vanilla CSS without AI slop.
            </div>
            <div className="font-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Mumbai, India · {mumbaiTime} IST
            </div>
          </div>
        </div>

        <ul className="footer-links">
          <li>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.resumePath} download="Yash-Mahajan-Resume.pdf" className="footer-link">
              Resume PDF
            </a>
          </li>
          <li>
            <a href="#top" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Top</span>
              <ArrowUp size={14} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
