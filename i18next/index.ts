import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

const resources = {
  ar: { translation: ar },
  en: { translation: en },
};

const deviceLocales = Localization.getLocales?.() ?? [];
const devicePrimary = deviceLocales[0]?.languageTag || "en-US";

/**
 * Map: ar-KW -> ar, en-US -> en
 */
function normalizeLng(tag: string) {
  if (tag.toLowerCase().startsWith("ar")) return "ar";
  return "en";
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: normalizeLng(devicePrimary),      // initial
    fallbackLng: ["ar", "en"],             // your chain ar-KW -> ar -> en-US approximated
    compatibilityJSON: "v4",
    interpolation: { escapeValue: false },
    returnNull: false,
  });

export default i18n;
