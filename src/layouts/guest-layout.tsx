import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Outlet, useNavigate } from '@tanstack/react-router';

import { PageLoaderComponent } from '@components';
import { ConfigProvider } from '@contexts';
import { useConfigQuery } from '@queries';

export default function GuestLayout() {
    const navigate = useNavigate();
    const { data: config, error, isPending } = useConfigQuery();

    useEffect(() => {
        if (!isPending && (error || !config)) {
            navigate({ to: '/500' });
        }
    }, [error, config, isPending, navigate]);

    if (isPending) return <PageLoaderComponent />;

    if (!config) return null;

    return (
        <ConfigProvider config={config}>
            <Box>
                <Outlet />
            </Box>
        </ConfigProvider>
    );
}
