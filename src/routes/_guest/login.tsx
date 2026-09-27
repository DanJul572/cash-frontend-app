import { useQueryClient } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { authMeQuery } from '@queries';
import { lazyRemoteComponent } from '@utils';
import { useGuestConfig } from '@zapplib/core';

// Loaded at runtime from the login remote (Module Federation)
const LoginPage = lazyRemoteComponent(() => import('login/LoginPage'));

export const Route = createFileRoute('/_guest/login')({
  component: LoginRouteComponent,
  errorComponent: RemoteModuleErrorComponent,
});

function LoginRouteComponent() {
  const config = useGuestConfig();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <LoginPage
      config={config.modules.login}
      forgotPasswordPath="/forgot-password"
      registerPath="/register"
      onLoginSuccess={() => {
        queryClient.invalidateQueries({ queryKey: authMeQuery.queryKey });
        navigate({ to: '/dashboard' });
      }}
    />
  );
}
