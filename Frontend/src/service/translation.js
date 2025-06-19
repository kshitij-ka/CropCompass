// src/service/translation.js
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = { en, fr };

export const t = (key, lang = 'en') => {
  return translations[lang][key] || key; // Fallback to key if missing
};
