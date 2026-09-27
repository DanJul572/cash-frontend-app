import { createFileRoute } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { lazyRemoteComponent } from '@utils';

// Loaded at runtime from the forgotPassword remote (Module Federation)
const ForgotPasswordPage = lazyRemoteComponent(() => import('forgotPassword/ForgotPasswordPage'));

export const Route = createFileRoute('/_guest/forgot-password')({
  component: () => <ForgotPasswordPage loginPath="/login" />,
  errorComponent: RemoteModuleErrorComponent,
});
