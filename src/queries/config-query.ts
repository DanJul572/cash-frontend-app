import { useQuery } from '@tanstack/react-query';

import { authenticatedConfigRequest, configRequest } from '@requests';

export const useGuestConfigQuery = () => {
    return useQuery({
        queryKey: ['config', 'guest'],
        queryFn: configRequest,
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
