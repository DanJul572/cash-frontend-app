import { createFileRoute } from '@tanstack/react-router';

import { Error404Page } from '@modules/error/pages';

export const Route = createFileRoute('/404')({
  component: Error404Page,
});
