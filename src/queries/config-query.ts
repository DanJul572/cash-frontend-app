import { useQuery } from '@tanstack/react-query';

import { authenticatedConfigRequest, guestConfigRequest } from '@requests';

export const useGuestConfigQuery = () => {
    return useQuery({
        queryKey: ['config', 'guest'],
        queryFn: guestConfigRequest,
        retry: false,
    });
};

export const useAuthenticatedConfigQuery = () => {
    return useQuery({
        queryKey: ['config', 'authenticated'],
        queryFn: authenticatedConfigRequest,
        retry: false,
    });
};
