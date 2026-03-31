import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FilmLab = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
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

  const faqs = [
    { q: "Do I need to submit a finished film?", a: "No. The Film Lab accepts story ideas at script stage — up to 20 pages. You don't need a completed film to apply. That's the entire point of the Lab." },
    { q: "How many projects will be selected?", a: "One project will be selected as the Shorts Cinemaghar Film Lab 2026 Winner." },
    { q: "What is the production grant amount?", a: "The selected filmmaker receives Rs. 3,00,000 disbursed in three phases: 30% pre-production, 40% production, 30% post-production." },
    { q: "Who produces the film?", a: "The film is produced under Shorts Cinemaghar's supervision. The filmmaker retains full creative credit as director." },
    { q: "Who owns the film?", a: "Shorts Cinemaghar holds the producer credit. Revenue is shared 50/50 from YouTube — no hidden cuts." },
    { q: "Where will my film be released?", a: "The film premieres on the Shorts Cinemaghar YouTube channel, followed by selected offline screenings through the Short Film Tour circuit." },
    { q: "Can teams apply?", a: "Yes. Both individual creators and teams can submit. Each submission must be registered separately." },
    { q: "Can I submit more than one idea?", a: "Yes — multiple submissions are allowed, each registered separately." },
    { q: "Is the optional feedback service worth it?", a: "If you're serious about developing your story — whether or not you make the shortlist — yes. Feedback covers story strengths, areas to improve, budget feasibility, and festival potential." },
    { q: "Is the submission fee refundable?", a: "No. The submission fee is non-refundable." }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container reveal" ref={addToRefs}>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Film Lab 2026 • Rs. 3 Lakh Grant</p>
          <h1 className="title-xl">
            Turn Your Short Film Idea<br />
            <span className="text-gradient">Into a Funded Film</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 3rem' }}>
            A national short film incubation program designed to support filmmakers from concept to screen
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Link to="/submit" className="btn btn-red">Apply for the Grant →</Link>
            <p className="text-dim" style={{ fontSize: '0.9rem', maxWidth: '400px', textAlign: 'center', margin: 0 }}>
              Open to emerging directors & film students. No completed film required—submit your <strong>script</strong>, not your footage.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="grid-2 reveal" ref={addToRefs} style={{ alignItems: 'center' }}>
            <div>
              <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Most Programs Reward Films <span className="text-red">That Already Exist.</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Every short film competition asks for a finished film. That's a privilege not everyone has. Shorts Cinemaghar Film Lab starts earlier—at the idea stage.
              </p>
            </div>
            <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
              <h3 className="title-md" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>"We fund the ones that don't yet exist."</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Submit your concept. If selected, our team works with you through development, pre-production, filming, and launch. You don't just win a prize. You make a real film.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">What the <span className="text-red">Winner</span> Receives</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-dim)' }}>One project. Full support. From script to screening.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Rs. 3,00,000 Funding</h3>
              <p style={{ color: 'var(--text-muted)' }}>Direct production grant disbursed across three key phases: Pre-production, Shooting, and Post.</p>
            </div>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Expert Supervision</h3>
              <p style={{ color: 'var(--text-muted)' }}>Professional guidance on budgeting and on-set execution. You direct—we ensure it gets made right.</p>
            </div>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Global Marketing</h3>
              <p style={{ color: 'var(--text-muted)' }}>Custom posters, trailers, and a full social media campaign leading up to your premiere.</p>
            </div>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Digital Premiere</h3>
              <p style={{ color: 'var(--text-muted)' }}>Official launch on the Shorts Cinemaghar network with a built-in audience of film lovers.</p>
            </div>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.5s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>50/50 Revenue Share</h3>
              <p style={{ color: 'var(--text-muted)' }}>Keep half of everything your film earns on YouTube. We believe in creator-first monetization.</p>
            </div>
            <div className="value-card reveal" ref={addToRefs} style={{ transitionDelay: '0.6s' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Offline Festival Circuit</h3>
              <p style={{ color: 'var(--text-muted)' }}>Automatic entry into the Short Film Tour – India's first offline screening circuit for live audiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="reveal" ref={addToRefs}>
              <h2 className="title-md" style={{ marginBottom: '2rem' }}>Is This For You?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Film students from any discipline', 'Emerging directors seeking a platform', 'Writers with a strong cinematic vision', 'Independent filmmakers ready to scale'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--film-red)' }}>▹</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <h2 className="title-md" style={{ marginBottom: '2rem' }}>Selection Process</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { step: "01", title: "Internal Review", desc: "Our team reviews all scripts for originality and feasibility." },
                  { step: "02", title: "Jury Evaluation", desc: "Shortlisted projects go before our independent industry jury." },
                  { step: "03", title: "Final Selection", desc: "The winner is selected and production begins immediately." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <span style={{ color: 'var(--film-red)', fontWeight: 800, fontSize: '1.2rem' }}>{item.step}</span>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-title-block reveal" ref={addToRefs}>
            <h2 className="title-lg">Common <span className="text-red">Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${index < 4 || showAllFaqs ? 'expanded' : 'collapsed'}`}
              >
                <div className="faq-content">
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          {faqs.length > 4 && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button
                className="btn btn-outline"
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                style={{ fontSize: '0.8rem' }}
              >
                {showAllFaqs ? 'Show Less' : 'Show All FAQs'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pad-section" style={{ textAlign: 'center' }}>
        <div className="container reveal" ref={addToRefs} style={{ maxWidth: '800px' }}>
          <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Your Story Starts <span className="text-red">Here.</span></h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
            Every great film started as a simple idea and a script. Take the first step toward seeing your vision on the screen.
          </p>
          <Link to="/submit" className="btn btn-red">Apply for the 2026 Grant</Link>
        </div>
      </section>
    </>
  );
};

export default FilmLab;
