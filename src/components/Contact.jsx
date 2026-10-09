import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, Download, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { PERSONAL_INFO } from '../data/portfolioData';
import { playWarmTone } from '../utils/audioSynth';

export default function Contact({ soundEnabled }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMsg, setStatusMsg] = useState('');
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (soundEnabled) {
      playWarmTone(523.25, 'sine', 0.2);
    }
    setTimeout(() => setCopiedType(null), 2200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    setStatusMsg('Transmitting dispatch to Yash...');

    try {
      // We submit to Web3Forms API. If no custom access_key is provided,
      // it uses a fallback transmission mechanism or drafts a direct email client dispatch.
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: PERSONAL_INFO.email,
        subject: `New Portfolio Inquiry from ${formData.name}`,
        // Users can set their free Web3Forms key in VITE_WEB3FORMS_KEY if deployed
        access_key: import.meta.env.VITE_WEB3FORMS_KEY || "e43b1790-272d-4c31-97b5-2fa7ce7782b6" 
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMsg('Transmission received! Message dispatched directly to yashmahajan2809@gmail.com.');
        setFormData({ name: '', email: '', message: '' });
        
        // Celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });

        if (soundEnabled) {
          playWarmTone(659.25, 'sine', 0.3);
        }
      } else {
        // Fallback to mailto client
        triggerMailtoFallback();
      }
    } catch (err) {
      // Network fallback
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    setStatus('success');
    setStatusMsg('Opening your email client to send directly to yashmahajan2809@gmail.com...');
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Start A Conversation</span>
          <h2 className="section-title">Let’s Build Something Great</h2>
          <p className="section-desc">
            Open for software engineering opportunities, backend & applied AI internships, and collaborative research initiatives.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Coordinates */}
          <div className="contact-info-card reveal stagger-1">
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Direct Coordinates
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Based in Mumbai, Maharashtra, India. Available for on-site roles across Mumbai/Bengaluru and high-impact remote teams worldwide.
              </p>
            </div>

            <div className="contact-direct-items">
              {/* Email */}
              <div 
                className="direct-item copy-trigger" 
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                style={{ cursor: 'pointer' }}
                title="Click to copy email address"
              >
                <div className="direct-icon">
                  <Mail size={18} />
                </div>
                <div className="direct-details">
                  <span className="direct-label">EMAIL (CLICK TO COPY)</span>
                  <span className="direct-value">
                    {copiedType === 'email' ? '✓ Copied to clipboard!' : PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="direct-item copy-trigger" 
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                style={{ cursor: 'pointer' }}
                title="Click to copy phone number"
              >
                <div className="direct-icon">
                  <Phone size={18} />
                </div>
                <div className="direct-details">
                  <span className="direct-label">PHONE (CLICK TO COPY)</span>
                  <span className="direct-value">
                    {copiedType === 'phone' ? '✓ Copied to clipboard!' : PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direct-item"
              >
                <div className="direct-icon">
                  <LinkedinIcon size={18} />
                </div>
                <div className="direct-details">
                  <span className="direct-label">LINKEDIN</span>
                  <span className="direct-value">linkedin.com/in/yash-mahajan ↗</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direct-item"
              >
                <div className="direct-icon">
                  <GithubIcon size={18} />
                </div>
                <div className="direct-details">
                  <span className="direct-label">GITHUB</span>
                  <span className="direct-value">github.com/Yash-Mahajan-28 ↗</span>
                </div>
              </a>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download="Yash-Mahajan-Resume.pdf" 
                className="btn-pill btn-pill-primary"
              >
                <Download size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal stagger-2">
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Transmit A Message
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Delivers straight to my personal inbox at <strong style={{ color: 'var(--text-white)' }}>{PERSONAL_INFO.email}</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">YOUR NAME</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="form-input" 
                  placeholder="e.g. Maya Chen" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">YOUR EMAIL</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="form-input" 
                  placeholder="e.g. maya@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">MESSAGE</label>
                <textarea 
                  id="contact-message" 
                  className="form-textarea" 
                  placeholder="Hi Yash, we came across your work on distributed backends and wanted to discuss..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required 
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn-pill btn-pill-primary" 
                style={{ alignSelf: 'flex-start', marginTop: '4px' }}
              >
                <Send size={15} />
                <span>{status === 'sending' ? 'Transmitting...' : 'Send Dispatch ⚡'}</span>
              </button>

              {statusMsg && (
                <div 
                  className="font-mono" 
                  style={{ 
                    fontSize: '0.82rem', 
                    marginTop: '8px', 
                    color: status === 'error' ? '#ef4444' : '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {status === 'error' && <AlertCircle size={14} />}
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
