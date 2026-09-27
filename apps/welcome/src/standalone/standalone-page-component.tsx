import WelcomePage from '../modules/welcome/pages/welcome-page';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  return <WelcomePage appName="Welcome (standalone)" />;
}
