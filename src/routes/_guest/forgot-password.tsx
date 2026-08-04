import { createFileRoute } from '@tanstack/react-router';

import { ForgotPasswordPage } from '@modules/forgot-password/pages';

export const Route = createFileRoute('/_guest/forgot-password')({
  component: ForgotPasswordPage,
});
