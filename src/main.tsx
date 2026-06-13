import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { PageLoaderComponent } from './components';
import { queryClientConfig, setRouter, themeConfig } from './configs';
import { router } from './router';
import { initTranslation, showVersionInfo } from './utils';

initTranslation();
setRouter(router);
showVersionInfo();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClientConfig}>
            <ThemeProvider theme={themeConfig}>
                <CssBaseline />
                <RouterProvider
                    router={router}
                    context={{ queryClient: queryClientConfig }}
                    defaultPendingComponent={PageLoaderComponent}
                />
            </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>,
);
