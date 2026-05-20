import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Error400Page } from '@/features/error/pages';
import type { RouterContextType } from '@/types';

export const Route = createRootRouteWithContext<RouterContextType>()({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </>
    ),
    notFoundComponent: Error400Page,
});
