import { QueryClient } from '@tanstack/react-query';
import { isAxios401Error } from '@utils';

export const queryClientConfig = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                if (isAxios401Error(error)) return false;
                return failureCount < 2;
            },
        },
    },
});
