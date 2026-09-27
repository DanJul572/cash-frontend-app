import i18n from 'i18next';

import { REGISTER_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/register/constants';
import { registerTranslationResources } from '../modules/register/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(registerTranslationResources)) {
    i18n.addResourceBundle(lng, REGISTER_TRANSLATION_NAMESPACE_CONSTANT, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/register/pages/register-page';
