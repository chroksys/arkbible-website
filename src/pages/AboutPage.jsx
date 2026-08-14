import React, { useState } from 'react';
import {
  BookOpen, ShieldCheck, Heart, Users, Globe2, ChevronDown, ChevronUp,
  Sparkles, CheckCircle2, MapPin, Award, Layers, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage({ navigateTo, onOpenDownload }) {
  const { t } = useLanguage();
  const [expandedFaith, setExpandedFaith] = useState(0);

  const statementOfFaith = [
    {
      title: 'Uncompromised Authority of Scripture',
      subtitle: 'The inspired, infallible Word of God as our supreme rule of faith and practice.',
      content: 'We affirm that the Holy Scriptures (both Old and New Testaments) are fully inspired by God, completely trustworthy, and serve as the final authority for all Christian faith, theology, and conduct.'
    },
    {
      title: 'Salvation by Grace Through Faith in Christ',
      subtitle: 'Reconciled to God through the death and resurrection of Jesus Christ.',
      content: 'We believe human salvation is a gift of God’s pure grace, received through personal faith in Jesus Christ alone, whose sacrificial death on the cross and bodily resurrection redeemed humanity from sin.'
    },
    {
      title: 'Christian Unity & One Global Body',
      subtitle: 'Uniting believers across denominational, generational, and cultural lines.',
      content: 'We honor the spiritual unity of all true believers in Jesus Christ. Arkbible is built to bring Christians together in love, mutual prayer, and shared devotion to God’s eternal truth.'
    },
    {
      title: 'Holy Spirit Guidance & Daily Sanctification',
      subtitle: 'Empowered to live holy, victorious, and fruitful lives daily.',
      content: 'We believe the Holy Spirit indwells every true believer, granting spiritual wisdom, comfort, and the power to live a godly life that bears lasting fruit in community.'
    }
  ];

  const roadmapItems = [
    {
      number: '01',
      phase: 'Phase 1 • Active Standard',
      title: '100% Offline Multi-Translation & RAG Engine',
      description: 'Established pre-bundled KJV, WEB, Louis Segond, and Reina-Valera translations with 0% AI hallucination semantic verse search.',
      status: 'Current Sanctuary',
      isCurrent: true
    },
    {
      number: '02',
      phase: 'Phase 2 • Multi-Language',
      title: 'Expanding Public Domain Translations Globally',
      description: 'Adding Portuguese, Swahili, Tagalog, German, and Mandarin offline Bibles so believers worldwide read in their mother tongue.',
      status: 'In Active Rollout',
      isCurrent: false
    },
    {
      number: '03',
      phase: 'Phase 3 • Pastoral Tools',
      title: 'Equipping Local Pastors & Sermon Notes',
      description: 'Providing church leaders with tools to distribute structured service notes, youth discussion guides, and local prayer groups.',
      status: 'Upcoming Milestone',
      isCurrent: false
    },
    {
      number: '04',
      phase: 'Phase 4 • Kingdom Outreach',
      title: 'Global Community Ministry, Environment & Skill Empowerment',
      description: 'We build free, global communities that teach scripture—even in offline regions by partnering with local churches for Bible study. They focus on community care, environmental stewardship (such as volunteer city cleanups), and empowering locals through practical education, domain expertise, and a Godly mindset.',
      status: 'Vision Milestone',
      isCurrent: false
    }
  ];

  return (
    <div>
      {/* SECTION 1: HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '7rem 0 5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.7), rgba(14, 23, 22, 0.95)), url('/images/about background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="hero-badge" style={{ marginBottom: '1.2rem' }}>
            {t('about.badge')}
          </div>
          <h1 className="heading-xl" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            {t('about.titleLine1')} <span className="text-gradient-green">{t('about.titleLine2')}</span>.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.7',
            marginBottom: '2rem'
          }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* SECTION 2: THE HEART BEHIND ARKBIBLE */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>
                {t('about.narrativeBadge')}
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1.2rem' }}>
                {t('about.heartTitle')}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.06rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
                {t('about.heartP1')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.06rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                {t('about.heartP2')}
              </p>

              <div style={{
                background: 'var(--bg-parchment)',
                borderLeft: '4px solid #3A6B68',
                padding: '1.4rem 1.8rem',
                borderRadius: '0 16px 16px 0',
                marginBottom: '2rem'
              }}>
                <p className="font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--primary-dark)' }}>
                  "Thy word is a lamp unto my feet, and a light unto my path."
                </p>
                <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#3A6B68' }}>— Psalm 119:105</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="/images/book.jpg"
                alt="Open Holy Bible"
                style={{
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow-lg)',
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '1.2rem 1.6rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <ShieldCheck size={32} color="var(--primary)" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>100% Ad-Free Guarantee</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>0 Commercial Distractions Ever</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATEMENT OF FAITH & THEOLOGICAL PRINCIPLES (BACKGROUND: united.webp COVER CENTER CENTER) */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.45), rgba(14, 23, 22, 0.68)), url('/images/united.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="hero-badge" style={{ marginBottom: '0.8rem' }}>
              Theological Principles
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Statement of Faith (What We Believe)
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.5rem', fontWeight: '500' }}>
              Structured theological foundations guiding our global community and software development.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {statementOfFaith.map((item, index) => {
              const isOpen = expandedFaith === index;
              return (
                <div
                  key={index}
                  className="light-card"
                  style={{
                    padding: '1.8rem 2.2rem',
                    cursor: 'pointer',
                    borderRadius: '18px',
                    border: '1.5px solid',
                    borderColor: isOpen ? '#3A6B68' : 'rgba(255, 255, 255, 0.45)',
                    background: isOpen ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: isOpen ? '0 12px 35px rgba(0,0,0,0.25)' : '0 8px 25px rgba(0,0,0,0.18)',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => setExpandedFaith(isOpen ? null : index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: isOpen ? '#3A6B68' : 'var(--primary-subtle)',
                        color: isOpen ? '#FFFFFF' : 'var(--primary-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.95rem'
                      }}>
                        0{index + 1}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={22} color="#3A6B68" /> : <ChevronDown size={22} color="var(--text-muted)" />}
                  </div>

                  {isOpen && (
                    <div style={{
                      marginTop: '1.2rem',
                      paddingTop: '1.2rem',
                      borderTop: '1px solid var(--border-light)',
                      fontSize: '0.96rem',
                      lineHeight: '1.7',
                      color: 'var(--text-dark-soft)'
                    }}>
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE ORGANIZATIONAL VALUES */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              Guiding Standards
            </div>
            <h2 className="heading-lg">
              Our Core Organizational Values
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Every feature we design and every community initiative we launch adheres strictly to these three commitments.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Value 1 */}
            <div className="light-card" style={{ padding: '2.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--primary-subtle)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={30} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.35rem' }}>
                Uncompromised Scripture
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.65' }}>
                0% hallucination guarantees and strict biblical integrity. Our AI semantic search vector engines map exclusively to verified public-domain Bible texts without inventing custom theology.
              </p>
            </div>

            {/* Value 2 */}
            <div className="light-card" style={{ padding: '2.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--primary-subtle)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <BookOpen size={30} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.35rem' }}>
                Accessibility First
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.65' }}>
                Keeping God’s Word 100% offline-ready, $0 cost, and completely ad-free for everyone everywhere—ensuring believers in remote areas with zero internet still access complete scriptures.
              </p>
            </div>

            {/* Value 3 */}
            <div className="light-card" style={{ padding: '2.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--primary-subtle)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Heart size={30} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.8rem', fontSize: '1.35rem' }}>
                Community Encouragement
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.65' }}>
                Fostering authentic, uplifted Christian relationships. We cultivate a safe, 4-layer moderated space where believers bear one another's burdens in prayer without toxic noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VISION FOR THE FUTURE & KINGDOM ROADMAP (2 ROWS x 2 COLUMNS WIDE CARDS GRID) */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.45), rgba(14, 23, 22, 0.72)), url('/images/bc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <div className="hero-badge" style={{ marginBottom: '0.8rem' }}>
              <Sparkles size={16} /> Kingdom Roadmap
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Vision for the Future
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.08rem', marginTop: '0.5rem', fontWeight: '500' }}>
              Long-term roadmap for global multi-language expansions, supporting local church leaders, and expanding community outreach programs.
            </p>
          </div>

          {/* 2 ROWS x 2 COLUMNS WIDE CARDS GRID (MOBILE OPTIMIZED 280px MIN) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.8rem'
          }}>
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="light-card"
                style={{
                  padding: '2rem 1.6rem',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: item.isCurrent ? '2px solid #3A6B68' : '1px solid rgba(255, 255, 255, 0.45)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div>
                  {/* Card Header: Number Badge, Phase Tag & Status Pill */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.2rem',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: item.isCurrent
                          ? 'linear-gradient(135deg, #3A6B68, #244846)'
                          : 'rgba(58, 107, 104, 0.12)',
                        color: item.isCurrent ? '#FFFFFF' : '#3A6B68',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '1.1rem',
                        boxShadow: item.isCurrent ? '0 4px 14px rgba(58, 107, 104, 0.3)' : 'none'
                      }}>
                        {item.number}
                      </div>
                      <span style={{
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: '#3A6B68',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
                      }}>
                        {item.phase}
                      </span>
                    </div>

                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      background: item.isCurrent ? 'rgba(58, 107, 104, 0.15)' : 'var(--bg-parchment)',
                      color: item.isCurrent ? '#3A6B68' : 'var(--text-dark-soft)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase'
                    }}>
                      {item.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.65rem', lineHeight: '1.35' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--text-dark-soft)', lineHeight: '1.65', marginBottom: '1.4rem' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#3A6B68'
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} /> Built for Global Impact
                  </span>
                  <span style={{ fontSize: '0.78rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Arkbible Roadmap
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner with ivan.webp Background */}
          <div style={{
            marginTop: '4rem',
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.65), rgba(14, 23, 22, 0.88)), url('/images/ivan.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            border: '2px solid #3A6B68',
            borderRadius: '28px',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: '#FFFFFF',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)'
          }}>
            <h3 className="heading-md" style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '2rem' }}>
              Want to Help Us Build This Vision?
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '640px',
              margin: '0 auto 2rem auto',
              fontSize: '1.08rem',
              lineHeight: '1.7',
              fontWeight: '500'
            }}>
              Your financial partnership and prayers empower us to accelerate offline language expansions and church leader tools.
            </p>
            <button
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2.2rem',
                fontSize: '1.05rem',
                boxShadow: '0 6px 20px rgba(58, 107, 104, 0.4)'
              }}
              onClick={() => navigateTo('/partner')}
            >
              Partner & Support Mission <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
