import { createFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@modules/register/pages';

export const Route = createFileRoute('/_guest/register')({
  component: RegisterPage,
});
