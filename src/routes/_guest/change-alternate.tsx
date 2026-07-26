import { createFileRoute, redirect } from '@tanstack/react-router';

import { ChangeAlternatePage } from '@modules/change-alternate/pages';
import { validateAlternateTokenRequest } from '@modules/change-alternate/requests';
import { changeAlternateSearchParamSchema } from '@modules/change-alternate/schemas';

export const Route = createFileRoute('/_guest/change-alternate')({
    validateSearch: changeAlternateSearchParamSchema,
    beforeLoad: async ({ search }) => {
        if (!search.token) {
            return redirect({
                to: '/login',
            });
        }

        try {
            const response = await validateAlternateTokenRequest(search.token);
            if (!response.tokenIsValid) {
                return redirect({
                    to: '/login',
                });
            }
        } catch {
            return redirect({
                to: '/login',
            });
        }
    },
    component: ChangeAlternatePage,
});
