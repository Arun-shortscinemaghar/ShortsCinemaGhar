import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilmLab = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  
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
      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--film-red)' }}>Shorts Cinemaghar Film Lab 2026 – Rs. 3 Lakh Grant</span>
          <h1 className="title-xl" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Turn Your Short Film Idea <span className="text-red">Into a Funded Film</span>
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Most filmmakers have powerful ideas. Very few get the opportunity to make them. The Shorts Cinemaghar Film Lab 2026 is India's first short film incubation program — designed to take one story from concept to screen, with Rs. 3 lakh in production funding, full mentorship, a digital release, and 50% YouTube revenue share.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Link to="/submit" className="btn btn-red" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Apply Now — Applications Open →</Link>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Open to film students, independent filmmakers & emerging directors · No completed film required · Submit your idea, not a finished project</p>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h2 className="title-md" style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Most Programs Reward Films That Already Exist. <span className="text-red">We Fund the Ones That Don't Yet.</span></h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Every short film competition you've seen asks for a finished film. That's a privilege not everyone has. Shorts Cinemaghar Film Lab starts earlier — at the idea stage.
          </p>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Submit your concept. If your story is selected, our team works with you through every phase: development, pre-production, filming, post-production, and digital launch. You don't just win a prize. You make a real film — with real support — and you keep half of everything it earns.
          </p>
          <h3 style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>"A strong idea shouldn't remain just an idea."</h3>
        </div>
      </section>

      {/* The Grant (6 Benefits) */}
      <section className="pad-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="title-lg">What the Selected Filmmaker Receives</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>One project. Full support. From idea to premiere.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* 1 */}
            <div className="value-card" style={{ borderLeft: '3px solid var(--film-red)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Rs. 3,00,000 Production Funding</h3>
              <p className="text-muted">Disbursed across three phases: 30% pre-production · 40% production · 30% post-production.</p>
            </div>
            {/* 2 */}
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Creative & Production Supervision</h3>
              <p className="text-muted">Expert guidance on budgeting, production planning, and on-set execution. You direct your vision — we make sure it gets made.</p>
            </div>
            {/* 3 */}
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Marketing & Launch Support</h3>
              <p className="text-muted">Trailer release, custom posters, a full social media campaign, and promotional support leading up to your digital premiere.</p>
            </div>
            {/* 4 */}
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Official Digital Premiere</h3>
              <p className="text-muted">Your film releases on the Shorts Cinemaghar YouTube channel with built-in audience and editorial support.</p>
            </div>
            {/* 5 */}
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>50% YouTube Revenue Share</h3>
              <p className="text-muted">Every rupee your film earns on YouTube — you keep half. Creator-first. Always.</p>
            </div>
            {/* 6 */}
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Offline Screening via Short Film Tour</h3>
              <p className="text-muted">Selected films enter the Short Film Tour circuit — India's first offline short film platform — for live campus and city screenings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections: Who should apply & Process */}
      <section className="pad-section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="title-md" style={{ marginBottom: '1.5rem', color: 'var(--film-red)' }}>This Is For You If You Have a Story That Needs to Be Made</h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>The Film Lab is not looking for the most experienced filmmaker. It's looking for the most compelling story — told by someone who has the drive to see it through.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '0.5rem' }}>✔ Film students — any discipline, any college, any city</li>
              <li style={{ marginBottom: '0.5rem' }}>✔ Emerging directors — with or without prior credits</li>
              <li style={{ marginBottom: '0.5rem' }}>✔ Writers with a strong cinematic story idea</li>
              <li style={{ marginBottom: '0.5rem' }}>✔ Independent filmmakers planning their first/next short</li>
              <li style={{ marginBottom: '0.5rem' }}>✔ Content creators ready to make their first scripted short</li>
              <li>✔ Teams and solo creators are both welcome</li>
            </ul>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderLeft: '3px solid #ffcc00' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}><strong>IMPORTANT NOTE:</strong> No completed film required — submit your idea at script stage (max 20 pages). Your project should be producible within the Film Lab's production budget.</p>
            </div>
          </div>

          <div>
            <h2 className="title-md" style={{ marginBottom: '1.5rem', color: 'var(--film-red)' }}>A Rigorous, Transparent Selection Process</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--film-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Stage 1 — Internal Screening</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>The programming team reviews all applications for originality, feasibility, and clarity of vision.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--film-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Stage 2 — Jury Evaluation</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>Shortlisted projects go before an independent jury panel of respected filmmakers, writers, and producers.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--film-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Stage 3 — Final Selection</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>One project is selected as the 2026 Winner — and the journey to making the film begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pad-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="title-lg" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${index < 4 || showAllFaqs ? 'expanded' : 'collapsed'}`}
              >
                <div className="faq-content">
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          {faqs.length > 4 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="btn btn-outline" 
                onClick={() => setShowAllFaqs(!showAllFaqs)}
              >
                {showAllFaqs ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pad-section" style={{ background: 'radial-gradient(circle at center, rgba(229, 9, 20, 0.1) 0%, var(--bg-deep) 70%)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
          <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Your Story Is Waiting to Be Made. <span className="text-red">So Are We.</span></h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            Every film that has ever moved you started as an idea in someone's head — someone who took the chance to put it on paper and then found a way to make it real.
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            The Shorts Cinemaghar Film Lab 2026 exists for that moment. For the filmmaker who has the story but not yet the means. For the idea that deserves to become a film.
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <Link to="/submit" className="btn btn-red" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Apply Now →</Link>
          </div>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Questions? Write to us at <a href="mailto:chetan@shortfilmtour.in" style={{ color: 'var(--film-red)' }}>chetan@shortfilmtour.in</a> — we reply to every filmmaker personally.
          </p>
        </div>
      </section>
    </>
  );
};

export default FilmLab;
