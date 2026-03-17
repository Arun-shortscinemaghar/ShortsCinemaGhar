import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h1 className="title-xl">
            This Is What a Campus <span className="text-red">Comes Alive Looks Like</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            From Dehradun to the next city — here's what happens when Shorts Cinemaghar arrives on campus. Real students. Real films. Real energy.
          </p>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Masterclasses & Expert Sessions</h3>
              <p className="text-muted">Candid shots of mentors engaging with students in sessions.</p>
              {/* Image Placeholder */}
              <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [Image: short film screening campus Dehradun 2025]
              </div>
            </div>

            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Film Screenings</h3>
              <p className="text-muted">Audience shots, open-air cinema moments, reaction captures.</p>
              {/* Image Placeholder */}
              <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [Image: open air student cinema reaction]
              </div>
            </div>
            
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Awards & Recognition</h3>
              <p className="text-muted">Jury ceremonies, certificate handovers, podium moments.</p>
              {/* Image Placeholder */}
              <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [Image: film award ceremony campus]
              </div>
            </div>

            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Workshops in Action</h3>
              <p className="text-muted">Students working, shooting, editing, discussing their craft.</p>
              {/* Image Placeholder */}
              <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [Image: filmmaking workshop students Shorts Cinemaghar]
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--border-light)' }}>
            <h2 style={{ fontSize: '2rem', fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '2rem' }}>"One campus proved the model. Fifty campuses will build a movement."</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Want this energy on your campus? Let's make it happen.</p>
            <Link to="/contact" className="btn btn-red">Partner With Shorts Cinemaghar →</Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;
