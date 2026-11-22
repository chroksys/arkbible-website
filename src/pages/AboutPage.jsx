import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

export default function AboutPage({ navigateTo, onOpenDownload }) {
  const { t } = useLanguage();

  const values = [
    {
      num: '01',
      title: t('about.val1Title'),
      desc: 'Rooted in faithful, unaltered Bible translations so every reflection, highlight, and study note stays anchored in God’s Word.',
      accent: 'var(--primary)',
    },
    {
      num: '02',
      title: t('about.val2Title'),
      desc: 'Nurturing a warm, encouraging Christian community where believers across nations pray for one another and grow together.',
      accent: 'var(--secondary-dark)',
    },
    {
      num: '03',
      title: t('about.val3Title'),
      desc: 'Keeping God’s Word offline-ready and freely accessible for everyone everywhere—including regions with limited connectivity.',
      accent: 'var(--primary)',
    },
  ];

  const beliefs = [
    {
      title: 'The Authority of Scripture',
      desc: 'We believe the Bible is the inspired, trustworthy Word of God—the living guide for faith, prayer, and daily life.',
    },
    {
      title: 'The Grace of Jesus Christ',
      desc: 'We believe salvation, peace, and renewal are found through Jesus Christ, whose love welcomes every person.',
    },
    {
      title: 'The Global Body of Christ',
      desc: 'We believe believers across every nation, language, and generation are called to encourage and serve one another.',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* 1. FULL-BLEED EDITORIAL HERO */}
      <section style={{
        position: 'relative',
        minHeight: '66vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(16, 36, 35, 0.62) 0%, rgba(16, 36, 35, 0.78) 100%), url('/images/about background.jpg')`,
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
              {t('about.badge')}
            </p>
            <h1 className="animate-hero-delay-1" style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.3rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1.4rem',
            }}>
              {t('about.titleLine1')}{' '}
              <span style={{ color: '#F4B956' }}>{t('about.titleLine2')}</span>
            </h1>
            <p className="animate-hero-delay-2" style={{
              fontSize: 'clamp(1.05rem, 1.7vw, 1.24rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '600px',
            }}>
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL FOUNDING STORY */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <Reveal>
              <div>
                <p style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '0.8rem',
                }}>
                  {t('about.narrativeBadge')}
                </p>
                <h2 className="heading-lg" style={{ marginBottom: '1.4rem' }}>
                  {t('about.heartTitle')}
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                  {t('about.heartP1')}
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.8 }}>
                  {t('about.heartP2')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 24px 50px rgba(19, 38, 37, 0.1)' }}>
                <img
                  src="/images/together.jpg"
                  alt="Believers gathered together"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION CARDS */}
      <section style={{ padding: '5.5rem 0', background: 'var(--bg-light-soft)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            <Reveal>
              <div style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '3rem',
                height: '100%',
                border: '1px solid var(--border-light)',
              }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.8rem' }}>
                  {t('about.missionBadge')}
                </p>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {t('about.missionTitle')}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.75 }}>
                  {t('about.missionDesc')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{
                background: '#FDF8F0',
                borderRadius: '28px',
                padding: '3rem',
                height: '100%',
                border: '1px solid rgba(232, 157, 43, 0.28)',
              }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.8rem' }}>
                  Looking Ahead
                </p>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {t('about.visionTitle')}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-soft)', lineHeight: 1.75 }}>
                  {t('about.visionDesc')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES & STATEMENT OF FAITH */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
              <p style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--secondary-dark)', marginBottom: '0.7rem' }}>
                {t('about.faithBadge')}
              </p>
              <h2 className="heading-lg" style={{ marginBottom: '0.8rem' }}>
                {t('about.valuesTitle')}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t('about.faithSubtitle')}
              </p>
            </div>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}>
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 90}>
                <div style={{
                  padding: '2.2rem',
                  borderRadius: '24px',
                  background: 'var(--bg-light-soft)',
                  border: '1px solid var(--border-light)',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: v.accent, letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                    {v.num}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: 'var(--text-dark-soft)', lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '4rem' }}>
              <h3 className="heading-md" style={{ marginBottom: '2rem' }}>{t('about.faithTitle')}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.2rem' }}>
                {beliefs.map((b) => (
                  <div key={b.title} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                      {b.title}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ROUNDED CTA BANNER */}
      <section style={{ padding: '1rem 0 6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{
              background: 'linear-gradient(135deg, #2F6662 0%, #1D4441 100%)',
              borderRadius: '32px',
              padding: 'clamp(3rem, 6vw, 4.5rem) 2rem',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Walk With Us in Scripture
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.86)', maxWidth: '560px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
                Download ArkBible for free or partner with us to help believers everywhere stay rooted in God’s Word.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <button className="btn btn-secondary" onClick={onOpenDownload}>
                  {t('buttons.downloadFree')}
                </button>
                <button className="btn btn-outline-light" onClick={() => navigateTo('/partner')}>
                  {t('buttons.becomePartner')} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
