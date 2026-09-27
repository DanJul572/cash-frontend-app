import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { CHANGE_ALTERNATE_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/change-alternate/constants';
import { changeAlternateTranslationResources } from '../modules/change-alternate/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        [CHANGE_ALTERNATE_TRANSLATION_NAMESPACE_CONSTANT]: changeAlternateTranslationResources.en,
      },
      id: {
        [CHANGE_ALTERNATE_TRANSLATION_NAMESPACE_CONSTANT]: changeAlternateTranslationResources.id,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: CHANGE_ALTERNATE_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
