import { useQueryClient } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { authMeQuery } from '@queries';
import { tokenSearchParamSchema } from '@schemas';
import { lazyRemoteComponent } from '@utils';

// Loaded at runtime from the changeAlternate remote (Module Federation)
const ChangeAlternatePage = lazyRemoteComponent(
  () => import('changeAlternate/ChangeAlternatePage'),
);

export const Route = createFileRoute('/_guest/change-alternate')({
  validateSearch: tokenSearchParamSchema,
  component: ChangeAlternateRouteComponent,
  errorComponent: RemoteModuleErrorComponent,
});

function ChangeAlternateRouteComponent() {
  const { token } = Route.useSearch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <ChangeAlternatePage
      token={token}
      onInvalidToken={() => navigate({ to: '/login', replace: true })}
      onChangeAlternateSuccess={() => {
        queryClient.invalidateQueries({ queryKey: authMeQuery.queryKey });
        navigate({ to: '/dashboard' });
      }}
    />
  );
}
