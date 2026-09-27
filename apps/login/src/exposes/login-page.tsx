import i18n from 'i18next';

import { LOGIN_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/login/constants';
import { loginTranslationResources } from '../modules/login/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(loginTranslationResources)) {
    i18n.addResourceBundle(lng, LOGIN_TRANSLATION_NAMESPACE_CONSTANT, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/login/pages/login-page';
