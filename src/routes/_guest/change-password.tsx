import { ChangePasswordPage } from '@features/auth/pages';
import { changePasswordSearchParamSchema } from '@features/auth/schemas';
import { createFileRoute, redirect } from '@tanstack/react-router';

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
