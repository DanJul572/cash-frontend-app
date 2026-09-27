import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { REGISTER_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/register/constants';
import { registerTranslationResources } from '../modules/register/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: { [REGISTER_TRANSLATION_NAMESPACE_CONSTANT]: registerTranslationResources.en },
      id: { [REGISTER_TRANSLATION_NAMESPACE_CONSTANT]: registerTranslationResources.id },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: REGISTER_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
