import { createRootRouteWithContext } from '@tanstack/react-router';

import { RootLayout } from '@layouts';
import { Error400Page } from '@modules/error/pages';
import type { RouterContextType } from '@types';

export const Route = createRootRouteWithContext<RouterContextType>()({
  component: RootLayout,
  notFoundComponent: Error400Page,
});
