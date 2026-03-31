import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SchoolsEdition = () => {
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
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Classes VIII–XII</p>
          <h1 className="title-xl">
            Your Students Have<br />
            <span className="text-gradient">Stories to Tell.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            A structured 4–6 week guided storytelling program where students create their first film using only their mobile phones — culminating in a curated school showcase.
          </p>
        </div>
      </section>

      <div className="reassurance-strip">
        <div className="container">
          <div className="reassurance-grid">
            <div className="reassurance-item reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <span className="text-red" style={{ fontSize: '1.2rem' }}>✔</span> No professional equipment req.
            </div>
            <div className="reassurance-item reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <span className="text-red" style={{ fontSize: '1.2rem' }}>✔</span> No academic grading pressure
            </div>
            <div className="reassurance-item reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <span className="text-red" style={{ fontSize: '1.2rem' }}>✔</span> No elimination-based judging
            </div>
          </div>
        </div>
      </div>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal" ref={addToRefs}>
              <p style={{ color: 'var(--film-red)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Why This Matters</p>
              <h2 className="title-md" style={{ marginBottom: '2rem' }}>The World is Visual.<br />Is Your School Keeping Up?</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Today's students consume stories constantly. Yet very few are guided in how to understand stories critically or express ideas responsibly.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Creative exposure needs to be intentional, structured, and safe. That's exactly what the Schools Edition is built to do.
              </p>
            </div>
            <div className="reveal glass" ref={addToRefs} style={{ padding: '3.5rem', borderRadius: '12px', transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Not a Talent Hunt. A <span className="text-red">Journey.</span></h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                The Schools Edition is a guided creative process designed to reduce performance pressure and encourage team-based participation.
              </p>
              <div className="quote-block" style={{ margin: 0, padding: '1.5rem', borderLeftWidth: '3px' }}>
                "The journey matters more than comparison."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">The 3-Phase <span className="text-gradient">Journey</span></h2>
          </div>
          
          <div className="phase-grid">
            <div className="phase-card reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <h4>Phase 1</h4>
              <h3>Orientation</h3>
              <p>Fundamentals of visual storytelling and viewing age-appropriate short films with clear guidelines.</p>
            </div>
            <div className="phase-card reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h4>Phase 2</h4>
              <h3>Development</h3>
              <p>Team-based script development and mobile film production under structured industry mentorship.</p>
            </div>
            <div className="phase-card reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <h4>Phase 3</h4>
              <h3>Showcase</h3>
              <p>A professionally curated school screening event followed by recognition and industry interaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2">
            <div className="reveal" ref={addToRefs}>
              <h3 className="title-md" style={{ marginBottom: '2.5rem' }}>Skills for the <span className="text-red">Future.</span></h3>
              <ul className="outcome-list">
                <li className="outcome-item">Confidence in articulating complex ideas</li>
                <li className="outcome-item">Structured collaboration and teamwork</li>
                <li className="outcome-item">Ownership of a completed creative project</li>
                <li className="outcome-item">Responsible and ethical storytelling</li>
              </ul>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '2.5rem' }}>Institutional <span className="text-red">Growth.</span></h3>
              <ul className="outcome-list">
                <li className="outcome-item">High-visibility academically balanced showcase</li>
                <li className="outcome-item">Strengthened parent engagement and trust</li>
                <li className="outcome-item">Modern creative exposure for students</li>
                <li className="outcome-item">Admissions-ready branding content</li>
              </ul>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '2.5rem' }}>Institutional <span className="text-red">Growth.</span></h3>
              <ul className="outcome-list">
                <li className="outcome-item">High-visibility academically balanced showcase</li>
                <li className="outcome-item">Strengthened parent engagement and trust</li>
                <li className="outcome-item">Modern creative exposure for students</li>
                <li className="outcome-item">Admissions-ready branding content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none', textAlign: 'center' }}>
        <div className="container reveal" ref={addToRefs}>
          <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Ready to Empower Your Students?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            Nurture student expression responsibly while strengthening your institution's visibility.
          </p>
          <Link to="/contact" className="btn btn-red">Bring it to Your Campus →</Link>
        </div>
      </section>
    </>
  );
};

export default SchoolsEdition;
