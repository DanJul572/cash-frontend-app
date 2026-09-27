import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { LOGIN_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/login/constants';
import { loginTranslationResources } from '../modules/login/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: { [LOGIN_TRANSLATION_NAMESPACE_CONSTANT]: loginTranslationResources.en },
      id: { [LOGIN_TRANSLATION_NAMESPACE_CONSTANT]: loginTranslationResources.id },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: LOGIN_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
