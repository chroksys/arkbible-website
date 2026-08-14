import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Heart, CreditCard, Sparkles, CheckCircle2, ShieldCheck,
  DollarSign, PieChart, Globe, Zap, HeartHandshake, Mail, User
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DonatePage({ navigateTo, onSubmitToast }) {
  const { t } = useLanguage();
  const [giveType, setGiveType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [sendReminders, setSendReminders] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [giveSuccess, setGiveSuccess] = useState(false);

  const getImpactMessage = (amount, type) => {
    const amt = Number(amount) || 0;
    if (type === 'monthly') {
      if (amt >= 100) {
        return "Sponsors 1 digital technology workshop & server capacity for 2,000+ believers every month.";
      } else if (amt >= 50) {
        return "Funds multi-language Bible translation maintenance for 2 global regions every month.";
      } else if (amt >= 25) {
        return "Maintains vector RAG search & cloud server infrastructure for 500 app users every month.";
      } else {
        return "Sponsors ad-free scripture access and daily morning devotions for 200 believers every month.";
      }
    } else {
      if (amt >= 250) {
        return "Funds a complete community outreach mission kit with digital tech tools & study materials for remote regions.";
      } else if (amt >= 100) {
        return "Sponsors 1 digital technology & Arkbible study toolkit for a remote church leader.";
      } else if (amt >= 50) {
        return "Prints & delivers 10 scripture study workbooks for local youth fellowships.";
      } else {
        return "Provides digital Bible starter kits & RAG search access for 50 new believers.";
      }
    }
  };

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleGiveSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setGiveSuccess(true);
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      if (onSubmitToast) {
        onSubmitToast(`Thank you, ${donorName || 'Kingdom Partner'}! Your $${currentAmount} donation has been recorded with gratitude.`);
      }
    }, 900);
  };

  return (
    <div>
      {/* HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '7.5rem 0 5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.78), rgba(14, 23, 22, 0.95)), url('/images/donate.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="hero-badge" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
            <Heart size={16} color="#A8E0DD" /> {t('donate.badge')}
          </div>
          <h1 className="heading-xl" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            {t('donate.title')}
          </h1>
          <p style={{
            fontSize: '1.18rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.75',
            marginBottom: '2rem'
          }}>
            {t('donate.subtitle')}
          </p>
        </div>
      </section>

      {/* SECTION 1: FINANCIAL PARTNERSHIP GATEWAY (WHITE BACKGROUND) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              {t('donate.badge')}
            </div>
            <h2 className="heading-lg">
              {t('donate.title')}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              {t('donate.subtitle')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'stretch'
          }}>
            {/* LEFT SIDE: Kingdom Movement Impact Card */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                height: '100%',
                minHeight: '440px',
                background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.35) 0%, rgba(14, 23, 22, 0.85) 100%), url('/images/donate.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                color: '#FFFFFF'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', background: '#3A6B68', padding: '0.3rem 0.85rem', borderRadius: '9999px', marginBottom: '1rem', display: 'inline-block' }}>
                    Kingdom Movement Impact
                  </span>
                  <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.35', maxWidth: '380px' }}>
                    "Every contribution brings God's Word to offline communities."
                  </h3>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.14)', backdropFilter: 'blur(14px)', padding: '1.4rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.22)' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.92rem', color: '#FFFFFF', margin: 0, padding: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#A8E0DD" /> 100% Tax-Deductible Non-Profit Stewardship
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#A8E0DD" /> Zero Ad Monetization or Data Selling
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#A8E0DD" /> Global Offline Scripture Access for Remote Regions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Giving Form Container */}
            <div className="light-card interactive-giving-card">
              {/* Toggle Monthly / One-Time */}
              <div className="giving-toggle-bar">
                <button
                  type="button"
                  onClick={() => setGiveType('monthly')}
                  className={`giving-toggle-btn ${giveType === 'monthly' ? 'active' : ''}`}
                >
                  {t('donate.giveMonthly')}
                </button>
                <button
                  type="button"
                  onClick={() => setGiveType('onetime')}
                  className={`giving-toggle-btn ${giveType === 'onetime' ? 'active' : ''}`}
                >
                  {t('donate.giveOneTime')}
                </button>
              </div>

              {/* Quick Select Amounts */}
              <div className="giving-amount-grid">
                {(giveType === 'monthly' ? [15, 25, 50, 100] : [25, 50, 100, 250]).map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`giving-amount-btn ${(selectedAmount === amt && !customAmount) ? 'active' : ''}`}
                  >
                    ${amt}{giveType === 'monthly' ? '/mo' : ''}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                  <DollarSign size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="number"
                    placeholder={giveType === 'monthly' ? 'Custom Monthly Amount ($)' : 'Custom Gift Amount ($)'}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Impact Metric Banner */}
              <div style={{
                background: 'var(--bg-teal-light)',
                borderLeft: '4px solid #3A6B68',
                padding: '1rem 1.2rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '1.8rem',
                fontSize: '0.9rem',
                color: 'var(--text-dark-soft)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem'
              }}>
                <Sparkles size={18} color="#3A6B68" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--primary-dark)' }}>
                    {giveType === 'monthly' ? 'Monthly Impact:' : 'Kingdom Impact:'}
                  </strong> {getImpactMessage(currentAmount, giveType)}
                </div>
              </div>

              {/* Give Action Form */}
              {!giveSuccess ? (
                <form onSubmit={handleGiveSubmit}>
                  {/* Donor Contact Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem' }}>
                    <div style={{ position: 'relative' }}>
                      <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="form-input"
                        style={{ paddingLeft: '2.5rem', fontSize: '0.88rem' }}
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        className="form-input"
                        style={{ paddingLeft: '2.5rem', fontSize: '0.88rem' }}
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                      />
                    </div>

                    {giveType === 'monthly' && (
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-dark-soft)', cursor: 'pointer', lineHeight: '1.4' }}>
                        <input
                          type="checkbox"
                          checked={sendReminders}
                          onChange={(e) => setSendReminders(e.target.checked)}
                          style={{ accentColor: '#3A6B68', marginTop: '0.15rem', flexShrink: 0 }}
                        />
                        <span>Send me monthly ministry impact updates & payment reminders at the end of every month.</span>
                      </label>
                    )}
                  </div>

                  <div className="giving-action-grid">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="btn btn-primary giving-action-btn"
                    >
                      <CreditCard size={18} /> {giveType === 'monthly' ? `Partner $${currentAmount}/mo` : `Give $${currentAmount} (Stripe)`}
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="btn btn-secondary giving-action-btn"
                    >
                      <DollarSign size={18} /> {giveType === 'monthly' ? `PayPal $${currentAmount}/mo` : `Give $${currentAmount} (PayPal)`}
                    </button>
                  </div>
                  <div className="giving-footnote">
                    <ShieldCheck size={14} color="var(--primary)" style={{ display: 'inline', marginRight: '0.3rem' }} />
                    {giveType === 'monthly' ? 'Cancel or modify your monthly partnership anytime. 100% tax-deductible.' : '256-bit SSL encrypted. 100% tax-deductible non-profit contribution.'}
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.8rem', background: '#E6F4EA', borderRadius: '16px', border: '1px solid #34A853' }}>
                  <CheckCircle2 size={44} color="#137333" style={{ margin: '0 auto 0.8rem auto' }} />
                  <h3 style={{ fontSize: '1.25rem', color: '#137333', fontWeight: '700' }}>
                    Thank You, {donorName || 'Kingdom Partner'}!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#137333', marginTop: '0.4rem', lineHeight: '1.5' }}>
                    Your ${currentAmount} {giveType === 'monthly' ? 'Monthly Partnership' : 'Kingdom Gift'} has been received.
                    {giveType === 'monthly' && sendReminders && ` Monthly impact updates & receipts will be sent to ${donorEmail || 'your email'} at the end of each month.`}
                  </p>
                  <button
                    className="btn btn-outline-teal"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setGiveSuccess(false)}
                  >
                    Give Another Gift
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 CORE MINISTRY PILLARS OF STEWARDSHIP (BACKGROUND: bc.png) */}
      <section style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.78), rgba(14, 23, 22, 0.94)), url('/images/bc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="hero-badge" style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
              <PieChart size={16} /> Complete Stewardship
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Where Your Support Goes
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              Every gift directly powers our 4 core ministry pillars.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem'
          }}>
            {/* Pillar 1: Server & Offline Infra */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 22px 45px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = '#3A6B68';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#3A6B68', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={24} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(58, 107, 104, 0.15)', color: '#3A6B68', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
                    Pillar 01
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>Server & Offline Infra</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-soft)', lineHeight: '1.6' }}>Cloud database hosting, vector indexing, and global CDN delivery for offline Bibles.</p>
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <div style={{ height: '4px', background: '#3A6B68', borderRadius: '9999px' }} />
              </div>
            </div>

            {/* Pillar 2: Language Expansion */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 22px 45px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = '#2E7D32';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#2E7D32', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={24} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(46, 125, 50, 0.15)', color: '#2E7D32', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
                    Pillar 02
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>Language Expansion</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-soft)', lineHeight: '1.6' }}>Licensing & bundling public-domain translations in global dialects for remote regions.</p>
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <div style={{ height: '4px', background: '#2E7D32', borderRadius: '9999px' }} />
              </div>
            </div>

            {/* Pillar 3: AI RAG & Safety */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 22px 45px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = '#00838F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#00838F', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(0, 131, 143, 0.15)', color: '#00838F', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
                    Pillar 03
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>AI RAG & Safety</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-soft)', lineHeight: '1.6' }}>0% hallucination vector compute and 4-layer community moderation guardrails.</p>
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <div style={{ height: '4px', background: '#00838F', borderRadius: '9999px' }} />
              </div>
            </div>

            {/* Pillar 4: Community & Outreach */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '24px',
              padding: '2.2rem 1.8rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 22px 45px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = '#D84315';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#D84315', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HeartHandshake size={24} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(216, 67, 21, 0.15)', color: '#D84315', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
                    Pillar 04
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>Community & Outreach</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-soft)', lineHeight: '1.6' }}>Funding free global communities, local church Bible study partnerships, volunteer city cleanups, and practical skill empowerment in remote regions.</p>
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <div style={{ height: '4px', background: '#D84315', borderRadius: '9999px' }} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
