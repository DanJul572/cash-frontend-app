import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/validate-otp/constants';
import { validateOtpTranslationResources } from '../modules/validate-otp/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: { [VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT]: validateOtpTranslationResources.en },
      id: { [VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT]: validateOtpTranslationResources.id },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT,
    interpolation: {
      escapeValue: false,
    },
  });
};
