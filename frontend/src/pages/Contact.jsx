import React, { useState } from 'react';
import axios from 'axios';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', institution: '', city: '', type: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.details || err.response?.data?.error || err.message;
      setStatus(`error: ${errorMsg}`);
    }
  };

  return (
    <>
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h1 className="title-xl">
            Let's Build Something <span className="text-red">on Your Campus</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Whether you're a college, a filmmaker, a brand, or just curious — we'd love to hear from you. Every great collaboration starts with one conversation.
          </p>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Contact Paths */}
          <div>
            <h2 className="title-md" style={{ marginBottom: '2rem' }}>How Can We Help?</h2>
            
            <div className="value-card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Colleges & Institutes</h3>
              <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Bring Shorts Cinemaghar to Your Campus</p>
              <p className="text-muted">Tell us your college name, city, and which package interests you. We'll get back within 48 hours with everything you need.</p>
            </div>

            <div className="value-card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Filmmakers</h3>
              <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Submit or Collaborate</p>
              <p className="text-muted">Looking to screen your film or work with us on the next edition? Reach out and tell us about your project.</p>
            </div>

            <div className="value-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Brands & Sponsors</h3>
              <p style={{ color: 'var(--film-red)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Explore Partnership Opportunities</p>
              <p className="text-muted">Looking for meaningful campus activations? Let's talk about how Shorts Cinemaghar can carry your brand into spaces where young India creates.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--film-red)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Direct Contact</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email: <a href="mailto:chetan@shortfilmtour.in" style={{ color: 'var(--film-red)' }}>chetan@shortfilmtour.in</a></p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Website: <a href="https://www.shortfilmtour.in" target="_blank" rel="noreferrer" style={{ color: 'var(--film-red)' }}>www.shortfilmtour.in</a></p>
              <p style={{ color: 'var(--text-muted)' }}>Social: @shortscinemaghar</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="value-card" style={{ borderColor: 'var(--border-light)' }}>
            <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>Start the Conversation</h2>
            {status === 'success' ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)', borderRadius: '8px' }}>
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Message Received!</h3>
                <p>Thank you for reaching out. We've received your inquiry and will be in touch shortly.</p>
                <button onClick={() => setStatus('')} className="btn btn-outline" style={{ marginTop: '1rem' }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name <span className="text-red">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email <span className="text-red">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Phone <span className="text-red">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>College / Organisation Name <span className="text-red">*</span></label>
                  <input type="text" name="institution" value={formData.institution} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>City <span className="text-red">*</span></label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>I am a: <span className="text-red">*</span></label>
                    <select name="type" value={formData.type} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px', height: '44px' }}>
                      <option value="" disabled>Select</option>
                      <option value="College">College</option>
                      <option value="Filmmaker">Filmmaker</option>
                      <option value="Brand">Brand / Sponsor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }}></textarea>
                </div>

                {status.startsWith('error') && <p style={{ color: 'var(--film-red)', marginBottom: '1rem' }}>{status.replace('error: ', '')}</p>}
                
                <button type="submit" className="btn btn-red" style={{ width: '100%', marginTop: '0.5rem' }} disabled={status === 'Submitting...'}>
                  {status === 'Submitting...' ? 'Submitting...' : 'Start the Conversation →'}
                </button>
              </form>
            )}

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
              "We reply to every message personally. No automated replies. No waiting rooms. Just people who care about what you're building."
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
