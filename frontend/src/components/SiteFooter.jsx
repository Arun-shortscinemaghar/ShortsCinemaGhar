import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="site-footer" style={{ background: 'var(--bg-surface)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <svg viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fill="var(--text-main)">
                  <circle cx="13" cy="12" r="7" />
                  <circle cx="27" cy="12" r="7" />
                  <rect x="6" y="19" width="26" height="15" rx="2" />
                  <path d="M31 22 l 7 -3 v 15 l -7 -3 z" />
                </g>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Shorts</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cinemaghar</span>
              </div>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Start Small. Dream Big.<br />India’s first campus-rooted cinematic ecosystem.</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              <li><Link to="/about" className="text-muted footer-link">About Us</Link></li>
              <li><Link to="/programs" className="text-muted footer-link">Programs</Link></li>
              <li><Link to="/film-lab" className="text-muted footer-link">Film Lab</Link></li>
              <li><Link to="/submit" className="text-muted footer-link">Submit Film</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              <li><Link to="/contact" className="text-muted footer-link">Host on your Campus</Link></li>
              <li><Link to="/gallery" className="text-muted footer-link">Gallery</Link></li>
              <li><Link to="/partners" className="text-muted footer-link">Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>© 2026 Shorts Cinemaghar. Screening Powered by Short Film Tour.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="text-muted" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-muted" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
