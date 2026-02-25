"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function DirSync() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  }, [lang]);
  return null;
}
