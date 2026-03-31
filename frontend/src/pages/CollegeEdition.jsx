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
                Students have the ambition, but the industry doesn't always come to them. Cultural events often come and go without lasting impact.
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
          <div className="reveal glass" ref={addToRefs} style={{ borderColor: 'var(--gold)', padding: '4rem', background: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent)', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>International Entry</p>
            <h2 className="title-md" style={{ marginBottom: '2rem', color: 'var(--gold)' }}>Direct Path to<br />Krakow, Poland.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Winning films get official selection at the Showcase International Short Film Festival. Zero entry fees. Full sponsorship. Global exposure for your university.
            </p>
            <div className="quote-block" style={{ margin: '0 auto', padding: '1.5rem', borderColor: 'var(--gold)', color: 'var(--gold)', maxWidth: 'max-content' }}>
              "Launching filmmakers onto the global stage."
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title-lg">Campus <span className="text-red">Packages</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>Choose the package that fits your university's growth ambition.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: "Base Package",
                themeColor: "var(--film-red)",
                bgGradient: "rgba(220, 38, 38, 0.15)",
                borderCol: "rgba(220, 38, 38, 0.2)",
                bestFor: "First time collaboration / Cultural Fest Integration",
                includes: [
                  "Curated film screenings",
                  "On-campus short film competition",
                  "Jury recognition & awards",
                  "Institute branding on all creatives",
                  "Social media collaboration"
                ],
                outcomes: [
                  "Entry-level student engagement",
                  "Cultural prestige for festivals",
                  "Content assets for admissions marketing"
                ],
                revenue: [
                  "Ticketed campus screenings",
                  "Local sponsor placements",
                  "Brand visibility ROI"
                ]
              },
              {
                name: "Engagement Package",
                themeColor: "#3b82f6",
                bgGradient: "rgba(59, 130, 246, 0.15)",
                borderCol: "rgba(59, 130, 246, 0.2)",
                bestFor: "Skill Development + NAAC-Aligned Activities",
                includes: [
                  "1-2 day filmmaking workshop",
                  "Script & edit learning labs",
                  "Mentor on boarding",
                  "Dedicated institute YouTube playlist",
                  "80% revenue share on digital premieres"
                ],
                outcomes: [
                  "Hands-on academic value",
                  "Strong NAAC & placement narratives",
                  "Faculty + student upskilling"
                ],
                revenue: [
                  "YouTube ad revenue share",
                  "Sponsored workshops",
                  "Certification program fees"
                ]
              },
              {
                name: "Premium Package",
                themeColor: "#a855f7",
                bgGradient: "rgba(168, 85, 247, 0.15)",
                borderCol: "rgba(168, 85, 247, 0.2)",
                bestFor: "Flagship Campus Branding + National Visibility",
                includes: [
                  "Celebrity guest (physical or virtual)",
                  "National-level entry for winners",
                  "Multi-city screenings",
                  "Digital distribution support",
                  "Brand activations & PR support"
                ],
                outcomes: [
                  "National-level campus recognition",
                  "Strong admissions differentiation",
                  "High-profile alumni success stories"
                ],
                revenue: [
                  "Sponsorship deals",
                  "Ticketed public screenings",
                  "Long-term digital content income",
                  "Brand-backed cultural IP creation"
                ]
              }
            ].map((pkg, i) => (
              <div key={i} className="reveal glass" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '2rem', background: `linear-gradient(to bottom, ${pkg.bgGradient}, transparent)`, borderBottom: `1px solid ${pkg.borderCol}` }}>
                  <h3 style={{ fontSize: '1.8rem', color: pkg.themeColor, marginBottom: '0.75rem' }}>{pkg.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Best for: {pkg.bestFor}</p>
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Includes:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                          <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.1rem' }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Institute Outcomes:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {pkg.outcomes.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                          <span style={{ color: pkg.themeColor, marginRight: '0.75rem', fontSize: '1.2rem', lineHeight: '1' }}>•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Revenue Potential:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {pkg.revenue.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                          <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.2rem', lineHeight: '1' }}>•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">Industry <span className="text-red">Mentors</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Professionals who show up in person for your students.</p>
          </div>
          <div className="mentor-grid">
            {[
              {
                name: 'Anubhav Sinha',
                role: 'Director',
                img: '/assets/gallery/Industry Mentors/Anubhav SInha.jpg',
                delay: '0.1s'
              },
              {
                name: 'Mukesh S. Bhatt',
                role: 'Actor',
                img: '/assets/gallery/Industry Mentors/mukesh-bhatt---actor.jpg',
                delay: '0.2s'
              },
              {
                name: 'Ishteyak Khan',
                role: 'Actor',
                img: '/assets/gallery/Industry Mentors/Ishteyak Khan.jpeg',
                delay: '0.3s'
              },
              {
                name: 'Manuj Sharma',
                role: 'Actor',
                img: '/assets/gallery/Industry Mentors/Manuj sharma.jpg',
                delay: '0.4s'
              },
              {
                name: 'Manu Rishi Chadha',
                role: 'Actor & Writer',
                img: '/assets/gallery/Industry Mentors/Manu rishi chadha.jpeg',
                delay: '0.5s'
              }
            ].map((mentor, i) => (
              <div
                key={i}
                className="mentor-card reveal"
                ref={addToRefs}
                style={{ transitionDelay: mentor.delay }}
              >
                <div className="mentor-img-wrapper">
                  <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                </div>
                <div className="mentor-info">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <span className="mentor-role">{mentor.role}</span>
                </div>
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
