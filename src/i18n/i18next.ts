"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import jp from "./locales/jp.json";

export const defaultNS = "common";
export const resources = { en, jp } as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "jp",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    defaultNS,
    resources,
  });
}
