import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="page-header">
        <div className="container reveal" ref={addToRefs}>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.9rem' }}>Collaboration</p>
          <h1 className="title-xl">
            Backed by the Best.<br />
            <span className="text-gradient">Building with the Rest.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            Shorts Cinemaghar is trusted by leading brands, institutions, and film organizations across India and beyond. Together, we're building India's most ambitious campus film movement.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', maxWidth: '1100px', margin: '0 auto 6rem' }}>
            
            <div className="reveal" ref={addToRefs}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Platform Partners
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="value-card">
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Short Film Tour</h3>
                  <p style={{ color: 'var(--text-muted)' }}>India's first offline short film platform. The backbone of our national tour circuit and digital distribution network.</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                <div className="value-card">
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem' }}>The Paperclip</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Building India’s first Research-to-Film Lab for Students & Independent Filmmakers.
</p>
                </div>
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Brand Partners
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                <div className="glass flex-center" style={{ height: '120px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', letterSpacing: '0.1em', opacity: 0.6 }}>AIRTEL</h3>
                </div>
                <div className="glass flex-center" style={{ height: '120px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', letterSpacing: '0.1em', opacity: 0.6 }}>SONY</h3>
                </div>
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Festival & Film Partners
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div className="value-card" style={{ padding: '2rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Bandra Film Festival</h4>
                </div>
                <div className="value-card" style={{ padding: '2rem', borderColor: 'var(--gold)' }}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Showcase Int. Short Film Festival</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Krakow, Poland</p>
                </div>
                <div className="value-card" style={{ padding: '2rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Warsaw Film School</h4>
                </div>
                <div className="value-card" style={{ padding: '2rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>KIFA</h4>
                </div>
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Institutional Partners
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                <div className="value-card">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Graphic Era Hill University</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Dehradun Campus - Our flagship implementation partner.</p>
                </div>
                <div className="value-card">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>University of Delhi</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Dept. of African Studies - Cultural & Academic collaboration.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="reveal glass" ref={addToRefs} style={{ textAlign: 'center', padding: '5rem 3rem', borderRadius: '12px' }}>
            <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>Partner with a Movement,<br /><span className="text-red">Not Just an Event</span></h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
              Whether you're a brand looking for authentic campus activation or an institution wanting to co-create a cultural program — Shorts Cinemaghar offers a long-term, impact-first model.
            </p>
            <Link to="/contact" className="btn btn-red">Talk to Us →</Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Partners;
