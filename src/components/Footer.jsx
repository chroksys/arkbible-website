import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ navigateTo, onOpenDownload, onOpenPrivacy, onOpenTerms }) {
  const { t } = useLanguage();

  const linkStyle = {
    color: 'var(--text-dark-soft)',
    fontSize: '0.92rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <footer style={{
      background: '#F7F9F8',
      borderTop: '1px solid var(--border-light)',
      color: 'var(--text-dark)',
    }}>
      {/* Top Signature Green/Orange Accent Bar */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #2F6662 0%, #2F6662 65%, #E89D2B 65%, #E89D2B 100%)',
      }} />

      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
        {/* Top Row: Brand + Download Action */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          paddingBottom: '3.2rem',
          borderBottom: '1px solid var(--border-light)',
        }}>
          <div style={{ maxWidth: '420px' }}>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
              style={{ display: 'inline-block', marginBottom: '0.75rem' }}
            >
              <img
                src="/logo.png"
                alt="ArkBible"
                style={{ height: '72px', width: 'auto', objectFit: 'contain', marginLeft: '-6px' }}
              />
            </a>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {t('footer.tagline')}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.9rem' }}>
            <button className="btn btn-primary" onClick={onOpenDownload} style={{ padding: '0.85rem 1.7rem' }}>
              {t('buttons.getAppNow')}
            </button>
            <button
              className="btn btn-outline-teal"
              onClick={() => navigateTo('/donate')}
              style={{ padding: '0.85rem 1.6rem' }}
            >
              {t('buttons.donateNow')}
            </button>
          </div>
        </div>

        {/* Middle Row: 4-Column Sitemap */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '2.5rem',
          padding: '3.2rem 0',
        }}>
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
              Ministry
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { path: '/', label: t('nav.home') },
                { path: '/about', label: t('nav.mission') },
                { path: '/product', label: t('nav.products') },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); navigateTo(item.path); }}
                    style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dark-soft)'; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
              {t('footer.communityHeader')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { path: '/partner', label: t('nav.partners') },
                { path: '/donate', label: t('nav.donation') },
                { path: '/volunteer', label: t('nav.volunteering') },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); navigateTo(item.path); }}
                    style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dark-soft)'; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
              {t('footer.legalHeader')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => { e.preventDefault(); navigateTo('/privacy'); }}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dark-soft)'; }}
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  style={{ ...linkStyle, padding: 0, textAlign: 'left' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dark-soft)'; }}
                >
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dark-soft)'; }}
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
              Connect
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.9rem' }}>
              Questions, prayer requests, or ministry inquiries?
            </p>
            <a
              href="mailto:info@arkbible.app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.94rem',
              }}
            >
              info@arkbible.app <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '1.6rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.84rem',
          color: 'var(--text-muted)',
        }}>
          <div>{t('footer.copyright')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
            <button onClick={onOpenPrivacy} style={{ color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 500 }}>
              {t('footer.privacy')}
            </button>
            <button onClick={onOpenTerms} style={{ color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 500 }}>
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
