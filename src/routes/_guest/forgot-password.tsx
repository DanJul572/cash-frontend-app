import { ForgotPasswordPage } from '@features/forgot-password/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/forgot-password')({
    component: ForgotPasswordPage,
});
