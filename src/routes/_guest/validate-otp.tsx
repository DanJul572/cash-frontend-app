import { createFileRoute } from '@tanstack/react-router';

import { ValidateOtpPage } from '@modules/validate-otp/pages';

export const Route = createFileRoute('/_guest/validate-otp')({
  component: ValidateOtpPage,
});
