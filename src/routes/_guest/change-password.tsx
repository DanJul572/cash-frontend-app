import { createFileRoute } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { tokenSearchParamSchema } from '@schemas';
import { lazyRemoteComponent } from '@utils';
import { useGuestConfig } from '@zapplib/core';

// Loaded at runtime from the changePassword remote (Module Federation)
const ChangePasswordPage = lazyRemoteComponent(() => import('changePassword/ChangePasswordPage'));

export const Route = createFileRoute('/_guest/change-password')({
  validateSearch: tokenSearchParamSchema,
  component: ChangePasswordRouteComponent,
  errorComponent: RemoteModuleErrorComponent,
});

function ChangePasswordRouteComponent() {
  const config = useGuestConfig();
  const { token } = Route.useSearch();

  return <ChangePasswordPage config={config.modules.changePassword} token={token} />;
}
