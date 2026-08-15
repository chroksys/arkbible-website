import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ isMobile = false }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="language-switcher"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(58, 107, 104, 0.08)',
        border: '1px solid rgba(58, 107, 104, 0.25)',
        borderRadius: '9999px',
        padding: '2px 5px',
        gap: '2px',
        userSelect: 'none',
        flexShrink: 0,
        boxSizing: 'border-box',
        margin: isMobile ? '0.5rem auto 0 auto' : 0
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '3px', paddingRight: '2px', color: '#3A6B68' }}>
        <Globe size={13} />
      </div>

      <button
        type="button"
        onClick={() => setLang('en')}
        style={{
          border: 'none',
          outline: 'none',
          background: lang === 'en' ? '#3A6B68' : 'transparent',
          color: lang === 'en' ? '#ffffff' : '#3A6B68',
          padding: '0.22rem 0.55rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          lineHeight: '1',
          whiteSpace: 'nowrap'
        }}
        aria-label="Switch language to English"
      >
        EN
      </button>

      <span style={{ color: 'rgba(58, 107, 104, 0.35)', fontSize: '0.7rem', fontWeight: '500', userSelect: 'none' }}>/</span>

      <button
        type="button"
        onClick={() => setLang('fr')}
        style={{
          border: 'none',
          outline: 'none',
          background: lang === 'fr' ? '#3A6B68' : 'transparent',
          color: lang === 'fr' ? '#ffffff' : '#3A6B68',
          padding: '0.22rem 0.55rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          lineHeight: '1',
          whiteSpace: 'nowrap'
        }}
        aria-label="Changer la langue en Français"
      >
        FR
      </button>
    </div>
  );
}
