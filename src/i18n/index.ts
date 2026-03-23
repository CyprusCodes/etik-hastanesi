import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import trCommon from "./locales/tr/common.json"
import enCommon from "./locales/en/common.json"
import trHospital from "./locales/tr/hospital.json"
import enHospital from "./locales/en/hospital.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        common: trCommon,
        hospital: trHospital,
      },
      en: {
        common: enCommon,
        hospital: enHospital,
      },
    },
    fallbackLng: "tr",
    supportedLngs: ["tr", "en"],
    ns: ["common", "hospital"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
