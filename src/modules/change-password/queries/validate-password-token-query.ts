import { useQuery } from '@tanstack/react-query';

import { validatePasswordTokenRequest } from '../requests';

export const useValidatePasswordTokenQuery = (token?: string) => {
    return useQuery({
        queryKey: ['changePassword', 'validateToken', token],
        queryFn: () => validatePasswordTokenRequest(token!),
        enabled: !!token,
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};
