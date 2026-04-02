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

      <section className="pad-section" style={{ paddingTop: 0 }}>
        <div className="container">

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', maxWidth: '1100px', margin: '0 auto 6rem' }}>

            <div className="reveal" ref={addToRefs}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Platform Partners
              </h2>
              <div className="logo-grid">
                {[
                  { name: 'Short Film Tour', img: '/assets/gallery/our partners/SFT png (1).png', padding: '1rem', imgStyle: { transform: 'scale(1.5)' } },
                  { name: 'The Paperclip', img: '/assets/gallery/our partners/paperclip_modern.png', padding: '1rem' }
                ].map((item, idx) => (
                  <div key={idx} className="logo-item">
                    <div className="logo-box" style={{ padding: item.padding || '2rem' }}>
                      <img src={item.img} alt={item.name} className="logo-img" style={item.imgStyle || {}} />
                    </div>
                    <span className="partner-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Brand Partners
              </h2>
              <div className="logo-grid">
                {[
                  { name: "AIRTEL", img: "/assets/gallery/our partners/airtel-logo-white-text-horizontal.jpg" },
                  { name: "SONY", img: "/assets/gallery/our partners/sony.jpeg" }
                ].map((item, idx) => (
                  <div key={idx} className="logo-item">
                    <div className="logo-box">
                      <img src={item.img} alt={item.name} className="logo-img" />
                    </div>
                    <span className="partner-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Festival & Film Partners
              </h2>
              <div className="logo-grid">
                {[
                  { name: "Bandra Film Festival", img: "/assets/gallery/our partners/BandraFilmFestival.jpeg" },
                  { name: "Showcase Int. Short Film Festival", img: "/assets/gallery/our partners/krakowie.jpeg" },

                  { name: "humaramovie", img: "/assets/gallery/our partners/hamaramovie.jpeg" },
                  { name: "Pocket Films", img: "/assets/gallery/our partners/WhatsApp Image 2025-11-03 at 1.01.40 PM.jpeg" }
                ].map((item, idx) => (
                  <div key={idx} className="logo-item">
                    <div className="logo-box">
                      <img src={item.img} alt={item.name} className="logo-img" />
                    </div>
                    <span className="partner-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ height: '2px', width: '40px', background: 'var(--film-red)' }}></span>
                Institutional Partners
              </h2>
              <div className="logo-grid">
                {[
                  { name: "Graphic Era Hill University", img: "/assets/gallery/our partners/GraphicEraHillUni.jpeg" },
                  { name: "University of Delhi", img: "/assets/gallery/our partners/Delhi university.jpeg" },
                  { name: "Government of Uttarakhand", img: "/assets/gallery/our partners/UttShashan.jpeg" },
                  { name: "KIFA", img: "/assets/gallery/our partners/Kifa.jpeg" },
                  { name: "Warsaw Film School", img: "/assets/gallery/our partners/WFS (2).jpeg" },


                ].map((item, idx) => (
                  <div key={idx} className="logo-item">
                    <div className="logo-box">
                      <img src={item.img} alt={item.name} className="logo-img" />
                    </div>
                    <span className="partner-name">{item.name}</span>
                  </div>
                ))}
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
