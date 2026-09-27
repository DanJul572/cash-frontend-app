import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { languageConfig } from '@configs';
import commonEN from '@locales/en.json';
import commonID from '@locales/id.json';
import { UI_TRANSLATION_NAMESPACE_CONSTANT, uiTranslationResources } from '@zapplib/ui';

// Remotes register their own namespaces when they load (see each remote's exposes/)
export const initTranslation = () => {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          common: commonEN,
          [UI_TRANSLATION_NAMESPACE_CONSTANT]: uiTranslationResources.en,
        },
        id: {
          common: commonID,
          [UI_TRANSLATION_NAMESPACE_CONSTANT]: uiTranslationResources.id,
        },
      },
      lng: languageConfig.lng,
      fallbackLng: languageConfig.fallbackLng,
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
  }
  return i18n;
};
