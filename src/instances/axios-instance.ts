import { createHttpClient } from '@zapplib/core';

import type { router } from '../router';

type AppRouter = typeof router;

let routerInstance: AppRouter | null = null;

export const setRouter = (r: AppRouter) => {
  routerInstance = r;
};

const axiosInstance = createHttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  onUnauthorized: () => {
    if (routerInstance) {
      routerInstance.navigate({ to: '/login', replace: true });
    } else {
      window.location.href = '/login';
    }
  },
});

export { axiosInstance };
