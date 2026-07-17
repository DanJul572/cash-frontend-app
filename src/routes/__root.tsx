import { createRootRouteWithContext, redirect } from '@tanstack/react-router';

import { RootLayout } from '@layouts';
import { Error400Page } from '@modules/error/pages';
import { configQuery } from '@queries';
import type { RouterContextType } from '@types';

export const Route = createRootRouteWithContext<RouterContextType>()({
    beforeLoad: async ({ context, location }) => {
        if (location.pathname === '/500') {
            return {};
        }
        try {
            const config = await context.queryClient.fetchQuery(configQuery);
            return { config };
        } catch {
            throw redirect({ to: '/500' });
        }
    },
    component: RootLayout,
    notFoundComponent: Error400Page,
});
