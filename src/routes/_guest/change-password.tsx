import { createFileRoute } from '@tanstack/react-router';

import { ChangePasswordPage } from '@modules/change-password/pages';
import { changePasswordSearchParamSchema } from '@modules/change-password/schemas';

export const Route = createFileRoute('/_guest/change-password')({
  validateSearch: changePasswordSearchParamSchema,
  component: ChangePasswordPage,
});
