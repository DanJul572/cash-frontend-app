import { useNavigate } from '@tanstack/react-router';

import LoginPage from '../modules/login/pages/login-page';
import { standaloneLoginConfig } from './standalone-config';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  const navigate = useNavigate();

  return (
    <LoginPage
      config={standaloneLoginConfig}
      forgotPasswordPath="/forgot-password"
      registerPath="/register"
      onLoginSuccess={() => navigate({ to: '/dashboard' })}
    />
  );
}
