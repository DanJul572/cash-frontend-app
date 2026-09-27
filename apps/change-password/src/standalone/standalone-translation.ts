import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/change-password/constants';
import { changePasswordTranslationResources } from '../modules/change-password/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        [CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT]: changePasswordTranslationResources.en,
      },
      id: {
        [CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT]: changePasswordTranslationResources.id,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
