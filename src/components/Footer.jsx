import React from 'react';
import { Heart, Mail, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ navigateTo, onOpenDownload, onOpenPrivacy, onOpenTerms }) {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: 'var(--bg-light-soft)',
      borderTop: '1px solid var(--border-light)',
      color: 'var(--text-dark-soft)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}>
          {/* Col 1: Brand */}
          <div>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
              style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '0.8rem' }}
            >
              <img
                src="/logo.png"
                alt="ArkBible Logo"
                style={{
                  height: '92px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginLeft: '-8px',
                  transition: 'transform 0.25s ease',
                }}
              />
            </a>
            <p style={{
              fontSize: '0.92rem',
              lineHeight: '1.7',
              marginBottom: '1.2rem',
              color: 'var(--text-muted)',
              maxWidth: '280px',
            }}>
              {t('footer.tagline')}
            </p>
            <div className="gold-badge">
              {t('home.globalFellowship')}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-dark)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.1rem' }}>
              {t('footer.quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.92rem' }}>
              {[
                { path: '/', label: t('nav.home') },
                { path: '/about', label: t('nav.mission') },
                { path: '/product', label: t('nav.products') },
                { path: '/partner', label: t('nav.partners') },
                { path: '/donate', label: t('nav.donation') },
                { path: '/volunteer', label: t('nav.volunteering') },
                { path: '/contact', label: t('nav.contact') },
              ].map(item => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); navigateTo(item.path); }}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get the App */}
          <div>
            <h4 style={{ color: 'var(--text-dark)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.1rem' }}>
              {t('modals.downloadTitle')}
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
              {t('product.subtitle')}
            </p>
            <button
              onClick={onOpenDownload}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
            >
              <Download size={16} /> {t('buttons.getAppNow')}
            </button>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 style={{ color: 'var(--text-dark)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.1rem' }}>
              {t('contact.title')}
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
              {t('contact.subtitle')}
            </p>
            <a
              href="mailto:info@arkbible.app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                color: 'var(--primary)',
                fontWeight: '700',
                fontSize: '0.94rem',
                textDecoration: 'none',
                padding: '0.5rem 0.95rem',
                borderRadius: '12px',
                background: 'var(--primary-subtle)',
              }}
            >
              <Mail size={16} /> info@arkbible.app
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.86rem',
          color: 'var(--text-muted)',
        }}>
          <div>{t('footer.copyright')}</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              onClick={onOpenPrivacy}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 500 }}
            >
              {t('footer.privacy')}
            </button>
            <button
              onClick={onOpenTerms}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 500 }}
            >
              {t('footer.terms')}
            </button>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
