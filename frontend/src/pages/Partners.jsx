import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <>
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h1 className="title-xl">
            Backed by the Best. <span className="text-red">Building with the Rest.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Shorts Cinemaghar is trusted by leading brands, institutions, and film organizations across India and beyond. Together, we're building India's most ambitious campus film movement.
          </p>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
            
            <div>
              <h2 className="title-md" style={{ marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--film-red)', paddingBottom: '0.5rem', display: 'inline-block' }}>Platform Partners</h2>
              <div className="value-card" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Short Film Tour</h3>
                <p className="text-muted">India's first offline short film platform. The backbone of our national tour circuit and digital distribution network.</p>
              </div>
            </div>

            <div>
              <h2 className="title-md" style={{ marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--film-red)', paddingBottom: '0.5rem', display: 'inline-block' }}>Brand Partners</h2>
              <div className="value-card" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Airtel · Sony</h3>
                <p className="text-muted">National brands that have trusted Shorts Cinemaghar for campus activation and brand integration.</p>
              </div>
            </div>

            <div>
              <h2 className="title-md" style={{ marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--film-red)', paddingBottom: '0.5rem', display: 'inline-block' }}>Festival & Film Partners</h2>
              <div className="value-card" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Bandra Film Festival · Showcase International Short Film Festival, Krakow, Poland · KIFA · Warsaw Film School</h3>
                <p className="text-muted">International and national festival networks offering prestige and showcasing opportunities for our filmmakers.</p>
              </div>
            </div>

            <div>
              <h2 className="title-md" style={{ marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--film-red)', paddingBottom: '0.5rem', display: 'inline-block' }}>Academic & Institutional Partners</h2>
              <div className="value-card" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Graphic Era Hill University, Dehradun · University of Delhi – Dept. of African Studies · Uttarakhand Shasan</h3>
                <p className="text-muted">Pioneering institutions adopting the cinematic ecosystem to drive cultural and educational impact on campus.</p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h2 className="title-md" style={{ marginBottom: '1rem' }}>Partner With a Movement, <span className="text-red">Not Just an Event</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
              Whether you're a brand looking for authentic campus activation, a film organization seeking wider reach, or an institution wanting to co-create a cultural program — Shorts Cinemaghar offers you a long-term, impact-first partnership model.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
              We work with partners who believe in what Indian independent cinema can do when it has the right platform.
            </p>
            <Link to="/contact" className="btn btn-red">Talk to Us About Partnership Opportunities →</Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Partners;
