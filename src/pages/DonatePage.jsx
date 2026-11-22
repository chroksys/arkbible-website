import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

export default function DonatePage({ onSubmitToast }) {
  const { t } = useLanguage();
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeAmount = customAmount ? Number(customAmount) : amount;

  const getImpactText = (val) => {
    if (val >= 250) return 'Equips local churches and outreach teams with offline digital Scripture resources across multiple regions.';
    if (val >= 100) return 'Supports community hosting, prayer moderation, and new Bible translation work for thousands of believers.';
    if (val >= 50) return 'Helps provide free Scripture access and daily encouragement for 200 believers every month.';
    return 'Helps keep ArkBible freely accessible for believers everywhere, online and offline.';
  };

  const handleDonate = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 }, colors: ['#2F6662', '#E89D2B', '#FFFFFF'] });
      } catch {}
      if (onSubmitToast) {
        onSubmitToast(t('donate.thankYou'));
      }
      setDonorName('');
      setDonorEmail('');
      setCustomAmount('');
    }, 650);
  };

  const stewardship = [
    { num: '01', title: 'Offline Scripture Access', desc: 'Bundling and maintaining clean, reliable offline Bible translations for every device.' },
    { num: '02', title: 'Global Prayer Community', desc: 'Sustaining the infrastructure that connects believers in daily prayer and testimony.' },
    { num: '03', title: 'Safe Community Care', desc: 'Thoughtful moderation and privacy protection to keep every shared space welcoming.' },
    { num: '04', title: 'Church & Mission Outreach', desc: 'Partnering with local ministries to share God’s Word across languages and nations.' },
  ];

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* 1. FULL-BLEED PHOTOGRAPHIC HERO (YOUVERSION SOWERS STYLE) */}
      <section style={{
        position: 'relative',
        minHeight: '64vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(16, 36, 35, 0.62) 0%, rgba(16, 36, 35, 0.8) 100%), url('/images/donate.webp')`,
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
              {t('donate.badge')}
            </p>
            <h1 className="animate-hero-delay-1" style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.3rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1.4rem',
            }}>
              {t('donate.title')}
            </h1>
            <p className="animate-hero-delay-2" style={{
              fontSize: 'clamp(1.05rem, 1.7vw, 1.24rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '580px',
            }}>
              {t('donate.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. GIVING SECTION (SPLIT STORY + INTERACTIVE GIVING CARD) */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-light-soft)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <Reveal>
              <div>
                <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.8rem' }}>
                  Why Give
                </p>
                <h2 className="heading-lg" style={{ marginBottom: '1.2rem' }}>
                  Every Gift Helps Put Scripture in Someone’s Hands
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  ArkBible is sustained by generous believers and churches who want everyone, everywhere to have free, peaceful access to the Bible and a caring global community.
                </p>

                <div style={{
                  background: '#FDF8F0',
                  border: '1px solid rgba(232, 157, 43, 0.3)',
                  borderRadius: '24px',
                  padding: '1.8rem',
                }}>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.5rem' }}>
                    Your {frequency === 'monthly' ? 'Monthly' : 'One-Time'} Impact (${activeAmount || 0})
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.65, fontWeight: 500 }}>
                    {getImpactText(activeAmount || 0)}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleDonate}
                className="interactive-giving-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div className="giving-toggle-bar">
                  <button
                    type="button"
                    className={`giving-toggle-btn ${frequency === 'monthly' ? 'active' : ''}`}
                    onClick={() => setFrequency('monthly')}
                  >
                    {t('donate.giveMonthly')}
                  </button>
                  <button
                    type="button"
                    className={`giving-toggle-btn ${frequency === 'once' ? 'active' : ''}`}
                    onClick={() => setFrequency('once')}
                  >
                    {t('donate.giveOneTime')}
                  </button>
                </div>

                <div className="giving-amount-grid">
                  {[25, 50, 100, 250].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`giving-amount-btn ${!customAmount && amount === val ? 'active' : ''}`}
                      onClick={() => { setAmount(val); setCustomAmount(''); }}
                    >
                      ${val}
                    </button>
                  ))}
                </div>

                <div className="form-group">
                  <label>{t('donate.customAmount')}</label>
                  <input
                    type="number"
                    min="1"
                    className="form-input"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label>{t('donate.donorName')}</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t('donate.donorEmail')}</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="you@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? t('buttons.sending') : `${t('donate.submitBtn')} · $${activeAmount || 0}`}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. STEWARDSHIP & TRANSPARENCY */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '680px', marginBottom: '3.2rem' }}>
              <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.7rem' }}>
                Stewardship
              </p>
              <h2 className="heading-lg">Where Your Generosity Goes</h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.8rem' }}>
            {stewardship.map((item, i) => (
              <Reveal key={item.num} delay={i * 80}>
                <div style={{
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--bg-light-soft)',
                  border: '1px solid var(--border-light)',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary-dark)', letterSpacing: '0.1em', marginBottom: '0.7rem' }}>
                    {item.num}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-dark-soft)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
