import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <>
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h1 className="title-xl">
            Choose the Program That <span className="text-red">Fits Your Campus</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Three flexible packages. One goal — to make your campus the creative leader of your region. Start where you are. Scale as you grow.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* Package 1 - Base */}
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Base Package</h3>
                <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best for: First-time collaboration or Cultural Fest Integration</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Make your next cultural fest unforgettable. The Base Package brings curated short film screenings, an on-campus competition, jury recognition, institute branding across all creatives, and social media collaboration — all managed end-to-end by our team.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>What Your Institute Earns</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Ticketed campus screenings</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Local sponsor placements</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Content assets for admissions marketing</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Cultural prestige for your fest</li>
                </ul>
              </div>
            </div>

            {/* Package 2 - Engagement */}
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--film-red)', transform: 'scale(1.02)', boxShadow: '0 10px 30px rgba(229, 9, 20, 0.1)' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--film-red)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Most Popular</div>
              <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid rgba(229, 9, 20, 0.3)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Engagement Package</h3>
                <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best for: Skill Development + NAAC-Aligned Activities</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Everything in the Base Package, plus 1–2 day filmmaking workshops, script and edit review sessions, mentor-led learning labs, a dedicated institute YouTube playlist, and up to 80% revenue share on digital premieres. This is where campuses go from hosting events to building real academic value.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>What Your Institute Earns</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> YouTube ad revenue share</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Sponsored workshops</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Certification program fees</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Stronger NAAC and placement narratives</li>
                </ul>
              </div>
            </div>

            {/* Package 3 - Premium */}
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Premium Package</h3>
                <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best for: Flagship Campus Branding + National Visibility</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Everything in the Engagement Package, plus a celebrity guest (physical or virtual), national tour entry for the winning film, multi-city screenings, digital distribution support, and brand activation with PR support. The winning film gets direct, fee-free entry to the Showcase International Short Film Festival in Krakow, Poland.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>What Your Institute Earns</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Sponsorship deals & Ticketed public screenings</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Long-term digital content income</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> Brand-backed cultural IP creation</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--film-red)' }}>✔</span> International recognition</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <p style={{ fontSize: '1.35rem', marginBottom: '2rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
            This is not a cost. It's a revenue-generating cultural asset — one that improves placements, boosts admissions, and builds your campus's creative identity for years to come.
          </p>
          <Link to="/contact" className="btn btn-red" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Talk to Us About the Right Package for Your Campus →</Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
