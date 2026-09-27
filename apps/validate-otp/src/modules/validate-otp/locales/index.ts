import validateOtpEN from './validate-otp-en.json';
import validateOtpID from './validate-otp-id.json';

/** Register under `VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT` in the app's i18n resources. */
export const validateOtpTranslationResources = {
  en: validateOtpEN,
  id: validateOtpID,
};
