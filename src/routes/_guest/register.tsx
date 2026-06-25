import { RegisterPage } from '@features/auth/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/register')({
    component: RegisterPage,
});
