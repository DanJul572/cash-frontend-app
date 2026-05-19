import { queryOptions } from '@tanstack/react-query';

import { STATUS_CODE_CONSTANT } from '@/constants';
import { authMeRequest } from '@/requests';

export const authMeQuery = queryOptions({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
        const response = await authMeRequest();
        if (response.status === STATUS_CODE_CONSTANT.UNAUTHORIZED) {
            return null;
        }

        if (!response.data) {
            throw new Error('Failed to check auth');
        }

        return response.data;
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
});
