import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Outlet, useNavigate } from '@tanstack/react-router';

import { PageLoaderComponent } from '@components';
import { GuestConfigProvider } from '@contexts';
import { useGuestConfigQuery } from '@queries';

export default function GuestLayout() {
  const navigate = useNavigate();
  const { data: config, error, isPending } = useGuestConfigQuery();

  useEffect(() => {
    if (!isPending && error) {
      navigate({ to: '/500' });
    } else if (!isPending && !error && !config) {
      navigate({ to: '/404', state: { message: 'Configuration Not Found' } });
    }
  }, [isPending, error, config, navigate]);

  if (isPending || error || !config) {
    return <PageLoaderComponent />;
  }

  return (
    <GuestConfigProvider config={config}>
      <Box>
        <Outlet />
      </Box>
    </GuestConfigProvider>
  );
}
