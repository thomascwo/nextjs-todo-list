"use client";
import i18n from "i18next";
import { I18nextProvider as _I18nextProvider } from "react-i18next";

export default function I18nextProvider(props: { children: React.ReactNode }) {
  return <_I18nextProvider i18n={i18n}>{props.children}</_I18nextProvider>;
}
