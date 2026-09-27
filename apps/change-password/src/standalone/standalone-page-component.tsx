import ChangePasswordPage from '../modules/change-password/pages/change-password-page';
import { standaloneChangePasswordConfig } from './standalone-config';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  const token = new URLSearchParams(window.location.search).get('token') ?? undefined;

  return <ChangePasswordPage config={standaloneChangePasswordConfig} token={token} />;
}
