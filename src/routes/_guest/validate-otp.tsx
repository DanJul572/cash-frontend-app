import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { RemoteModuleErrorComponent } from '@components';
import { lazyRemoteComponent } from '@utils';
import { useGuestConfig } from '@zapplib/core';

// Loaded at runtime from the validateOtp remote (Module Federation)
const ValidateOtpPage = lazyRemoteComponent(() => import('validateOtp/ValidateOtpPage'));

export const Route = createFileRoute('/_guest/validate-otp')({
  component: ValidateOtpRouteComponent,
  errorComponent: RemoteModuleErrorComponent,
});

function ValidateOtpRouteComponent() {
  const config = useGuestConfig();
  const navigate = useNavigate();

  return (
    <ValidateOtpPage
      config={config.modules.validateOtp}
      loginPath="/login"
      onValidateOtpSuccess={() => navigate({ to: '/login' })}
    />
  );
}
