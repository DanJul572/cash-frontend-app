import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';

import { STATUS_CODE_CONSTANT } from '@/constants';
import { authMeRequest } from '@/requests';

export const authMeQuery = queryOptions({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
        try {
            const response = await authMeRequest();
            if (!response.data) {
                throw new Error('Failed to check auth');
            }
            return response.data;
        } catch (error) {
            if (
                axios.isAxiosError(error) &&
                error.response?.status === STATUS_CODE_CONSTANT.UNAUTHORIZED
            ) {
                return null;
            }
            throw error;
        }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
});
