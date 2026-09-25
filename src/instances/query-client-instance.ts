import { ZodError } from 'zod';

import { QueryClient } from '@tanstack/react-query';

import { isAxios401Error } from '@utils';

export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (isAxios401Error(error)) return false;
        // Refetching returns the same invalid response, so fail fast
        if (error instanceof ZodError) return false;
        return failureCount < 2;
      },
    },
  },
});
