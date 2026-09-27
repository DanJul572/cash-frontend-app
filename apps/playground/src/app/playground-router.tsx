import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';

import PlaygroundLayoutComponent from './playground-layout-component';
import { playgroundPages } from './playground-pages';

const rootRoute = createRootRoute({ component: PlaygroundLayoutComponent });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: playgroundPages[0].path });
  },
});

const pageRoutes = playgroundPages.map(({ path, component }) =>
  createRoute({ getParentRoute: () => rootRoute, path, component }),
);

export const playgroundRouter = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, ...pageRoutes]),
});
