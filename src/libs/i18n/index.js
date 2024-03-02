import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: require("src/common/languages/vi.json"),
  }
};

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources,
    lng: "vi",
  });

export default i18n;

