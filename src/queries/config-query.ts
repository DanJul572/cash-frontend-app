import { useQuery } from '@tanstack/react-query';

import { configRequest } from '@requests';

export const useConfigQuery = () => {
    return useQuery({
        queryKey: ['config'],
        queryFn: configRequest,
        retry: false,
    });
};
