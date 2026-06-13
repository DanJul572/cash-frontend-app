import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { languageConfig } from '@configs';
import loginEN from '@features/auth/locales/en.json';
import loginID from '@features/auth/locales/id.json';
import commonEN from '@locales/en.json';
import commonID from '@locales/id.json';

export const initTranslation = () => {
    if (!i18n.isInitialized) {
        i18n.use(initReactI18next).init({
            resources: {
                en: {
                    login: loginEN,
                    common: commonEN,
                },
                id: {
                    login: loginID,
                    common: commonID,
                },
            },
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
