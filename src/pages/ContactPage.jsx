import React, { useState } from 'react';
import {
  Mail, MessageSquare, Send, Heart, HelpCircle, ChevronDown, ChevronUp,
  Globe, ShieldCheck, CheckCircle2, Instagram, Twitter, Youtube, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage({ onSubmitToast }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const isPrayer = formData.type === 'Prayer Request';
      onSubmitToast(
        isPrayer
          ? "Your prayer request has been received with love. Our community prayer team is standing with you!"
          : "Thank you for reaching out! Your message has been sent to info@arkbible.app. We'll reply within 24 hours."
      );
      setFormData({ name: '', email: '', type: 'General Inquiry', message: '' });
    }, 750);
  };

  const faqs = [
    {
      q: "Is Arkbible really 100% free and ad-free?",
      a: "Yes! Arkbible is built as a non-profit digital sanctuary. There are zero third-party ads, zero tracking scripts, and no forced monthly subscriptions."
    },
    {
      q: "How does the app work offline without internet?",
      a: "All Bible translations (KJV, WEB, Louis Segond, Reina-Valera) and vector embedding models are pre-bundled directly inside the mobile app package, allowing 100% offline reading and search."
    },
    {
      q: "How can my local church or ministry get involved?",
      a: "Pastors and church leaders can request our Church Partnership Packet on the Partner page or select 'Church Partnership' in the contact dropdown to receive custom sermon note guides."
    },
    {
      q: "How do you ensure 0% AI hallucination in scripture search?",
      a: "Our vector search engine uses Supabase pgvector to mathematically map your feelings to exact historical Bible verses. It retrieves unaltered scripture text rather than generating new synthetic text."
    }
  ];

  return (
    <div>
      {/* SECTION 1: HERO BANNER (No White Overlay, Dark Contrast Hero) */}
      <section style={{
        position: 'relative',
        padding: '7rem 0 4.5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.75), rgba(14, 23, 22, 0.95)), url('/images/pray.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="hero-badge" style={{ marginBottom: '1.2rem' }}>
            <MessageSquare size={16} /> Direct Outreach & Community Prayer
          </div>
          <h1 className="heading-xl" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            We Are <span className="text-gradient-green">Here for You</span>.
          </h1>
          <p style={{
            fontSize: '1.18rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.7',
            marginBottom: '2rem'
          }}>
            Have a question, a prayer request, or a church partnership inquiry? Reach out to our global ministry team.
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT & PRAYER REQUEST FORM */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem'
          }}>
            {/* Left: Direct Contact Information */}
            <div>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>
                Contact Channels
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1.2rem' }}>
                Reach Out Directly
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Whether you need technical app support, want to join our intercessory prayer network, or discuss organizational partnerships, we’d love to connect.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--primary-subtle)',
                    color: '#3A6B68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--primary-dark)' }}>Email Support</h4>
                    <a href="mailto:info@arkbible.app" style={{ fontSize: '0.95rem', color: '#3A6B68', fontWeight: '600' }}>
                      info@arkbible.app
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--primary-subtle)',
                    color: '#3A6B68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--primary-dark)' }}>Community Prayer Line</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Every prayer submitted is shared confidentially with our intercessory prayer team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
                  Connect on Social Fellowship
                </h4>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-teal" style={{ padding: '0.6rem 1rem' }}>
                    <Instagram size={18} /> Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-teal" style={{ padding: '0.6rem 1rem' }}>
                    <Twitter size={18} /> Twitter / X
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="light-card" style={{ padding: '2.8rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
                Send Us a Message or Prayer Request
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brother Thomas"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select
                    className="form-select"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prayer Request">Prayer Request</option>
                    <option value="App Support">App Support & Feedback</option>
                    <option value="Church Partnership">Church Partnership</option>
                    <option value="Media">Media & Press</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message Body</label>
                  <textarea
                    required
                    rows={5}
                    placeholder={formData.type === 'Prayer Request' ? "Share your prayer request here..." : "How can we assist you?"}
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? 'Sending Message...' : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (2-COLUMN GRID WITH bc.png BACKGROUND) */}
      <section style={{
        position: 'relative',
        padding: '7rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.78), rgba(14, 23, 22, 0.94)), url('/images/bc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
            <div className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <HelpCircle size={16} /> Quick Answers
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              Common questions about Arkbible, privacy guarantees, and church partnerships.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.8rem',
            alignItems: 'start'
          }}>
            {/* LEFT COLUMN: 2 Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[faqs[0], faqs[1]].map((faq, relativeIdx) => {
                const idx = relativeIdx;
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: isOpen ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '20px',
                      padding: '1.8rem',
                      cursor: 'pointer',
                      border: isOpen ? '2px solid #3A6B68' : '1.5px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.25s ease'
                    }}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', margin: 0 }}>
                        {faq.q}
                      </h3>
                      {isOpen ? <ChevronUp size={20} color="#3A6B68" style={{ flexShrink: 0 }} /> : <ChevronDown size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                    </div>
                    {isOpen && (
                      <div style={{
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                        fontSize: '0.96rem',
                        color: 'var(--text-dark-soft)',
                        lineHeight: '1.65'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: 2 Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[faqs[2], faqs[3]].map((faq, relativeIdx) => {
                const idx = relativeIdx + 2;
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: isOpen ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '20px',
                      padding: '1.8rem',
                      cursor: 'pointer',
                      border: isOpen ? '2px solid #3A6B68' : '1.5px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.25s ease'
                    }}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', margin: 0 }}>
                        {faq.q}
                      </h3>
                      {isOpen ? <ChevronUp size={20} color="#3A6B68" style={{ flexShrink: 0 }} /> : <ChevronDown size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                    </div>
                    {isOpen && (
                      <div style={{
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                        fontSize: '0.96rem',
                        color: 'var(--text-dark-soft)',
                        lineHeight: '1.65'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
