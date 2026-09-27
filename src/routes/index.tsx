import { createFileRoute } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { appNameAsTitle, lazyRemoteComponent } from '@utils';

// Loaded at runtime from the welcome remote (Module Federation)
const WelcomePage = lazyRemoteComponent(() => import('welcome/WelcomePage'));

export const Route = createFileRoute('/')({
  component: () => <WelcomePage appName={appNameAsTitle} />,
  errorComponent: RemoteModuleErrorComponent,
});
