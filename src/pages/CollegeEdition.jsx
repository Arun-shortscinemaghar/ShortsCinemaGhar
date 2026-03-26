import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CollegeEdition = () => {
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
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Higher Education</p>
          <h1 className="title-xl">
            A Cinematic <span className="text-gradient">Ecosystem.</span><br />
            On Your Campus.
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            Not a one-day event. A year-round structured program bringing film screenings, industry masterclasses, and national tour exposure directly to your university.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal" ref={addToRefs}>
              <p style={{ color: 'var(--film-red)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>The Vision</p>
              <h2 className="title-md" style={{ marginBottom: '2rem' }}>Talent Exists Everywhere.<br /><span className="text-red">Opportunity Does Not.</span></h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Students in non-metro cities have the ambition, but the industry doesn't always come to them. Cultural events often come and go without lasting impact.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Shorts Cinemaghar changes that by building a permanent platform for creators where they are.
              </p>
            </div>
            <div className="reveal glass" ref={addToRefs} style={{ padding: '3.5rem', borderRadius: '16px', transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>360° <span className="text-red">Eco-System</span></h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <ul className="outcome-list" style={{ margin: 0 }}>
                  <li className="outcome-item">Curated screenings</li>
                  <li className="outcome-item">Campus competitions</li>
                </ul>
                <ul className="outcome-list" style={{ margin: 0 }}>
                  <li className="outcome-item">Industry labs</li>
                  <li className="outcome-item">National exposure</li>
                </ul>
              </div>
              <div className="quote-block" style={{ marginTop: '2.5rem', padding: '1.5rem' }}>
                "Not just an event — a year-round creative program."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">The 4-Phase <span className="text-gradient">Model</span></h2>
          </div>
          
          <div className="phase-grid">
            {[
              { step: '01', title: 'Launch', desc: 'Curated screenings and campus-wide competitions to ignite the creative spark.' },
              { step: '02', title: 'Learning', desc: 'Masterclasses and filmmaking labs led by working industry professionals.' },
              { step: '03', title: 'Creation', desc: 'Supported production with mentor feedback, turning ideas into real films.' },
              { step: '04', title: 'Showcase', desc: 'National tour screenings and digital distribution. From campus to the country.' }
            ].map((p, i) => (
              <div key={i} className="phase-card reveal" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h4 style={{ fontSize: '1.5rem', opacity: 0.3, marginBottom: '0.5rem' }}>{p.step}</h4>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal glass" ref={addToRefs} style={{ borderColor: 'var(--gold)', padding: '4rem', background: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent)' }}>
              <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>International Entry</p>
              <h2 className="title-md" style={{ marginBottom: '2rem', color: 'var(--gold)' }}>Direct Path to<br />Krakow, Poland.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Winning films get official selection at the Showcase International Short Film Festival. Zero entry fees. Full sponsorship. Global exposure for your university.
              </p>
              <div className="quote-block" style={{ margin: 0, padding: '1.5rem', borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                "Launching filmmakers onto the global stage."
              </div>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem' }}>Campus <span className="text-red">Packages.</span></h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {['Base Package: Best for Cultural Fests', 'Engagement Package: NAAC-Aligned Activities', 'Premium Package: National Visibility'].map((pkg, i) => (
                  <div key={i} style={{ padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                    <p style={{ margin: 0, fontWeight: 500 }}>{pkg}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '2.5rem', color: 'var(--text-muted)' }}>Choose the package that fits your university's growth ambition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">Industry <span className="text-red">Mentors</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Professionals who show up in person for your students.</p>
          </div>
          <div className="flex-center" style={{ gap: '2rem', flexWrap: 'wrap' }}>
            {['Anubhav Sinha', 'Mukesh S. Bhatt', 'Ishteyak Khan', 'Manuj Sharma', 'Manu Rishi Chadha'].map((name, i) => (
              <div key={i} className="reveal glass" ref={addToRefs} style={{ padding: '1.5rem 2.5rem', borderRadius: '50px', transitionDelay: `${i * 0.1}s` }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ textAlign: 'center' }}>
        <div className="container reveal" ref={addToRefs} style={{ maxWidth: '900px' }}>
          <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>A Strategic Investment.</h2>
          <h3 className="title-lg" style={{ marginBottom: '3.5rem', fontSize: '2.5rem', lineHeight: '1.4' }}>
            Build a <span className="text-red">Cultural Movement</span> on Your Campus.
          </h3>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {[
              { val: '200+', label: 'Students' },
              { val: '35+', label: 'Films' },
              { val: '150K+', label: 'Reach' }
            ].map((s, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border-light)', minWidth: '180px' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--film-red)', margin: 0 }}>{s.val}</p>
                <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{s.label}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn btn-red">Talk to us Today →</Link>
        </div>
      </section>
    </>
  );
};

export default CollegeEdition;
