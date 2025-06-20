// src/service/translation.js
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import fr from '../locales/fr.json';

const translations = { en, hi, fr };

export const t = (key, lang = 'en') => {
  return translations[lang][key] || key; // Fallback to key if missing
};
