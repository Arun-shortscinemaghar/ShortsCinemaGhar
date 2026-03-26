import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
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

  const galleryItems = [
    {
      title: "Masterclasses & Expert Sessions",
      desc: "Industry veterans sharing the craft with the next generation of filmmakers.",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      delay: "0.1s"
    },
    {
      title: "Atmospheric Screenings",
      desc: "Creating immersive cinematic experiences directly on college campuses.",
      img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      delay: "0.2s"
    },
    {
      title: "Production Labs",
      desc: "Student projects coming to life through hands-on filmmaking workshops.",
      img: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=800",
      delay: "0.3s"
    },
    {
      title: "National Recognition",
      desc: "Celebrating excellence and launching films onto the national stage.",
      img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800",
      delay: "0.4s"
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container reveal" ref={addToRefs}>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.9rem' }}>Visual Storytelling</p>
          <h1 className="title-xl">
            This Is What a Campus<br />
            <span className="text-gradient">Comes Alive Looks Like</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            From Dehradun to the next city — here's what happens when Shorts Cinemaghar arrives on campus. Real students. Real films. Real energy.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item reveal" 
                ref={addToRefs} 
                style={{ transitionDelay: item.delay }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="gallery-img"
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', zIndex: 10 }}>
                  <h3 className="title-md" style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-box reveal glass" ref={addToRefs}>
            <h2 className="title-md">"One campus proved the model. Fifty campuses will build a movement."</h2>
            <p className="cta-subtitle">Want this energy on your campus?</p>
            <Link to="/contact" className="btn btn-red">Partner with us Today →</Link>
          </div>

        </div>
      </section>

      <style>{`
        .reveal:hover .gallery-img {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Gallery;
