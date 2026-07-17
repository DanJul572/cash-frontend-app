import { queryOptions } from '@tanstack/react-query';

import { configRequest } from '@requests';

export const configQuery = queryOptions({
    queryKey: ['config'],
    queryFn: configRequest,
    retry: false,
});
