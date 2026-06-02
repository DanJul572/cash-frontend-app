import { LoginPage } from '@features/auth/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/login')({
    component: LoginPage,
});
