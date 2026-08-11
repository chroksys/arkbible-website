import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Compass, Globe, BookOpen, HeartHandshake, Zap, CheckCircle2,
  User, Mail, Phone, Send, ShieldCheck, ArrowRight
} from 'lucide-react';

export default function VolunteerPage({ navigateTo, onSubmitToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Solar Audio Bible & Tech Deployment',
    availability: '1-2 Weeks (Short-Term Mission)',
    languages: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
      if (onSubmitToast) {
        onSubmitToast("Hallelujah! Your missionary volunteer application has been submitted to our field deployment team.");
      }
    }, 900);
  };

  const fieldRoles = [
    {
      title: "Digital Technology & App Workshops",
      icon: <Globe size={26} color="#FFFFFF" />,
      color: "#3A6B68",
      desc: "Teaching local communities how to use digital technology, smartphones, and the Arkbible app for daily scripture study and quiet reflection."
    },
    {
      title: "Scripture Teaching & Discipleship",
      icon: <BookOpen size={26} color="#FFFFFF" />,
      color: "#2E7D32",
      desc: "Partnering with local pastors to facilitate youth Bible study workshops, distribute study workbooks, and mentor emerging church leaders."
    },
    {
      title: "Community Care & City Cleanups",
      icon: <HeartHandshake size={26} color="#FFFFFF" />,
      color: "#D84315",
      desc: "Organizing environmental stewardship projects, volunteer sanitation initiatives, and practical skill empowerment workshops in remote communities."
    },
    {
      title: "Translation & Dialect Assistant",
      icon: <Zap size={26} color="#FFFFFF" />,
      color: "#00838F",
      desc: "Assisting local linguists and indigenous scholars in reviewing, recording, and digitizing public-domain scripture in native dialects."
    }
  ];

  return (
    <div>
      {/* HERO SECTION (TITLE WRAPS TO EXACTLY TWO LINES ON DESKTOP) */}
      <section style={{
        position: 'relative',
        padding: '7.5rem 0 5.5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.75), rgba(14, 23, 22, 0.92)), url('/images/good2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="hero-badge" style={{ marginBottom: '1.4rem', display: 'inline-flex' }}>
            <Compass size={16} /> Global Field Missions & Service
          </div>
          <h1 className="heading-xl" style={{
            color: '#FFFFFF',
            marginBottom: '1.4rem',
            maxWidth: '920px',
            margin: '0 auto 1.4rem auto',
            lineHeight: '1.25',
            fontSize: '2.85rem'
          }}>
            Serve as a <span className="text-gradient-green">Kingdom Missionary</span><br />
            in Unreached & Remote Regions
          </h1>
          <p style={{
            fontSize: '1.18rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.75',
            marginBottom: '2.4rem'
          }}>
            Join Arkbible's field teams to bring God's Word to unreached & offline communities—combining scripture distribution, local church partnerships, city cleanups, and practical skill empowerment.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#apply-form" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Apply to Volunteer <ArrowRight size={18} />
            </a>
            <a href="#roles" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
              View Field Roles
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: MISSIONARY FIELD ROLES */}
      <section id="roles" style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.8rem' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              Field Service Opportunities
            </div>
            <h2 className="heading-lg">
              How You Can Serve on the Field
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              Every missionary volunteer brings unique gifts to empower remote communities.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            {fieldRoles.map((role, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-teal-light)',
                  border: `1.5px solid ${role.color}33`,
                  borderRadius: '24px',
                  padding: '2.2rem 1.8rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 18px 40px ${role.color}26`;
                  e.currentTarget.style.borderColor = role.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = `${role.color}33`;
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: role.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.4rem'
                  }}>
                    {role.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.7rem', lineHeight: '1.35' }}>
                    {role.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                    {role.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.8rem' }}>
                  <div style={{ height: '4px', background: role.color, borderRadius: '9999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSIONARY APPLICATION SECTION (BACKGROUND: bc.png + 2-COLUMN LAYOUT) */}
      <section id="apply-form" style={{
        position: 'relative',
        padding: '7rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.78), rgba(14, 23, 22, 0.94)), url('/images/bc.png')`,
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
            {/* LEFT COLUMN: Informational Text & Value Props */}
            <div>
              <div className="hero-badge" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
                <Compass size={16} /> Answer the Call
              </div>
              <h2 className="heading-lg" style={{ color: '#FFFFFF', marginBottom: '1.4rem', lineHeight: '1.3' }}>
                Bring Light & Hope to Remote Communities
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '1.08rem', lineHeight: '1.75', marginBottom: '2.2rem' }}>
                Volunteering on an Arkbible field mission is a transformative journey of faith, service, and practical impact. We equip every missionary with the spiritual, technical, and logistical support needed to make a lasting difference.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.98rem', color: '#FFFFFF', marginBottom: '2.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.5' }}>
                  <CheckCircle2 size={20} color="#A8E0DD" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Comprehensive Orientation:</strong> Pre-field spiritual preparation, cultural guidance, and team briefing.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.5' }}>
                  <CheckCircle2 size={20} color="#A8E0DD" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Village Elder & Pastoral Network:</strong> Full integration with verified local churches and community hosts.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.5' }}>
                  <CheckCircle2 size={20} color="#A8E0DD" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Digital Technology Workshops:</strong> Hands-on training on digital technology, smartphones, and utilizing the Arkbible app for daily study.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.5' }}>
                  <CheckCircle2 size={20} color="#A8E0DD" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Field Safety & Pastoral Care:</strong> 24/7 field coordination, emergency protocols, and daily team prayer.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT COLUMN: Glassmorphic Application Form Container */}
            <div className="light-card" style={{
              padding: '2.5rem',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.86)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                  Missionary Volunteer Application
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Complete your details below. Our field coordination team will reach out within 48 hours.
                </p>
              </div>

              {!submittedSuccess ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Timothy Miller"
                        className="form-input"
                        style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Email Address</label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          type="email"
                          required
                          placeholder="timothy@example.org"
                          className="form-input"
                          style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Phone / WhatsApp</label>
                      <div style={{ position: 'relative' }}>
                        <Phone size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="form-input"
                          style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Preferred Role</label>
                      <select
                        className="form-select"
                        style={{ fontSize: '0.85rem' }}
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      >
                        <option value="Digital Technology & App Workshops">Digital Tech & App Workshops</option>
                        <option value="Scripture Teaching & Discipleship">Scripture Teaching & Discipleship</option>
                        <option value="Community Care & City Cleanups">Community Care</option>
                        <option value="Translation & Dialect Assistant">Translation Assistant</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Availability</label>
                      <select
                        className="form-select"
                        style={{ fontSize: '0.85rem' }}
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      >
                        <option value="1-2 Weeks (Short-Term)">1-2 Weeks (Short-Term)</option>
                        <option value="1-3 Months (Mid-Term)">1-3 Months (Mid-Term)</option>
                        <option value="6+ Months (Long-Term)">6+ Months (Long-Term)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Languages Spoken</label>
                    <input
                      type="text"
                      placeholder="e.g. English, Swahili, Spanish..."
                      className="form-input"
                      style={{ fontSize: '0.9rem' }}
                      value={formData.languages}
                      onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.4rem' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: '700' }}>Spiritual Motivation & Background</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share a brief summary of your desire to serve in remote regions..."
                      className="form-textarea"
                      style={{ fontSize: '0.88rem' }}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                  >
                    {isSubmitting ? 'Submitting Application...' : (
                      <>
                        <Send size={18} /> Submit Missionary Application
                      </>
                    )}
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.8rem' }}>
                    <ShieldCheck size={14} color="var(--primary)" style={{ display: 'inline', marginRight: '0.3rem' }} />
                    100% Confidential screening by Arkbible Field Leadership.
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.8rem', background: '#E6F4EA', borderRadius: '20px', border: '1px solid #34A853' }}>
                  <CheckCircle2 size={44} color="#137333" style={{ margin: '0 auto 0.8rem auto' }} />
                  <h3 style={{ fontSize: '1.3rem', color: '#137333', fontWeight: '800' }}>
                    Application Received, {formData.fullName || 'Brother/Sister'}!
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#137333', marginTop: '0.4rem', lineHeight: '1.6' }}>
                    Thank you for answering the call to serve in remote regions. Our field coordination team will email you at <strong>{formData.email}</strong> within 48 hours.
                  </p>
                  <button
                    className="btn btn-outline-teal"
                    style={{ marginTop: '1.2rem', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                    onClick={() => setSubmittedSuccess(false)}
                  >
                    Submit Another Application
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
