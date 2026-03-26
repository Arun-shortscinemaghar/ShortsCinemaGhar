import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SiteHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 L30 20 L10 30 Z" fill="white" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="shorts">Shorts</span>
            <span className="cinemaghar">Cinemaghar</span>
          </div>
        </Link>

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
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          
          <div className="dropdown">
            <span className={`dropbtn ${location.pathname.startsWith('/programs') ? 'active' : ''}`}>
              Programs <span className="arrow">▼</span>
            </span>
            <div className="dropdown-content glass">
              <Link to="/programs">Overview</Link>
              <Link to="/programs/schools">Schools Edition</Link>
              <Link to="/programs/colleges">College Edition</Link>
            </div>
          </div>

          <Link to="/film-lab" className={location.pathname === '/film-lab' ? 'active' : ''}>Film Lab</Link>
          <Link to="/submit" className={location.pathname === '/submit' ? 'active' : ''}>Submit</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
          <Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partners</Link>
          <Link to="/contact" className="mobile-only-link">Contact</Link>
        </nav>

        <Link to="/contact" className="btn btn-red nav-cta">Join the Movement</Link>
      </div>
    </header>
  );
};

export default SiteHeader;
