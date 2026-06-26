import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { languageConfig } from '@configs';
import changePasswordEN from '@features/auth/locales/change-password-en.json';
import changePasswordID from '@features/auth/locales/change-password-id.json';
import forgotPasswordEN from '@features/auth/locales/forgot-password-en.json';
import forgotPasswordID from '@features/auth/locales/forgot-password-id.json';
import loginEN from '@features/auth/locales/login-en.json';
import loginID from '@features/auth/locales/login-id.json';
import registerEN from '@features/auth/locales/register-en.json';
import registerID from '@features/auth/locales/register-id.json';
import commonEN from '@locales/en.json';
import commonID from '@locales/id.json';

export const initTranslation = () => {
    if (!i18n.isInitialized) {
        i18n.use(initReactI18next).init({
            resources: {
                en: {
                    changePassword: changePasswordEN,
                    common: commonEN,
                    forgotPassword: forgotPasswordEN,
                    login: loginEN,
                    register: registerEN,
                },
                id: {
                    changePassword: changePasswordID,
                    common: commonID,
                    forgotPassword: forgotPasswordID,
                    login: loginID,
                    register: registerID,
                },
            },
            lng: languageConfig.lng,
            fallbackLng: languageConfig.fallbackLng,
            ns: ['login', 'register', 'common'],
            defaultNS: 'common',
            interpolation: {
                escapeValue: false,
            },
        });
    }
    return i18n;
};
