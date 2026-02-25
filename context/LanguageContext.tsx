"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ar" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ar",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  return (
    <LanguageContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
