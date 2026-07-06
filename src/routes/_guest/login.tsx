import { LoginPage } from '@features/login/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/login')({
    component: LoginPage,
});
