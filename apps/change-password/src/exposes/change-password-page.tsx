import i18n from 'i18next';

import { CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/change-password/constants';
import { changePasswordTranslationResources } from '../modules/change-password/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(changePasswordTranslationResources)) {
    i18n.addResourceBundle(lng, CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/change-password/pages/change-password-page';
