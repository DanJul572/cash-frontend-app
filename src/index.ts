import { initTranslation } from '@utils';

import { Error400Page, Error500Page } from './modules/error/pages';
import { LoginPage } from './modules/login/pages';

export const pages = {
  modules: {
    login: LoginPage,
  },
  error: {
    400: Error400Page,
    500: Error500Page,
  },
};

export const utils = {
  translation: {
    initTranslation,
  },
};

export type PagesType = typeof pages;
export type UtilsType = typeof utils;
