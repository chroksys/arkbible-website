import React, { useState, useRef } from 'react';
import {
  Users, BookOpen, HeartHandshake, Download, ArrowRight, Star,
  ShieldCheck, MessageSquareQuote, PlusCircle, Sparkles, Church, Globe2,
  Check, MapPin, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
      date: '2 days ago',
      avatarColor: 'linear-gradient(135deg, #3A6B68, #244846)',
      story: 'During a grueling medical diagnosis last autumn, the Arkbible community prayed with me every day. Having God’s promises right in my pocket without ads gave me deep peace.'
    },
    {
      id: 2,
      name: 'Pastor David Olatunji',
      location: 'Lagos, Nigeria',
      tag: 'Faithful Fellowship',
      scripture: 'Hebrews 10:24-25',
      date: '1 week ago',
      avatarColor: 'linear-gradient(135deg, #4D8582, #3A6B68)',
      story: 'Our church youth fellowship uses Arkbible’s sermon note structurer and scripture reflection tools. It has connected our young believers across different cities effortlessly.'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      location: 'Prague, Czech Republic',
      tag: 'Daily Scripture Grounding',
      scripture: 'Psalm 119:105',
      date: '3 weeks ago',
      avatarColor: 'linear-gradient(135deg, #3A6B68, #1C3835)',
      story: 'Finding a 100% ad-free Bible app in my native translation was an answer to prayer. The quiet sanctuary design helps me start every morning anchored in truth.'
    },
    {
      id: 4,
      name: 'Marcus Vance',
      location: 'London, UK',
      tag: 'Mutual Prayer Support',
      scripture: 'Proverbs 3:5-6',
      date: '1 month ago',
      avatarColor: 'linear-gradient(135deg, #244846, #4D8582)',
      story: 'When I logged my prayer request on the community board, three believers from across the world replied with comforting verses. Two months later, I marked it as Answered!'
    },
    {
      id: 5,
      name: 'Hannah Al-Mansoor',
      location: 'Beirut, Lebanon',
      tag: 'Daily Scripture Grounding',
      scripture: 'Isaiah 41:10',
      date: '1 month ago',
      avatarColor: 'linear-gradient(135deg, #3A6B68, #2A5450)',
      story: 'Reading the WEB and Louis Segond offline while traveling through rural areas with zero cell reception kept my heart steady and spiritually nourished.'
    }
  ];

  const allTestimonies = [...customStories, ...defaultTestimonies];
  const categories = ['All', 'Mutual Prayer Support', 'Faithful Fellowship', 'Daily Scripture Grounding'];

  const filteredTestimonies = activeFilter === 'All'
    ? allTestimonies
    : allTestimonies.filter(tItem => tItem.tag === activeFilter);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* SECTION 1: HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '7.5rem 0 6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.72), rgba(14, 23, 22, 0.92)), url('/images/good.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }}>
        <div className="container hero-content">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <div className="hero-badge" style={{ marginBottom: '1.4rem' }}>
              <Sparkles size={16} /> {t('home.heroTag')}
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.4rem' }}>
              {t('home.heroTitleLine1')} <span className="text-gradient-green">{t('home.heroTitleLine2')}</span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2.5rem',
              lineHeight: '1.75'
            }}>
              {t('home.heroSubtitle')}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem', marginBottom: '2.8rem' }}>
              <button
                className="btn btn-primary"
                onClick={onOpenSubmitStory}
              >
                <Users size={18} /> {t('buttons.shareStory')}
              </button>
              <button
                className="btn btn-outline-light"
                onClick={onOpenDownload}
              >
                <Download size={18} /> {t('buttons.downloadFree')}
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <ShieldCheck size={18} color="#528986" /> {t('home.adFreeSanctuary')}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Star size={18} color="#528986" /> {t('home.globalFellowship')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE COMMUNITY PILLARS */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              {t('home.pillarsBadge')}
            </div>
            <h2 className="heading-lg">
              {t('home.pillarsTitle')}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginTop: '0.6rem' }}>
              {t('home.pillarsSubtitle')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Pillar Card 1 */}
            <div
              className="light-card"
              style={{
                overflow: 'hidden',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src="/images/community.jpg"
                    alt="Faithful Fellowship Believers"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3A6B68',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                  }}>
                    <Users size={24} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(14, 23, 22, 0.8)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {t('home.pillar1Tag')}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    {t('home.pillar1Title')}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    {t('home.pillar1Desc')}
                  </p>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: '#3A6B68',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem'
                }}>
                  <Check size={16} /> {t('home.pillar1Check')}
                </div>
              </div>
            </div>

            {/* Pillar Card 2 */}
            <div
              className="light-card"
              style={{
                overflow: 'hidden',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src="/images/book.jpg"
                    alt="Open Bible Scripture Reading"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3A6B68',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                  }}>
                    <BookOpen size={24} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(14, 23, 22, 0.8)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {t('home.pillar2Tag')}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    {t('home.pillar2Title')}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    {t('home.pillar2Desc')}
                  </p>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: '#3A6B68',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem'
                }}>
                  <Check size={16} /> {t('home.pillar2Check')}
                </div>
              </div>
            </div>

            {/* Pillar Card 3 */}
            <div
              className="light-card"
              style={{
                overflow: 'hidden',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src="/images/pray.jpg"
                    alt="Believers Hands Raised in Prayer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3A6B68',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                  }}>
                    <HeartHandshake size={24} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(14, 23, 22, 0.8)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {t('home.pillar3Tag')}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    {t('home.pillar3Title')}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    {t('home.pillar3Desc')}
                  </p>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: '#3A6B68',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem'
                }}>
                  <Check size={16} /> {t('home.pillar3Check')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REAL FAITH STORIES & COMMUNITY TESTIMONIES */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.35), rgba(14, 23, 22, 0.6)), url('/images/bcg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2.2rem'
          }}>
            <div>
              <div className="hero-badge" style={{ marginBottom: '0.8rem' }}>
                <MessageSquareQuote size={14} /> {t('home.storiesBadge')}
              </div>
              <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
                {t('home.storiesTitle')}
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.4rem', fontWeight: '500' }}>
                {t('home.storiesSubtitle')}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                className="btn btn-outline-light"
                onClick={onOpenSubmitStory}
                style={{ padding: '0.65rem 1.2rem' }}
              >
                <PlusCircle size={17} /> {t('buttons.shareStory')}
              </button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={scrollLeft}
                  aria-label="Previous Testimonies"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Next Testimonies"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
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
              scrollbarWidth: 'none'
            }}
          >
            {filteredTestimonies.map((item) => (
              <div
                key={item.id}
                style={{
                  flexShrink: 0,
                  width: '320px',
                  scrollSnapAlign: 'start',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '1.6rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: item.avatarColor || 'linear-gradient(135deg, #3A6B68, #244846)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '1.05rem',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                    }}>
                      {item.name ? item.name.charAt(0) : 'A'}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>
                        {item.name}
                      </h4>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-dark)',
                    lineHeight: '1.6',
                    marginBottom: '1.2rem'
                  }}>
                    "{item.story}"
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#3A6B68" color="#3A6B68" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.date || 'Verified Story'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR DIGITAL SANCTUARY */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-parchment)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              height: '460px',
              background: 'linear-gradient(145deg, #0E1716 0%, #172D29 50%, #294D4A 100%)',
              boxShadow: '0 25px 50px rgba(14, 23, 22, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'visible',
              padding: '2rem'
            }}>
              <img
                src="/images/iPhone.png"
                alt="Arkbible App Showcase"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '530px',
                  height: '660px',
                  objectFit: 'contain',
                  marginTop: '-30px',
                  filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.55))'
                }}
              />
            </div>

            <div>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>
                {t('product.badge')}
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                {t('product.titleLine1')} {t('product.titleLine2')}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.06rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                {t('product.subtitle')}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  {t('product.spec1')}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  {t('product.feat4Title')} (0% hallucination)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  {t('product.feat3Title')}
                </li>
              </ul>

              <button
                className="btn btn-primary"
                onClick={() => navigateTo('/product')}
              >
                {t('buttons.learnMore')} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL KINGDOM MOVEMENT */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.45), rgba(14, 23, 22, 0.65)), url('/images/part2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <div className="hero-badge" style={{ marginBottom: '0.8rem' }}>
              <Globe2 size={16} /> {t('nav.kingdomMovement')}
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              {t('home.statsTitle')}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.08rem', marginTop: '0.6rem', fontWeight: '500' }}>
              {t('home.statsSubtitle')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Card 1: Volunteering */}
            <div
              className="light-card"
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                background: '#FFFFFF',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-subtle)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <HeartHandshake size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem' }}>
                {t('nav.volunteering')}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                {t('volunteer.subtitle')}
              </p>
              <button
                className="btn btn-outline-teal"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/volunteer')}
              >
                {t('buttons.becomeVolunteer')}
              </button>
            </div>

            {/* Card 2: Donation */}
            <div
              className="light-card"
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                border: '2px solid #3A6B68',
                background: '#FFFFFF',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#3A6B68',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <Sparkles size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem' }}>
                {t('nav.donation')}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                {t('donate.subtitle')}
              </p>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/donate')}
              >
                {t('buttons.donateNow')}
              </button>
            </div>

            {/* Card 3: Partners */}
            <div
              className="light-card"
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                background: '#FFFFFF',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-subtle)',
                color: 'var(--primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <Church size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem' }}>
                {t('nav.partners')}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                {t('partner.subtitle')}
              </p>
              <button
                className="btn btn-outline-teal"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/partner')}
              >
                {t('buttons.becomePartner')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
