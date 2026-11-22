import React, { useState, useRef } from 'react';
import {
  Users, BookOpen, HeartHandshake, Download, ArrowRight, Star,
  ShieldCheck, MessageSquareQuote, PlusCircle, Sparkles, Church, Globe2,
  Check, MapPin, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';
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
      date: '2 days ago',
      avatarColor: 'linear-gradient(135deg, #2F6662, #1D4441)',
      story: 'During a difficult season last autumn, the ArkBible community prayed with me every day. Having God’s promises right in my pocket gave me deep peace.'
    },
    {
      id: 2,
      name: 'Pastor David Olatunji',
      location: 'Lagos, Nigeria',
      tag: 'Faithful Fellowship',
      scripture: 'Hebrews 10:24-25',
      date: '1 week ago',
      avatarColor: 'linear-gradient(135deg, #E89D2B, #D0861A)',
      story: 'Our church youth fellowship uses ArkBible’s sermon notes and scripture reflection tools. It has connected our young believers across different cities effortlessly.'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      location: 'Prague, Czech Republic',
      tag: 'Daily Scripture Grounding',
      scripture: 'Psalm 119:105',
      date: '3 weeks ago',
      avatarColor: 'linear-gradient(135deg, #2F6662, #1D4441)',
      story: 'Finding a peaceful Bible app in my own language was an answer to prayer. The calm design helps me start every morning anchored in truth.'
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
      {/* SECTION 1: LIGHT, MODERN, ANIMATED HERO SYNCED WITH ARKBIBLE APP */}
      <section style={{
        position: 'relative',
        padding: '5.5rem 0 5rem 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9F8 100%)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)',
      }}>
        {/* Ambient Brand Glows */}
        <div style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47, 102, 98, 0.09) 0%, rgba(47, 102, 98, 0) 70%)',
          top: '-120px',
          left: '-120px',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '440px',
          height: '440px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 157, 43, 0.12) 0%, rgba(232, 157, 43, 0) 70%)',
          bottom: '-140px',
          right: '-100px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            {/* Left Copy */}
            <div>
              <div className="gold-badge animate-hero" style={{ marginBottom: '1.35rem' }}>
                <Sparkles size={14} color="var(--secondary)" /> {t('home.heroTag')}
              </div>
              <h1
                className="heading-xl animate-hero-delay-1"
                style={{ color: 'var(--text-dark)', marginBottom: '1.3rem', fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)' }}
              >
                {t('home.heroTitleLine1')}{' '}
                <span className="text-gradient-green">{t('home.heroTitleLine2')}</span>
              </h1>
              <p
                className="animate-hero-delay-2"
                style={{
                  fontSize: '1.12rem',
                  color: 'var(--text-dark-soft)',
                  marginBottom: '2.2rem',
                  lineHeight: '1.75',
                  maxWidth: '540px',
                }}
              >
                {t('home.heroSubtitle')}
              </p>

              <div className="animate-hero-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.2rem' }}>
                <button className="btn btn-primary" onClick={onOpenDownload}>
                  <Download size={18} /> {t('buttons.downloadFree')}
                </button>
                <button className="btn btn-secondary" onClick={onOpenSubmitStory}>
                  <Users size={18} /> {t('buttons.shareStory')}
                </button>
              </div>

              <div className="animate-hero-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.6rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldCheck size={17} color="var(--primary)" /> {t('home.adFreeSanctuary')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Star size={17} color="var(--secondary)" /> {t('home.globalFellowship')}
                </div>
              </div>
            </div>

            {/* Right Floating App-Synced Hero Card */}
            <div className="animate-float" style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, #2F6662 0%, #1D4441 100%)',
                borderRadius: '28px',
                padding: '2.2rem',
                color: '#FFFFFF',
                boxShadow: '0 24px 55px rgba(29, 68, 65, 0.22)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'rgba(232, 157, 43, 0.16)',
                  top: '-50px',
                  right: '-40px',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{
                    background: '#E89D2B',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.32rem 0.85rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                  }}>
                    Verse of the Day
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.82)', fontWeight: 600 }}>
                    Philippians 4:6–7
                  </span>
                </div>
                <p style={{ fontSize: '1.28rem', fontWeight: 500, lineHeight: 1.65, color: '#FFFFFF', marginBottom: '1.6rem' }}>
                  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '0.85rem 1.1rem',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                    <BookOpen size={16} color="#F4B752" /> KJV · BBE · LSG · Darby
                  </span>
                  <span style={{ color: '#F4B752' }}>100% Offline</span>
                </div>
              </div>

              {/* Floating Community Affirmation Strip */}
              <div style={{
                marginTop: '1rem',
                background: 'linear-gradient(135deg, #FFFDF9 0%, #FDF2DF 100%)',
                border: '1px solid rgba(232, 157, 43, 0.35)',
                borderRadius: '20px',
                padding: '1.1rem 1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '13px',
                  background: '#E89D2B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Sparkles size={18} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#D0861A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Daily Morning Encouragement
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-dark)', marginTop: '0.15rem' }}>
                    You are deeply loved, strengthened, and guided today.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE COMMUNITY PILLARS */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <Reveal>
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
          </Reveal>

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
                  {t('product.feat4Title')}
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
