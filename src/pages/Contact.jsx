import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    city: '',
    type: '',
    message: ''
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', institution: '', city: '', type: '', message: '' });
      } else {
        const data = await response.json();
        setStatus(`error: ${data.error || 'Failed to submit'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus(`error: ${err.message}`);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container reveal" ref={addToRefs}>
          <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Reach Out</p>
          <h1 className="title-xl">
            {"Let's Build Something"}<br />
            <span className="text-gradient">on Your Campus</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
            {"Whether you're a college, a filmmaker, or a brand — we'd love to hear from you. Every great collaboration starts with one conversation."}
          </p>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            
            <div className="reveal" ref={addToRefs}>
              <h2 className="title-md" style={{ marginBottom: '2.5rem' }}>How Can We Help?</h2>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="value-card">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Colleges & Institutes</h3>
                  <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bring the experience home</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Consult with us on bringing the Shorts Cinemaghar ecosystem to your students.</p>
                </div>

                <div className="value-card">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Filmmakers</h3>
                  <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Collaborate & Grow</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Looking to screen your work or join our creative team? Reach out to us here.</p>
                </div>

                <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--gold)' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>Brands & Partners</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Meaningful campus activations that resonate with young India.</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid var(--border-light)' }}>
                <p style={{ color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Email: <a href="mailto:chetan@shortfilmtour.in" style={{ color: 'var(--film-red)' }}>chetan@shortfilmtour.in</a></p>
                <p style={{ color: 'var(--text-dim)' }}>Social: @shortscinemaghar</p>
              </div>
            </div>

            <div className="reveal glass" ref={addToRefs} style={{ padding: '3.5rem', borderRadius: '16px', transitionDelay: '0.2s' }}>
              <h3 className="title-md" style={{ marginBottom: '2.5rem' }}>Start the Conversation</h3>
              
              {status === 'success' ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(40, 167, 69, 0.2)', color: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Message Received!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{"We'll be in touch within 24-48 hours."}</p>
                  <button onClick={() => setStatus('')} className="btn btn-outline" style={{ width: '100%' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Enter your name" />
                  </div>
                  
                  <div className="form-grid">
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="Phone number" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>College / Organization *</label>
                    <input type="text" name="institution" value={formData.institution} onChange={handleChange} required className="form-input" placeholder="Where are you from?" />
                  </div>

                  <div className="form-grid">
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>City *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} required className="form-input" placeholder="Current city" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>I am a: *</label>
                      <select name="type" value={formData.type} onChange={handleChange} required className="form-input" style={{ height: '52px' }}>
                        <option value="" disabled>Select category</option>
                        <option value="College">College Representative</option>
                        <option value="Filmmaker">Filmmaker</option>
                        <option value="Brand">Brand / Sponsor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="form-input" placeholder="Tell us more..." style={{ resize: 'none' }}></textarea>
                  </div>

                  {status.startsWith('error') && <p style={{ color: 'var(--film-red)', fontSize: '0.9rem' }}>{status.replace('error: ', '')}</p>}
                  
                  <button type="submit" className="btn btn-red" style={{ width: '100%', marginTop: '1rem' }} disabled={status === 'Submitting...'}>
                    {status === 'Submitting...' ? 'Sending...' : 'Start the Conversation'}
                  </button>
                </form>
              )}
            </div>
          </div>
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
        select.form-input option {
          background: var(--bg-surface);
          color: white;
        }
      `}</style>
    </>
  );
};

export default Contact;
