import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

export default function VolunteerPage({ onSubmitToast }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Translation',
    skills: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitToast) {
        onSubmitToast(t('volunteer.successMsg'));
      }
      setFormData({ fullName: '', email: '', phone: '', role: 'Translation', skills: '' });
    }, 650);
  };

  const roles = [
    {
      num: '01',
      title: t('volunteer.role1'),
      desc: 'Help review translations, devotional copy, and study resources so believers can read in their heart language.',
      accent: 'var(--primary)',
    },
    {
      num: '02',
      title: t('volunteer.role2'),
      desc: 'Stand in the gap with believers around the world by praying faithfully over shared community requests.',
      accent: 'var(--secondary-dark)',
    },
    {
      num: '03',
      title: t('volunteer.role3'),
      desc: 'Contribute mobile, web, or design craft to keep ArkBible fast, calm, and accessible on every device.',
      accent: 'var(--primary)',
    },
    {
      num: '04',
      title: t('volunteer.role4'),
      desc: 'Welcome new members, care for shared testimonies, and support local church partnerships.',
      accent: 'var(--secondary-dark)',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* 1. FULL-BLEED PHOTOGRAPHIC HERO (YOUVERSION VOLUNTEERS STYLE) */}
      <section style={{
        position: 'relative',
        minHeight: '64vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(16, 36, 35, 0.58) 0%, rgba(16, 36, 35, 0.78) 100%), url('/images/together.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#FFFFFF',
        padding: '6rem 0',
      }}>
        <div className="container">
          <div style={{ maxWidth: '740px' }}>
            <p className="animate-hero" style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#F4B956',
              marginBottom: '1.1rem',
            }}>
              {t('volunteer.badge')}
            </p>
            <h1 className="animate-hero-delay-1" style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.3rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1.4rem',
            }}>
              {t('volunteer.title')}
            </h1>
            <p className="animate-hero-delay-2" style={{
              fontSize: 'clamp(1.05rem, 1.7vw, 1.24rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '580px',
              marginBottom: '2.2rem',
            }}>
              {t('volunteer.subtitle')}
            </p>
            <a href="#volunteer-form" className="btn btn-secondary">
              {t('buttons.becomeVolunteer')} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. WAYS TO SERVE */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
              <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.7rem' }}>
                Teams & Opportunities
              </p>
              <h2 className="heading-lg">Use Your Gifts to Serve Others</h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
            {roles.map((r, idx) => (
              <Reveal key={r.num} delay={idx * 80}>
                <div style={{
                  padding: '2.2rem',
                  borderRadius: '26px',
                  background: idx % 2 === 0 ? 'var(--bg-light-soft)' : '#FDF8F0',
                  border: '1px solid var(--border-light)',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: r.accent, letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                    {r.num}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.7rem', lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-soft)', lineHeight: 1.7 }}>
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VOLUNTEER APPLICATION FORM */}
      <section id="volunteer-form" style={{ padding: '6rem 0', background: 'var(--bg-light-soft)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <Reveal>
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: 'clamp(1.8rem, 4vw, 3rem)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.6rem' }}>
                Join the Team
              </p>
              <h2 className="heading-md" style={{ marginBottom: '1.8rem' }}>
                {t('volunteer.formTitle')}
              </h2>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>{t('volunteer.fullName')}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>{t('volunteer.email')}</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>{t('volunteer.phone')}</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>{t('volunteer.roleLabel')}</label>
                  <select
                    className="form-select"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Translation">{t('volunteer.role1')}</option>
                    <option value="Prayer">{t('volunteer.role2')}</option>
                    <option value="Engineering">{t('volunteer.role3')}</option>
                    <option value="Community">{t('volunteer.role4')}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>{t('volunteer.skills')}</label>
                <textarea
                  rows={4}
                  required
                  className="form-textarea"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="Share a little about your background and how you would love to serve..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: '0.98rem' }}
              >
                {isSubmitting ? t('buttons.sending') : t('volunteer.submitBtn')}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
