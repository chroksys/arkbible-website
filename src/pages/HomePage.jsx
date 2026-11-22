import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

export default function HomePage({ navigateTo, onOpenDownload, onOpenSubmitStory, customStories = [] }) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const sliderRef = useRef(null);

  const defaultTestimonies = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      location: 'Atlanta, USA',
      tag: 'Mutual Prayer Support',
      scripture: 'Philippians 4:6-7',
      story: 'During a difficult season last autumn, the ArkBible community prayed with me every day. Having God’s promises right in my pocket gave me deep peace.'
    },
    {
      id: 2,
      name: 'Pastor David Olatunji',
      location: 'Lagos, Nigeria',
      tag: 'Faithful Fellowship',
      scripture: 'Hebrews 10:24-25',
      story: 'Our church youth fellowship uses ArkBible’s sermon notes and scripture reflection tools. It has connected our young believers across different cities effortlessly.'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      location: 'Prague, Czech Republic',
      tag: 'Daily Scripture Grounding',
      scripture: 'Psalm 119:105',
      story: 'Finding a peaceful Bible app in my own language was an answer to prayer. The calm design helps me start every morning anchored in truth.'
    },
    {
      id: 4,
      name: 'Marcus Vance',
      location: 'London, UK',
      tag: 'Mutual Prayer Support',
      scripture: 'Proverbs 3:5-6',
      story: 'When I shared my prayer request with the community, believers from across the world encouraged me with comforting verses. Two months later, I marked it answered.'
    },
    {
      id: 5,
      name: 'Hannah Al-Mansoor',
      location: 'Beirut, Lebanon',
      tag: 'Daily Scripture Grounding',
      scripture: 'Isaiah 41:10',
      story: 'Reading Louis Segond and KJV offline while traveling through areas with no reception kept my heart steady and spiritually nourished.'
    }
  ];

  const allTestimonies = [...customStories, ...defaultTestimonies];
  const filteredTestimonies = activeFilter === 'All'
    ? allTestimonies
    : allTestimonies.filter(item => item.tag === activeFilter);

  const scrollSlider = (delta) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* =====================================================================
          1. FULL-BLEED EDITORIAL PHOTO HERO (YOUVERSION-INSPIRED)
         ===================================================================== */}
      <section style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(16, 36, 35, 0.56) 0%, rgba(16, 36, 35, 0.72) 100%), url('/images/believers.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#FFFFFF',
        padding: '6rem 0',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '760px' }}>
            <p
              className="animate-hero"
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#F4B956',
                marginBottom: '1.25rem',
              }}
            >
              {t('home.heroTag')}
            </p>

            <h1
              className="animate-hero-delay-1"
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              {t('home.heroTitleLine1')}{' '}
              <span style={{ color: '#F4B956' }}>{t('home.heroTitleLine2')}</span>
            </h1>

            <p
              className="animate-hero-delay-2"
              style={{
                fontSize: 'clamp(1.08rem, 1.8vw, 1.3rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '580px',
                marginBottom: '2.5rem',
                fontWeight: 400,
              }}
            >
              {t('home.heroSubtitle')}
            </p>

            <div className="animate-hero-delay-2" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.1rem' }}>
              <button
                className="btn btn-secondary"
                onClick={onOpenDownload}
                style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
              >
                {t('buttons.downloadFree')}
              </button>
              <button
                onClick={() => navigateTo('/about')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '0.9rem 1.2rem',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                {t('nav.mission')} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CALM MISSION STATEMENT & CLEAN TYPOGRAPHIC IMPACT NUMBERS
         ===================================================================== */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}>
                {t('home.pillarsBadge')}
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.1rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                color: 'var(--text-dark)',
                marginBottom: '1.2rem',
              }}>
                {t('home.pillarsTitle')}
              </h2>
              <p style={{
                fontSize: '1.12rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '640px',
                margin: '0 auto',
              }}>
                {t('home.pillarsSubtitle')}
              </p>
            </div>
          </Reveal>

          {/* Clean Borderless Impact Metrics */}
          <Reveal delay={120}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2.5rem',
              maxWidth: '920px',
              margin: '4.5rem auto 0 auto',
              paddingTop: '3.5rem',
              borderTop: '1px solid var(--border-light)',
              textAlign: 'center',
            }}>
              {[
                { num: t('home.statBelieversNum'), label: t('home.statBelieversLabel'), color: 'var(--primary)' },
                { num: t('home.statPrayersNum'), label: t('home.statPrayersLabel'), color: 'var(--secondary)' },
                { num: t('home.statCountriesNum'), label: t('home.statCountriesLabel'), color: 'var(--primary)' },
                { num: t('home.statTranslationsNum'), label: t('home.statTranslationsLabel'), color: 'var(--secondary)' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.1rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: stat.color,
                    lineHeight: 1.1,
                  }}>
                    {stat.num}
                  </div>
                  <div style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. CORE FOUNDATIONS — LARGE GALLERY CARDS (YOUVERSION STYLE)
         ===================================================================== */}
      <section style={{ padding: '2rem 0 6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                image: '/images/community.jpg',
                alt: 'Faithful Fellowship',
                eyebrow: t('home.pillar1Tag'),
                title: t('home.pillar1Title'),
                desc: t('home.pillar1Desc'),
                surface: '#F7F9F8',
                accent: 'var(--primary)',
                action: () => navigateTo('/partner'),
              },
              {
                image: '/images/book.jpg',
                alt: 'Daily Scripture Grounding',
                eyebrow: t('home.pillar2Tag'),
                title: t('home.pillar2Title'),
                desc: t('home.pillar2Desc'),
                surface: '#FDF8F0',
                accent: 'var(--secondary-dark)',
                action: () => navigateTo('/product'),
              },
              {
                image: '/images/pray.jpg',
                alt: 'Mutual Prayer Support',
                eyebrow: t('home.pillar3Tag'),
                title: t('home.pillar3Title'),
                desc: t('home.pillar3Desc'),
                surface: '#F7F9F8',
                accent: 'var(--primary)',
                action: onOpenSubmitStory,
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <article
                  onClick={card.action}
                  style={{
                    height: '100%',
                    background: card.surface,
                    borderRadius: '28px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(19, 38, 37, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src={card.image}
                      alt={card.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  </div>
                  <div style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <p style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: card.accent,
                        marginBottom: '0.65rem',
                      }}>
                        {card.eyebrow}
                      </p>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: 'var(--text-dark)',
                        marginBottom: '0.8rem',
                        lineHeight: 1.25,
                      }}>
                        {card.title}
                      </h3>
                      <p style={{
                        fontSize: '0.98rem',
                        lineHeight: 1.7,
                        color: 'var(--text-dark-soft)',
                      }}>
                        {card.desc}
                      </p>
                    </div>
                    <div style={{
                      marginTop: '1.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: card.accent,
                    }}>
                      {t('buttons.learnMore')} <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. APP SHOWCASE BAND — CLEAN SPLIT WITH PHONE PREVIEW
         ===================================================================== */}
      <section style={{ padding: '6.5rem 0', background: 'var(--bg-light-soft)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <Reveal>
              <div style={{
                background: 'linear-gradient(135deg, #2F6662 0%, #1D4441 100%)',
                borderRadius: '32px',
                padding: '2.5rem 2.5rem 0 2.5rem',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '0 24px 55px rgba(29, 68, 65, 0.18)',
              }}>
                <img
                  src="/images/dpp.png"
                  alt="ArkBible Mobile App"
                  className="animate-float"
                  style={{
                    width: '100%',
                    maxWidth: '340px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '20px 20px 0 0',
                  }}
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--secondary-dark)',
                  marginBottom: '0.9rem',
                }}>
                  {t('product.badge')}
                </p>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'var(--text-dark)',
                  marginBottom: '1.2rem',
                }}>
                  {t('home.featuresTitle')}
                </h2>
                <p style={{
                  fontSize: '1.08rem',
                  lineHeight: 1.75,
                  color: 'var(--text-dark-soft)',
                  marginBottom: '2.2rem',
                }}>
                  {t('product.subtitle')}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', marginBottom: '2.5rem' }}>
                  {[
                    { title: t('home.feat1Title'), desc: t('home.feat1Desc') },
                    { title: t('home.feat2Title'), desc: t('home.feat2Desc') },
                    { title: t('home.feat3Title'), desc: t('home.feat3Desc') },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        borderLeft: '3px solid var(--secondary)',
                        paddingLeft: '1.15rem',
                      }}
                    >
                      <h4 style={{ fontSize: '1.06rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <button className="btn btn-primary" onClick={onOpenDownload}>
                    {t('buttons.getAppNow')}
                  </button>
                  <button className="btn btn-outline-teal" onClick={() => navigateTo('/product')}>
                    {t('buttons.learnMore')} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. COMMUNITY STORIES — CLEAN HORIZONTAL GALLERY ON WHITE
         ===================================================================== */}
      <section style={{ padding: '6.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            <div>
              <p style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: '0.7rem',
              }}>
                {t('home.storiesBadge')}
              </p>
              <h2 className="heading-lg">{t('home.storiesTitle')}</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={onOpenSubmitStory}
                className="btn btn-outline-teal"
                style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
              >
                {t('buttons.shareStory')}
              </button>
              <button
                onClick={() => scrollSlider(-340)}
                aria-label="Previous stories"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  background: '#FFFFFF',
                  color: 'var(--text-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={19} />
              </button>
              <button
                onClick={() => scrollSlider(340)}
                aria-label="Next stories"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  background: '#FFFFFF',
                  color: 'var(--text-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}
          >
            {filteredTestimonies.map((item) => (
              <div
                key={item.id}
                style={{
                  flexShrink: 0,
                  width: '340px',
                  scrollSnapAlign: 'start',
                  background: 'var(--bg-light-soft)',
                  borderRadius: '24px',
                  padding: '2rem',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-dark)',
                  marginBottom: '1.8rem',
                }}>
                  "{item.story}"
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.8rem',
                }}>
                  <div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.location}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    background: 'var(--primary-subtle)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.scripture || 'Scripture'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. ROUNDED FULL-WIDTH CALL-TO-ACTION BANNER (ARK GREEN + ORANGE)
         ===================================================================== */}
      <section style={{ padding: '1rem 0 6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{
              background: 'linear-gradient(135deg, #2F6662 0%, #1D4441 100%)',
              borderRadius: '32px',
              padding: 'clamp(3rem, 6vw, 5rem) clamp(1.8rem, 5vw, 4rem)',
              textAlign: 'center',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(29, 68, 65, 0.2)',
            }}>
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'rgba(232, 157, 43, 0.14)',
                top: '-120px',
                right: '-80px',
                pointerEvents: 'none',
              }} />
              <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                }}>
                  {t('home.ctaTitle')}
                </h2>
                <p style={{
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.86)',
                  marginBottom: '2.2rem',
                }}>
                  {t('home.ctaSubtitle')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                  <button
                    className="btn btn-secondary"
                    onClick={onOpenDownload}
                    style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}
                  >
                    {t('buttons.downloadFree')}
                  </button>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => navigateTo('/partner')}
                    style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
                  >
                    {t('buttons.becomePartner')}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
