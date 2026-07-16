import { useQuery } from '@tanstack/react-query';

import { getAlternatesRequest } from '../requests';

export const useChangeAlternateQuery = () => {
    return useQuery({
        queryKey: ['auth', 'alternates'],
        queryFn: getAlternatesRequest,
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};
