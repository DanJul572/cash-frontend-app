import { createFileRoute, useLocation } from '@tanstack/react-router';

import { Error404Page } from '@modules/error/pages';

export const Route = createFileRoute('/404')({
  component: Error404RouteComponent,
});

function Error404RouteComponent() {
  const state = useLocation({ select: (location) => location.state });

  return <Error404Page message={state?.message} />;
}
