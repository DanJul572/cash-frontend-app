import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import StandalonePageComponent from './standalone-page-component';
import StandalonePlaceholderComponent from './standalone-placeholder-component';

// Pages owned by the host or other remotes that this page links to
const placeholderPaths: string[] = ['/login'];

const rootRoute = createRootRoute({ component: Outlet });

const pageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: StandalonePageComponent,
});

const placeholderRoutes = placeholderPaths.map((path) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => <StandalonePlaceholderComponent path={path} />,
  }),
);

export const standaloneRouter = createRouter({
  routeTree: rootRoute.addChildren([pageRoute, ...placeholderRoutes]),
});
