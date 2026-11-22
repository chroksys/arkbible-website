import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

export default function PartnerPage({ navigateTo, onSubmitToast }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    role: 'Senior Pastor',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitToast) {
        onSubmitToast(t('partner.successMsg'));
      }
      setFormData({ fullName: '', organization: '', email: '', role: 'Senior Pastor', message: '' });
    }, 650);
  };

  const pillars = [
    {
      num: '01',
      title: t('partner.ben1Title'),
      desc: t('partner.ben1Desc'),
      surface: '#F7F9F8',
      accent: 'var(--primary)',
    },
    {
      num: '02',
      title: 'Small Groups & Youth Fellowship',
      desc: 'Equip small groups and youth ministries with offline Bibles, sermon note organization, and shared Scripture reflections.',
      surface: '#FDF8F0',
      accent: 'var(--secondary-dark)',
    },
    {
      num: '03',
      title: t('partner.ben2Title'),
      desc: t('partner.ben2Desc'),
      surface: '#F7F9F8',
      accent: 'var(--primary)',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* 1. FULL-BLEED PHOTOGRAPHIC HERO (YOUVERSION CHURCHES STYLE) */}
      <section style={{
        position: 'relative',
        minHeight: '66vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(16, 36, 35, 0.62) 0%, rgba(16, 36, 35, 0.8) 100%), url('/images/partnerbackground.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#FFFFFF',
        padding: '6rem 0',
      }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <p className="animate-hero" style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#F4B956',
              marginBottom: '1.1rem',
            }}>
              {t('partner.badge')}
            </p>
            <h1 className="animate-hero-delay-1" style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.3rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1.4rem',
            }}>
              {t('partner.title')}
            </h1>
            <p className="animate-hero-delay-2" style={{
              fontSize: 'clamp(1.05rem, 1.7vw, 1.24rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '600px',
              marginBottom: '2.2rem',
            }}>
              {t('partner.subtitle')}
            </p>
            <a href="#partner-form" className="btn btn-secondary">
              {t('buttons.becomePartner')} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. HOW WE SERVE CHURCHES */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '700px', marginBottom: '3.5rem' }}>
              <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.7rem' }}>
                For Churches & Ministries
              </p>
              <h2 className="heading-lg" style={{ marginBottom: '0.8rem' }}>
                Built to Strengthen Your Local Church
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                From Sunday sermon notes to daily community reading, ArkBible helps your congregation stay engaged with Scripture Monday through Saturday.
              </p>
            </div>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
          }}>
            {pillars.map((p, idx) => (
              <Reveal key={p.num} delay={idx * 90}>
                <div style={{
                  background: p.surface,
                  borderRadius: '28px',
                  padding: '2.5rem',
                  height: '100%',
                  border: '1px solid var(--border-light)',
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: p.accent, letterSpacing: '0.1em', marginBottom: '0.9rem' }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.97rem', color: 'var(--text-dark-soft)', lineHeight: 1.75 }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPLIT PARTNER FORM SECTION */}
      <section id="partner-form" style={{ padding: '6rem 0', background: 'var(--bg-light-soft)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <Reveal>
              <div>
                <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.8rem' }}>
                  Start the Conversation
                </p>
                <h2 className="heading-lg" style={{ marginBottom: '1.2rem' }}>
                  Let’s Serve Your Community Together
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Whether you lead a local church, campus fellowship, or missions organization, our team would love to connect and explore how ArkBible can support your people.
                </p>
                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img
                    src="/images/part2.jpg"
                    alt="Church leaders in fellowship"
                    style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '2.5rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.6rem' }}>
                  {t('partner.formTitle')}
                </h3>

                <div className="form-group">
                  <label>{t('partner.fullName')}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Pastor John Doe"
                  />
                </div>

                <div className="form-group">
                  <label>{t('partner.organization')}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Grace Community Church"
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label>{t('partner.email')}</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="pastor@church.org"
                    />
                  </div>
                  <div className="form-group">
                    <label>{t('partner.role')}</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t('partner.message')}</label>
                  <textarea
                    rows={4}
                    required
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your church or ministry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.98rem' }}
                >
                  {isSubmitting ? t('buttons.sending') : t('partner.submitBtn')}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
