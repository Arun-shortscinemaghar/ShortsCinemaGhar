import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <section id="hero" className="hero">
        <div className="lens-flare"></div>
        <div className="container">
          <div className="hero-content">
            <div className="reveal" ref={addToRefs}>
              <span className="hero-tagline">Start Small. Dream Big.</span>
              <h1 className="title-xl">
                India's First <span className="text-gradient">Campus-Rooted</span><br />
                <span className="text-red">Short Film Ecosystem</span>
              </h1>
              <p style={{ maxWidth: '800px', margin: '2rem auto 3rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                We bring film screenings, industry mentorship, workshops, and national tour exposure directly to college campuses — turning student talent into real careers.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-red">Bring it to Your Campus →</Link>
                <Link to="/submit" className="btn btn-outline">Submit Your Film</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <h3 className="title-md" style={{ color: 'var(--film-red)', marginBottom: '0.5rem' }}>200+</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Students Impacted</p>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ color: 'var(--film-red)', marginBottom: '0.5rem' }}>35+</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Films Showcased</p>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <h3 className="title-md" style={{ color: 'var(--film-red)', marginBottom: '0.5rem' }}>150K+</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Social Reach</p>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
              <h3 className="title-md" style={{ color: 'var(--film-red)', marginBottom: '0.5rem' }}>50+</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Campuses Target</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pad-section">
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.9rem' }}>Our Philosophy</p>
            <h2 className="title-lg">More Than an Event. <span className="text-gradient">A Year-Round Creative Program.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div style={{ marginBottom: '2rem', height: '60px', width: '60px', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🎓</span>
              </div>
              <h3 style={{ marginBottom: '1.5rem' }}>For Students</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Hands-on filmmaking. Portfolio-ready projects. Real industry mentors. A career pathway — not just a degree.
              </p>
            </div>

            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.2s', borderTopColor: 'var(--film-red)' }}>
              <div style={{ marginBottom: '2rem', height: '60px', width: '60px', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🏢</span>
              </div>
              <h3 style={{ marginBottom: '1.5rem' }}>For Institutes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                National visibility. NAAC-aligned programs. Strong admissions differentiation. A cultural brand that lasts.
              </p>
            </div>

            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <div style={{ marginBottom: '2rem', height: '60px', width: '60px', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🎬</span>
              </div>
              <h3 style={{ marginBottom: '1.5rem' }}>For Filmmakers</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Screen your film. Reach new audiences. Earn recognition. Get onto the national tour circuit — zero entry fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section global-strip">
        <div className="container">
          <div className="global-flex reveal" ref={addToRefs}>
            <div className="global-text-box">
              <p className="gold-tagline">Global Opportunity</p>
              <h2 className="title-md">Winning Films Get Direct Entry to <span className="text-gold">Krakow, Poland.</span></h2>
              <p className="global-desc">
                Your campus doesn't just host a competition — it launches filmmakers onto the global stage with fully sponsored submissions to international festivals.
              </p>
            </div>
            <Link to="/programs" className="btn btn-gold">Explore the Program →</Link>
          </div>
        </div>
      </section>

      <section className="pad-section final-cta-section">
        <div className="container reveal" ref={addToRefs}>
          <h2 className="title-lg">
            Ready to Transform Your <span className="text-red">Campus?</span>
          </h2>
          <p className="cta-desc">
            Join the movement that's building the next generation of Indian filmmakers.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-red">Talk to Us</Link>
            <Link to="/programs" className="btn btn-glass">Compare Packages</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
