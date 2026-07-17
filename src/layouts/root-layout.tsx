import Box from '@mui/material/Box';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
    return (
        <Box>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </Box>
    );
}
