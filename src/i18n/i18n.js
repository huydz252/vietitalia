import { translations } from "./translations.js";

const STORAGE_KEY = "vietitalia-locale";
const DEFAULT_LOCALE = "vi";
let currentLocale = localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;

document.documentElement.lang = currentLocale;

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  if (!translations[locale] || locale === currentLocale) return;
  currentLocale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.lang = locale;
  window.dispatchEvent(new CustomEvent("localechange", { detail: locale }));
}

export function toggleLocale() {
  setLocale(currentLocale === "vi" ? "it" : "vi");
}

export function t(key) {
  const valueFor = (locale) =>
    key.split(".").reduce((value, part) => value?.[part], translations[locale]);
  const value = valueFor(currentLocale);
  if (value !== undefined) return value;
  const fallback = valueFor(DEFAULT_LOCALE);
  if (fallback !== undefined) return fallback;
  console.warn(`[i18n] Unknown translation key "${key}".`);
  return key;
}
