import { createFileRoute, useLocation } from '@tanstack/react-router';

import { Error400Page } from '@modules/error/pages';

export const Route = createFileRoute('/400')({
  component: Error400RouteComponent,
});

function Error400RouteComponent() {
  const state = useLocation({ select: (location) => location.state });

  return <Error400Page message={state?.message} />;
}
