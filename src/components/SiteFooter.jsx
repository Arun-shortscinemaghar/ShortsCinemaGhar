import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="site-footer" style={{ background: 'var(--bg-surface)', padding: '6rem 0 3rem', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--film-red)', borderRadius: '4px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 40 40" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10 L30 20 L10 30 Z" fill="white" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Shorts</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--film-red)' }}>Cinemaghar</span>
              </div>
            </Link>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '300px' }}>
              Start Small. Dream Big.<br />
              {"India's first campus-rooted cinematic ecosystem, empowering the next generation of storytellers."}
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li><Link to="/about" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>The Mission</Link></li>
              <li><Link to="/programs" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Programs Overview</Link></li>
              <li><Link to="/film-lab" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Film Lab Ecosystem</Link></li>
              <li><Link to="/submit" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Submit Your Story</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li><Link to="/contact" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Host on Campus</Link></li>
              <li><Link to="/gallery" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Cinematic Gallery</Link></li>
              <li><Link to="/partners" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Our Partners</Link></li>
              <li><a href="mailto:hello@shortscinemaghar.com" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hello@shortscinemaghar.com</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            {"© 2026 Shorts Cinemaghar. Screening Powered by "}<span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Short Film Tour</span>.
          </p>
          <div className="flex-center" style={{ gap: '1.5rem' }}>
            <a href="#" className="social-link" aria-label="Instagram" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
