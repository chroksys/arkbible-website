import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Church, CheckCircle2, Building, Zap, HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PartnerPage({ navigateTo, onSubmitToast }) {
  const { t } = useLanguage();
  const [churchForm, setChurchForm] = useState({
    name: '',
    churchName: '',
    role: '',
    email: '',
    size: '100-500 members',
    message: ''
  });
  const [isChurchSubmitting, setIsChurchSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChurchSubmit = (e) => {
    e.preventDefault();
    setIsChurchSubmitting(true);
    setTimeout(() => {
      setIsChurchSubmitting(false);
      setFormSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      if (onSubmitToast) {
        onSubmitToast("Thank you! Your church partnership packet request has been submitted to our ministry outreach team.");
      }
    }, 750);
  };

  const partnerPillars = [
    {
      title: "Co-Branded Sanctuary Kits",
      desc: "Receive customized digital welcome kits, sermon discussion guides, and scripture reading plans tailored for your congregation.",
      icon: <Building size={24} color="#FFFFFF" />,
      color: "#3A6B68"
    },
    {
      title: "Youth Fellowship Integration",
      desc: "Equip your youth ministry with ad-free offline digital Bibles and zero-hallucination verse search for small group studies.",
      icon: <Zap size={24} color="#FFFFFF" />,
      color: "#2E7D32"
    },
    {
      title: "Pastoral Intercessory Network",
      desc: "Connect your prayer team to a secure, 4-layer moderated prayer channel to share and intercede for global prayer needs.",
      icon: <HeartHandshake size={24} color="#FFFFFF" />,
      color: "#D84315"
    }
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '7.5rem 0 5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.78), rgba(14, 23, 22, 0.95)), url('/images/partnerbackground.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="hero-badge" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
            <Church size={16} /> Church & Pastor Partnerships
          </div>
          <h1 className="heading-xl" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            Unite Your Church with <span className="text-gradient-green">Arkbible</span>
          </h1>
          <p style={{
            fontSize: '1.18rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.75',
            marginBottom: '2rem'
          }}>
            How local churches, pastors, and Christian organizations can partner with Arkbible to distribute sermon notes, engage youth fellowships, and keep congregations connected throughout the week.
          </p>
        </div>
      </section>

      {/* SECTION 1: CHURCH PARTNERSHIP PILLARS */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.8rem' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              Pastoral Alliances
            </div>
            <h2 className="heading-lg">
              Empowering Your Local Congregation
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              Custom digital resources and pastoral tools designed for church leadership.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {partnerPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-teal-light)',
                  border: `1.5px solid ${pillar.color}33`,
                  borderRadius: '24px',
                  padding: '2.2rem 1.8rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem'
                  }}>
                    {pillar.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                    {pillar.desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.6rem' }}>
                  <div style={{ height: '4px', background: pillar.color, borderRadius: '9999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CHURCH PARTNERSHIP FORM (BACKGROUND: good2.webp) */}
      <section style={{
        position: 'relative',
        padding: '7rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.75), rgba(14, 23, 22, 0.92)), url('/images/good2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="hero-badge" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
                <Church size={16} /> Church & Pastor Partnerships
              </div>
              <h2 className="heading-lg" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
                Dedicated Support for Church Leaders
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: '500' }}>
                Arkbible works alongside pastoral teams to provide free offline scripture tools, intercessory prayer channels, and custom sermon note templates.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1rem', color: '#FFFFFF' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle2 size={22} color="#A8E0DD" />
                  Custom church sermon note templates & youth discussion guides
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle2 size={22} color="#A8E0DD" />
                  Co-branded digital sanctuary kits for new believers
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle2 size={22} color="#A8E0DD" />
                  Dedicated prayer request channels for pastoral staff
                </li>
              </ul>
            </div>

            {/* Church Partnership Form */}
            <div className="light-card" style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.84)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '1.2rem' }}>
                Request Church Partnership Packet
              </h3>

              {!formSubmitted ? (
                <form onSubmit={handleChurchSubmit}>
                  <div className="form-group">
                    <label>Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Pastor John Doe"
                      className="form-input"
                      value={churchForm.name}
                      onChange={(e) => setChurchForm({ ...churchForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label>Church Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Grace Community Church"
                        className="form-input"
                        value={churchForm.churchName}
                        onChange={(e) => setChurchForm({ ...churchForm, churchName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Role</label>
                      <input
                        type="text"
                        placeholder="Lead Pastor / Youth Director"
                        className="form-input"
                        value={churchForm.role}
                        onChange={(e) => setChurchForm({ ...churchForm, role: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="pastor@church.org"
                      className="form-input"
                      value={churchForm.email}
                      onChange={(e) => setChurchForm({ ...churchForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message / Specific Needs</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us how we can best serve your congregation..."
                      className="form-textarea"
                      value={churchForm.message}
                      onChange={(e) => setChurchForm({ ...churchForm, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isChurchSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    {isChurchSubmitting ? 'Sending Request...' : 'Send Partnership Request'}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem', background: '#E6F4EA', borderRadius: '16px', border: '1px solid #34A853' }}>
                  <CheckCircle2 size={40} color="#137333" style={{ margin: '0 auto 0.8rem auto' }} />
                  <h4 style={{ fontSize: '1.15rem', color: '#137333', fontWeight: '800' }}>
                    Request Sent, {churchForm.name || 'Pastor'}!
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#137333', marginTop: '0.4rem', lineHeight: '1.5' }}>
                    Our church outreach team will email the Partnership Packet to <strong>{churchForm.email}</strong> within 24 hours.
                  </p>
                  <button
                    className="btn btn-outline-teal"
                    style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
