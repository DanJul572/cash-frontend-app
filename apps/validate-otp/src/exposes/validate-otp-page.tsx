import i18n from 'i18next';

import { VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/validate-otp/constants';
import { validateOtpTranslationResources } from '../modules/validate-otp/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(validateOtpTranslationResources)) {
    i18n.addResourceBundle(lng, VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/validate-otp/pages/validate-otp-page';
