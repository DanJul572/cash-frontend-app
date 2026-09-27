import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import { RouterProvider } from '@tanstack/react-router';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AuthenticatedConfigProvider } from '@zapplib/core';

import { playgroundConfig } from './app/playground-config';
import { playgroundRouter } from './app/playground-router';
import { initPlaygroundTranslation } from './app/playground-translation';

initPlaygroundTranslation();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthenticatedConfigProvider config={playgroundConfig}>
        <CssBaseline />
        <RouterProvider router={playgroundRouter} />
      </AuthenticatedConfigProvider>
    </LocalizationProvider>
  </StrictMode>,
);
