import { createFileRoute } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { lazyRemoteComponent } from '@utils';

// Loaded at runtime from the dashboard remote (Module Federation)
const DashboardPage = lazyRemoteComponent(() => import('dashboard/DashboardPage'));

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: () => <DashboardPage />,
  errorComponent: RemoteModuleErrorComponent,
});
