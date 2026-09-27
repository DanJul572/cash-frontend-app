import RegisterPage from '../modules/register/pages/register-page';
import { standaloneRegisterConfig } from './standalone-config';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  return <RegisterPage config={standaloneRegisterConfig} loginPath="/login" />;
}
