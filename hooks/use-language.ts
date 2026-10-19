'use client';

import { useState, useEffect } from 'react';
import { LanguageCode, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/lib/languages';
import { translations, type TranslationKey } from '@/lib/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('selectedLanguage') as LanguageCode;
    if (saved && saved in SUPPORTED_LANGUAGES) {
      setLanguage(saved);
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang: LanguageCode) => {
    if (lang in SUPPORTED_LANGUAGES) {
      setLanguage(lang);
      localStorage.setItem('selectedLanguage', lang);
      // Trigger Google Translate for the page
      updateGoogleTranslate(lang);
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return {
    language,
    changeLanguage,
    t,
    isLoaded,
    languages: SUPPORTED_LANGUAGES,
  };
}

function updateGoogleTranslate(lang: LanguageCode) {
  // This will work when Google Translate script is loaded
  if (typeof window !== 'undefined' && (window as any).google?.translate?.TranslateElement) {
    const googleTranslateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleTranslateCombo) {
      googleTranslateCombo.value = lang;
      googleTranslateCombo.dispatchEvent(new Event('change'));
    }
  }
}
