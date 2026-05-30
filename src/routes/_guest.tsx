import { authMeQuery } from '@queries';
import { createFileRoute, isRedirect, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest')({
    beforeLoad: async ({ context }) => {
        try {
            const user = await context.queryClient.fetchQuery(authMeQuery);
            if (user) {
                throw redirect({ to: '/dashboard' });
            }
        } catch (error) {
            if (error instanceof Response || isRedirect(error)) {
                throw error;
            }
            throw redirect({ to: '/500' });
        }
    },
});
