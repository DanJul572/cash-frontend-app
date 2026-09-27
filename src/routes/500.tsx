import { createFileRoute, useLocation } from '@tanstack/react-router';

import { Error500Page } from '@modules/error/pages';

export const Route = createFileRoute('/500')({
  component: Error500RouteComponent,
});

function Error500RouteComponent() {
  const state = useLocation({ select: (location) => location.state });

  return <Error500Page message={state?.message} errors={state?.errors} />;
}
