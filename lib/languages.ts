// Supported languages configuration
export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', code: 'en', nativeName: 'English' },
  es: { name: 'Spanish', code: 'es', nativeName: 'Español' },
  fr: { name: 'French', code: 'fr', nativeName: 'Français' },
  de: { name: 'German', code: 'de', nativeName: 'Deutsch' },
  it: { name: 'Italian', code: 'it', nativeName: 'Italiano' },
  pt: { name: 'Portuguese', code: 'pt', nativeName: 'Português' },
  ru: { name: 'Russian', code: 'ru', nativeName: 'Русский' },
  ja: { name: 'Japanese', code: 'ja', nativeName: '日本語' },
  zh: { name: 'Chinese', code: 'zh', nativeName: '中文' },
  ar: { name: 'Arabic', code: 'ar', nativeName: 'العربية' },
  hi: { name: 'Hindi', code: 'hi', nativeName: 'हिन्दी' },
  ko: { name: 'Korean', code: 'ko', nativeName: '한국어' },
  af: { name: 'Afrikaans', code: 'af', nativeName: 'Afrikaans' },
  sw: { name: 'Swahili', code: 'sw', nativeName: 'Kiswahili' },
  ig: { name: 'Igbo', code: 'ig', nativeName: 'Igbo' },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

export const DEFAULT_LANGUAGE: LanguageCode = 'en';
