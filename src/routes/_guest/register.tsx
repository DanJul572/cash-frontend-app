import { createFileRoute } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { lazyRemoteComponent } from '@utils';
import { useGuestConfig } from '@zapplib/core';

// Loaded at runtime from the register remote (Module Federation)
const RegisterPage = lazyRemoteComponent(() => import('register/RegisterPage'));

export const Route = createFileRoute('/_guest/register')({
  component: RegisterRouteComponent,
  errorComponent: RemoteModuleErrorComponent,
});

function RegisterRouteComponent() {
  const config = useGuestConfig();

  return <RegisterPage config={config.modules.register} loginPath="/login" />;
}
