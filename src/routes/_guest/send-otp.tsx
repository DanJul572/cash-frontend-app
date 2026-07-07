import { createFileRoute } from '@tanstack/react-router';

import { SendOtpPage } from '@modules/send-otp/pages';

export const Route = createFileRoute('/_guest/send-otp')({
    component: SendOtpPage,
});
