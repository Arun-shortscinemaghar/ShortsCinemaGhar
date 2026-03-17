import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Optional: Port the old background particles logic here if desired
    // Currently relying on the CSS and basic structure
  }, []);

  return (
    <>
      <section id="hero" className="hero container">
        <div className="lens-flare"></div>
        <div className="hero-content">
          <span className="hero-tagline" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Start Small. Dream Big.</span>
          <h1 className="title-xl">
            India's First Campus-Rooted <span className="text-red">Short Film Ecosystem</span>
          </h1>
          <p style={{ maxWidth: '1000px', margin: '0 auto 2rem' }}>
            We bring film screenings, industry mentorship, workshops, and national tour exposure directly to college campuses — turning student talent into real careers.
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red">Bring Shorts Cinemaghar to Your Campus →</Link>
            <Link to="/submit" className="btn btn-outline">Submit Your Film for Our Next Screening</Link>
          </div>
        </div>
      </section>

      {/* Trust Bar (3-Stat Strip) */}
      <section className="pad-section" style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--film-red)', marginBottom: '0.5rem' }}>200+</h3>
            <p className="text-muted" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Students Impacted</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--film-red)', marginBottom: '0.5rem' }}>35+</h3>
            <p className="text-muted" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Films Showcased</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--film-red)', marginBottom: '0.5rem' }}>150K+</h3>
            <p className="text-muted" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Social Reach</p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pad-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 4rem' }}>
            <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>More Than an Event. <span className="text-red">A Year-Round Creative Program.</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Talent doesn't live only in Mumbai or Delhi. It lives on every campus in every city — waiting for an opportunity that never comes. Shorts Cinemaghar changes that.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              We partner with colleges across India to build a full cinematic ecosystem on-campus: curated screenings, filmmaking labs, master classes from industry veterans, jury recognition, digital distribution, and revenue-sharing for student filmmakers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>For Students</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Hands-on filmmaking. Portfolio-ready projects. Real industry mentors. A career pathway — not just a degree.
              </p>
            </div>
            
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--film-red)', background: 'rgba(229, 9, 20, 0.05)' }}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>For Institutes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                National visibility. NAAC-aligned programs. Strong admissions differentiation. A cultural brand that lasts.
              </p>
            </div>
            
            <div className="value-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>For Filmmakers</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Screen your film. Reach new audiences. Earn recognition. Get onto the national tour circuit — zero entry fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pad-section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h2 className="title-md" style={{ marginBottom: '2rem', fontSize: '2rem' }}>
            Your campus doesn't just host a competition — <span className="text-red">it launches filmmakers onto the global stage.</span>
          </h2>
          <Link to="/contact" className="btn btn-red" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Partner With Us Today →</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
