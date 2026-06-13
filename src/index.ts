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

export type Pages = typeof pages;
