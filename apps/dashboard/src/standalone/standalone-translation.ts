import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/dashboard/constants';
import { dashboardTranslationResources } from '../modules/dashboard/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: { [DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT]: dashboardTranslationResources.en },
      id: { [DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT]: dashboardTranslationResources.id },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
