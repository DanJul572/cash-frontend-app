import { useNavigate } from '@tanstack/react-router';

import ValidateOtpPage from '../modules/validate-otp/pages/validate-otp-page';
import { standaloneValidateOtpConfig } from './standalone-config';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  const navigate = useNavigate();

  return (
    <ValidateOtpPage
      config={standaloneValidateOtpConfig}
      loginPath="/login"
      onValidateOtpSuccess={() => navigate({ to: '/login' })}
    />
  );
}
