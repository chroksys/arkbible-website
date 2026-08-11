import React, { useState, useRef } from 'react';
import {
  Users, BookOpen, HeartHandshake, Download, ArrowRight, Star,
  ShieldCheck, MessageSquareQuote, PlusCircle, Sparkles, Church, Globe2,
  Check, MapPin, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

export default function HomePage({ navigateTo, onOpenDownload, onOpenSubmitStory, customStories = [] }) {
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
    : allTestimonies.filter(t => t.tag === activeFilter);

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
      {/* SECTION 1: HERO BANNER (BACKGROUND IMAGE: /images/good.webp) */}
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
              <Sparkles size={16} /> Global Believers Movement
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.4rem' }}>
              A Godly Community Rooted in <span className="text-gradient-green">Scripture</span>, Prayer, & Fellowship.
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2.5rem',
              lineHeight: '1.75'
            }}>
              Bringing believers together globally to grow deeper in faith, support one another through life’s seasons, and stay anchored in God’s Word.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem', marginBottom: '2.8rem' }}>
              <button
                className="btn btn-primary"
                onClick={onOpenSubmitStory}
              >
                <Users size={18} /> Join Our Community
              </button>
              <button
                className="btn btn-outline-light"
                onClick={onOpenDownload}
              >
                <Download size={18} /> Get the Arkbible App
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <ShieldCheck size={18} color="#528986" /> 100% Ad-Free Sanctuary
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Star size={18} color="#528986" /> Global Fellowship
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
              Core Foundations
            </div>
            <h2 className="heading-lg">
              Built Around Three Pillars of Christian Life
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginTop: '0.6rem' }}>
              We exist to nurture genuine spiritual fellowship, daily immersion in Scripture, and unwavering prayer for one another.
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
                    Global Believers Circle
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    Faithful Fellowship
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    Connecting Christians across generations and locations to encourage one another daily in prayer, spiritual accountability, and mutual discipleship.
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
                  <Check size={16} /> Intergenerational Unity & Support
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
                    100% Offline Scripture
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    Daily Scripture Grounding
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    Keeping God’s Word at the absolute center of personal life and communal conversations, pre-bundled 100% offline with zero ad distractions.
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
                  <Check size={16} /> Multi-Translation Offline Bibles
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
                    alt="Believers in Prayer Support"
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
                    Intercessory Sanctuary
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.45rem' }}>
                    Mutual Prayer Support
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                    A safe, 4-layer moderated sanctuary to share confidential prayer requests and celebrate answered prayers together as one global body of Christ.
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
                  <Check size={16} /> Confidential & Moderated Prayer
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: REAL FAITH STORIES & COMMUNITY TESTIMONIES (BACKGROUND: bcg.jpg COVER CENTER CENTER) */}
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
          {/* Header with Navigation Controls */}
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
                <MessageSquareQuote size={14} /> Community Voices
              </div>
              <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
                Real Faith Stories & Testimonies
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.4rem', fontWeight: '500' }}>
                Encouraging testimonies submitted by brothers and sisters across the globe.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                className="btn btn-outline-light"
                onClick={onOpenSubmitStory}
                style={{ padding: '0.65rem 1.2rem' }}
              >
                <PlusCircle size={17} /> Share Your Faith Story
              </button>

              {/* Slider Navigation Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={scrollLeft}
                  aria-label="Previous Testimonies"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#3A6B68';
                    e.currentTarget.style.borderColor = '#3A6B68';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
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
                    background: '#3A6B68',
                    border: '1.5px solid #3A6B68',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#244846';
                    e.currentTarget.style.borderColor = '#244846';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#3A6B68';
                    e.currentTarget.style.borderColor = '#3A6B68';
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: '600',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? '#3A6B68' : 'rgba(255, 255, 255, 0.3)',
                  background: activeFilter === cat ? '#3A6B68' : 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* WRAPPER WITH ULTRA SMOOTH MASK-IMAGE FADE EDGES */}
          <div style={{ position: 'relative' }}>
            {/* HORIZONTAL SLIDING TESTIMONY CAROUSEL WITH MASK FADE */}
            <div
              ref={sliderRef}
              style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                padding: '0.5rem 1rem 1.5rem 1rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50px, black calc(100% - 50px), transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 50px, black calc(100% - 50px), transparent 100%)'
              }}
            >
              {filteredTestimonies.map((item) => (
                <div
                  key={item.id}
                  className="light-card"
                  style={{
                    minWidth: '290px',
                    maxWidth: '310px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    padding: '1.6rem 1.8rem',
                    borderRadius: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                    background: '#FFFFFF'
                  }}
                >
                  <div>
                    {/* Card Header: Avatar & Category */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: item.avatarColor || 'linear-gradient(135deg, #3A6B68, #244846)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '0.98rem',
                          boxShadow: '0 3px 10px rgba(58, 107, 104, 0.2)'
                        }}>
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-dark)' }}>
                            {item.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                            <MapPin size={11} color="#3A6B68" /> {item.location}
                          </div>
                        </div>
                      </div>

                      <Quote size={22} color="rgba(58, 107, 104, 0.2)" />
                    </div>

                    {/* Tags & Scripture */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        background: 'rgba(58, 107, 104, 0.1)',
                        color: '#3A6B68',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}>
                        {item.tag}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        background: 'var(--bg-parchment)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        color: 'var(--primary-dark)',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <BookOpen size={11} /> {item.scripture}
                      </span>
                    </div>

                    {/* Testimony Story */}
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.65',
                      color: 'var(--text-dark-soft)',
                      marginBottom: '1.4rem',
                      fontStyle: 'italic'
                    }}>
                      "{item.story}"
                    </p>
                  </div>

                  {/* Card Footer: Verified Star Rating & Date */}
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
                      <span style={{ fontSize: '0.74rem', fontWeight: '700', color: '#3A6B68', marginLeft: '0.3rem' }}>Verified</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.date || 'Verified Story'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR DIGITAL SANCTUARY (PRODUCT INTRO BANNER) */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-parchment)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left Side: Premium Gradient Container with 3D Pop-Out iPhone */}
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
              padding: '2rem',
              marginTop: '30px',
              marginBottom: '30px'
            }}>
              {/* Luminous Glow Backlight Effect */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168, 224, 221, 0.4) 0%, rgba(58, 107, 104, 0.08) 70%, transparent 100%)',
                filter: 'blur(45px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
              }} />

              {/* Ultra Big 3D iPhone Image Popping Out of Top & Bottom */}
              <img
                src="/images/iPhone.png"
                alt="Arkbible 3D iPhone App Showcase"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '530px',
                  height: '660px',
                  objectFit: 'contain',
                  marginTop: '-30px',
                  filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.55))',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
              />
            </div>

            <div>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>
                Digital Tool & Sanctuary
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                Equipping Your Daily Walk: The Arkbible App
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.06rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                A warm, dedicated introduction to the Arkbible mobile application—built specifically to give our global community a 100% ad-free, offline-ready space for daily reading, quiet reflection, and AI-assisted theological study.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  Pre-bundled translations (KJV, WEB, Louis Segond, Reina-Valera) with 0 data cost
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  AI Vector RAG verse search ("How Are You Feeling?") with 0% hallucination
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  <div style={{ background: 'var(--primary-subtle)', padding: '0.35rem', borderRadius: '50%', color: '#3A6B68' }}>
                    <Check size={16} />
                  </div>
                  Native Offline Text-To-Speech audio reading out loud
                </li>
              </ul>

              <button
                className="btn btn-primary"
                onClick={() => navigateTo('/product')}
              >
                Explore App Features <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GET INVOLVED & GLOBAL KINGDOM MOVEMENT (BACKGROUND: part2.jpg COVER CENTER CENTER) */}
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
              <Globe2 size={16} /> Global Kingdom Movement
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Be Part of Something Bigger
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.08rem', marginTop: '0.6rem', fontWeight: '500' }}>
              Whether praying with believers, partnering financially, or introducing Arkbible to your local church leaders, your step matters.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Card 1: Pray */}
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
                Pray With Us
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                Join our daily prayer circle to lift up prayer requests submitted by believers globally.
              </p>
              <button
                className="btn btn-outline-teal"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/contact')}
              >
                Send Prayer Request
              </button>
            </div>

            {/* Card 2: Partner */}
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
                Partner Financially
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                Help keep Arkbible 100% ad-free, offline-accessible, and expanding into global language translations.
              </p>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/partner')}
              >
                Partner & Give
              </button>
            </div>

            {/* Card 3: Church */}
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
                Church Alliances
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.65' }}>
                Equip your local congregation with church sermon note tools and youth study resources.
              </p>
              <button
                className="btn btn-outline-teal"
                style={{ width: '100%' }}
                onClick={() => navigateTo('/partner')}
              >
                Church Alliances
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
