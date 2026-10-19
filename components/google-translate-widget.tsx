'use client';

import type React from 'react';
import { useEffect } from 'react';

interface GoogleTranslateProps {
  defaultLanguage?: string;
}

export const GoogleTranslateWidget: React.FC<GoogleTranslateProps> = ({ defaultLanguage = 'en' }) => {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google?.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: defaultLanguage,
            includedLanguages: 'en,es,fr,de,it,pt,ru,ja,zh-CN,ar,hi,ko,af,sw,ig',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [defaultLanguage]);

  return <div id="google_translate_element" className="py-2" />;
};
