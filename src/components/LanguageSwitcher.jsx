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
        border: '1.5px solid rgba(58, 107, 104, 0.22)',
        borderRadius: '9999px',
        padding: '3px',
        gap: '2px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        userSelect: 'none',
        width: isMobile ? '100%' : 'auto',
        justifyContent: isMobile ? 'center' : 'flex-start',
        marginTop: isMobile ? '0.75rem' : 0
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '6px', paddingRight: '4px', color: '#3A6B68' }}>
        <Globe size={15} />
      </div>

      {/* English Option Button */}
      <button
        type="button"
        onClick={() => setLang('en')}
        style={{
          border: 'none',
          outline: 'none',
          background: lang === 'en' ? '#3A6B68' : 'transparent',
          color: lang === 'en' ? '#ffffff' : '#2C4745',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.78rem',
          fontWeight: '800',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          boxShadow: lang === 'en' ? '0 2px 8px rgba(58, 107, 104, 0.35)' : 'none',
          flex: isMobile ? 1 : 'initial',
          justifyContent: 'center'
        }}
        aria-label="Switch language to English"
      >
        <span>🇺🇸</span> EN
      </button>

      {/* French Option Button */}
      <button
        type="button"
        onClick={() => setLang('fr')}
        style={{
          border: 'none',
          outline: 'none',
          background: lang === 'fr' ? '#3A6B68' : 'transparent',
          color: lang === 'fr' ? '#ffffff' : '#2C4745',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.78rem',
          fontWeight: '800',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          boxShadow: lang === 'fr' ? '0 2px 8px rgba(58, 107, 104, 0.35)' : 'none',
          flex: isMobile ? 1 : 'initial',
          justifyContent: 'center'
        }}
        aria-label="Changer la langue en Français"
      >
        <span>🇫🇷</span> FR
      </button>
    </div>
  );
}
