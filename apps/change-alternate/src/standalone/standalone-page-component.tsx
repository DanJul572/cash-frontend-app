import { useNavigate } from '@tanstack/react-router';

import ChangeAlternatePage from '../modules/change-alternate/pages/change-alternate-page';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token') ?? undefined;

  return (
    <ChangeAlternatePage
      token={token}
      onInvalidToken={() => navigate({ to: '/login' })}
      onChangeAlternateSuccess={() => navigate({ to: '/dashboard' })}
    />
  );
}
