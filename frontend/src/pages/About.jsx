import React, { useEffect, useRef } from 'react';

const About = () => {
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
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.85rem' }}>Our DNA</p>
          <h1 className="title-xl">
            We Don't Run Events.<br />
            <span className="text-gradient">We Build Ecosystems.</span>
          </h1>
          <p>
            Every year, thousands of students with real filmmaking talent leave their cities — not because they lack skill, but because the opportunities never come to them. Industry mentors don't visit. Platforms don't exist. Campuses host cultural fests that disappear the next morning.
          </p>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, marginTop: '1.5rem', fontSize: '1.2rem' }}>
            We decided to change that.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pad-section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal" ref={addToRefs}>
              <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Born from Short Film Tour — <span className="text-red">Built for Indian Campuses</span></h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Shorts Cinemaghar is powered by Short Film Tour — India's first offline short film platform. After years of running screenings, building filmmaker networks, and watching short films transform audiences across cities, we saw a massive gap: colleges & school wanted real creative programs, and student filmmakers wanted real platforms.
              </p>
              <p className="text-muted" style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                So we built one that serves both.
              </p>
              <p className="text-muted">
                Shorts Cinemaghar is India’s first campus rooted cinematic ecosystem - a structured year-round program that introduces students to films with guided film creation, mentorship, workshop, screenings and national tour exposure - turning student talent into real careers. 

              </p>
            </div>
            <div className="reveal value-card" ref={addToRefs} style={{ transitionDelay: '0.2s', padding: '4rem' }}>
              <div style={{ color: 'var(--film-red)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>◈</div>
              <h3 className="title-md" style={{ marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic', lineHeight: '1.8' }}>
                "To make world-class filmmaking education and industry access available to every aspiring creator in India — regardless of which city they live in."
              </p>
              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--film-red)', background: 'rgba(229, 9, 20, 0.05)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>
                  Talent exists everywhere. Opportunity does not. We're here to fix that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="pad-section">
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">What Makes Us <span className="text-red">Different</span></h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>Experience the difference of a long-term, impact-first model.</p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Not just an event",
                desc: "A structured program that runs through the academic year, building a lasting creative culture.",
                delay: "0.1s"
              },
              {
                title: "Not just a screening",
                desc: "A full ecosystem of learning, mentorship, production, and national recognition.",
                delay: "0.2s"
              },
              {
                title: "Not just local",
                desc: "Connected to a national tour and international festival exposure in Krakow, Poland.",
                delay: "0.3s"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="value-card reveal"
                ref={addToRefs}
                style={{ transitionDelay: item.delay, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ background: 'var(--film-red)', width: '40px', height: '2px' }}></div>
                <h3 className="title-md" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="pad-section team-section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">The <span className="text-red">Cinemaghar Circle</span></h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>The visionaries building India's premier campus cinematic ecosystem.</p>
          </div>

          <div className="team-grid">
            {[
              {
                name: "Arun Bais",
                role: "Founder",
                img: "/assets/gallery/The Cinemaghar Circle/Arun Bais - Founder.PNG",
                delay: "0.1s"
              },
              {
                name: "Abhishek Gupta",
                role: "Co-Founder",
                img: "/assets/gallery/The Cinemaghar Circle/Abhishek Gupta - Co-Founder.jpg",
                delay: "0.2s"
              },
              {
                name: "Chetan Upadhyay",
                role: "Founding Member",
                img: "/assets/gallery/The Cinemaghar Circle/Chetan Upadhyay - Founding Member_.jpg",
                delay: "0.3s"
              },
              {
                name: "Manuj Sharma",
                role: "Founding Member",
                img: "/assets/gallery/The Cinemaghar Circle/Manuj Sharma - Founding Member.jpg",
                delay: "0.4s"
              },
              {
                name: "Shweta Jain",
                role: "Founding Member",
                img: "/assets/gallery/The Cinemaghar Circle/Shweta Jain - Founding Member.jpeg",
                delay: "0.5s"
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="team-card glass reveal"
                ref={addToRefs}
                style={{ transitionDelay: member.delay }}
              >
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} className="team-img" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
