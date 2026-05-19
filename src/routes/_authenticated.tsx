import { createFileRoute, isRedirect, redirect } from '@tanstack/react-router';

import MainLayout from '@/layouts/main-layout';
import { authMeQuery } from '@/queries';

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async ({ context }) => {
        try {
            const user = await context.queryClient.fetchQuery(authMeQuery);
            if (!user) {
                throw redirect({ to: '/login' });
            }

            return { user };
        } catch (error) {
            if (error instanceof Response || isRedirect(error)) throw error;
            throw redirect({ to: '/500' });
        }
    },
    component: MainLayout,
});
