import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { languageConfig } from '@configs';
import loginEN from '@features/auth/locales/en.json';
import loginID from '@features/auth/locales/id.json';

export const initTranslation = () => {
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                login: loginEN,
            },
            id: {
                login: loginID,
            },
        },
        lng: languageConfig.lng,
        fallbackLng: languageConfig.fallbackLng,
        interpolation: {
            escapeValue: false,
        },
    });
};
