import { initReactI18next } from 'react-i18next';

import i18n, { type Resource } from 'i18next';

import { languageConfig } from '@configs';
import loginEN from '@features/auth/locales/en.json';
import loginID from '@features/auth/locales/id.json';
import commonEN from '@locales/en.json';
import commonID from '@locales/id.json';

export const getResource = () => {
    return {
        en: {
            login: loginEN,
            common: commonEN,
        },
        id: {
            login: loginID,
            common: commonID,
        },
    };
};

export const initTranslation = (resource: Resource) => {
    if (!i18n.isInitialized) {
        i18n.use(initReactI18next).init({
            resources: resource,
            lng: languageConfig.lng,
            fallbackLng: languageConfig.fallbackLng,
            ns: ['login', 'common'],
            defaultNS: 'common',
            interpolation: {
                escapeValue: false,
            },
        });
    }
    return i18n;
};
