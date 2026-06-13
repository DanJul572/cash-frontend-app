import { getResource, initTranslation } from '@utils';

import { LoginPage } from './features/auth/pages';
import { Error400Page, Error500Page } from './features/error/pages';

export const pages = {
    auth: {
        login: LoginPage,
    },
    error: {
        400: Error400Page,
        500: Error500Page,
    },
};

export const utils = {
    translation: {
        getResource,
        initTranslation,
    },
};

export type PagesType = typeof pages;
export type UtilsType = typeof utils;
