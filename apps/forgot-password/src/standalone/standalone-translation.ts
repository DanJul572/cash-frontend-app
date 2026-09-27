import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/forgot-password/constants';
import { forgotPasswordTranslationResources } from '../modules/forgot-password/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        [FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT]: forgotPasswordTranslationResources.en,
      },
      id: {
        [FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT]: forgotPasswordTranslationResources.id,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
