import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
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

  const closeModal = () => setSelectedItem(null);

  const galleryItems = [
    {
      title: "Behind the Scenes",
      desc: "Creating cinematic magic on campus.",
      src: "/assets/gallery/WhatsApp Video 2025-12-19 at 16.18.25.mp4",
      type: "video",
      delay: "0.1s"
    },
    {
      title: "Masterclass Highlights",
      desc: "Our Founder with HOD Taha Siddiqui.",
      src: "/assets/gallery/Our Founder with HOD Taha Siddiqui.PNG",
      type: "image",
      delay: "0.2s"
    },
    {
      title: "Guest Sessions",
      desc: "Master Class by Actor Manurishi Chadda.",
      src: "/assets/gallery/Master Class by Actor Manurishi Chadda.jpeg",
      type: "image",
      delay: "0.3s"
    },
    {
      title: "Acting Workshop",
      desc: "Ishtiyak Khan Masterclass session.",
      src: "/assets/gallery/Ishtiyak Khan Masterclass.mp4",
      type: "video",
      delay: "0.4s"
    },
    {
      title: "Campus Life",
      desc: "Moments from our latest workshop.",
      src: "/assets/gallery/WhatsApp Image 2025-08-07 at 7.10.05 PM (1).jpeg",
      type: "image",
      delay: "0.1s"
    },
    {
      title: "Student Production",
      desc: "Students getting hands-on with camera gear.",
      src: "/assets/gallery/IMG_5562.PNG",
      type: "image",
      delay: "0.2s"
    },
    {
      title: "Cinematography Prep",
      desc: "Setting up for the perfect shot.",
      src: "/assets/gallery/IMG_5473.PNG",
      type: "image",
      delay: "0.3s"
    },
    {
      title: "Campus Screenings",
      desc: "Bringing cinema directly to students.",
      src: "/assets/gallery/IMG_5331.JPG",
      type: "image",
      delay: "0.1s"
    },
    {
      title: "The Shorts Experience",
      desc: "Immersive filmmaking workshops.",
      src: "/assets/gallery/IMG_4963.PNG",
      type: "image",
      delay: "0.2s"
    },
    {
      title: "Future Filmmakers",
      desc: "Inspiring the next generation.",
      src: "/assets/gallery/IMG_4908.PNG",
      type: "image",
      delay: "0.3s"
    },
    {
      title: "Festival Vibes",
      desc: "Celebrating creativity on campus.",
      src: "/assets/gallery/IMG_4873.MOV",
      type: "video",
      delay: "0.1s"
    },
    {
      title: "Hands-on Training",
      desc: "Learning the craft by doing.",
      src: "/assets/gallery/IMG_4863.MOV",
      type: "video",
      delay: "0.2s"
    },
    {
      title: "Campus Engagement",
      desc: "Interactive sessions with industry pros.",
      src: "/assets/gallery/IMG_4822.JPG",
      type: "image",
      delay: "0.3s"
    },
    {
      title: "Awards & Recognitions",
      desc: "Felicitating Actor Isteyak Khan.",
      src: "/assets/gallery/Felicitating Actor Isteyak Khan.PNG",
      type: "image",
      delay: "0.4s"
    },
    {
      title: "Action Sequences",
      desc: "Capturing the energy on set.",
      src: "/assets/gallery/IMG_4816.JPG",
      type: "image",
      delay: "0.1s"
    },
    {
      title: "Directing Workshop",
      desc: "Developing vision through story.",
      src: "/assets/gallery/IMG_4815.JPG",
      type: "image",
      delay: "0.2s"
    },
    {
      title: "Cinematic Vision",
      desc: "Exploring the language of film.",
      src: "/assets/gallery/IMG_3858.JPG.jpeg",
      type: "image",
      delay: "0.3s"
    }
  ];

  return (
    <>
      <div className={`page-content-wrapper ${selectedItem ? 'content-blurred' : ''}`}>
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
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="gallery-img"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-img"
                    />
                  )}
                  <div className="item-overlay">
                    <h3 className="title-md" style={{ marginBottom: '0.3rem', fontSize: '1.25rem' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>View Detail →</p>
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
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="media-container">
              {selectedItem.type === 'video' ? (
                <video src={selectedItem.src} controls autoPlay className="lightbox-media" />
              ) : (
                <img src={selectedItem.src} alt={selectedItem.title} className="lightbox-media" />
              )}
            </div>
            <div className="lightbox-info">
              <h3 className="title-md" style={{ color: '#fff', marginBottom: '0.5rem' }}>{selectedItem.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>{selectedItem.desc}</p>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Gallery;
