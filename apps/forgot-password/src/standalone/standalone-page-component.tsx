import ForgotPasswordPage from '../modules/forgot-password/pages/forgot-password-page';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  return <ForgotPasswordPage loginPath="/login" />;
}
