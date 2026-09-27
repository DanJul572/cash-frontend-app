import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Outlet, useNavigate } from '@tanstack/react-router';

import { TopbarComponent, TreeMenuComponent } from '@components';
import { useAuthenticatedConfigQuery } from '@queries';
import { mainLayoutStyle } from '@styles';
import { getConfigErrorState } from '@utils';
import { AuthenticatedConfigProvider } from '@zapplib/core';
import { PageLoaderComponent } from '@zapplib/ui';

export default function MainLayout() {
  const navigate = useNavigate();

  const { data: config, error, isPending } = useAuthenticatedConfigQuery();

  useEffect(() => {
    if (!isPending && error) {
      navigate({ to: '/500', state: getConfigErrorState(error) });
    } else if (!isPending && !error && !config) {
      navigate({ to: '/404', state: { message: 'Configuration Not Found' } });
    }
  }, [isPending, error, config, navigate]);

  if (isPending || error || !config) {
    return <PageLoaderComponent />;
  }

  return (
    <AuthenticatedConfigProvider config={config}>
      <Box>
        <TopbarComponent />
        <Box sx={mainLayoutStyle.containerStyle}>
          <TreeMenuComponent />
          <Box sx={mainLayoutStyle.contentStyle}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </AuthenticatedConfigProvider>
  );
}
