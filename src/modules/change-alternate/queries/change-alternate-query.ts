import { queryOptions } from '@tanstack/react-query';

import { getAlternatesRequest } from '../requests';

export const alternatesQuery = queryOptions({
    queryKey: ['auth', 'alternates'],
    queryFn: getAlternatesRequest,
    retry: false,
    staleTime: 1000 * 60 * 5,
});
