import { createFileRoute } from '@tanstack/react-router';

import { Error400Page } from '@modules/error/pages';

export const Route = createFileRoute('/400')({
  component: Error400Page,
});
