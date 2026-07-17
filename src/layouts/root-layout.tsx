import Box from '@mui/material/Box';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, useMatch } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { ConfigProvider } from '@contexts';
import type { ConfigResponseType } from '@types';

export default function RootLayout() {
    const { config } = useMatch({ from: '__root__', select: (state) => state.context }) as {
        config: ConfigResponseType | undefined;
    };

    const content = (
        <Box>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </Box>
    );

    if (!config) return content;

    return <ConfigProvider config={config}>{content}</ConfigProvider>;
}
