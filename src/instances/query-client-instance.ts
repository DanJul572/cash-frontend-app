import { QueryClient } from '@tanstack/react-query';

import { isAxios401ErrorUtil } from '@utils';

export const queryClientInstance = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                if (isAxios401ErrorUtil(error)) return false;
                return failureCount < 2;
            },
        },
    },
});
