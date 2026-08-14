import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../i18n/en';
import { fr } from '../i18n/fr';

const translations = { en, fr };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('arkbible_lang');
      if (savedLang === 'fr' || savedLang === 'en') {
        return savedLang;
      }
      // Auto-detect French browser preference
      if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) {
        return 'fr';
      }
    } catch (e) {
      console.warn("Could not read language from localStorage", e);
    }
    return 'en';
  });

  const setLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'fr') return;
    setLangState(newLang);
    try {
      localStorage.setItem('arkbible_lang', newLang);
      document.documentElement.lang = newLang;
    } catch (e) {
      console.warn("Could not save language to localStorage", e);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Helper function to safely extract nested keys like t('nav.home')
  const t = (keyPath, fallback = "") => {
    if (!keyPath) return fallback;
    const keys = keyPath.split('.');
    let current = translations[lang] || translations.en;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English dictionary if key is missing in current lang
        let fallbackVal = translations.en;
        for (const fk of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fk in fallbackVal) {
            fallbackVal = fallbackVal[fk];
          } else {
            return fallback || keyPath;
          }
        }
        return fallbackVal || fallback || keyPath;
      }
    }
    return typeof current === 'string' ? current : fallback || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
