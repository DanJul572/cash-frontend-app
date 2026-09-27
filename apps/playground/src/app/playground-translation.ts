import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { UI_TRANSLATION_NAMESPACE_CONSTANT, uiTranslationResources } from '@zapplib/ui';

import { PLAYGROUND_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/playground/constants';
import { playgroundTranslationResources } from '../modules/playground/locales';

export const initPlaygroundTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        [PLAYGROUND_TRANSLATION_NAMESPACE_CONSTANT]: playgroundTranslationResources.en,
        [UI_TRANSLATION_NAMESPACE_CONSTANT]: uiTranslationResources.en,
      },
      id: {
        [PLAYGROUND_TRANSLATION_NAMESPACE_CONSTANT]: playgroundTranslationResources.id,
        [UI_TRANSLATION_NAMESPACE_CONSTANT]: uiTranslationResources.id,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: PLAYGROUND_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
