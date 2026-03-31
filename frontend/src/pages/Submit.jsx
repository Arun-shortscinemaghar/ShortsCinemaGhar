import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    duration: '',
    language: '',
    synopsis: '',
    email: '',
    posterUrl: '',
    screeningLink: ''
  });
  const [status, setStatus] = useState('');
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await axios.post('http://localhost:3000/api/submit', formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ title: '', director: '', duration: '', language: '', synopsis: '', posterUrl: '', screeningLink: '', email: '' });
      }
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.details || err.response?.data?.error || err.message;
      setStatus(`error: ${errorMsg}`);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container reveal" ref={addToRefs}>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Open Submissions</p>
          <h1 className="title-xl">
            Your Film Deserves to Be Seen.<br />
            <span className="text-gradient">Let's Make That Happen.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            Submit your short film for Shorts Cinemaghar screenings and join India's fastest-growing campus short film circuit. National tour exposure, jury recognition, and international reach.
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            
            <div className="reveal" ref={addToRefs}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem' }}>This Is Not Just a Screening.<br /><span className="text-red">It's a Platform.</span></h2>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div className="value-card">
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Campus Screenings</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Your film reaches real college audiences across India — live reactions and real conversations.</p>
                </div>
                <div className="value-card">
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Fair Remuneration</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Monetize your film with paid per screening, per location. 
</p>
                </div>
                
                <div className="value-card">
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>National Tour Entry</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Selected films tour multiple cities as part of the Short Film Tour network.</p>
                </div>
                
                <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--gold)' }}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>International Access</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Direct entry path for winners into the Showcase International Short Film Festival in Krakow, Poland.</p>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Guidelines</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Any genre, preferably under 30 mins', 'Any Indian language or English (subtitles req.)', 'Student & Independent filmmakers welcome', 'Zero submission fees'].map((item, i) => (
                    <li key={i} style={{ marginBottom: '1rem', color: 'var(--text-dim)', fontSize: '0.9rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--film-red)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal glass" ref={addToRefs} style={{ padding: '3.5rem', borderRadius: '16px', transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '2.5rem' }}>Submit Your Film</h3>
              
              {status === 'success' ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(40, 167, 69, 0.2)', color: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Submission Received!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Our curators will review your work and contact you soon.</p>
                  <button onClick={() => setStatus('')} className="btn btn-outline" style={{ width: '100%' }}>Submit Another Film</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Film Title *</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required className="form-input" placeholder="Enter film title" />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Director Name *</label>
                    <input type="text" name="director" value={formData.director} onChange={handleChange} required className="form-input" placeholder="Full name" />
                  </div>

                  <div className="form-grid">
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Duration *</label>
                      <input type="text" name="duration" value={formData.duration} onChange={handleChange} required placeholder="MM:SS" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Language *</label>
                      <input type="text" name="language" value={formData.language} onChange={handleChange} required className="form-input" placeholder="e.g. Hindi" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Synopsis *</label>
                    <textarea name="synopsis" value={formData.synopsis} onChange={handleChange} required rows={4} className="form-input" placeholder="Brief description of the film..." style={{ resize: 'none' }}></textarea>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Your Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Screening Link *</label>
                      <input type="url" name="screeningLink" value={formData.screeningLink} onChange={handleChange} required className="form-input" placeholder="YouTube, Vimeo, or Drive link" />
                    </div>
                  </div>

                  {status.startsWith('error') && <p style={{ color: 'var(--film-red)', fontSize: '0.9rem' }}>{status.replace('error: ', '')}</p>}
                  
                  <button type="submit" className="btn btn-red" style={{ width: '100%', marginTop: '1rem' }} disabled={status === 'Submitting...'}>
                    {status === 'Submitting...' ? 'Processing...' : 'Submit to Shorts Cinemaghar'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pad-section" style={{ textAlign: 'center' }}>
        <div className="container reveal" ref={addToRefs} style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
            "We've placed student films on international festival stages. <span className="text-red">Yours could be next.</span>"
          </p>
          <p style={{ color: 'var(--text-dim)' }}>
            Questions? Write to <a href="mailto:chetan@shortfilmtour.in" style={{ color: 'var(--film-red)' }}>chetan@shortfilmtour.in</a>
          </p>
        </div>
      </section>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 576px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .form-input {
          width: 100%;
          padding: 0.9rem 1.2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
          color: white;
          border-radius: 8px;
          transition: var(--transition-smooth);
        }
        .form-input:focus {
          outline: none;
          background: rgba(255,255,255,0.06);
          border-color: var(--film-red);
          box-shadow: 0 0 15px rgba(229, 9, 20, 0.1);
        }
      `}</style>
    </>
  );
};

export default Submit;
