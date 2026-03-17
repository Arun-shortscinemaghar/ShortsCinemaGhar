import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg viewBox="0 0 40 40" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="holes">
                <rect width="40" height="40" fill="white" />
                <circle cx="13" cy="12" r="2.5" fill="black" />
                <circle cx="27" cy="12" r="2.5" fill="black" />
              </mask>
            </defs>
            <g fill="var(--text-main)" mask="url(#holes)">
              <circle cx="13" cy="12" r="7" />
              <circle cx="27" cy="12" r="7" />
              <rect x="6" y="19" width="26" height="15" rx="2" />
              <path d="M31 22 l 7 -3 v 15 l -7 -3 z" />
            </g>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Shorts</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cinemaghar</span>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`mobile-menu-btn ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <div className="dropdown">
            <Link to="/programs" className="dropbtn">Programs <span className="arrow">▼</span></Link>
            <div className="dropdown-content">
              <Link to="/programs" onClick={toggleMenu}>All Programs</Link>
            </div>
          </div>
          <Link to="/film-lab" onClick={toggleMenu}>Film Lab</Link>
          <Link to="/submit" onClick={toggleMenu}>Submit Your Film</Link>
          <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
          <Link to="/partners" onClick={toggleMenu}>Partners</Link>
          <Link to="/contact" className="mobile-only-link" onClick={toggleMenu}>Contact</Link>
        </nav>

        <Link to="/contact" className="btn btn-red nav-cta" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Contact</Link>
      </div>
    </header>
  );
};

export default SiteHeader;
