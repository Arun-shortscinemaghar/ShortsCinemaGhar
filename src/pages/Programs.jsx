import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
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
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Our Ecosystems</p>
          <h1 className="title-xl">
             One Mission. <span className="text-gradient">Two Ecosystems.</span><br />
            Built for Every Stage.
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            Shorts Cinemaghar runs structured film programs at two levels — discovering storytelling in schools and turning passion into career pathways in colleges.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
            
            <div className="value-card reveal" ref={addToRefs} style={{ display: 'flex', flexDirection: 'column', padding: '4rem 3rem' }}>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--film-red)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                  Classes VIII–XII
                </p>
                <h3 className="title-md" style={{ fontSize: '2.2rem' }}>Schools Edition</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', flex: 1 }}>
                A 4–6 week guided storytelling program where students create their first short film using just a mobile phone. No equipment, no grading pressure—just pure creativity.
              </p>
              <Link to="/programs/schools" className="btn btn-red" style={{ alignSelf: 'flex-start' }}>
                Explore Schools Edition →
              </Link>
            </div>

            <div className="value-card reveal" ref={addToRefs} style={{ display: 'flex', flexDirection: 'column', padding: '4rem 3rem', transitionDelay: '0.2s', borderColor: 'var(--gold)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                  Higher Education
                </p>
                <h3 className="title-md" style={{ fontSize: '2.2rem' }}>College Edition</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', flex: 1 }}>
                A year-round campus cinematic ecosystem with masterclasses, production labs, and national tour exposure. Built for serious creative career development.
              </p>
              <Link to="/programs/colleges" className="btn btn-red" style={{ alignSelf: 'flex-start' }}>
                Explore College Edition →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs} style={{ textAlign: 'center' }}>
            <h2 className="title-lg">
              Structured <span className="text-red">Creative Programs</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto' }}>
              We build something that lasts—a process, a community, and a creative identity for your institution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div className="reveal" ref={addToRefs}>
              <h4 style={{ color: 'var(--film-red)', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Schools Edition Strategy</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                No professional equipment needed. No academic grading. Every student completes a film—not just the talented few. The journey matters more than the output.
              </p>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h4 style={{ color: 'var(--film-red)', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>College Edition Strategy</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Industry mentors, national tour, and digital distribution. Students graduate with professional portfolios, networks, and real career pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ textAlign: 'center' }}>
        <div className="container reveal" ref={addToRefs} style={{ maxWidth: '900px' }}>
          <h2 className="title-md" style={{ marginBottom: '3rem', lineHeight: '1.5' }}>
            Bring the Shorts Cinemaghar experience<br />to your campus today.
          </h2>
          <div className="flex-center" style={{ gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red">Talk to us Today →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
