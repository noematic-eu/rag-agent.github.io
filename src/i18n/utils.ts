import en from './en';
import fr from './fr';

const translations = { en, fr } as const;

type Locale = keyof typeof translations;
type TranslationKey = keyof typeof en;

export function t(locale: string | undefined, key: TranslationKey): string {
  const lang = (locale ?? 'en') as Locale;
  return translations[lang]?.[key] ?? en[key];
}

export function getAlternateLang(locale: string | undefined): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
