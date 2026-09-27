import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { createHttpClient, setHttpClient } from '@zapplib/core';

import { standaloneRouter } from './standalone/standalone-router';
import { initStandaloneTranslation } from './standalone/standalone-translation';

// Standalone mode: this app provides what the host would otherwise provide
setHttpClient(createHttpClient({ baseURL: import.meta.env.VITE_API_BASE_URL }));
initStandaloneTranslation();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <CssBaseline />
      <RouterProvider router={standaloneRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
