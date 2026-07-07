import { createFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@features/register/pages';

export const Route = createFileRoute('/_guest/register')({
    component: RegisterPage,
});
