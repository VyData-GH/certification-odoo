"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Locale, t, translations } from "@/i18n/translations";

const STORAGE_KEY = "odoo-cert-locale";

type Messages = (typeof translations)[Locale];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  tr: Messages;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "fr") setLocaleState(stored);
      setMounted(true);
    });
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    if (mounted) document.documentElement.lang = locale;
  }, [locale, mounted]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, tr: t(locale) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
