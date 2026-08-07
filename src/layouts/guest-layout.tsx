import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Outlet, useNavigate } from '@tanstack/react-router';

import { ConfigNotFoundComponent, PageLoaderComponent } from '@components';
import { GuestConfigProvider } from '@contexts';
import { useGuestConfigQuery } from '@queries';

export default function GuestLayout() {
  const navigate = useNavigate();
  const { data: config, error, isPending } = useGuestConfigQuery();

  useEffect(() => {
    if (!isPending && error) {
      navigate({ to: '/500' });
    }
  }, [error, isPending, navigate]);

  if (isPending) return <PageLoaderComponent />;

  if (!config) return <ConfigNotFoundComponent />;

  return (
    <GuestConfigProvider config={config}>
      <Box>
        <Outlet />
      </Box>
    </GuestConfigProvider>
  );
}
