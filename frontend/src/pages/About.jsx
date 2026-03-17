import React from 'react';

const About = () => {
  return (
    <>
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h1 className="title-xl">
            We Don't Run Events. <span className="text-red">We Build Ecosystems.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Every year, thousands of students with real filmmaking talent leave their cities — not because they lack skill, but because the opportunities never come to them. Industry mentors don't visit. Platforms don't exist. Campuses host cultural fests that disappear the next morning.
          </p>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: 'var(--film-red)', fontWeight: 'bold' }}>
            We decided to change that.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Born from Short Film Tour — <span className="text-red">Built for Indian Campuses</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Shorts Cinemaghar is powered by Short Film Tour — India's first offline short film platform. After years of running screenings, building filmmaker networks, and watching short films transform audiences across cities, we saw a massive gap: colleges wanted real creative programs, and student filmmakers wanted real platforms.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>So we built one that serves both.</strong>
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Shorts Cinemaghar is India's first campus-rooted cinematic ecosystem — a structured, year-round program that brings film screenings, masterclasses, production labs, jury recognition, digital distribution, and national tour exposure directly to your campus.
            </p>
          </div>
          <div className="value-card" style={{ borderColor: 'var(--border-light)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              To make world-class filmmaking education and industry access available to every aspiring creator in India — regardless of which city they live in.
            </p>
            <div style={{ padding: '1rem', borderLeft: '4px solid var(--film-red)', background: 'rgba(229, 9, 20, 0.05)' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                "Talent exists everywhere. Opportunity does not. We're here to fix that."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="pad-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title-lg">What Makes Us Different</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="value-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--film-red)', fontSize: '2rem', lineHeight: '1' }}>▪</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Not just an event</h3>
                <p style={{ color: 'var(--text-muted)' }}>A structured program that runs through the academic year</p>
              </div>
            </div>

            <div className="value-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--film-red)', fontSize: '2rem', lineHeight: '1' }}>▪</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Not just a screening</h3>
                <p style={{ color: 'var(--text-muted)' }}>A full ecosystem of learning, mentorship, production, and recognition</p>
              </div>
            </div>

            <div className="value-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--film-red)', fontSize: '2rem', lineHeight: '1' }}>▪</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Not just local</h3>
                <p style={{ color: 'var(--text-muted)' }}>Connected to a national tour and international festival exposure in Krakow, Poland</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
