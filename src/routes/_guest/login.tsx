import { createFileRoute } from '@tanstack/react-router';

import { LoginPage } from '@modules/login/pages';

export const Route = createFileRoute('/_guest/login')({
    component: LoginPage,
});
