import Box from '@mui/material/Box';

import { Error400Page } from '@features/error/pages';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { RouterContextType } from '@types';

export const Route = createRootRouteWithContext<RouterContextType>()({
    component: () => (
        <Box>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </Box>
    ),
    notFoundComponent: Error400Page,
});
