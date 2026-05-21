import { resources } from "@/src/i18n/i18next";
import clsx from "clsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";

const languages = Object.keys(resources);

export default function LanguageSwitcher(props: { className?: string }) {
  const { className } = props;

  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("selected_lang");
    if (lang) i18n.changeLanguage(lang);
  }, []);

  const onChangeLang = (lang: string) => {
    if (lang === i18n.language) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("selected_lang", lang);
  };

  return (
    <div
      className={clsx(
        "flex cursor-default gap-1 text-sm text-white",
        className,
      )}
    >
      {languages.map((lang) => (
        <Fragment key={lang}>
          <button
            className={clsx(
              "cursor-pointer",
              i18n.language !== lang && "opacity-60",
            )}
            onClick={() => onChangeLang(lang)}
          >
            {lang.toUpperCase()}
          </button>
          <span className="last:hidden">|</span>
        </Fragment>
      ))}
    </div>
  );
}
