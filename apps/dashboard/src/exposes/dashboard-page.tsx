import i18n from 'i18next';

import { DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT } from '../modules/dashboard/constants';
import { dashboardTranslationResources } from '../modules/dashboard/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(dashboardTranslationResources)) {
    i18n.addResourceBundle(lng, DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/dashboard/pages/dashboard-page';
