import React, { useState } from 'react';
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await axios.post('https://shortscinemaghar.onrender.com/api/submit', formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ title: '', director: '', duration: '', language: '', synopsis: '', posterUrl: '', screeningLink: '' });
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
            Your Film Deserves to Be Seen. <span className="text-red">Let's Make That Happen.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Submit your short film for Shorts Cinemaghar screenings and join India's fastest-growing campus short film circuit — with national tour exposure, jury recognition, and a path to international festival selection.
          </p>
        </div>
      </section>

      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Why Submit */}
          <div>
            <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>This Is Not Just a Screening. <span className="text-red">It's a Platform.</span></h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Campus Screenings</h3>
              <p className="text-muted">Your film reaches real college audiences across India — live reactions, real conversations, real impact.</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>National Tour Entry</h3>
              <p className="text-muted">Selected films tour multiple cities as part of Short Film Tour — India's first offline short film platform.</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>International Festival Access</h3>
              <p className="text-muted">Winning films get direct entry into the Showcase International Short Film Festival in Krakow, Poland — zero fees, full sponsorship.</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Digital Distribution + Revenue</h3>
              <p className="text-muted">Your film can earn through our digital distribution channel — with revenue sharing that puts creators first.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--film-red)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Submission Guidelines</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.5rem' }}>✔ Format: Short films, any genre</li>
                <li style={{ marginBottom: '0.5rem' }}>✔ Duration: Preferably under 30 minutes</li>
                <li style={{ marginBottom: '0.5rem' }}>✔ Language: Any Indian language, Hindi, or English (subtitles accepted)</li>
                <li style={{ marginBottom: '0.5rem' }}>✔ Who can submit: Student filmmakers, independent filmmakers, film school graduates</li>
                <li>✔ Entry fee: Zero — submissions are completely free</li>
              </ul>
            </div>
          </div>

          {/* Submission Form */}
          <div className="value-card" style={{ borderColor: 'var(--border-light)' }}>
            <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>Submit Your Film</h2>
            {status === 'success' ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)', borderRadius: '8px' }}>
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Submission Received!</h3>
                <p>Thank you for submitting your film. Our curation team will review it and get back to you soon.</p>
                <button onClick={() => setStatus('')} className="btn btn-outline" style={{ marginTop: '1rem' }}>Submit Another Film</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Film Title <span className="text-red">*</span></label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Director Name <span className="text-red">*</span></label>
                  <input type="text" name="director" value={formData.director} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Duration (mins) <span className="text-red">*</span></label>
                    <input type="text" name="duration" value={formData.duration} onChange={handleChange} required placeholder="e.g. 15:30" style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Language <span className="text-red">*</span></label>
                    <input type="text" name="language" value={formData.language} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Synopsys <span className="text-red">*</span></label>
                  <textarea name="synopsis" value={formData.synopsis} onChange={handleChange} required rows={4} style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }}></textarea>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Your Email <span className="text-red">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Screening Link (YouTube/Vimeo/Drive) <span className="text-red">*</span></label>
                  <input type="url" name="screeningLink" value={formData.screeningLink} onChange={handleChange} required placeholder="https://" style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Poster Link (Optional)</label>
                  <input type="url" name="posterUrl" value={formData.posterUrl} onChange={handleChange} placeholder="Link to poster image" style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px' }} />
                </div>

                {status.startsWith('error') && <p style={{ color: 'var(--film-red)', marginBottom: '1rem' }}>{status.replace('error: ', '')}</p>}
                
                <button type="submit" className="btn btn-red" style={{ width: '100%' }} disabled={status === 'Submitting...'}>
                  {status === 'Submitting...' ? 'Submitting...' : 'Submit Film'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pad-section" style={{ textAlign: 'center', background: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
            We've screened 35+ films. We've built 150K+ social reach. We've placed student films on international festival stages. <span className="text-red">Yours could be next.</span>
          </p>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            Have questions? Write to us at <a href="mailto:chetan@shortfilmtour.in" style={{ color: 'var(--film-red)' }}>chetan@shortfilmtour.in</a> — we reply to every filmmaker personally.
          </p>
        </div>
      </section>
    </>
  );
};

export default Submit;
