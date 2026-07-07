import { createFileRoute, redirect } from '@tanstack/react-router';

import { ChangePasswordPage } from '@features/change-password/pages';
import { changePasswordSearchParamSchema } from '@features/change-password/schemas';

export const Route = createFileRoute('/_guest/change-password')({
    validateSearch: changePasswordSearchParamSchema,
    beforeLoad: async ({ search }) => {
        if (!search.token) {
            return redirect({
                to: '/login',
            });
        }
    },
    component: ChangePasswordPage,
});
